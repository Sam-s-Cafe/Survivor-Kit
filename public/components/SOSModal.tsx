
import React from 'react';
import { SOSLocation } from '../types';
import { SignalIcon, ShieldCheckIcon, XCircleIcon } from './icons/Icons';

interface SOSModalProps {
  isOpen: boolean;
  onClose: () => void;
  isSOSActive: boolean;
  sosLocation: SOSLocation | null;
  activateSOS: () => void;
  deactivateSOS: () => void;
  geoLoading: boolean;
  geoError: string | null;
}

const SOSModal: React.FC<SOSModalProps> = ({
  isOpen,
  onClose,
  isSOSActive,
  sosLocation,
  activateSOS,
  deactivateSOS,
  geoLoading,
  geoError
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 animate-fadeIn" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="sos-modal-title">
      <div className="relative bg-gray-900 p-6 rounded-lg max-w-sm w-full mx-4 border-2 border-amber-500 shadow-2xl shadow-amber-500/20" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute -top-3 -right-3 text-white bg-gray-800 rounded-full" aria-label="Close SOS modal">
          <XCircleIcon className="h-10 w-10" />
        </button>

        {isSOSActive && sosLocation ? (
          <div className="text-center">
            <ShieldCheckIcon className="h-16 w-16 mx-auto text-green-400 mb-4 animate-pulse" />
            <h2 id="sos-modal-title" className="text-2xl font-bold text-green-400">SOS SIGNAL ACTIVE</h2>
            <p className="text-gray-300 mt-2 mb-4">Your last known location has been recorded and will be broadcast.</p>
            <div className="bg-gray-800 p-3 rounded-lg text-left text-sm">
              <p><span className="font-bold text-gray-400">Lat:</span> {sosLocation.lat.toFixed(6)}</p>
              <p><span className="font-bold text-gray-400">Lng:</span> {sosLocation.lng.toFixed(6)}</p>
              <p><span className="font-bold text-gray-400">Time:</span> {new Date(sosLocation.timestamp).toLocaleTimeString()}</p>
            </div>
            <button
              onClick={() => {
                deactivateSOS();
                onClose();
              }}
              className="mt-6 w-full bg-gray-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-gray-500 transition-colors"
            >
              Deactivate SOS
            </button>
          </div>
        ) : (
          <div className="text-center">
            <SignalIcon className="h-16 w-16 mx-auto text-red-500 mb-4" />
            <h2 id="sos-modal-title" className="text-2xl font-bold text-red-500">ACTIVATE SOS?</h2>
            <p className="text-gray-300 mt-2 mb-6">This will record your current location as a distress beacon. Use only in a genuine emergency.</p>
            {geoError && <p className="text-red-400 bg-red-900/50 p-2 rounded-md mb-4" role="alert">{geoError}</p>}
            <button
              onClick={activateSOS}
              disabled={geoLoading}
              className="w-full bg-red-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-red-500 transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {geoLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Acquiring Signal...
                </>
              ) : (
                "CONFIRM SOS ACTIVATION"
              )}
            </button>
            <button
              onClick={onClose}
              className="mt-3 w-full bg-gray-700 text-gray-300 font-bold py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors"
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SOSModal;