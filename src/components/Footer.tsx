import React from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-8 mb-4 pt-6 pb-2 text-center border-t border-[#8F7540]/25 flex flex-col items-center gap-1 select-none">
      <p className="font-oswald text-xs sm:text-sm font-semibold tracking-[0.06em] text-[#D9BB72] uppercase">
        Missão Sedentos
      </p>
      <p className="text-[11px] text-[#F2EEE5]/45">
        © {currentYear} • Todos os direitos reservados
      </p>
    </footer>
  );
}
