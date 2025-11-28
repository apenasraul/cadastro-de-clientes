import React from 'react';
import { StepProps } from '../types';
import { maskPhone } from '../utils';

export const Step1Personal: React.FC<StepProps> = ({ data, updateData, onNext, errors, broker }) => {
  const handleChange = (field: string, value: string) => {
    updateData({ [field]: value });
  };

  return (
    <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Corretor Section */}
      {broker && (
        <div className="flex flex-col gap-4 items-center mb-4">
          <h3 className="text-sm uppercase tracking-wide font-bold text-primary">Corretor Responsável</h3>
          <div className="w-full rounded-xl border border-slate-200 bg-white p-4 flex items-center gap-4 shadow-sm">
            <img
              alt={`Foto de ${broker.name}`}
              className="h-14 w-14 rounded-full object-cover ring-2 ring-slate-100"
              src={broker.photo}
            />
            <div className="flex flex-col">
              <p className="text-lg font-bold text-slate-900">{broker.name}</p>
              <p className="text-sm text-slate-500">{broker.creci}</p>
            </div>
          </div>
        </div>
      )}

      <div className="text-center md:text-left mb-2">
        <h1 className="text-slate-900 text-3xl font-black leading-tight tracking-tight mb-2">
          Dados Pessoais e Contato
        </h1>
        <p className="text-slate-500 text-base">
          Preencha seus dados para iniciar o processo de compra do seu imóvel.
        </p>
      </div>

      <div className="flex flex-col gap-5 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <label className="flex flex-col w-full">
          <span className="text-slate-900 font-medium mb-2">Nome Completo</span>
          <input
            className={`form-input w-full rounded-lg border-slate-300 focus:border-primary focus:ring-primary h-12 px-4 ${errors?.nomeCompleto ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
            placeholder="Digite seu nome completo"
            value={data.nomeCompleto}
            onChange={(e) => handleChange('nomeCompleto', e.target.value)}
          />
          {errors?.nomeCompleto && <span className="text-red-500 text-xs mt-1">{errors.nomeCompleto}</span>}
        </label>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <label className="flex flex-col w-full">
            <span className="text-slate-900 font-medium mb-2">Telefone 1</span>
            <input
              className={`form-input w-full rounded-lg border-slate-300 focus:border-primary focus:ring-primary h-12 px-4 ${errors?.telefone1 ? 'border-red-500' : ''}`}
              placeholder="(XX) XXXXX-XXXX"
              type="tel"
              maxLength={15}
              value={data.telefone1}
              onChange={(e) => handleChange('telefone1', maskPhone(e.target.value))}
            />
             {errors?.telefone1 && <span className="text-red-500 text-xs mt-1">{errors.telefone1}</span>}
          </label>
          <label className="flex flex-col w-full">
            <div className="flex justify-between mb-2">
              <span className="text-slate-900 font-medium">Telefone 2</span>
              <span className="text-slate-400 text-xs uppercase tracking-wider font-semibold">Opcional</span>
            </div>
            <input
              className="form-input w-full rounded-lg border-slate-300 focus:border-primary focus:ring-primary h-12 px-4"
              placeholder="(XX) XXXXX-XXXX"
              type="tel"
              maxLength={15}
              value={data.telefone2}
              onChange={(e) => handleChange('telefone2', maskPhone(e.target.value))}
            />
          </label>
        </div>

        <label className="flex flex-col w-full">
          <span className="text-slate-900 font-medium mb-2">Email</span>
          <input
            className={`form-input w-full rounded-lg border-slate-300 focus:border-primary focus:ring-primary h-12 px-4 ${errors?.email ? 'border-red-500' : ''}`}
            placeholder="seuemail@exemplo.com"
            type="email"
            value={data.email}
            onChange={(e) => handleChange('email', e.target.value)}
          />
           {errors?.email && <span className="text-red-500 text-xs mt-1">{errors.email}</span>}
        </label>
      </div>

      <div className="pt-4">
        <button
          onClick={onNext}
          className="w-full sm:w-auto ml-auto flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-bold text-white transition-all hover:bg-primary-dark shadow-lg shadow-primary/20"
        >
          Avançar <span className="material-symbols-outlined text-sm font-bold">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};
