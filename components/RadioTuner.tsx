import React, { useState, useEffect, useRef } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { RADIO_STATIONS } from '../constants';
import { BroadcastIcon, PlayIcon, PauseIcon, MegaphoneIcon } from './icons/Icons';
import { Message } from '../types';

interface RadioTunerProps {
    user: { name: string; id: string; };
}

const RadioTuner: React.FC<RadioTunerProps> = ({ user }) => {
    const [mode, setMode] = useState<'RECEIVE' | 'BROADCAST'>('RECEIVE');
    
    // --- RECEIVE STATE ---
    const [currentStationIndex, setCurrentStationIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    // --- BROADCAST STATE ---
    const [broadcastMessage, setBroadcastMessage] = useState('');
    const [isSending, setIsSending] = useState(false);
    const [isConfigured, setIsConfigured] = useState(!!db);


    // --- AUDIO STREAM HANDLING ---
    useEffect(() => {
        if (mode === 'BROADCAST') {
            // Stop audio if switching away from receive mode
            if (audioRef.current && !audioRef.current.paused) {
                audioRef.current.pause();
                setIsPlaying(false);
            }
            return;
        }

        if (!audioRef.current) return;
        
        if (isPlaying) {
            audioRef.current.src = RADIO_STATIONS[currentStationIndex].streamUrl;
            audioRef.current.play().catch(e => {
                console.error("Audio play error:", e);
                setIsPlaying(false);
            });
        } else {
            audioRef.current.pause();
            audioRef.current.src = ""; // Detach source
        }
    }, [isPlaying, currentStationIndex, mode]);

    const handlePlayPause = () => {
        setIsPlaying(prev => !prev);
    };

    const handleStationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCurrentStationIndex(Number(e.target.value));
        if (isPlaying) {
             // force re-trigger of useEffect
            setIsPlaying(false);
            setTimeout(() => setIsPlaying(true), 50);
        }
    };
    
    // --- BROADCAST HANDLING ---
    const handleSendBroadcast = async () => {
        if (!isConfigured) {
            alert("Comms system is offline. Cannot send broadcast.");
            return;
        }
        if (!broadcastMessage.trim()) {
            return;
        }

        setIsSending(true);

        const messageData = {
          senderId: user.id,
          senderName: user.name,
          type: 'broadcast',
          content: broadcastMessage,
          timestamp: serverTimestamp(),
          via: 'internet', // Broadcasts are high-priority, assume best channel
        };

        try {
            await addDoc(collection(db, "messages"), messageData);
            setBroadcastMessage('');
        } catch (error) {
            console.error("Error sending broadcast: ", error);
            alert("Could not send broadcast. Check network connection.");
        } finally {
            setIsSending(false);
        }
    };

    return (
        <div className="mt-8 p-4 bg-gray-800 rounded-lg border border-gray-700">
            <div className="flex justify-between items-center mb-4">
                 <h2 className="font-bold text-lg text-white flex items-center">
                    <BroadcastIcon className="h-6 w-6 mr-3 text-amber-400"/>
                    Radio & Broadcast
                </h2>
                <div className="flex rounded-lg bg-gray-700 p-1">
                    <button onClick={() => setMode('RECEIVE')} className={`px-3 py-1 text-sm font-semibold rounded-md transition-colors ${mode === 'RECEIVE' ? 'bg-amber-500 text-white' : 'text-gray-300'}`}>Receive</button>
                    <button onClick={() => setMode('BROADCAST')} className={`px-3 py-1 text-sm font-semibold rounded-md transition-colors ${mode === 'BROADCAST' ? 'bg-amber-500 text-white' : 'text-gray-300'}`}>Broadcast</button>
                </div>
            </div>

            {/* --- RECEIVER UI --- */}
            {mode === 'RECEIVE' && (
                <div className="animate-fadeIn">
                    <div className="bg-gray-900 p-4 rounded-lg">
                        <div className="flex items-center space-x-4">
                           <button onClick={handlePlayPause} className="p-2 bg-amber-600 text-white rounded-full hover:bg-amber-500 transition-colors flex-shrink-0">
                                {isPlaying ? <PauseIcon className="h-8 w-8"/> : <PlayIcon className="h-8 w-8"/>}
                           </button>
                           <div className="flex-grow">
                                <select onChange={handleStationChange} value={currentStationIndex} className="w-full bg-gray-700 text-white p-2 rounded-md border-gray-600 focus:ring-amber-500 focus:border-amber-500">
                                    {RADIO_STATIONS.map((station, index) => (
                                        <option key={station.name} value={index}>{station.frequency} MHz - {station.name}</option>
                                    ))}
                                </select>
                                <p className="text-xs text-gray-400 mt-1">
                                    Status: <span className={isPlaying ? "text-green-400" : "text-gray-500"}>{isPlaying ? `Now Playing` : 'Stopped'}</span>
                                </p>
                           </div>
                        </div>
                    </div>
                    <audio 
                        ref={audioRef}
                        onPlaying={() => {}}
                        onWaiting={() => {}}
                        onPause={() => setIsPlaying(false)}
                        onError={() => setIsPlaying(false)}
                        className="hidden"
                    />
                </div>
            )}

            {/* --- BROADCAST UI --- */}
            {mode === 'BROADCAST' && (
                 <div className="animate-fadeIn">
                    <div className="bg-gray-900 p-4 rounded-lg">
                        <h3 className="font-semibold text-white mb-2">Network-Wide Broadcast</h3>
                        <textarea
                            value={broadcastMessage}
                            onChange={(e) => setBroadcastMessage(e.target.value)}
                            placeholder="Enter a high-priority message for all survivors..."
                            className="w-full bg-gray-700 text-white p-2 rounded-md h-24 focus:outline-none focus:ring-2 focus:ring-amber-500"
                            disabled={!isConfigured}
                        />
                         <button 
                            onClick={handleSendBroadcast}
                            disabled={isSending || !isConfigured || !broadcastMessage.trim()}
                            className="w-full mt-3 flex items-center justify-center bg-red-700 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-lg transition-colors disabled:bg-red-900 disabled:cursor-not-allowed"
                        >
                            {isSending ? (
                                <>
                                 <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                 Sending...
                                </>
                            ) : (
                                <>
                                    <MegaphoneIcon className="h-6 w-6 mr-2" />
                                    Send Broadcast
                                </>
                            )}
                        </button>
                        {!isConfigured && <p className="text-yellow-400 text-xs mt-2 text-center">Comms system offline. Cannot send broadcast.</p>}
                    </div>
                </div>
            )}
        </div>
    );
};

export default RadioTuner;
