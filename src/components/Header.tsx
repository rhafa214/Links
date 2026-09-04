import React, { useState, useEffect } from 'react';
import { ProfileConfig } from '../config/linkConfig';
import { InstagramIcon } from './PlatformIcons';

interface HeaderProps {
  profile: ProfileConfig;
}

export function Header({ profile }: HeaderProps) {
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setImageError(false);
  }, [profile.logo]);

  return (
    <header className="flex flex-col items-center text-center pt-2 pb-6 px-2">
      {/* Official Logo Container */}
      <div className="relative mb-4 flex items-center justify-center">
        {/* Soft diffuse gold glow behind the logo */}
        <div 
          className="absolute inset-0 rounded-full bg-[#C9A85C]/15 blur-2xl scale-125 pointer-events-none" 
          aria-hidden="true" 
        />

        {!imageError ? (
          <img
            src={profile.logo}
            alt="Logo da Missão Sedentos"
            decoding="async"
            onError={() => setImageError(true)}
            className="relative z-10 w-[120px] sm:w-[140px] max-w-[150px] h-auto object-contain transition-transform duration-300 hover:scale-105"
          />
        ) : (
          /* Fallback textual exibido somente em eventual falha real de carregamento */
          <div
            className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-[#141414] border border-[#C9A85C]/50 flex flex-col items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.7)] transition-transform duration-300 hover:scale-105 select-none"
            aria-label={profile.name}
          >
            <span className="font-oswald text-2xl font-semibold tracking-[0.06em] text-[#D9BB72]">
              MS
            </span>
            <span className="text-[9px] uppercase tracking-widest text-[#C9A85C] mt-0.5 font-semibold">
              Missão
            </span>
          </div>
        )}
      </div>

      {/* Official Name in Gold using Oswald font */}
      <h1 className="font-oswald text-2xl sm:text-3xl font-semibold tracking-[0.06em] text-[#D9BB72] mb-2 leading-tight uppercase">
        {profile.name}
      </h1>

      {/* Official Slogan in Warm Off-White / Soft Gold */}
      <p className="text-xs sm:text-sm font-semibold tracking-wider text-[#F2EEE5]/90 uppercase max-w-xs sm:max-w-sm mb-3.5 leading-relaxed">
        {profile.tagline}
      </p>

      {/* Discreet Instagram Link in Muted Gold */}
      {profile.instagram && (
        <a
          id="header-instagram-link"
          href={profile.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram oficial da Missão Sedentos (@missaosedentos_)"
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-[#C9A85C] bg-[#141414]/90 border border-[#8F7540]/40 hover:text-[#D9BB72] hover:border-[#C9A85C]/70 hover:bg-[#1A1A1A] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A85C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#070707]"
        >
          <InstagramIcon className="w-3.5 h-3.5 text-[#C9A85C] group-hover:text-[#D9BB72] transition-colors duration-200" />
          <span className="tracking-wide">@missaosedentos_</span>
        </a>
      )}
    </header>
  );
}
