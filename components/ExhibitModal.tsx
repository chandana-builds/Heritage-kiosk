'use client';

import React, { useState } from 'react';
import { 
  X, 
  MapPin, 
  Calendar, 
  Tag, 
  Box, 
  Headphones, 
  CheckCircle2, 
  Share2, 
  Info,
  Maximize2
} from 'lucide-react';
import { Exhibit, UI_TRANSLATIONS } from '../data/heritageData';
import { AudioNarrator } from './AudioNarrator';
import { ArtifactViewer3D } from './ArtifactViewer3D';

interface ExhibitModalProps {
  exhibit: Exhibit;
  onClose: () => void;
  language: 'en' | 'hi' | 'es' | 'fr';
  onOpenMobileQR: () => void;
}

export const ExhibitModal: React.FC<ExhibitModalProps> = ({
  exhibit,
  onClose,
  language,
  onOpenMobileQR
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | '3d'>('overview');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const t = UI_TRANSLATIONS[language];

  const currentImage = exhibit.galleryImages && exhibit.galleryImages.length > 0
    ? exhibit.galleryImages[selectedImageIndex] || exhibit.galleryImages[0]
    : { url: exhibit.imageUrl, caption: exhibit.title };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-5xl bg-stone-900 border border-amber-500/40 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-stone-800 bg-stone-950/80 sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/40 text-xs font-mono font-bold uppercase">
              {exhibit.era} Era • {exhibit.period}
            </span>
            <span className="px-3 py-1 rounded-full bg-stone-800 text-stone-300 text-xs font-mono">
              {exhibit.category}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* View Switcher Tabs */}
            <div className="flex items-center bg-stone-950 p-1 rounded-xl border border-stone-800">
              <button
                onClick={() => setActiveTab('overview')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                  activeTab === 'overview'
                    ? 'bg-amber-600 text-stone-950'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                <Info className="w-3.5 h-3.5" />
                <span>Exhibit Profile</span>
              </button>
              <button
                onClick={() => setActiveTab('3d')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                  activeTab === '3d'
                    ? 'bg-amber-600 text-stone-950'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>3D Explorer</span>
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="overflow-y-auto flex-1 p-4 sm:p-6">
          {activeTab === '3d' ? (
            <div className="h-[550px] w-full">
              <ArtifactViewer3D exhibit={exhibit} />
            </div>
          ) : (
            <div className="space-y-6">
              {/* Hero Showcase Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Visual Image with Vignette & Multi-Photo Gallery */}
                <div className="lg:col-span-6 flex flex-col space-y-3">
                  <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 bg-stone-950 h-[300px] sm:h-[360px] group shadow-xl">
                    <img
                      src={currentImage.url}
                      alt={currentImage.caption || exhibit.title}
                      className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-black/30" />
                    
                    {currentImage.caption && (
                      <div className="absolute top-3 left-3 right-3">
                        <p className="text-[11px] sm:text-xs text-stone-200 bg-stone-950/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-stone-800 line-clamp-2 shadow-md">
                          {currentImage.caption}
                        </p>
                      </div>
                    )}

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <span className="text-xs bg-stone-900/90 text-amber-300 px-3 py-1.5 rounded-lg border border-amber-500/30 font-medium">
                        {exhibit.material}
                      </span>
                      <button
                        onClick={() => setActiveTab('3d')}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs shadow-lg cursor-pointer"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>Interactive 3D</span>
                      </button>
                    </div>
                  </div>

                  {/* Multi-Photo Gallery Strip */}
                  {exhibit.galleryImages && exhibit.galleryImages.length > 1 && (
                    <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                      {exhibit.galleryImages.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSelectedImageIndex(idx)}
                          className={`relative rounded-xl overflow-hidden border-2 h-16 w-24 shrink-0 transition-all cursor-pointer ${
                            selectedImageIndex === idx
                              ? 'border-amber-500 scale-102 shadow-md shadow-amber-900/50 ring-2 ring-amber-400/40'
                              : 'border-stone-800 opacity-60 hover:opacity-100'
                          }`}
                        >
                          <img
                            src={img.url}
                            alt={img.caption}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Exhibit Details & Provenance */}
                <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold font-serif text-stone-100 tracking-tight mb-1">
                      {exhibit.title}
                    </h3>
                    {exhibit.nativeTitle && (
                      <p className="text-lg text-amber-400 font-serif mb-2">
                        {exhibit.nativeTitle}
                      </p>
                    )}
                    <p className="text-sm text-stone-300 font-medium leading-relaxed mb-4">
                      {exhibit.subtitle}
                    </p>

                    {/* Metadata Badges */}
                    <div className="grid grid-cols-2 gap-2.5 mb-4 text-xs">
                      <div className="bg-stone-950/80 p-2.5 rounded-xl border border-stone-800 flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
                        <div>
                          <div className="text-stone-400 text-[10px] uppercase">Location</div>
                          <div className="font-semibold text-stone-200 truncate">{exhibit.location}</div>
                        </div>
                      </div>

                      <div className="bg-stone-950/80 p-2.5 rounded-xl border border-stone-800 flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-amber-500 shrink-0" />
                        <div>
                          <div className="text-stone-400 text-[10px] uppercase">Approx. Era</div>
                          <div className="font-semibold text-stone-200">{exhibit.year}</div>
                        </div>
                      </div>

                      <div className="bg-stone-950/80 p-2.5 rounded-xl border border-stone-800 flex items-center gap-2">
                        <Tag className="w-4 h-4 text-amber-500 shrink-0" />
                        <div>
                          <div className="text-stone-400 text-[10px] uppercase">Category</div>
                          <div className="font-semibold text-stone-200">{exhibit.category}</div>
                        </div>
                      </div>

                      <div className="bg-stone-950/80 p-2.5 rounded-xl border border-stone-800 flex items-center gap-2">
                        <Info className="w-4 h-4 text-amber-500 shrink-0" />
                        <div>
                          <div className="text-stone-400 text-[10px] uppercase">Dimensions</div>
                          <div className="font-semibold text-stone-200 truncate">{exhibit.dimensions}</div>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                      {exhibit.longDescription}
                    </p>
                  </div>

                  {/* Mobile Handoff button */}
                  <div className="pt-2">
                    <button
                      onClick={onOpenMobileQR}
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 text-xs font-semibold transition cursor-pointer"
                    >
                      <Share2 className="w-4 h-4 text-amber-400" />
                      <span>{t.scanForMobile}</span>
                    </button>
                  </div>
                </div>

              </div>

              {/* Integrated Audio Narrator Player */}
              <AudioNarrator
                title={exhibit.title}
                transcript={exhibit.audioTranscript}
                durationLabel={exhibit.audioDuration}
                language={language}
              />

              {/* Architectural Highlights & Provenance */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Highlights */}
                <div className="bg-stone-950/80 rounded-2xl p-4 border border-stone-800">
                  <h4 className="text-xs uppercase tracking-wider text-amber-400 font-bold font-mono mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-500" />
                    <span>{t.highlights}</span>
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-stone-300">
                    {exhibit.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Provenance */}
                <div className="bg-stone-950/80 rounded-2xl p-4 border border-stone-800">
                  <h4 className="text-xs uppercase tracking-wider text-amber-400 font-bold font-mono mb-3 flex items-center gap-2">
                    <Info className="w-4 h-4 text-amber-500" />
                    <span>{t.provenance}</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-3">
                    {exhibit.provenance}
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5">
                    {exhibit.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2.5 py-1 rounded-md bg-stone-900 text-stone-400 border border-stone-800 font-mono"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          )}
        </div>

        {/* Modal Bottom Footer */}
        <div className="p-4 bg-stone-950 border-t border-stone-800 flex items-center justify-between text-xs text-stone-400">
          <span>Official Curatorial Record • Cultural Heritage Kiosk</span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold cursor-pointer transition"
          >
            {t.back}
          </button>
        </div>

      </div>
    </div>
  );
};
