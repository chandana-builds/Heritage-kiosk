'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { KioskHeader } from '../components/KioskHeader';
import { AttractScreen } from '../components/AttractScreen';
import { ExhibitExplorer } from '../components/ExhibitExplorer';
import { ExhibitModal } from '../components/ExhibitModal';
import { EpochTimeline } from '../components/EpochTimeline';
import { HeritageQuiz } from '../components/HeritageQuiz';
import { VisitorGuideModal } from '../components/VisitorGuideModal';
import { AccessibilityBar } from '../components/AccessibilityBar';
import { Exhibit } from '../data/heritageData';

export default function HeritageKioskPage() {
  const [showAttract, setShowAttract] = useState(false);
  const [language, setLanguage] = useState<'en' | 'hi' | 'es' | 'fr'>('en');
  const [highContrast, setHighContrast] = useState(false);
  const [largeFont, setLargeFont] = useState(false);
  
  const [activeTab, setActiveTab] = useState<'exhibits' | 'timeline' | 'quiz'>('exhibits');
  const [selectedExhibit, setSelectedExhibit] = useState<Exhibit | null>(null);
  
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [guideInitialTab, setGuideInitialTab] = useState<'guide' | 'mobile'>('guide');

  // Inactivity timeout for physical museum kiosk (resets to Attract Mode after 120s idle)
  const idleTimerRef = useRef<NodeJS.Timeout | null>(null);

  const resetIdleTimer = useCallback(() => {
    if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    idleTimerRef.current = setTimeout(() => {
      // Auto return to attract screen if idle
      setShowAttract(true);
      setSelectedExhibit(null);
      setIsGuideOpen(false);
    }, 120000); // 2 minutes
  }, []);

  useEffect(() => {
    const handleUserInteraction = () => resetIdleTimer();
    window.addEventListener('pointerdown', handleUserInteraction);
    window.addEventListener('keydown', handleUserInteraction);
    resetIdleTimer();

    return () => {
      window.removeEventListener('pointerdown', handleUserInteraction);
      window.removeEventListener('keydown', handleUserInteraction);
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    };
  }, [resetIdleTimer]);

  const handleOpenMobileQR = () => {
    setGuideInitialTab('mobile');
    setIsGuideOpen(true);
  };

  const handleOpenGuide = () => {
    setGuideInitialTab('guide');
    setIsGuideOpen(true);
  };

  const handleQuickAudio = (exhibit: Exhibit) => {
    setSelectedExhibit(exhibit);
  };

  const handleQuick3D = (exhibit: Exhibit) => {
    setSelectedExhibit(exhibit);
  };

  return (
    <main 
      className={`min-h-screen flex flex-col bg-stone-950 text-stone-100 ${
        highContrast ? 'accessibility-high-contrast' : ''
      } ${largeFont ? 'accessibility-large-font' : ''}`}
    >
      {/* Kiosk Attract Idle Screen Overlay */}
      {showAttract && (
        <AttractScreen 
          onDismiss={() => setShowAttract(false)}
          language={language}
        />
      )}

      {/* Main Kiosk Header */}
      <KioskHeader
        language={language}
        setLanguage={setLanguage}
        highContrast={highContrast}
        setHighContrast={setHighContrast}
        largeFont={largeFont}
        setLargeFont={setLargeFont}
        onOpenGuide={handleOpenGuide}
        onOpenQuiz={() => setActiveTab('quiz')}
        onOpenMobileQR={handleOpenMobileQR}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Dynamic Content Area */}
      <div className="flex-1 pb-20">
        {activeTab === 'exhibits' && (
          <ExhibitExplorer
            onSelectExhibit={(ex) => setSelectedExhibit(ex)}
            onQuickAudio={handleQuickAudio}
            onQuick3D={handleQuick3D}
            language={language}
          />
        )}

        {activeTab === 'timeline' && (
          <EpochTimeline language={language} />
        )}

        {activeTab === 'quiz' && (
          <HeritageQuiz
            language={language}
            onExamineExhibit={(ex) => setSelectedExhibit(ex)}
          />
        )}
      </div>

      {/* Exhibit Detail & Audio/3D Inspector Modal */}
      {selectedExhibit && (
        <ExhibitModal
          exhibit={selectedExhibit}
          onClose={() => setSelectedExhibit(null)}
          language={language}
          onOpenMobileQR={handleOpenMobileQR}
        />
      )}

      {/* Visitor Guide & QR Sync Modal */}
      {isGuideOpen && (
        <VisitorGuideModal
          onClose={() => setIsGuideOpen(false)}
          language={language}
          initialTab={guideInitialTab}
        />
      )}

      {/* Floating Kiosk Accessibility & Session Dock */}
      <AccessibilityBar
        language={language}
        highContrast={highContrast}
        setHighContrast={setHighContrast}
        largeFont={largeFont}
        setLargeFont={setLargeFont}
        onResetToAttract={() => setShowAttract(true)}
      />
    </main>
  );
}
