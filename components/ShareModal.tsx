
import React, { useEffect, useRef, useState } from 'react';
import QRCode from 'qrcode';
import { XCircleIcon, ShareIcon } from './icons/Icons';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const appUrl = window.location.href;
  const [canShare, setCanShare] = useState(false);

  useEffect(() => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      setCanShare(true);
    }

    if (isOpen && canvasRef.current) {
      QRCode.toCanvas(canvasRef.current, appUrl, {
          width: 256,
          margin: 2,
          color: {
              dark: '#e5e7eb', // text-gray-200
              light: '#00000000' // transparent
          }
      }, (error) => {
        if (error) console.error("QR Code Error:", error);
      });
    }
  }, [isOpen, appUrl]);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Offline War Survivor Kit',
          text: 'Join me on the Survivor Kit app. It works offline!',
          url: appUrl,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 animate-fadeIn" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="share-modal-title">
      <div className="relative bg-gray-900 p-6 rounded-lg max-w-sm w-full mx-4 border-2 border-amber-500 shadow-2xl shadow-amber-500/20" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute -top-3 -right-3 text-white bg-gray-800 rounded-full" aria-label="Close share modal">
          <XCircleIcon className="h-10 w-10" />
        </button>
        <div className="text-center">
          <h2 id="share-modal-title" className="text-2xl font-bold text-amber-400">Share App</h2>
          <p className="text-gray-300 mt-2 mb-4">Have another survivor scan this QR code to download the Survivor Kit.</p>
          <div className="bg-gray-800 p-4 rounded-lg inline-block border border-gray-700">
             <canvas ref={canvasRef} />
          </div>
          
          {canShare && (
            <button
              onClick={handleShare}
              className="mt-6 w-full flex items-center justify-center bg-sky-600 hover:bg-sky-500 text-white font-bold py-3 px-4 rounded-lg transition-colors"
            >
              <ShareIcon className="h-5 w-5 mr-2" />
               Share via System UI
            </button>
          )}

           <p className="text-xs text-gray-500 mt-4 break-all">{appUrl}</p>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
