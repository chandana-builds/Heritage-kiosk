'use client';

import React, { useState, useEffect } from 'react';
import { Sparkles, Compass, Headphones, Box, ArrowRight, Shield } from 'lucide-react';
import { EXHIBITS } from '../data/heritageData';

interface AttractScreenProps {
  onDismiss: () => void;
  language: 'en' | 'hi' | 'es' | 'fr';
}

export const AttractScreen: React.FC<AttractScreenProps> = ({ onDismiss }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlideIndex((prev) => (prev + 1) % EXHIBITS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const currentExhibit = EXHIBITS[activeSlideIndex];

  return (
    <div 
      onClick={onDismiss}
      className="fixed inset-0 z-50 bg-stone-950 flex flex-col justify-between p-6 sm:p-12 cursor-pointer select-none overflow-hidden"
    >
      {/* Dynamic Ambient Background Image with Dark Vignette */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 transform scale-105 filter brightness-40 blur-xs"
          style={{ backgroundImage: `url(${currentExhibit.imageUrl})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/70 to-stone-950/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,119,6,0.15),transparent_70%)]" />
      </div>

      {/* Top Banner */}
      <div className="relative z-10 flex items-center justify-between w-full max-w-7xl mx-auto border-b border-amber-500/20 pb-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-700 flex items-center justify-center shadow-xl shadow-amber-900/40 text-stone-950">
            <Compass className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-xs uppercase tracking-widest text-amber-400 font-bold font-mono">
              National Archaeological Sanctuary & Heritage Trust
            </h2>
            <h1 className="text-3xl sm:text-4xl font-extrabold font-serif text-stone-100 tracking-wide">
              HERITAGE INTERACTIVE KIOSK
            </h1>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-2 bg-stone-900/80 px-4 py-2 rounded-full border border-amber-500/30 text-xs font-mono text-amber-300">
          <Shield className="w-4 h-4 text-amber-400" />
          <span>OFFICIAL DIGITAL ACCESS PORTAL</span>
        </div>
      </div>

      {/* Centerpiece Spotlight Showcase */}
      <div className="relative z-10 max-w-4xl mx-auto text-center my-auto flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-6 animate-pulse">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Featured Wonder of Antiquity</span>
        </div>

        <h2 className="text-4xl sm:text-6xl font-black font-serif text-stone-100 tracking-tight mb-4 drop-shadow-2xl">
          {currentExhibit.title}
        </h2>
        {currentExhibit.nativeTitle && (
          <p className="text-xl sm:text-2xl text-amber-300/80 font-serif mb-4">
            {currentExhibit.nativeTitle}
          </p>
        )}

        <p className="text-base sm:text-xl text-stone-300 max-w-2xl font-light leading-relaxed mb-8 drop-shadow">
          {currentExhibit.shortDescription}
        </p>

        {/* Feature Icons */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 mb-10 w-full max-w-lg">
          <div className="flex flex-col items-center bg-stone-900/70 backdrop-blur-md p-3.5 rounded-2xl border border-amber-500/20">
            <Headphones className="w-6 h-6 text-amber-400 mb-1.5" />
            <span className="text-xs text-stone-200 font-medium">Spoken Audio Tour</span>
          </div>
          <div className="flex flex-col items-center bg-stone-900/70 backdrop-blur-md p-3.5 rounded-2xl border border-amber-500/20">
            <Box className="w-6 h-6 text-amber-400 mb-1.5" />
            <span className="text-xs text-stone-200 font-medium">3D Artifact Inspect</span>
          </div>
          <div className="flex flex-col items-center bg-stone-900/70 backdrop-blur-md p-3.5 rounded-2xl border border-amber-500/20">
            <Sparkles className="w-6 h-6 text-amber-400 mb-1.5" />
            <span className="text-xs text-stone-200 font-medium">Visitor Trivia Quiz</span>
          </div>
        </div>

        {/* Pulsing Touch Call To Action */}
        <div className="group flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-stone-950 font-bold text-lg shadow-2xl shadow-amber-600/50 hover:scale-105 transition-transform">
          <span>TOUCH SCREEN TO BEGIN EXPLORATION</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>

      {/* Slide Indicators & Footer */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex items-center justify-between pt-6 border-t border-stone-800">
        <div className="text-xs font-mono text-stone-400">
          Curated Historical Treasures: {activeSlideIndex + 1} of {EXHIBITS.length}
        </div>
        <div className="flex items-center gap-2">
          {EXHIBITS.map((_, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                setActiveSlideIndex(i);
              }}
              className={`h-2 rounded-full transition-all ${
                i === activeSlideIndex ? 'w-8 bg-amber-500' : 'w-2 bg-stone-700'
              }`}
            />
          ))}
        </div>
        <div className="text-xs text-stone-400">
          Terminal ID: KIOSK-MAIN-HALL-04
        </div>
      </div>
    </div>
  );
};
