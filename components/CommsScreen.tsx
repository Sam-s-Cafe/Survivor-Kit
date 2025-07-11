

import React, { useState, useRef, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { Message } from '../types';
import { useGeolocation } from '../hooks/useGeolocation';
import { PaperAirplaneIcon, PhotoIcon, MicrophoneIcon, CursorArrowRaysIcon, MapPinIcon, WifiIcon, UsersIcon, SatelliteIcon, MegaphoneIcon } from './icons/Icons';

interface CommsScreenProps {
  user: {
    name: string;
    id: string;
  };
}

const CommsScreen: React.FC<CommsScreenProps> = ({ user }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isSendingLocation, setIsSendingLocation] = useState(false);
  const [isConfigured, setIsConfigured] = useState(!!db);
  const { position, error: geoError, requestLocation } = useGeolocation();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);
  
  useEffect(() => {
    if (!db) {
      setIsConfigured(false);
      return;
    }
    setIsConfigured(true);

    const q = query(collection(db, "messages"), orderBy("timestamp", "asc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const fetchedMessages: Message[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        fetchedMessages.push({
          id: doc.id,
          ...data,
          timestamp: data.timestamp?.toDate().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) || 'pending...',
        } as Message);
      });
      setMessages(fetchedMessages);
    }, (error) => {
      console.error("Firestore snapshot error:", error);
      setIsConfigured(false);
    });

    return () => unsubscribe();
  }, []);

  const sendLocationMessage = (pos: GeolocationPosition) => {
      const locationContent = `${pos.coords.latitude},${pos.coords.longitude}`;
      handleSend('location', locationContent);
      setIsSendingLocation(false);
  };

  useEffect(() => {
    if (position && isSendingLocation) {
        sendLocationMessage(position);
    }
  }, [position, isSendingLocation]);

  useEffect(() => {
    if (geoError && isSendingLocation) {
        alert(`Could not retrieve location: ${geoError}`);
        setIsSendingLocation(false);
    }
  }, [geoError, isSendingLocation]);

  const requestMediaPermissions = async (type: 'video' | 'audio') => {
      try {
          const stream = type === 'video' 
              ? await navigator.mediaDevices.getUserMedia({ video: true })
              : await navigator.mediaDevices.getUserMedia({ audio: true });
          // Stop the track immediately after getting permission to avoid leaving camera/mic on.
          stream.getTracks().forEach(track => track.stop());
      } catch (err) {
          console.warn(`Permission for ${type} was denied or unavailable.`, err);
          alert(`Permission for ${type} was denied. The simulated message will be sent, but in a real scenario, this would fail.`);
      }
  };

  const handleSend = async (type: 'text' | 'image' | 'voice' | 'location', contentOverride?: string) => {
    if (!db) {
      alert("Comms system is not configured. Please set up firebaseConfig.ts");
      return;
    }
    const messageContent = contentOverride ?? input;
    if (type === 'text' && messageContent.trim() === '') return;

    if (type === 'image') await requestMediaPermissions('video');
    if (type === 'voice') await requestMediaPermissions('audio');

    if (type === 'location' && !contentOverride) {
        setIsSendingLocation(true);
        requestLocation();
        return;
    }

    const methods: Array<Message['via']> = ['p2p', 'satellite', 'internet'];
    const via = methods[Math.floor(Math.random() * methods.length)];

    const messageData = {
      senderId: user.id,
      senderName: user.name,
      type: type,
      content: type === 'text' ? messageContent : (contentOverride || `[${type.charAt(0).toUpperCase() + type.slice(1)} transmission sent]`),
      timestamp: serverTimestamp(),
      via: via,
    };

    try {
        await addDoc(collection(db, "messages"), messageData);
        if (type === 'text') setInput('');
    } catch (error) {
        console.error("Error sending message: ", error);
        alert("Could not send message. Check network connection.");
    }
  };
  
  const ViaIcon = ({ via }: { via: Message['via'] }) => {
    const props = { className: "h-3 w-3 inline-block ml-1.5" };
    if (via === 'p2p') return <UsersIcon {...props} />;
    if (via === 'satellite') return <SatelliteIcon {...props} />;
    if (via === 'internet') return <WifiIcon {...props} />;
    return null;
  };

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)]">
      <header className="p-4 bg-gray-800 border-b border-gray-700 text-center rounded-t-lg">
        <h1 className="font-bold text-xl text-amber-400">Secure Comms</h1>
        <div className="text-xs text-red-400 mt-1 p-2 bg-red-900/50 rounded border border-red-500/50">
          <p className="font-bold">HYBRID COMMS NETWORK</p>
          <p>Messages are routed via P2P, Satellite, or Internet relays.</p>
        </div>
      </header>

      {!isConfigured ? (
        <div className="flex-grow p-4 bg-gray-800/50 flex flex-col items-center justify-center text-center">
            <WifiIcon className="h-16 w-16 text-red-500 mb-4" />
            <h2 className="text-xl font-bold text-red-400">Comms System Offline</h2>
            <p className="text-gray-400 max-w-md mt-2">
              The real-time communication system is not configured. Please ensure your 
              <code className="text-amber-300 bg-gray-900 px-1 py-0.5 rounded text-sm">firebaseConfig.ts</code> 
              file is correctly set up with your project credentials.
            </p>
          </div>
      ) : (
        <div className="flex-grow p-4 bg-gray-800/50 overflow-y-auto">
          {messages.map(msg => {
              if (msg.type === 'broadcast') {
                  return (
                      <div key={msg.id} className="my-4 p-3 bg-red-900/70 rounded-lg border-2 border-red-500 animate-pulse">
                          <div className="flex items-center mb-2">
                              <MegaphoneIcon className="h-6 w-6 mr-3 text-red-300"/>
                              <div className="flex-1">
                                  <p className="font-bold text-red-300">NETWORK BROADCAST</p>
                                  <p className="text-xs text-red-200">from {msg.senderName}</p>
                              </div>
                              <p className="text-xs text-red-200">{msg.timestamp}</p>
                          </div>
                          <p className="text-red-100 pl-9">{msg.content}</p>
                      </div>
                  )
              }

              const isSender = msg.senderId === user.id;
              const justifyClass = isSender ? 'justify-end' : 'justify-start';
              const bubbleClass = isSender ? 'bg-amber-800 text-white' : 'bg-gray-700 text-gray-200';
              
              return (
                <div key={msg.id} className={`flex ${justifyClass} mb-4`}>
                  <div className="max-w-xs lg:max-w-md">
                      {!isSender && <p className="text-xs text-gray-400 ml-3 mb-1">{msg.senderName}</p>}
                      <div className={`px-4 py-2 rounded-lg ${bubbleClass}`}>
                          {msg.type === 'location' ? (
                              <a href={`https://www.google.com/maps/dir/?api=1&destination=${msg.content}`} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 underline font-semibold hover:no-underline">
                                  <MapPinIcon className="h-5 w-5" />
                                  <span>Location Shared</span>
                              </a>
                          ) : (
                              <p className="text-sm break-words">{msg.content}</p>
                          )}
                          <p className="text-xs mt-1 text-gray-300/70 text-right flex items-center justify-end">
                              {msg.timestamp}
                              <ViaIcon via={msg.via} />
                          </p>
                      </div>
                   </div>
                </div>
              );
          })}
          <div ref={messagesEndRef} />
        </div>
      )}

      <div className="p-4 bg-gray-800 border-t border-gray-700 rounded-b-lg">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyPress={e => e.key === 'Enter' && handleSend('text')}
            className="flex-grow bg-gray-700 text-white rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-amber-500 disabled:bg-gray-700/50"
            placeholder={isConfigured ? `Message as ${user.name}...` : 'Comms offline...'}
            disabled={!isConfigured}
          />
          <button onClick={() => handleSend('text')} className="bg-amber-600 text-white p-2 rounded-full hover:bg-amber-500 transition-colors disabled:bg-gray-600" aria-label="Send text message" disabled={!isConfigured}>
            <PaperAirplaneIcon className="h-5 w-5" />
          </button>
           <button
              onClick={() => handleSend('location')}
              disabled={isSendingLocation || !isConfigured}
              className="bg-gray-600 text-white p-2 rounded-full hover:bg-gray-500 transition-colors disabled:bg-gray-600 disabled:cursor-wait"
              aria-label="Send location"
            >
              {isSendingLocation ? (
                 <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                   <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                   <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                 </svg>
              ) : (
                <CursorArrowRaysIcon className="h-5 w-5" />
              )}
            </button>
          <button onClick={() => handleSend('image')} className="bg-gray-600 text-white p-2 rounded-full hover:bg-gray-500 transition-colors disabled:bg-gray-600" aria-label="Send image" disabled={!isConfigured}>
            <PhotoIcon className="h-5 w-5" />
          </button>
           <button onClick={() => handleSend('voice')} className="bg-gray-600 text-white p-2 rounded-full hover:bg-gray-500 transition-colors disabled:bg-gray-600" aria-label="Send voice message" disabled={!isConfigured}>
            <MicrophoneIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommsScreen;