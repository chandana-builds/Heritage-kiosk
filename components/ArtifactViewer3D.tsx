'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { 
  RotateCw, 
  ZoomIn, 
  ZoomOut, 
  Maximize2, 
  Eye, 
  Info, 
  Layers, 
  Compass
} from 'lucide-react';
import { Exhibit, Hotspot } from '../data/heritageData';

interface ArtifactViewer3DProps {
  exhibit: Exhibit;
  onClose?: () => void;
}

export const ArtifactViewer3D: React.FC<ArtifactViewer3DProps> = ({ exhibit, onClose }) => {
  const [rotX, setRotX] = useState<number>(12);
  const [rotY, setRotY] = useState<number>(25);
  const [zoom, setZoom] = useState<number>(1);
  const [isAutoRotate, setIsAutoRotate] = useState<boolean>(true);
  const [isWireframe, setIsWireframe] = useState<boolean>(false);
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(
    exhibit.artifact3D.hotspots[0] || null
  );

  const isDraggingRef = useRef<boolean>(false);
  const startPosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // Auto-rotation effect
  useEffect(() => {
    if (!isAutoRotate) return;
    const interval = setInterval(() => {
      setRotY((prev) => (prev + 0.6) % 360);
    }, 30);
    return () => clearInterval(interval);
  }, [isAutoRotate]);

  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    startPosRef.current = { x: e.clientX, y: e.clientY };
    setIsAutoRotate(false);
  };

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    const deltaX = e.clientX - startPosRef.current.x;
    const deltaY = e.clientY - startPosRef.current.y;

    setRotY((prev) => (prev + deltaX * 0.5) % 360);
    setRotX((prev) => Math.max(-60, Math.min(60, prev - deltaY * 0.5)));

    startPosRef.current = { x: e.clientX, y: e.clientY };
  }, []);

  const handlePointerUp = () => {
    isDraggingRef.current = false;
  };

  const resetView = () => {
    setRotX(12);
    setRotY(25);
    setZoom(1);
    setIsAutoRotate(true);
  };

  return (
    <div className="flex flex-col h-full bg-stone-950 rounded-2xl overflow-hidden border border-amber-500/30">
      
      {/* 3D Viewport Controls Top Bar */}
      <div className="flex items-center justify-between p-3.5 bg-stone-900/90 border-b border-stone-800 z-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
            <Compass className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-stone-100 flex items-center gap-2">
              <span>3D Artifact Inspection</span>
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">
                360° Rotatable
              </span>
            </h4>
            <p className="text-xs text-stone-400">Drag or swipe on object to inspect angles</p>
          </div>
        </div>

        {/* Viewport Action Buttons */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setIsAutoRotate(!isAutoRotate)}
            className={`px-2.5 py-1.5 rounded-lg border text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer ${
              isAutoRotate 
                ? 'bg-amber-600/30 text-amber-300 border-amber-500/40' 
                : 'bg-stone-800 text-stone-300 border-stone-700 hover:text-white'
            }`}
            title="Toggle Auto Rotation"
          >
            <RotateCw className={`w-3.5 h-3.5 ${isAutoRotate ? 'animate-spin-slow' : ''}`} />
            <span className="hidden sm:inline">Auto-Spin</span>
          </button>

          <button
            onClick={() => setIsWireframe(!isWireframe)}
            className={`px-2.5 py-1.5 rounded-lg border text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer ${
              isWireframe 
                ? 'bg-amber-600/30 text-amber-300 border-amber-500/40' 
                : 'bg-stone-800 text-stone-300 border-stone-700 hover:text-white'
            }`}
            title="Toggle Wireframe Mesh"
          >
            <Layers className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Mesh</span>
          </button>

          <div className="flex items-center bg-stone-800 rounded-lg p-0.5 border border-stone-700">
            <button
              onClick={() => setZoom((z) => Math.min(2.0, z + 0.15))}
              className="p-1.5 text-stone-300 hover:text-white cursor-pointer"
              title="Zoom In"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setZoom((z) => Math.max(0.65, z - 0.15))}
              className="p-1.5 text-stone-300 hover:text-white cursor-pointer"
              title="Zoom Out"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
          </div>

          <button
            onClick={resetView}
            className="p-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 border border-stone-700 transition cursor-pointer"
            title="Reset Perspective"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>

          {onClose && (
            <button
              onClick={onClose}
              className="px-3 py-1.5 rounded-lg bg-red-900/30 hover:bg-red-900/50 text-red-300 border border-red-800/40 text-xs font-semibold cursor-pointer"
            >
              Close
            </button>
          )}
        </div>
      </div>

      {/* Main Interactive 3D Canvas Area */}
      <div 
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        className="relative flex-1 min-h-[380px] sm:min-h-[440px] flex items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing select-none bg-[radial-gradient(ellipse_at_center,#1c1917_0%,#0c0a09_100%)]"
      >
        {/* Background Coordinate Grid for 3D illusion */}
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[linear-gradient(to_right,#78716c_1px,transparent_1px),linear-gradient(to_bottom,#78716c_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* 3D Transformed Entity */}
        <div 
          className="relative transition-transform duration-75 ease-out transform-style-3d"
          style={{
            transform: `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(${zoom})`,
          }}
        >
          {/* Main Visual Core with Material Shading */}
          <div 
            className={`w-64 h-64 sm:w-80 sm:h-80 rounded-3xl relative flex items-center justify-center p-3 shadow-2xl transition-all duration-300 ${
              isWireframe 
                ? 'border-2 border-dashed border-amber-400 bg-transparent' 
                : 'border-2 border-amber-500/40 bg-gradient-to-br from-stone-800/90 via-stone-900 to-black'
            }`}
            style={{
              boxShadow: isWireframe 
                ? '0 0 30px rgba(245, 158, 11, 0.2)' 
                : '0 25px 60px -15px rgba(0,0,0,0.8), 0 0 40px rgba(217, 119, 6, 0.25)',
            }}
          >
            {/* Artifact Visual Presentation with Depth */}
            <div className="w-full h-full rounded-2xl overflow-hidden relative group">
              <img
                src={exhibit.imageUrl}
                alt={exhibit.title}
                className={`w-full h-full object-cover transition-all duration-500 ${
                  isWireframe ? 'opacity-20 filter invert' : 'opacity-90 group-hover:scale-105'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/40" />

              {/* Holographic Wireframe Overlays */}
              {isWireframe && (
                <div className="absolute inset-0 flex flex-col justify-around pointer-events-none">
                  <div className="w-full border-t border-amber-400/50" />
                  <div className="w-full border-t border-amber-400/50" />
                  <div className="w-full border-t border-amber-400/50" />
                  <div className="h-full border-l border-amber-400/50 absolute inset-0 mx-auto" />
                </div>
              )}
            </div>

            {/* Interactive Discovery Hotspots */}
            {exhibit.artifact3D.hotspots.map((hotspot) => {
              const isSelected = activeHotspot?.id === hotspot.id;
              return (
                <button
                  key={hotspot.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveHotspot(hotspot);
                  }}
                  style={{ top: `${hotspot.y}%`, left: `${hotspot.x}%` }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center z-30 transition-transform cursor-pointer shadow-lg ${
                    isSelected
                      ? 'bg-amber-500 text-stone-950 scale-125 ring-4 ring-amber-400/50'
                      : 'bg-stone-900/90 text-amber-400 border border-amber-500/60 hover:scale-110'
                  }`}
                  title={hotspot.title}
                >
                  <Eye className="w-4 h-4" />
                </button>
              );
            })}
          </div>

          {/* Pedestal Reflection Plane */}
          <div 
            className="w-72 sm:w-96 h-20 mx-auto -mt-6 rounded-full bg-gradient-to-b from-amber-500/10 to-transparent blur-md -z-10"
            style={{ transform: 'rotateX(80deg)' }}
          />
        </div>

        {/* Hotspot Floating Detail Inspector Card */}
        {activeHotspot && (
          <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md bg-stone-900/95 backdrop-blur-md rounded-xl p-4 border border-amber-500/40 shadow-2xl z-30 animate-fade-in">
            <div className="flex items-start justify-between gap-2 mb-1.5">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-ping" />
                <h5 className="text-sm font-bold text-amber-300 font-serif">
                  {activeHotspot.title}
                </h5>
              </div>
              <span className="text-[10px] text-stone-400 font-mono bg-stone-800 px-2 py-0.5 rounded">
                Hotspot Discovery
              </span>
            </div>
            <p className="text-xs sm:text-sm text-stone-200 leading-relaxed">
              {activeHotspot.description}
            </p>
          </div>
        )}

        {/* Drag Hint Indicator */}
        <div className="absolute top-4 right-4 hidden sm:flex items-center gap-2 bg-stone-900/80 px-3 py-1.5 rounded-full border border-stone-800 text-[11px] font-mono text-stone-400 pointer-events-none">
          <Info className="w-3.5 h-3.5 text-amber-400" />
          <span>Click & Drag to Rotate (X: {Math.round(rotX)}°, Y: {Math.round(rotY)}°)</span>
        </div>
      </div>

    </div>
  );
};
