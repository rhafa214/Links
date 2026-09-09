import React, { useState, useEffect, useMemo } from 'react';
import { linkConfig } from './config/linkConfig';
import { Header } from './components/Header';
import { LinkButton } from './components/LinkButton';
import { Footer } from './components/Footer';

export default function App() {
  const [currentTime, setCurrentTime] = useState(() => Date.now());

  // Schedule auto-appearance at exact visibleFrom timestamps
  useEffect(() => {
    const timers: number[] = [];

    linkConfig.links.forEach((link) => {
      if (link.enabled && link.visibleFrom) {
        const targetTime = new Date(link.visibleFrom).getTime();
        if (!isNaN(targetTime)) {
          const delay = targetTime - Date.now();
          // Schedule only if the target time is in the future
          if (delay > 0 && delay <= 2147483647) {
            const timerId = window.setTimeout(() => {
              setCurrentTime(Date.now());
            }, delay);
            timers.push(timerId);
          }
        }
      }
    });

    return () => {
      timers.forEach((id) => window.clearTimeout(id));
    };
  }, []);

  // Only display links that are explicitly enabled, have a valid URL, and reached visibleFrom time
  const activeLinks = useMemo(() => {
    return linkConfig.links.filter((link) => {
      if (!link.enabled) return false;
      if (
        typeof link.url !== 'string' ||
        link.url.trim().length === 0 ||
        link.url.trim() === '#'
      ) {
        return false;
      }
      if (link.visibleFrom) {
        const targetTime = new Date(link.visibleFrom).getTime();
        if (!isNaN(targetTime) && currentTime < targetTime) {
          return false;
        }
      }
      return true;
    });
  }, [currentTime]);

  return (
    <div className="min-h-screen bg-institutional flex flex-col items-center justify-between px-4 py-8 sm:py-12 relative overflow-x-hidden">
      {/* Subtle institutional golden illumination accent behind content */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-72 bg-gradient-to-b from-[#C9A85C]/8 via-[#1A1A1A]/20 to-transparent pointer-events-none blur-3xl" 
        aria-hidden="true" 
      />

      {/* Main Container constrained between 480px and 600px for desktop & fluid for mobile */}
      <main className="w-full max-w-[520px] flex flex-col items-stretch z-10 flex-1 justify-between">
        <div>
          {/* Header with official logo, title, slogan and Instagram link */}
          <Header profile={linkConfig.profile} />

          {/* Links Section */}
          <nav aria-label="Links oficiais" className="mt-4 flex flex-col gap-3 sm:gap-3.5">
            {activeLinks.map((link) => (
              <LinkButton key={link.id} link={link} />
            ))}
          </nav>
        </div>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}
