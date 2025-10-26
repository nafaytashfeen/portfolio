'use client';

import { useEffect, useState } from 'react';

export default function MouseTrail() {
  const [trails, setTrails] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    let trailId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const newTrail = {
        x: e.clientX,
        y: e.clientY,
        id: trailId++
      };

      setTrails(prev => [...prev, newTrail]);

      // Remove trail after animation completes
      setTimeout(() => {
        setTrails(prev => prev.filter(trail => trail.id !== newTrail.id));
      }, 1200);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {trails.map(trail => (
        <div
          key={trail.id}
          className="absolute w-24 h-24 rounded-full bg-gradient-to-r from-purple-500/15 to-cyan-500/15 blur-2xl animate-fade-out"
          style={{
            left: trail.x - 48,
            top: trail.y - 48,
          }}
        />
      ))}
    </div>
  );
}