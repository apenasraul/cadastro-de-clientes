import React, { useState } from 'react';
import { StepProps } from '../types';
import { maskCEP } from '../utils';
import { fetchAddressByCep } from '../services/cepService';

export const Step2Address: React.FC<StepProps> = ({ data, updateData, onNext, onPrev, errors }) => {
  const [loadingCep, setLoadingCep] = useState(false);

  const handleCepChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    const maskedValue = maskCEP(rawValue);
    updateData({ cep: maskedValue });

    if (maskedValue.length === 9) { // 00000-000
      setLoadingCep(true);
      const address = await fetchAddressByCep(maskedValue);
      setLoadingCep(false);
      
      if (address) {
        updateData({
          logradouro: address.logradouro,
          bairro: address.bairro,
          cidade: address.localidade,
          uf: address.uf,
          complemento: address.complemento,
        });
        // Focus number input automatically
        document.getElementById('numeroInput')?.focus();
      }
    }
  };

  const name = data.nomeCompleto.split(' ')[0] || 'Cliente';

  return (
    <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-2">
        <h1 className="text-slate-900 text-3xl font-black leading-tight tracking-tight mb-2">
          Olá, {name}!
        </h1>
        <p className="text-slate-500 text-lg font-medium">
          Agora, precisamos do seu endereço de residência atual.
        </p>
      </div>

      <div className="flex flex-col gap-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <label className="flex flex-col">
              <span className="text-slate-900 font-medium mb-2">CEP</span>
              <div className="relative">
                <input
                  className={`form-input w-full rounded-lg border-slate-300 focus:border-primary focus:ring-primary h-14 px-4 ${errors?.cep ? 'border-red-500' : ''}`}
                  placeholder="00000-000"
                  maxLength={9}
                  value={data.cep}
                  onChange={handleCepChange}
                />
                 {loadingCep && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2">
                        <span className="material-symbols-outlined animate-spin text-primary">progress_activity</span>
                    </div>
                 )}
              </div>
               {errors?.cep && <span className="text-red-500 text-xs mt-1">{errors.cep}</span>}
            </label>
          </div>
          <div className="md:col-span-2">
            <label className="flex flex-col">
              <span className="text-slate-900 font-medium mb-2">Logradouro</span>
              <input
                className="form-input w-full rounded-lg border-slate-300 bg-slate-50 text-slate-600 h-14 px-4 cursor-not-allowed"
                placeholder="Preenchimento automático"
                readOnly
                value={data.logradouro}
              />
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <label className="flex flex-col">
              <span className="text-slate-900 font-medium mb-2">Número</span>
              <input
                id="numeroInput"
                className={`form-input w-full rounded-lg border-slate-300 focus:border-primary focus:ring-primary h-14 px-4 ${errors?.numero ? 'border-red-500' : ''}`}
                placeholder="123"
                value={data.numero}
                onChange={(e) => updateData({ numero: e.target.value })}
              />
              {errors?.numero && <span className="text-red-500 text-xs mt-1">{errors.numero}</span>}
            </label>
          </div>
          <div className="md:col-span-2">
            <label className="flex flex-col">
              <span className="text-slate-900 font-medium mb-2">Complemento</span>
              <input
                className="form-input w-full rounded-lg border-slate-300 focus:border-primary focus:ring-primary h-14 px-4"
                placeholder="Apto 4, Bloco C"
                value={data.complemento}
                onChange={(e) => updateData({ complemento: e.target.value })}
              />
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label className="flex flex-col">
            <span className="text-slate-900 font-medium mb-2">Bairro</span>
            <input
              className="form-input w-full rounded-lg border-slate-300 bg-slate-50 text-slate-600 h-14 px-4 cursor-not-allowed"
              placeholder="Preenchimento automático"
              readOnly
              value={data.bairro}
            />
          </label>
           <label className="flex flex-col">
            <span className="text-slate-900 font-medium mb-2">Cidade / Estado</span>
            <input
              className="form-input w-full rounded-lg border-slate-300 bg-slate-50 text-slate-600 h-14 px-4 cursor-not-allowed"
              placeholder="Preenchimento automático"
              readOnly
              value={data.cidade && data.uf ? `${data.cidade} / ${data.uf}` : ''}
            />
          </label>
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-between pt-4 gap-4">
        <button
          onClick={onPrev}
          className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-8 py-4 text-base font-bold text-slate-700 transition-all hover:bg-slate-50"
        >
          Voltar
        </button>
        <button
          onClick={onNext}
          className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-bold text-white transition-all hover:bg-primary-dark shadow-lg shadow-primary/20"
        >
          Avançar <span className="material-symbols-outlined text-sm font-bold">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};
