'use client';

import React, { useState } from 'react';
import { 
  Milestone, 
  Calendar, 
  Sparkles, 
  Landmark, 
  Compass, 
  Crown, 
  ChevronRight
} from 'lucide-react';
import { EPOCHS, UI_TRANSLATIONS } from '../data/heritageData';

interface EpochTimelineProps {
  language: 'en' | 'hi' | 'es' | 'fr';
}

export const EpochTimeline: React.FC<EpochTimelineProps> = ({ language }) => {
  const [selectedEpochIndex, setSelectedEpochIndex] = useState(0);
  const t = UI_TRANSLATIONS[language];

  const currentEpoch = EPOCHS[selectedEpochIndex];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Landmark': return <Landmark className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'Compass': return <Compass className="w-5 h-5" />;
      case 'Crown': return <Crown className="w-5 h-5" />;
      default: return <Milestone className="w-5 h-5" />;
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 py-6 space-y-6">
      
      {/* Header Banner */}
      <div className="bg-stone-900/80 p-6 rounded-3xl border border-amber-500/20 backdrop-blur-md">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-amber-400 font-mono font-bold">
              Chronological Odyssey
            </span>
            <h2 className="text-3xl font-extrabold font-serif text-stone-100 tracking-tight">
              {t.timelineTitle} & Civilizational Epochs
            </h2>
            <p className="text-sm text-stone-400 mt-1 max-w-2xl">
              Journey through millennia of architectural brilliance, philosophical revelations, and monumental engineering across key historical ages.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-stone-950 px-4 py-2 rounded-2xl border border-stone-800 text-xs font-mono text-amber-400">
            <Calendar className="w-4 h-4" />
            <span>Spanning Over 5,000 Years</span>
          </div>
        </div>
      </div>

      {/* Epoch Horizontal Navigation Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {EPOCHS.map((epoch, idx) => {
          const isSelected = idx === selectedEpochIndex;
          return (
            <button
              key={epoch.id}
              onClick={() => setSelectedEpochIndex(idx)}
              className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between h-32 ${
                isSelected
                  ? 'bg-gradient-to-br from-amber-600/30 to-amber-900/20 border-amber-500 shadow-lg shadow-amber-950/50'
                  : 'bg-stone-900/70 border-stone-800 hover:border-amber-500/30 text-stone-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className={`p-2 rounded-xl ${isSelected ? 'bg-amber-500 text-stone-950 font-bold' : 'bg-stone-800 text-amber-400'}`}>
                  {getIcon(epoch.icon)}
                </div>
                <span className="text-[11px] font-mono text-stone-400 font-medium">
                  {epoch.range}
                </span>
              </div>

              <div>
                <h4 className={`text-sm font-bold font-serif line-clamp-1 ${isSelected ? 'text-amber-300' : 'text-stone-200'}`}>
                  {epoch.name}
                </h4>
                <p className="text-[11px] text-stone-400 line-clamp-1">
                  {epoch.epochEra}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Epoch Milestone Display */}
      <div className="bg-stone-900/90 rounded-3xl border border-amber-500/30 p-6 sm:p-8 backdrop-blur-md">
        
        {/* Epoch Intro Header */}
        <div className="border-b border-stone-800 pb-6 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono font-bold text-amber-400 bg-amber-500/20 px-2.5 py-0.5 rounded-full border border-amber-500/30">
                {currentEpoch.range}
              </span>
              <span className="text-xs text-stone-400 font-mono">
                {currentEpoch.epochEra}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-serif text-stone-100">
              {currentEpoch.name}
            </h3>
            <p className="text-sm text-stone-300 max-w-3xl mt-2 leading-relaxed">
              {currentEpoch.description}
            </p>
          </div>
        </div>

        {/* Milestone Steps Timeline */}
        <div className="relative pl-6 sm:pl-10 space-y-8 before:absolute before:left-3 sm:before:left-5 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-amber-500 before:via-amber-600 before:to-stone-800">
          {currentEpoch.milestones.map((milestone, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Pin Marker */}
              <div className="absolute -left-6 sm:-left-10 top-1.5 w-6 h-6 rounded-full bg-stone-950 border-2 border-amber-500 flex items-center justify-center text-amber-400 shadow-md shadow-amber-900/40 group-hover:scale-125 transition-transform">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
              </div>

              {/* Milestone Card */}
              <div className="bg-stone-950/80 rounded-2xl p-5 border border-stone-800 hover:border-amber-500/40 transition-colors shadow-lg space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-mono font-bold text-amber-400 bg-stone-900 px-3 py-1 rounded-lg border border-amber-500/30">
                    {milestone.year}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-stone-400">
                    <span>Key Civilizational Milestone</span>
                    <ChevronRight className="w-3.5 h-3.5 text-amber-500" />
                  </div>
                </div>

                <h4 className="text-lg font-bold font-serif text-stone-100 group-hover:text-amber-300 transition-colors">
                  {milestone.event}
                </h4>

                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
};
