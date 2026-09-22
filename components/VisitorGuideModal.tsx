'use client';

import React from 'react';
import { 
  X, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Smartphone, 
  Compass, 
  QrCode 
} from 'lucide-react';
import { VISITOR_INFO, UI_TRANSLATIONS } from '../data/heritageData';

interface VisitorGuideModalProps {
  onClose: () => void;
  language: 'en' | 'hi' | 'es' | 'fr';
  initialTab?: 'guide' | 'mobile';
}

export const VisitorGuideModal: React.FC<VisitorGuideModalProps> = ({
  onClose,
  language,
  initialTab = 'guide'
}) => {
  const [activeTab, setActiveTab] = React.useState<'guide' | 'mobile'>(initialTab);
  const t = UI_TRANSLATIONS[language];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-3xl bg-stone-900 border border-amber-500/40 rounded-3xl shadow-2xl overflow-hidden my-auto">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between p-5 border-b border-stone-800 bg-stone-950/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-serif text-stone-100">
                {activeTab === 'guide' ? t.visitorGuide : t.scanForMobile}
              </h3>
              <p className="text-xs text-stone-400">{VISITOR_INFO.galleryName}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex bg-stone-800 p-1 rounded-xl border border-stone-700">
              <button
                onClick={() => setActiveTab('guide')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                  activeTab === 'guide' ? 'bg-amber-600 text-stone-950 shadow' : 'text-stone-300'
                }`}
              >
                Museum Guide
              </button>
              <button
                onClick={() => setActiveTab('mobile')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                  activeTab === 'mobile' ? 'bg-amber-600 text-stone-950 shadow' : 'text-stone-300'
                }`}
              >
                Mobile Sync
              </button>
            </div>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white flex items-center justify-center transition border border-stone-700 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {activeTab === 'guide' ? (
            <>
              {/* Hours & Location Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-stone-950/80 p-4 rounded-2xl border border-stone-800 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold">
                    <Clock className="w-4 h-4" />
                    <span>HOURS OF OPERATION</span>
                  </div>
                  <p className="text-sm font-semibold text-stone-200">
                    {VISITOR_INFO.openingHours}
                  </p>
                  <p className="text-xs text-stone-400">Audio Guide Services active until 6:00 PM</p>
                </div>

                <div className="bg-stone-950/80 p-4 rounded-2xl border border-stone-800 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold">
                    <MapPin className="w-4 h-4" />
                    <span>KIOSK PEDESTAL LOCATION</span>
                  </div>
                  <p className="text-sm font-semibold text-stone-200">
                    Central Rotunda • North Wing
                  </p>
                  <p className="text-xs text-stone-400">Terminal Code: {VISITOR_INFO.kioskId}</p>
                </div>
              </div>

              {/* Gallery Zones */}
              <div className="space-y-3">
                <h4 className="text-xs uppercase font-mono font-bold text-amber-400 tracking-wider">
                  Gallery Wings & Collections
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {VISITOR_INFO.galleryZones.map((z, idx) => (
                    <div key={idx} className="bg-stone-950/70 p-3.5 rounded-xl border border-stone-800 flex items-center justify-between">
                      <div>
                        <span className="text-xs font-mono font-bold text-amber-500">{z.zone}</span>
                        <h5 className="text-xs sm:text-sm font-medium text-stone-200">{z.name}</h5>
                      </div>
                      <span className="text-[11px] font-mono text-stone-400 bg-stone-900 px-2 py-1 rounded">
                        {z.items}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Museum Visitor Guidelines */}
              <div className="space-y-3 bg-stone-950/80 p-5 rounded-2xl border border-stone-800">
                <h4 className="text-xs uppercase font-mono font-bold text-amber-400 tracking-wider flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-500" />
                  <span>Visitor Etiquette & Heritage Preservation</span>
                </h4>
                <ul className="space-y-2 text-xs text-stone-300">
                  {VISITOR_INFO.museumRules.map((rule, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          ) : (
            /* Mobile Handoff Tab */
            <div className="text-center space-y-6 py-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center mx-auto">
                <Smartphone className="w-7 h-7" />
              </div>

              <div>
                <h3 className="text-2xl font-bold font-serif text-stone-100">
                  Take the Audio Tour on Your Phone
                </h3>
                <p className="text-sm text-stone-300 max-w-md mx-auto mt-2 leading-relaxed">
                  {t.scanDescription}
                </p>
              </div>

              {/* Simulated Crisp QR Code Box */}
              <div className="inline-block p-5 bg-stone-950 rounded-3xl border-2 border-amber-500/40 shadow-2xl">
                <div className="w-48 h-48 bg-white p-3 rounded-2xl flex flex-col items-center justify-center">
                  <QrCode className="w-full h-full text-stone-950" />
                </div>
                <div className="text-[11px] font-mono text-amber-400 mt-3 font-semibold">
                  SCAN WITH ANY CAMERA APP
                </div>
              </div>

              <div className="max-w-md mx-auto bg-stone-950/80 p-4 rounded-2xl border border-stone-800 text-xs text-stone-300 space-y-2">
                <div className="font-semibold text-amber-300">Direct Mobile URL:</div>
                <div className="font-mono text-stone-400 bg-stone-900 p-2 rounded-lg break-all select-all">
                  https://heritage-museum-kiosk.internal/tour?kiosk=4&lang={language}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-stone-950 border-t border-stone-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs cursor-pointer"
          >
            {t.close}
          </button>
        </div>

      </div>
    </div>
  );
};
