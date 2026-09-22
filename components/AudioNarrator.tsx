'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Volume2, VolumeX, Sparkles, FileText } from 'lucide-react';

interface AudioNarratorProps {
  title: string;
  transcript: string;
  durationLabel: string;
  language?: string;
}

export const AudioNarrator: React.FC<AudioNarratorProps> = ({
  title,
  transcript,
  durationLabel,
  language = 'en'
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0); // 0 - 100
  const [isMuted, setIsMuted] = useState(false);
  const [playbackRate, setPlaybackRate] = useState<number>(1);
  const [showTranscript, setShowTranscript] = useState(true);

  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize SpeechSynthesis
  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const stopAudio = () => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    if (timerRef.current) clearInterval(timerRef.current);
    setIsPlaying(false);
    setProgress(0);
  };

  const togglePlay = () => {
    if (typeof window === 'undefined') return;

    if (isPlaying) {
      if (window.speechSynthesis) {
        window.speechSynthesis.pause();
      }
      if (timerRef.current) clearInterval(timerRef.current);
      setIsPlaying(false);
    } else {
      if (window.speechSynthesis.paused && utteranceRef.current) {
        window.speechSynthesis.resume();
        setIsPlaying(true);
      } else {
        // Start fresh speech synthesis
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(transcript);
        utterance.rate = playbackRate;
        utterance.volume = isMuted ? 0 : 1;
        
        // Match language if possible
        if (language === 'hi') utterance.lang = 'hi-IN';
        else if (language === 'es') utterance.lang = 'es-ES';
        else if (language === 'fr') utterance.lang = 'fr-FR';
        else utterance.lang = 'en-US';

        utterance.onend = () => {
          setIsPlaying(false);
          setProgress(100);
          if (timerRef.current) clearInterval(timerRef.current);
        };

        utterance.onerror = () => {
          setIsPlaying(false);
          if (timerRef.current) clearInterval(timerRef.current);
        };

        utteranceRef.current = utterance;
        window.speechSynthesis.speak(utterance);
        setIsPlaying(true);
      }

      // Simulated smooth progress updates for responsive visual feedback
      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 99) {
            return 99;
          }
          return prev + 1;
        });
      }, 1000);
    }
  };

  const handleRateChange = () => {
    const rates = [1, 1.25, 1.5, 0.85];
    const nextIndex = (rates.indexOf(playbackRate) + 1) % rates.length;
    const nextRate = rates[nextIndex];
    setPlaybackRate(nextRate);
    if (isPlaying) {
      stopAudio();
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (utteranceRef.current) {
      utteranceRef.current.volume = !isMuted ? 0 : 1;
    }
  };

  return (
    <div className="w-full bg-stone-900/90 rounded-2xl p-4 sm:p-5 border border-amber-500/30 backdrop-blur-md shadow-xl">
      {/* Top Banner */}
      <div className="flex items-center justify-between gap-3 mb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center">
            <Volume2 className={`w-5 h-5 ${isPlaying ? 'animate-bounce' : ''}`} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-bold text-stone-100">Live Audio Narrator</h4>
              <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30">
                {durationLabel}
              </span>
            </div>
            <p className="text-xs text-stone-400">Narration: {title}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Playback speed toggle */}
          <button
            onClick={handleRateChange}
            className="px-2.5 py-1 rounded-lg bg-stone-800 text-amber-300 border border-stone-700 text-xs font-mono font-bold hover:bg-stone-700 transition cursor-pointer"
            title="Audio Playback Speed"
          >
            {playbackRate}x
          </button>

          {/* Mute button */}
          <button
            onClick={toggleMute}
            className="p-2 rounded-lg bg-stone-800 text-stone-300 hover:text-white border border-stone-700 transition cursor-pointer"
            title={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
          </button>

          {/* Toggle transcript view */}
          <button
            onClick={() => setShowTranscript(!showTranscript)}
            className={`p-2 rounded-lg border transition cursor-pointer ${
              showTranscript 
                ? 'bg-amber-600/20 border-amber-500/40 text-amber-300' 
                : 'bg-stone-800 border-stone-700 text-stone-400'
            }`}
            title="Toggle Transcript"
          >
            <FileText className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Progress Track */}
      <div className="w-full bg-stone-950 rounded-full h-2.5 mb-4 overflow-hidden border border-stone-800">
        <div 
          className="h-full bg-gradient-to-r from-amber-600 to-amber-400 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Audio Controls */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={togglePlay}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-sm shadow-lg shadow-amber-900/30 transition cursor-pointer"
          >
            {isPlaying ? (
              <>
                <Pause className="w-4 h-4 fill-stone-950" />
                <span>Pause Guide</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-stone-950" />
                <span>Listen Narration</span>
              </>
            )}
          </button>

          <button
            onClick={stopAudio}
            className="p-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 border border-stone-700 transition cursor-pointer"
            title="Reset Audio Guide"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-amber-400/90 font-mono">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Speech Synthesis Enabled</span>
        </div>
      </div>

      {/* Narration Transcript */}
      {showTranscript && (
        <div className="mt-4 pt-3 border-t border-stone-800">
          <p className="text-xs uppercase tracking-wider text-amber-400/80 font-bold font-mono mb-1.5">
            Narration Transcript:
          </p>
          <div className="p-3 bg-stone-950/70 rounded-xl border border-stone-800/80 text-stone-300 text-xs sm:text-sm leading-relaxed max-h-36 overflow-y-auto">
            {transcript}
          </div>
        </div>
      )}
    </div>
  );
};
