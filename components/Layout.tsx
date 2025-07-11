import React from 'react';
import { Screen } from '../types';
import { HomeIcon, ChatBubbleOvalLeftEllipsisIcon, VideoCameraIcon, MapPinIcon, SignalIcon, LeafIcon, SparklesIcon } from './icons/Icons';

interface LayoutProps {
  children: React.ReactNode;
  activeScreen: Screen;
  onNavChange: (screen: Screen) => void;
  onSOSClick: () => void;
  isSOSActive: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, activeScreen, onNavChange, onSOSClick, isSOSActive }) => {
  const navItems = [
    { screen: Screen.Dashboard, label: 'Dashboard', icon: HomeIcon },
    { screen: Screen.Comms, label: 'Comms', icon: ChatBubbleOvalLeftEllipsisIcon },
    { screen: Screen.Remedies, label: 'Remedies', icon: SparklesIcon },
    { screen: Screen.Identifier, label: 'Identifier', icon: LeafIcon },
    { screen: Screen.Videos, label: 'Videos', icon: VideoCameraIcon },
    { screen: Screen.Bunker, label: 'Bunker', icon: MapPinIcon },
  ];

  // Split nav items to place the SOS button in the middle
  const leftNavItems = navItems.slice(0, 3);
  const rightNavItems = navItems.slice(3, 6);

  return (
    <div className="relative min-h-screen">
      <main>{children}</main>
      <footer className="fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700 shadow-lg">
        <nav className="flex justify-around items-center h-16">
          {leftNavItems.map(item => {
            const isActive = activeScreen === item.screen;
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                onClick={() => onNavChange(item.screen)}
                aria-label={item.label}
                className={`flex flex-col items-center justify-center w-full pt-1 transition-colors duration-200 ${
                  isActive ? 'text-amber-400' : 'text-gray-400 hover:text-white'
                }`}
              >
                <Icon className="h-6 w-6" />
                <span className="text-xs mt-1">{item.label}</span>
              </button>
            );
          })}

          <div className="flex justify-center px-1">
            <button
              onClick={onSOSClick}
              className={`relative -top-4 flex flex-col items-center justify-center h-16 w-16 rounded-full border-4 border-gray-800 transition-all duration-300 ${isSOSActive ? 'bg-green-500 animate-pulse' : 'bg-red-600'} text-white shadow-lg hover:bg-red-500`}
              aria-label="Activate SOS"
            >
              <SignalIcon className="h-8 w-8" />
              <span className="text-xs font-bold absolute -bottom-0.5">SOS</span>
            </button>
          </div>
          
          {rightNavItems.map(item => {
            const isActive = activeScreen === item.screen;
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                onClick={() => onNavChange(item.screen)}
                aria-label={item.label}
                className={`flex flex-col items-center justify-center w-full pt-1 transition-colors duration-200 ${
                  isActive ? 'text-amber-400' : 'text-gray-400 hover:text-white'
                }`}
              >
                <Icon className="h-6 w-6" />
                <span className="text-xs mt-1">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </footer>
    </div>
  );
};

export default Layout;