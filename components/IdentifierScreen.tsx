
import React, { useState, useRef } from 'react';
import { FIELD_GUIDE_ENTRIES } from '../constants';
import { PhotoIcon, LeafIcon, MapPinIcon } from './icons/Icons';

const fileToDataUrl = (file: File): Promise<string> => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = error => reject(error);
});

const IdentifierScreen: React.FC = () => {
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [analysisUrl, setAnalysisUrl] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setError(null);
            setAnalysisUrl(null);
            const dataUrl = await fileToDataUrl(file);
            setImagePreview(dataUrl);
            
            // Note: Google Lens direct URL submission is heavily restricted.
            // The most reliable method is to guide the user.
            // We can't send a blob/data URL directly.
            setAnalysisUrl(`https://lens.google.com/`);
        }
    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-amber-400 mb-4">Field Analyst</h1>
            <div className="p-4 bg-red-900/50 rounded-lg border border-red-500/50 mb-6" role="alert">
                <p className="font-bold text-red-300">IMPORTANT DISCLAIMER</p>
                <p className="text-sm text-red-200">AI analysis may be incorrect. Never consume a wild plant based solely on this app's advice. Cross-reference with the offline Field Guide below and other trusted sources.</p>
            </div>
            
            <input
                type="file"
                accept="image/*"
                capture="environment"
                ref={fileInputRef}
                onChange={handleImageChange}
                className="hidden"
            />

            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                <h2 className="text-xl font-bold text-white mb-4">Visual Analysis</h2>
                
                {!imagePreview && (
                    <button onClick={() => fileInputRef.current?.click()} className="w-full border-2 border-dashed border-gray-600 rounded-lg p-12 flex flex-col items-center justify-center hover:border-amber-400 transition-colors">
                        <PhotoIcon className="h-12 w-12 text-gray-500 mb-2"/>
                        <span className="text-gray-400 font-semibold">Tap to select or take a photo</span>
                    </button>
                )}
                
                {imagePreview && (
                    <div className="mb-4">
                        <img src={imagePreview} alt="Selected plant" className="max-h-60 w-full object-contain rounded-lg"/>
                    </div>
                )}
                
                <div className="flex space-x-2 mt-4">
                     <button onClick={() => fileInputRef.current?.click()} className="w-full bg-gray-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-gray-500 transition-colors flex items-center justify-center">
                        <PhotoIcon className="h-5 w-5 mr-2" />
                        Change Photo
                    </button>
                    <a 
                        href={analysisUrl || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => !analysisUrl && e.preventDefault()}
                        className={`w-full bg-amber-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-amber-500 transition-colors flex items-center justify-center ${!analysisUrl ? 'bg-gray-500 cursor-not-allowed' : ''}`}
                    >
                        <LeafIcon className="h-5 w-5 mr-2" />
                        Analyze with Google Lens
                    </a>
                </div>
                {analysisUrl && (
                    <p className="text-xs text-amber-200 mt-3 text-center bg-amber-900/50 p-2 rounded-md">
                        Google Lens will open in a new tab. You may need to manually upload the photo you just took.
                    </p>
                )}
            </div>

            {error && (
                <div className="mt-6 p-4 bg-red-900/50 rounded-lg border border-red-500 text-red-300" role="alert">
                    <p className="font-bold">Error</p>
                    <p>{error}</p>
                </div>
            )}
            
            <div className="mt-8">
                <h2 className="text-2xl font-bold text-white mb-4">Offline Field Guide</h2>
                <div className="space-y-4">
                    {FIELD_GUIDE_ENTRIES.map(entry => (
                        <div key={entry.id} className="bg-gray-800 p-4 rounded-lg border border-gray-700 flex items-start space-x-4">
                            <img src={entry.imageUrls[0]} alt={entry.name} className="w-20 h-20 object-cover bg-gray-700 rounded-md flex-shrink-0" />
                            <div className="flex-grow">
                                <h3 className="text-xl font-bold text-white mb-2">{entry.name}</h3>
                                <p className="text-gray-300 mb-3 text-sm">{entry.description}</p>
                                <div className="flex items-center text-sm text-gray-400 mb-3">
                                    <MapPinIcon className="h-4 w-4 mr-2 flex-shrink-0" />
                                    <p><span className="font-semibold">Habitat:</span> {entry.habitat}</p>
                                </div>
                                <div className={`p-3 rounded border-l-4 ${entry.edibility === 'Edible' ? 'border-green-500 bg-green-900/50' : (entry.edibility === 'Caution' ? 'border-yellow-500 bg-yellow-900/50' : 'border-red-500 bg-red-900/50')}`}>
                                    <p className="font-bold text-sm uppercase tracking-wider">{entry.edibility}</p>
                                    {entry.warning && <p className="text-sm mt-1">{entry.warning}</p>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default IdentifierScreen;
