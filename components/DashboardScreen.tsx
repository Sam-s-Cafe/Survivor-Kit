

import React, { useState, useEffect } from 'react';
import { WifiIcon, Battery50Icon, GlobeAltIcon, ShieldCheckIcon, SignalIcon, QrCodeIcon, UsersIcon, SatelliteIcon } from './icons/Icons';
import { SOSLocation } from '../types';
import RadioTuner from './RadioTuner';

interface DashboardScreenProps {
  user: { name: string; id: string; };
  isSOSActive: boolean;
  sosLocation: SOSLocation | null;
  onOpenShareModal: () => void;
}

const DashboardScreen: React.FC<DashboardScreenProps> = ({ user, isSOSActive, sosLocation, onOpenShareModal }) => {
  
  const networkModes = [
    { icon: UsersIcon, value: 'Local P2P', color: 'text-green-400' },
    { icon: SatelliteIcon, value: 'Satellite Uplink', color: 'text-sky-400' },
    { icon: WifiIcon, value: 'Web Relay', color: 'text-blue-400' },
  ];
  
  const [currentNetworkModeIndex, setCurrentNetworkModeIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNetworkModeIndex(prevIndex => (prevIndex + 1) % networkModes.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const currentNetworkMode = networkModes[currentNetworkModeIndex];

  const statusItems = [
    { icon: currentNetworkMode.icon, label: 'Network', value: currentNetworkMode.value, color: currentNetworkMode.color },
    { icon: Battery50Icon, label: 'Device Power', value: '78%', color: 'text-yellow-400' },
    { icon: GlobeAltIcon, label: 'System', value: 'Offline Mode', color: 'text-blue-400' },
    { icon: ShieldCheckIcon, label: 'Security', value: 'Encrypted', color: 'text-green-400' },
  ];

  // useEffect hook to initialize the AdSense ad unit.
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense initialization error:", e);
    }
  }, []);

  return (
    <div className="animate-fadeIn">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-amber-400 tracking-wider">SURVIVOR KIT</h1>
        <p className="text-gray-400">STATUS: OPERATIONAL</p>
      </header>
      
      {isSOSActive && sosLocation && (
        <div className="mb-8 p-4 bg-red-900/50 rounded-lg border-2 border-red-500 animate-pulse" role="alert">
            <div className="flex items-center">
              <SignalIcon className="h-10 w-10 text-red-400 mr-4"/>
              <div>
                <h2 className="font-bold text-lg text-red-300">SOS BEACON ACTIVE</h2>
                <p className="text-sm text-red-200">Last known location broadcast at {new Date(sosLocation.timestamp).toLocaleTimeString()}</p>
              </div>
            </div>
        </div>
      )}

      <div className="grid grid-cols-2 gap-4 text-center">
        {statusItems.map(item => {
          const Icon = item.icon;
          return (
            <div key={item.label} className="bg-gray-800 p-4 rounded-lg shadow-md border border-gray-700">
              <Icon className={`h-8 w-8 mx-auto mb-2 ${item.color}`} />
              <p className="text-sm text-gray-400">{item.label}</p>
              <p className={`font-semibold text-lg ${item.color}`}>{item.value}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-8 p-4 bg-gray-800 rounded-lg border border-gray-700">
        <h2 className="font-bold text-lg text-white mb-2">Priority Alert</h2>
        <p className="text-gray-300">No immediate threats detected in your sector. Remain vigilant. Conserve resources.</p>
      </div>

      <div className="mt-8 p-4 bg-gray-800 rounded-lg border border-gray-700">
        <h2 className="font-bold text-lg text-white mb-3">Utilities</h2>
        <button
          onClick={onOpenShareModal}
          className="w-full flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-amber-400 font-bold py-3 px-4 rounded-lg transition-colors"
        >
          <QrCodeIcon className="h-6 w-6 mr-3" />
          Share Survivor Kit
        </button>
      </div>

      <RadioTuner user={user} />

      <div className="mt-8 p-4 bg-gray-800 rounded-lg border border-gray-700">
        <h2 className="text-xs text-gray-500 mb-2 text-center uppercase tracking-widest">Advertisement</h2>
        <div className="flex justify-center items-center bg-gray-700 rounded min-h-[100px] text-gray-400 text-sm">
          {/* 
            USER ACTION REQUIRED: 
            1. Replace 'ca-pub-your-ad-client-id' with your actual Google AdSense Publisher ID.
            2. Replace 'your-ad-slot-id' with your actual Ad Slot ID.
          */}
          <ins className="adsbygoogle"
               style={{ display: 'block', width: '100%' }}
               data-ad-client="ca-pub-your-ad-client-id"
               data-ad-slot="your-ad-slot-id"
               data-ad-format="auto"
               data-full-width-responsive="true"></ins>
        </div>
      </div>

       <div className="mt-8 p-4 bg-gray-800 rounded-lg border border-gray-700">
        <h2 className="font-bold text-lg text-white mb-2">Device Log</h2>
        <ul className="text-sm text-gray-400 space-y-1 list-disc list-inside">
          <li>System Initialized in Offline Mode.</li>
          <li>Cached assets loaded successfully.</li>
          {isSOSActive && <li>SOS Beacon Activated.</li>}
          <li>Awaiting user command.</li>
        </ul>
      </div>

    </div>
  );
};

export default DashboardScreen;