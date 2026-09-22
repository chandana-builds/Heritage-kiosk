'use client';

import React from 'react';
import { Eye, Type, RotateCcw } from 'lucide-react';
import { UI_TRANSLATIONS } from '../data/heritageData';

interface AccessibilityBarProps {
  language: 'en' | 'hi' | 'es' | 'fr';
  highContrast: boolean;
  setHighContrast: (val: boolean) => void;
  largeFont: boolean;
  setLargeFont: (val: boolean) => void;
  onResetToAttract: () => void;
}

export const AccessibilityBar: React.FC<AccessibilityBarProps> = ({
  language,
  highContrast,
  setHighContrast,
  largeFont,
  setLargeFont,
  onResetToAttract
}) => {
  const t = UI_TRANSLATIONS[language];

  return (
    <aside aria-label="Kiosk Accessibility and Session Bar" className="fixed bottom-3 left-1/2 -translate-x-1/2 z-30 bg-stone-950/90 border border-amber-500/30 rounded-2xl p-1.5 shadow-2xl backdrop-blur-md flex items-center gap-2 max-w-[95vw] overflow-x-auto">
      {/* High Contrast */}
      <button
        onClick={() => setHighContrast(!highContrast)}
        className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer ${
          highContrast
            ? 'bg-yellow-400 text-black font-bold'
            : 'bg-stone-900 text-stone-300 hover:text-white'
        }`}
      >
        <Eye className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">{t.highContrast}</span>
      </button>

      {/* Font Scaling */}
      <button
        onClick={() => setLargeFont(!largeFont)}
        className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer ${
          largeFont
            ? 'bg-amber-600 text-stone-950 font-bold'
            : 'bg-stone-900 text-stone-300 hover:text-white'
        }`}
      >
        <Type className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">{largeFont ? t.fontNormal : t.fontLarge}</span>
      </button>

      <div className="h-4 w-px bg-stone-800" />

      {/* Reset to Attract / Idle Screen */}
      <button
        onClick={onResetToAttract}
        className="px-3 py-1.5 rounded-xl text-xs font-medium text-stone-400 hover:text-stone-200 bg-stone-900 flex items-center gap-1.5 transition cursor-pointer"
        title="Reset Kiosk Session"
      >
        <RotateCcw className="w-3.5 h-3.5 text-amber-500" />
        <span className="hidden sm:inline">Attract Screen</span>
      </button>
    </aside>
  );
};
