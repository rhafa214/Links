import React from 'react';
import { LinkItem } from '../config/linkConfig';
import { RenderIcon, ArrowUpRightIcon } from './PlatformIcons';

interface LinkButtonProps {
  link: LinkItem;
}

export function LinkButton({ link }: LinkButtonProps) {
  const isFeatured = link.featured;

  return (
    <a
      id={`link-button-${link.id}`}
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={link.label}
      className={`group relative flex items-center justify-between w-full px-4 py-3.5 sm:py-4 rounded-xl transition-all duration-200 ease-out select-none active:scale-[0.985] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9BB72] focus-visible:ring-offset-2 focus-visible:ring-offset-[#070707] min-h-[54px] ${
        isFeatured
          ? 'bg-gradient-to-r from-[#18150E] via-[#121212] to-[#18150E] border border-[#C9A85C]/75 hover:border-[#D9BB72] hover:bg-[#1C1A14] shadow-[0_4px_22px_rgba(201,168,92,0.14)] hover:shadow-[0_6px_28px_rgba(201,168,92,0.22)]'
          : 'bg-[#121212]/95 border border-[#8F7540]/30 hover:border-[#C9A85C]/70 hover:bg-[#1A1A1A] shadow-[0_4px_16px_rgba(0,0,0,0.6)]'
      }`}
    >
      {/* Icon Frame */}
      <div
        className={`flex items-center justify-center w-10 h-10 rounded-lg transition-colors duration-200 shrink-0 ${
          isFeatured
            ? 'bg-[#241F14]/90 text-[#D9BB72] group-hover:text-[#F2EEE5] group-focus:text-[#F2EEE5]'
            : 'bg-[#0B0B0B] text-[#C9A85C] group-hover:text-[#D9BB72] group-focus:text-[#D9BB72]'
        }`}
      >
        <RenderIcon iconType={link.icon} className="w-5 h-5 transition-colors duration-200" />
      </div>

      {/* Label Text */}
      <span className="flex-1 text-center font-medium text-sm sm:text-base text-[#F2EEE5] px-3 tracking-wide transition-colors duration-200 group-hover:text-[#D9BB72] group-focus:text-[#D9BB72]">
        {link.label}
      </span>

      {/* Trailing External Indicator */}
      <div
        className={`flex items-center justify-center w-8 h-8 rounded-md transition-colors duration-200 shrink-0 ${
          isFeatured
            ? 'text-[#C9A85C] group-hover:text-[#D9BB72]'
            : 'text-[#8F7540]/80 group-hover:text-[#D9BB72]'
        }`}
        aria-hidden="true"
      >
        <ArrowUpRightIcon className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </a>
  );
}
