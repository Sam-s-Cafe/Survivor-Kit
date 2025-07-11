
import React, { useState } from 'react';
import { NATURAL_REMEDIES } from '../constants';
import type { Remedy, RemedyCategory } from '../types';
import { SparklesIcon, ChevronDownIcon } from './icons/Icons';

const RemedyCard: React.FC<{ remedy: Remedy; isExpanded: boolean; onToggle: () => void; }> = ({ remedy, isExpanded, onToggle }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700 transition-all duration-300">
      <button
        onClick={onToggle}
        className="w-full p-4 flex justify-between items-center text-left"
        aria-expanded={isExpanded}
      >
        <div className="flex items-center">
            <SparklesIcon className="h-6 w-6 mr-4 text-amber-400 flex-shrink-0" />
            <div>
                <h2 className="text-lg font-bold text-white">{remedy.title}</h2>
                <p className="text-xs text-gray-400">{remedy.category}</p>
            </div>
        </div>
        <ChevronDownIcon className={`h-6 w-6 text-gray-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
      </button>
      {isExpanded && (
        <div className="p-4 border-t border-gray-700 animate-fadeIn">
          <p className="text-gray-300 mb-4">{remedy.description}</p>
          <div>
            <h3 className="font-bold text-amber-400 mb-2">Ingredients:</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1 mb-4">
              {remedy.ingredients.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-amber-400 mb-2">Instructions:</h3>
            <ol className="list-decimal list-inside text-gray-300 space-y-2">
              {remedy.instructions.map((step, index) => <li key={index}>{step}</li>)}
            </ol>
          </div>
        </div>
      )}
    </div>
  );
};


const RemediesScreen: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [filter, setFilter] = useState<RemedyCategory | 'All'>('All');

  const categories: (RemedyCategory | 'All')[] = ['All', 'Wound Care', 'Pain Relief', 'Skin Issues', 'Digestive Aid', 'Respiratory Aid', 'Insect Bites', 'General Wellness'];

  const handleToggle = (id: number) => {
    setExpandedId(prevId => (prevId === id ? null : id));
  };

  const filteredRemedies = filter === 'All'
    ? NATURAL_REMEDIES
    : NATURAL_REMEDIES.filter(remedy => remedy.category === filter);

  return (
    <div className="animate-fadeIn">
      <h1 className="text-3xl font-bold text-amber-400 mb-4">Natural Remedies</h1>
      <div className="p-4 bg-yellow-900/50 rounded-lg border border-yellow-500/50 mb-6" role="alert">
        <p className="font-bold text-yellow-300">MEDICAL ADVISORY</p>
        <p className="text-sm text-yellow-200">These remedies are based on traditional knowledge. They are not a substitute for professional medical advice. In case of serious injury or illness, seek professional help if possible.</p>
      </div>

      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors ${
                filter === category
                  ? 'bg-amber-500 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      <div className="space-y-4">
        {filteredRemedies.map(remedy => (
          <RemedyCard
            key={remedy.id}
            remedy={remedy}
            isExpanded={expandedId === remedy.id}
            onToggle={() => handleToggle(remedy.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default RemediesScreen;
