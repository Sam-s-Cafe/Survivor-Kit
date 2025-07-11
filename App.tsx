

import React, { useState, useCallback, useEffect } from 'react';
import { Screen } from './types';
import Layout from './components/Layout';
import DashboardScreen from './components/DashboardScreen';
import CommsScreen from './components/CommsScreen';
import VideosScreen from './components/VideosScreen';
import BunkerScreen from './components/BunkerScreen';
import SOSModal from './components/SOSModal';
import { useSOS } from './hooks/useSOS';
import IdentifierScreen from './components/IdentifierScreen';
import ShareModal from './components/ShareModal';
import RemediesScreen from './components/RemediesScreen';
import LoginScreen from './components/LoginScreen';

const App: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<Screen>(Screen.Dashboard);
  const [isSOSModalOpen, setIsSOSModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [user, setUser] = useState<{ name: string; id: string } | null>(null);
  const sos = useSOS();

  useEffect(() => {
    const storedName = localStorage.getItem('survivor-name');
    const storedId = localStorage.getItem('survivor-id');
    if (storedName && storedId) {
      setUser({ name: storedName, id: storedId });
    }
  }, []);

  const handleLogin = (name: string) => {
    const newId = `survivor_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    localStorage.setItem('survivor-name', name);
    localStorage.setItem('survivor-id', newId);
    setUser({ name, id: newId });
  };

  const handleNavChange = useCallback((screen: Screen) => {
    setActiveScreen(screen);
  }, []);
  
  const handleSOSClick = useCallback(() => {
    setIsSOSModalOpen(true);
  }, []);
  
  const handleCloseSOSModal = useCallback(() => {
    setIsSOSModalOpen(false);
  }, []);

  const handleOpenShareModal = useCallback(() => {
    setIsShareModalOpen(true);
  }, []);

  const handleCloseShareModal = useCallback(() => {
    setIsShareModalOpen(false);
  }, []);

  const renderScreen = () => {
    if (!user) {
        return <LoginScreen onLogin={handleLogin} />;
    }
    switch (activeScreen) {
      case Screen.Dashboard:
        return <DashboardScreen user={user} isSOSActive={sos.isSOSActive} sosLocation={sos.sosLocation} onOpenShareModal={handleOpenShareModal} />;
      case Screen.Comms:
        return <CommsScreen user={user} />;
      case Screen.Identifier:
        return <IdentifierScreen />;
      case Screen.Videos:
        return <VideosScreen />;
      case Screen.Bunker:
        return <BunkerScreen user={user} />;
      case Screen.Remedies:
        return <RemediesScreen />;
      default:
        return <DashboardScreen user={user} isSOSActive={sos.isSOSActive} sosLocation={sos.sosLocation} onOpenShareModal={handleOpenShareModal} />;
    }
  };
  
  if (!user) {
    return (
       <div className="bg-gray-900 min-h-screen text-gray-200 font-sans">
          <LoginScreen onLogin={handleLogin} />
       </div>
    );
  }

  return (
    <div className="bg-gray-900 min-h-screen text-gray-200 font-sans">
      <Layout 
        activeScreen={activeScreen} 
        onNavChange={handleNavChange}
        onSOSClick={handleSOSClick}
        isSOSActive={sos.isSOSActive}
      >
        <div className="p-4 pb-24">
          {renderScreen()}
        </div>
      </Layout>
      <SOSModal 
        isOpen={isSOSModalOpen}
        onClose={handleCloseSOSModal}
        {...sos}
      />
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={handleCloseShareModal}
      />
    </div>
  );
};

export default App;