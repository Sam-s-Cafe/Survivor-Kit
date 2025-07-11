
import React, { useState } from 'react';
import { ShieldCheckIcon } from './icons/Icons';

interface LoginScreenProps {
  onLogin: (name: string) => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onLogin(name.trim());
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 animate-fadeIn">
      <div className="w-full max-w-2xl text-center">
        <ShieldCheckIcon className="h-20 w-20 mx-auto text-amber-400 mb-4" />
        <h1 className="text-3xl font-bold text-amber-400 tracking-wider">SURVIVOR KIT</h1>
        <p className="text-gray-400 mt-2 mb-8">Centralized Ops & Comms Platform</p>

        <div className="grid md:grid-cols-2 gap-6 items-start">

          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 shadow-lg text-left">
              <h2 className="text-xl font-bold text-amber-400 mb-4">Operator Briefing</h2>
              <div className="text-gray-300 space-y-3 text-sm">
                  <p>This application is your lifeline. It is designed for maximum reliability in low-connectivity environments.</p>
                  <ul className="list-disc list-inside space-y-2 pl-2">
                      <li><span className="font-semibold">Real-Time Comms:</span> Connect with other survivors on the network.</li>
                      <li><span className="font-semibold">Offline Archives:</span> Access critical survival guides and remedies when no signal is available.</li>
                      <li><span className="font-semibold">Safe Places Network:</span> View and share intel on safe locations. Caches local data automatically.</li>
                      <li><span className="font-semibold">Field Analyst:</span> Use your camera with Google Lens for plant ID, backed by an extensive offline guide.</li>
                  </ul>
                  <p className="pt-2">Your callsign is your identity. Choose wisely.</p>
              </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 shadow-lg">
            <form onSubmit={handleSubmit}>
              <label htmlFor="name-input" className="block text-left text-gray-300 font-semibold mb-2">
                Enter Your Callsign:
              </label>
              <input
                id="name-input"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-gray-700 text-white rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-amber-500 mb-6"
                placeholder="e.g., Alex, Sierra-1"
                required
                maxLength={20}
              />
              <button
                type="submit"
                className="w-full bg-amber-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-amber-500 transition-colors disabled:bg-gray-500"
                disabled={!name.trim()}
              >
                Join Network
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LoginScreen;