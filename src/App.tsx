import React, { useMemo } from 'react';
import { linkConfig } from './config/linkConfig';
import { Header } from './components/Header';
import { LinkButton } from './components/LinkButton';
import { Footer } from './components/Footer';

export default function App() {
  // Only display links that are explicitly enabled AND have a valid, non-empty URL
  const activeLinks = useMemo(() => {
    return linkConfig.links.filter(
      (link) =>
        link.enabled === true &&
        typeof link.url === 'string' &&
        link.url.trim().length > 0 &&
        link.url.trim() !== '#'
    );
  }, []);

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
