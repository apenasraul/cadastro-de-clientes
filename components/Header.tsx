import React from 'react';
import { Company } from '../types';

interface HeaderProps {
  company?: Company;
}

export const Header: React.FC<HeaderProps> = ({ company }) => {
  return (
    <header className="flex w-full justify-center border-b border-solid border-slate-200 bg-white px-4 py-3 md:px-10">
      <div className="flex w-full max-w-5xl items-center justify-between">
        <div className="flex items-center gap-4 text-slate-900">
          {company ? (
            <>
              <div className="h-10 w-auto">
                <img src={company.logo} alt={company.name} className="h-full object-contain" />
              </div>
              <h2 className="text-xl font-bold leading-tight tracking-[-0.015em]">
                {company.name}
              </h2>
            </>
          ) : (
            <>
              <div className="size-8 text-primary">
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path
                    clipRule="evenodd"
                    d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
              <h2 className="text-xl font-bold leading-tight tracking-[-0.015em]">
                Imóveis Prime
              </h2>
            </>
          )}
        </div>
        <button className="flex min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-4 border border-slate-200 text-slate-900 text-sm font-medium hover:bg-slate-50 transition-colors">
          <span className="material-symbols-outlined text-base">language</span>
          <span className="hidden sm:inline">English (US)</span>
        </button>
      </div>
    </header>
  );
};
