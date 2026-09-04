import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export function WebsiteIcon({ className = "w-5 h-5", size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}

export function SpotifyIcon({ className = "w-5 h-5", size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.477 2 12c0 5.524 4.477 10 10 10s10-4.476 10-10c0-5.523-4.477-10-10-10zm4.586 14.424a.623.623 0 0 1-.858.207c-2.35-1.436-5.308-1.76-8.793-.964a.625.625 0 0 1-.28-1.218c3.811-.872 7.085-.5 9.724 1.117.294.18.388.565.207.858zm1.226-2.724a.78.78 0 0 1-1.074.257c-2.69-1.654-6.79-2.133-9.972-1.167a.78.78 0 0 1-.469-1.488c3.633-1.103 8.163-.568 11.258 1.324.364.225.48.7.257 1.074zm.106-2.835C14.692 8.94 9.38 8.766 6.307 9.7a.936.936 0 0 1-.555-1.79c3.535-1.073 9.404-.87 13.12 1.336.332.197.44.629.243.96a.937.937 0 0 1-.967.244z" />
    </svg>
  );
}

export function YouTubeIcon({ className = "w-5 h-5", size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export function AppleMusicIcon({ className = "w-5 h-5", size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm3.896 5.378l-4.5 1.054a.75.75 0 0 0-.583.732v6.621a2.25 2.25 0 1 1-1.5-2.122V8.52a1.5 1.5 0 0 1 1.163-1.464l4.5-1.054a.75.75 0 0 1 .924.732v5.051a2.25 2.25 0 1 1-1.5-2.122V7.5a.75.75 0 0 0-.504-.122z" />
    </svg>
  );
}

export function MusicNoteIcon({ className = "w-5 h-5", size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  );
}

export function ShirtIcon({ className = "w-5 h-5", size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
    </svg>
  );
}

export function InstagramIcon({ className = "w-4 h-4", size = 16 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function ArrowUpRightIcon({ className = "w-4 h-4", size = 16 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

export function RenderIcon({ iconType, className }: { iconType: string; className?: string }) {
  switch (iconType) {
    case 'website':
      return <WebsiteIcon className={className} />;
    case 'spotify':
      return <SpotifyIcon className={className} />;
    case 'youtube':
      return <YouTubeIcon className={className} />;
    case 'apple-music':
      return <AppleMusicIcon className={className} />;
    case 'music':
      return <MusicNoteIcon className={className} />;
    case 'shirt':
      return <ShirtIcon className={className} />;
    default:
      return <WebsiteIcon className={className} />;
  }
}
