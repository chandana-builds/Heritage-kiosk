'use client';

import React, { useState, useEffect } from 'react';
import { 
  Compass, 
  Globe, 
  Eye, 
  Type, 
  Smartphone, 
  Info, 
  Clock, 
  HelpCircle
} from 'lucide-react';
import { UI_TRANSLATIONS } from '../data/heritageData';

interface KioskHeaderProps {
  language: 'en' | 'hi' | 'es' | 'fr';
  setLanguage: (lang: 'en' | 'hi' | 'es' | 'fr') => void;
  highContrast: boolean;
  setHighContrast: (val: boolean) => void;
  largeFont: boolean;
  setLargeFont: (val: boolean) => void;
  onOpenGuide: () => void;
  onOpenQuiz: () => void;
  onOpenMobileQR: () => void;
  activeTab: 'exhibits' | 'timeline' | 'quiz';
  setActiveTab: (tab: 'exhibits' | 'timeline' | 'quiz') => void;
}

export const KioskHeader: React.FC<KioskHeaderProps> = ({
  language,
  setLanguage,
  highContrast,
  setHighContrast,
  largeFont,
  setLargeFont,
  onOpenGuide,
  onOpenQuiz,
  onOpenMobileQR,
  activeTab,
  setActiveTab
}) => {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [currentDate, setCurrentDate] = useState<string>('');
  const t = UI_TRANSLATIONS[language];

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
      setCurrentDate(now.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' }));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-amber-500/20 bg-stone-950/90 backdrop-blur-md px-4 lg:px-8 py-3.5 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Brand & Kiosk Title */}
        <div className="flex items-center gap-3.5 w-full md:w-auto justify-between md:justify-start">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-lg shadow-amber-900/30 text-stone-950 font-bold">
              <Compass className="w-6 h-6 animate-spin-slow" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-extrabold tracking-wider font-serif kiosk-gold-text">
                  {t.title}
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30 font-mono font-medium">
                  KIOSK 04
                </span>
              </div>
              <p className="text-xs text-stone-400 tracking-wide font-sans">
                {t.subtitle} • National Museum & Archaeological Trust
              </p>
            </div>
          </div>

          {/* Time indicator for kiosk visitors */}
          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-stone-300 bg-stone-900/80 px-3 py-1.5 rounded-lg border border-stone-800">
            <Clock className="w-3.5 h-3.5 text-amber-500" />
            <span>{currentTime}</span>
            <span className="text-stone-600">|</span>
            <span className="text-stone-400">{currentDate}</span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex items-center gap-1.5 bg-stone-900/90 p-1 rounded-xl border border-stone-800 shadow-inner">
          <button
            onClick={() => setActiveTab('exhibits')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
              activeTab === 'exhibits'
                ? 'bg-amber-600 text-stone-950 font-semibold shadow-md shadow-amber-900/30'
                : 'text-stone-300 hover:text-white hover:bg-stone-800/60'
            }`}
          >
            Exhibits Gallery
          </button>
          <button
            onClick={() => setActiveTab('timeline')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
              activeTab === 'timeline'
                ? 'bg-amber-600 text-stone-950 font-semibold shadow-md shadow-amber-900/30'
                : 'text-stone-300 hover:text-white hover:bg-stone-800/60'
            }`}
          >
            {t.timelineTitle}
          </button>
          <button
            onClick={() => {
              setActiveTab('quiz');
              onOpenQuiz();
            }}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'quiz'
                ? 'bg-amber-600 text-stone-950 font-semibold shadow-md shadow-amber-900/30'
                : 'text-stone-300 hover:text-white hover:bg-stone-800/60'
            }`}
          >
            <HelpCircle className="w-4 h-4 text-amber-400" />
            {t.quizTitle}
          </button>
        </nav>

        {/* Utilities: Language, Accessibility, Mobile QR, Guide */}
        <div className="flex items-center gap-2 flex-wrap justify-end">
          
          {/* Language Selector */}
          <div className="flex items-center bg-stone-900/90 rounded-lg p-1 border border-stone-800">
            <Globe className="w-4 h-4 text-amber-500 ml-1.5 mr-1" />
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as 'en' | 'hi' | 'es' | 'fr')}
              className="bg-transparent text-xs font-semibold text-stone-200 outline-none pr-1 py-1 cursor-pointer"
              aria-label="Select Language"
            >
              <option value="en" className="bg-stone-900 text-white">English (EN)</option>
              <option value="hi" className="bg-stone-900 text-white">हिन्दी (HI)</option>
              <option value="es" className="bg-stone-900 text-white">Español (ES)</option>
              <option value="fr" className="bg-stone-900 text-white">Français (FR)</option>
            </select>
          </div>

          {/* High Contrast Mode Toggle */}
          <button
            onClick={() => setHighContrast(!highContrast)}
            title={t.highContrast}
            aria-label={t.highContrast}
            className={`p-2 rounded-lg border transition-all cursor-pointer ${
              highContrast
                ? 'bg-yellow-400 text-black border-yellow-300'
                : 'bg-stone-900 text-stone-300 border-stone-800 hover:border-amber-500/40 hover:text-white'
            }`}
          >
            <Eye className="w-4 h-4" />
          </button>

          {/* Font Size Toggle */}
          <button
            onClick={() => setLargeFont(!largeFont)}
            title={largeFont ? t.fontNormal : t.fontLarge}
            aria-label={largeFont ? t.fontNormal : t.fontLarge}
            className={`p-2 rounded-lg border transition-all cursor-pointer ${
              largeFont
                ? 'bg-amber-600 text-stone-950 font-bold border-amber-500'
                : 'bg-stone-900 text-stone-300 border-stone-800 hover:border-amber-500/40 hover:text-white'
            }`}
          >
            <Type className="w-4 h-4" />
          </button>

          {/* QR Code Handoff to Mobile */}
          <button
            onClick={onOpenMobileQR}
            title={t.scanForMobile}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-800 text-xs font-medium transition cursor-pointer"
          >
            <Smartphone className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden lg:inline">{t.scanForMobile}</span>
          </button>

          {/* Visitor Guide Modal Opener */}
          <button
            onClick={onOpenGuide}
            title={t.visitorGuide}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-amber-600/20 hover:bg-amber-600/30 text-amber-300 border border-amber-500/40 text-xs font-semibold transition cursor-pointer"
          >
            <Info className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline">{t.visitorGuide}</span>
          </button>
        </div>

      </div>
    </header>
  );
};
