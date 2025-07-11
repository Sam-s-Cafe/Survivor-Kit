
import React, { useState, useCallback, useEffect } from 'react';
import { onAuthStateChanged, signInAnonymously, updateProfile, User } from 'firebase/auth';
import { auth } from './firebaseConfig';
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
import ErrorBoundary from './components/ErrorBoundary';

const App: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<Screen>(Screen.Dashboard);
  const [isSOSModalOpen, setIsSOSModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [user, setUser] = useState<{ name: string; id: string } | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const sos = useSOS();

  useEffect(() => {
    if (!auth) {
      setIsLoading(false);
      return;
    }
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser: User | null) => {
      if (firebaseUser && firebaseUser.displayName) {
        setUser({ name: firebaseUser.displayName, id: firebaseUser.uid });
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = async (name: string) => {
    if (!auth) {
      alert("Authentication system is not configured. Please check firebaseConfig.ts");
      return;
    }
    try {
      const userCredential = await signInAnonymously(auth);
      await updateProfile(userCredential.user, { displayName: name });
      setUser({ name: name, id: userCredential.user.uid });
    } catch (error) {
      console.error("Anonymous sign-in failed:", error);
      alert("Could not join the network. Please check your connection and configuration.");
    }
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
  
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="text-center">
            <svg className="animate-spin h-10 w-10 text-amber-400 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
            <p className="text-amber-300 mt-4">Connecting to Network...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
       <div className="bg-gray-900 min-h-screen text-gray-200 font-sans">
          <LoginScreen onLogin={handleLogin} />
       </div>
    );
  }

  return (
    <div className="bg-gray-900 min-h-screen text-gray-200 font-sans">
      <ErrorBoundary>
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
      </ErrorBoundary>
    </div>
  );
};

export default App;
