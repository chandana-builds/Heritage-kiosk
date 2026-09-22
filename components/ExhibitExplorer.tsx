'use client';

import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  Headphones, 
  Box, 
  ArrowRight, 
  MapPin, 
  Calendar,
  Sparkles,
  SlidersHorizontal
} from 'lucide-react';
import { Exhibit, EXHIBITS, UI_TRANSLATIONS } from '../data/heritageData';

interface ExhibitExplorerProps {
  onSelectExhibit: (exhibit: Exhibit) => void;
  onQuickAudio: (exhibit: Exhibit) => void;
  onQuick3D: (exhibit: Exhibit) => void;
  language: 'en' | 'hi' | 'es' | 'fr';
}

export const ExhibitExplorer: React.FC<ExhibitExplorerProps> = ({
  onSelectExhibit,
  onQuickAudio,
  onQuick3D,
  language
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEra, setSelectedEra] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const t = UI_TRANSLATIONS[language];

  const eras = ['All', 'Ancient', 'Classical', 'Medieval', 'Early Modern', 'Modern'];
  const categories = ['All', 'Architecture', 'Sculpture', 'Relic', 'Monument', 'Manuscript'];

  const filteredExhibits = useMemo(() => {
    return EXHIBITS.filter((exhibit) => {
      const matchesSearch =
        exhibit.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        exhibit.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        exhibit.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        exhibit.period.toLowerCase().includes(searchQuery.toLowerCase()) ||
        exhibit.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesEra = selectedEra === 'All' || exhibit.era === selectedEra;
      const matchesCategory = selectedCategory === 'All' || exhibit.category === selectedCategory;

      return matchesSearch && matchesEra && matchesCategory;
    });
  }, [searchQuery, selectedEra, selectedCategory]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 py-6 space-y-6">
      
      {/* Search & Filter Header */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-stone-900/80 p-4 rounded-2xl border border-amber-500/20 backdrop-blur-md">
        
        {/* Search Bar with Icon */}
        <div className="relative flex-1">
          <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-amber-500/70" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.searchPlaceholder}
            className="w-full pl-11 pr-4 py-3 bg-stone-950/80 border border-stone-800 rounded-xl text-stone-100 placeholder-stone-500 text-sm focus:outline-none focus:border-amber-500/60 transition"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-white px-2 py-1 rounded bg-stone-800"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Selector */}
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-amber-500 shrink-0" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-stone-950 border border-stone-800 text-xs sm:text-sm text-stone-200 py-3 px-3 rounded-xl focus:outline-none focus:border-amber-500/60 cursor-pointer"
          >
            <option value="All">{t.allCategories}</option>
            {categories.filter(c => c !== 'All').map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

      </div>

      {/* Era Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <span className="text-xs uppercase font-mono text-stone-400 font-bold px-2 py-1 flex items-center gap-1.5 shrink-0">
          <Filter className="w-3.5 h-3.5 text-amber-500" />
          <span>Epoch:</span>
        </span>
        {eras.map((era) => (
          <button
            key={era}
            onClick={() => setSelectedEra(era)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition cursor-pointer ${
              selectedEra === era
                ? 'bg-amber-600 text-stone-950 shadow-md shadow-amber-900/30 font-bold'
                : 'bg-stone-900/90 text-stone-300 border border-stone-800 hover:border-amber-500/30 hover:text-white'
            }`}
          >
            {era === 'All' ? t.allEras : era}
          </button>
        ))}
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs text-stone-400 font-mono">
        <span>Displaying {filteredExhibits.length} Curated Masterpieces</span>
        <div className="flex items-center gap-1.5 text-amber-400">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Interactive Touch Screen Ready</span>
        </div>
      </div>

      {/* Exhibit Cards Grid */}
      {filteredExhibits.length === 0 ? (
        <div className="p-12 text-center bg-stone-900/40 rounded-3xl border border-dashed border-stone-800 space-y-3">
          <p className="text-stone-300 text-base font-serif">No treasures match your search filter.</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedEra('All');
              setSelectedCategory('All');
            }}
            className="px-4 py-2 rounded-xl bg-amber-600 text-stone-950 font-bold text-xs"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExhibits.map((exhibit) => (
            <div
              key={exhibit.id}
              onClick={() => onSelectExhibit(exhibit)}
              className="group kiosk-card-glass rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 cursor-pointer"
            >
              <div>
                {/* Card Image Cover with Era Badge */}
                <div className="relative h-56 w-full overflow-hidden bg-stone-950">
                  <img
                    src={exhibit.imageUrl}
                    alt={exhibit.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
                  
                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-lg bg-stone-950/80 backdrop-blur-md border border-amber-500/30 text-amber-300 text-xs font-mono font-bold">
                      {exhibit.era}
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-stone-950/80 backdrop-blur-md border border-stone-700 text-stone-300 text-xs font-mono">
                      {exhibit.category}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 rounded-lg bg-amber-600/90 text-stone-950 text-xs font-mono font-bold flex items-center gap-1 shadow-md">
                      <Headphones className="w-3 h-3" />
                      <span>{exhibit.audioDuration}</span>
                    </span>
                  </div>

                  {/* Year Tag bottom left */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-stone-200 text-xs font-mono drop-shadow">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    <span>{exhibit.year}</span>
                  </div>
                </div>

                {/* Content Block */}
                <div className="p-5 space-y-2.5">
                  <h3 className="text-xl font-bold font-serif text-stone-100 group-hover:text-amber-300 transition-colors line-clamp-1">
                    {exhibit.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-stone-400">
                    <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span className="truncate">{exhibit.location}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed line-clamp-2">
                    {exhibit.shortDescription}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {exhibit.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.5 rounded bg-stone-900 text-stone-400 border border-stone-800 font-mono"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Bottom Bar */}
              <div className="p-4 pt-2 border-t border-stone-800/80 bg-stone-950/60 flex items-center justify-between gap-2">
                
                {/* Fast Audio Guide Trigger */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onQuickAudio(exhibit);
                  }}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-800 text-xs font-medium transition cursor-pointer hover:border-amber-500/40"
                  title="Listen to audio tour"
                >
                  <Headphones className="w-3.5 h-3.5 text-amber-400" />
                  <span className="hidden sm:inline">Audio</span>
                </button>

                {/* Fast 3D Inspect Trigger */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onQuick3D(exhibit);
                  }}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-800 text-xs font-medium transition cursor-pointer hover:border-amber-500/40"
                  title="Open 3D artifact inspector"
                >
                  <Box className="w-3.5 h-3.5 text-amber-400" />
                  <span className="hidden sm:inline">3D View</span>
                </button>

                {/* Examine Exhibit Full Detail */}
                <div className="flex items-center gap-1 text-xs font-bold text-amber-400 group-hover:translate-x-1 transition-transform">
                  <span>{t.viewDetails}</span>
                  <ArrowRight className="w-4 h-4" />
                </div>

              </div>

            </div>
          ))}
        </div>
      )}

    </div>
  );
};
