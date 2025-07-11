
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { collection, query, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { Bunker } from '../types';
import { BUNKERS } from '../constants';
import { useGeolocation } from '../hooks/useGeolocation';
import { MapPinIcon, ShieldCheckIcon, PlusCircleIcon, UserCircleIcon, WifiIcon, XCircleIcon } from './icons/Icons';

const OFFLINE_CACHE_KEY = 'survivor-kit-bunker-cache';
const CACHE_RADIUS_KM = 50;

interface BunkerScreenProps {
  user: {
    name: string;
    id: string;
  };
}

const haversineDistance = (coords1: { lat: number, lng: number }, coords2: { lat: number, lng: number }): number => {
    const toRad = (x: number) => (x * Math.PI) / 180;
    const R = 6371; // Earth's radius in km

    const dLat = toRad(coords2.lat - coords1.lat);
    const dLon = toRad(coords2.lng - coords1.lng);
    const lat1 = toRad(coords1.lat);
    const lat2 = toRad(coords2.lat);

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
};

const AddBunkerModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  user: { name: string; id: string; };
  currentLocation: { lat: number, lng: number };
}> = ({ isOpen, onClose, user, currentLocation }) => {
    const [name, setName] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim() || !db) return;

        setIsSubmitting(true);
        const newBunker: Omit<Bunker, 'id'> = {
            name: name.trim(),
            location: currentLocation,
            type: 'user-added',
            creatorId: user.id,
            creatorName: user.name,
        };
        try {
            await addDoc(collection(db, "bunkers"), newBunker);
            onClose();
            setName('');
        } catch (error) {
            console.error("Error adding bunker:", error);
            alert("Failed to add new safe place. Check connection.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 animate-fadeIn">
            <div className="relative bg-gray-900 p-6 rounded-lg max-w-sm w-full mx-4 border-2 border-amber-500" onClick={e => e.stopPropagation()}>
                <h2 className="text-xl font-bold text-amber-400 mb-4">Add New Safe Place</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="bunker-name" className="block text-gray-300 font-semibold mb-2">Name / Description:</label>
                    <input
                        id="bunker-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g., Hidden spring behind ridge"
                        className="w-full bg-gray-700 text-white rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-amber-500 mb-4"
                        required
                    />
                    <p className="text-sm text-gray-400 mb-4">Your current location will be saved as the coordinates for this place.</p>
                    <div className="flex justify-end space-x-2">
                        <button type="button" onClick={onClose} className="bg-gray-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-500">Cancel</button>
                        <button type="submit" disabled={isSubmitting} className="bg-amber-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-amber-500 disabled:bg-gray-500">
                            {isSubmitting ? 'Saving...' : 'Save Place'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};


const BunkerScreen: React.FC<BunkerScreenProps> = ({ user }) => {
  const [isConfigured, setIsConfigured] = useState(!!db);
  const [allBunkers, setAllBunkers] = useState<Bunker[]>([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const { position, error, loading: geoLoading, requestLocation } = useGeolocation();

  useEffect(() => {
    // Load cached data first
    const cachedData = localStorage.getItem(OFFLINE_CACHE_KEY);
    if (cachedData) {
        setAllBunkers(JSON.parse(cachedData));
    } else {
        setAllBunkers(BUNKERS); // Start with official list if no cache
    }

    if (!db) {
      setIsConfigured(false);
      return;
    }
    setIsConfigured(true);

    const q = query(collection(db, "bunkers"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
        const userBunkers: Bunker[] = [];
        snapshot.forEach((doc) => {
            userBunkers.push({ id: doc.id, ...doc.data() } as Bunker);
        });
        setAllBunkers(prev => {
            const official = prev.filter(b => b.type === 'official');
            const merged = [...official, ...userBunkers];
            // Simple deduplication
            return merged.filter((b, index, self) => index === self.findIndex(t => t.id === b.id));
        });
    }, (err) => {
      console.error("Firestore error fetching bunkers:", err);
      setIsConfigured(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (position && allBunkers.length > 0) {
      const userCoords = { lat: position.coords.latitude, lng: position.coords.longitude };
      const nearbyBunkers = allBunkers.filter(bunker => {
        return haversineDistance(userCoords, bunker.location) <= CACHE_RADIUS_KM;
      });
      // Ensure official bunkers are always cached regardless of distance
      const bunkersToCache = [
        ...BUNKERS,
        ...nearbyBunkers
      ].filter((b, index, self) => index === self.findIndex(t => t.id === b.id));

      localStorage.setItem(OFFLINE_CACHE_KEY, JSON.stringify(bunkersToCache));
    }
  }, [position, allBunkers]);

  const sortedBunkers = useMemo(() => {
    if (!position) return allBunkers;
    const userCoords = { lat: position.coords.latitude, lng: position.coords.longitude };
    return [...allBunkers].sort((a, b) => {
      const distA = haversineDistance(userCoords, a.location);
      const distB = haversineDistance(userCoords, b.location);
      return distA - distB;
    });
  }, [allBunkers, position]);


  return (
    <div>
      <h1 className="text-3xl font-bold text-amber-400 mb-2">Safe Places Network</h1>
      <p className="text-gray-400 mb-6">Shared intelligence on official bunkers and user-discovered safe havens. Caches locations within 50km for offline access.</p>
        
      {!isConfigured && (
         <div className="p-4 bg-red-900/50 rounded-lg border border-red-500/50 mb-6 text-center">
            <p className="font-bold text-red-300">Community Network Offline</p>
            <p className="text-sm text-red-200">Could not connect to the shared bunker network. Showing last known cached data. Please check your Firebase configuration.</p>
         </div>
      )}

      <div className="space-y-4">
        <button
            onClick={() => {
                if(position) setIsAddModalOpen(true);
                else requestLocation();
            }}
            disabled={geoLoading || !isConfigured}
            className="w-full flex items-center justify-center bg-green-700/80 hover:bg-green-600/80 text-white font-bold py-3 px-4 rounded-lg transition-colors disabled:bg-gray-600"
          >
            <PlusCircleIcon className="h-6 w-6 mr-3" />
            {geoLoading ? 'Getting Your Position...' : 'Add Safe Place at Current Location'}
        </button>
        {error && <p className="text-red-400 text-center">{error}</p>}

        <div className="space-y-3 pt-4">
          {sortedBunkers.map(bunker => {
             const dist = position ? haversineDistance({lat: position.coords.latitude, lng: position.coords.longitude}, bunker.location) : null;
             const Icon = bunker.type === 'official' ? ShieldCheckIcon : UserCircleIcon;
             const iconColor = bunker.type === 'official' ? 'text-green-400' : 'text-sky-400';
            
            return (
                <a 
                    key={bunker.id} 
                    href={`https://www.google.com/maps/dir/?api=1&destination=${bunker.location.lat},${bunker.location.lng}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block bg-gray-800 p-4 rounded-lg shadow-md border border-gray-700 hover:border-amber-400 transition-colors"
                >
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <Icon className={`h-8 w-8 mr-4 flex-shrink-0 ${iconColor}`} />
                            <div>
                                <p className="font-semibold text-lg text-white">{bunker.name}</p>
                                <p className="text-xs text-gray-400">
                                    {bunker.type === 'user-added' ? `Added by ${bunker.creatorName || 'Survivor'}` : 'Official Bunker'}
                                </p>
                            </div>
                        </div>
                        {dist !== null && (
                            <p className="font-mono text-lg text-amber-400">{dist.toFixed(1)} km</p>
                        )}
                    </div>
                </a>
            );
          })}
        </div>
      </div>
      
      {position && <AddBunkerModal 
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        user={user}
        currentLocation={{ lat: position.coords.latitude, lng: position.coords.longitude }}
      />}
    </div>
  );
};

export default BunkerScreen;
