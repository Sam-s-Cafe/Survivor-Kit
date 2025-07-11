
import React, { useState } from 'react';
import { SURVIVAL_VIDEOS } from '../constants';
import { PlayCircleIcon, XCircleIcon } from './icons/Icons';

const VideosScreen: React.FC = () => {
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string | null>(null);

  const handlePlayVideo = (videoUrl: string) => {
    setSelectedVideoUrl(videoUrl);
  };

  const handleClosePlayer = () => {
    setSelectedVideoUrl(null);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-amber-400 mb-6">Offline Survival Archives</h1>
      <p className="text-gray-400 mb-8">Essential knowledge cached for offline access. Study these materials carefully.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SURVIVAL_VIDEOS.map(video => (
          <div key={video.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700 flex flex-col">
            <img src={video.thumbnailUrl} alt={video.title} className="w-full h-40 object-cover bg-gray-700" />
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-xl font-bold text-white mb-2">{video.title}</h2>
              <p className="text-gray-400 text-sm mb-4 flex-grow">{video.description}</p>
              <button
                onClick={() => handlePlayVideo(video.videoUrl)}
                disabled={!video.videoUrl}
                className="mt-auto self-start flex items-center bg-amber-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-amber-500 transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed"
              >
                <PlayCircleIcon className="h-5 w-5 mr-2" />
                Watch Video
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedVideoUrl !== null && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 animate-fadeIn" onClick={handleClosePlayer}>
          <div className="relative bg-gray-900 p-4 rounded-lg max-w-4xl w-full" onClick={e => e.stopPropagation()}>
            <button onClick={handleClosePlayer} className="absolute -top-3 -right-3 text-white bg-gray-800 rounded-full">
              <XCircleIcon className="h-10 w-10" />
            </button>
            {selectedVideoUrl ? (
                <video controls autoPlay className="w-full rounded" src={selectedVideoUrl}>
                  Your browser does not support the video tag.
                </video>
            ) : (
                <div className="w-full rounded bg-black flex items-center justify-center aspect-video">
                    <p className="text-gray-400">Video content not available.</p>
                </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default VideosScreen;