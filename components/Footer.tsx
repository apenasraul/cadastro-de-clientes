import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-auto border-t border-solid border-slate-200 bg-white py-6 text-center text-slate-500 text-sm">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <div className="flex items-center gap-2 text-left">
          <span className="material-symbols-outlined text-xl text-green-600">
            verified_user
          </span>
          <div>
            <p className="font-semibold text-slate-700">Ambiente Seguro</p>
            <p>Certificado de segurança SSL.</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-1 md:items-end">
          <p>Imóveis Prime - CNPJ: 12.345.678/0001-90</p>
          <div className="flex gap-2">
            <a className="hover:text-primary transition-colors" href="#">
              Política de Privacidade
            </a>
            <span>•</span>
            <a className="hover:text-primary transition-colors" href="#">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
