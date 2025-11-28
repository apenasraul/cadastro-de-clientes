import React from 'react';
import { StepProps } from '../types';
import { maskCPF, maskCurrency, maskDate } from '../utils';

export const Step3Financial: React.FC<StepProps> = ({ data, updateData, onNext, onPrev, errors }) => {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-2">
        <h1 className="text-slate-900 text-3xl font-black leading-tight tracking-tight mb-2">
          Estamos quase terminando...
        </h1>
        <p className="text-slate-500 text-lg font-medium">
          Preencha seus dados documentais e de renda.
        </p>
      </div>

      <div className="flex flex-col gap-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm divide-y divide-slate-100">
        
        {/* Personal Section */}
        <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">person</span>
                Informações Pessoais
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <label className="flex flex-col w-full">
                <span className="text-slate-900 font-medium mb-2">CPF</span>
                <input
                className={`form-input w-full rounded-lg border-slate-300 focus:border-primary focus:ring-primary h-14 px-4 ${errors?.cpf ? 'border-red-500' : ''}`}
                placeholder="000.000.000-00"
                maxLength={14}
                value={data.cpf}
                onChange={(e) => updateData({ cpf: maskCPF(e.target.value) })}
                />
                 {errors?.cpf && <span className="text-red-500 text-xs mt-1">{errors.cpf}</span>}
            </label>
            <label className="flex flex-col w-full">
                <span className="text-slate-900 font-medium mb-2">RG</span>
                <input
                className={`form-input w-full rounded-lg border-slate-300 focus:border-primary focus:ring-primary h-14 px-4 ${errors?.rg ? 'border-red-500' : ''}`}
                placeholder="00.000.000-0"
                maxLength={15}
                value={data.rg}
                onChange={(e) => updateData({ rg: e.target.value })}
                />
                 {errors?.rg && <span className="text-red-500 text-xs mt-1">{errors.rg}</span>}
            </label>
            <label className="flex flex-col w-full">
                <span className="text-slate-900 font-medium mb-2">Data de Nascimento</span>
                <input
                className={`form-input w-full rounded-lg border-slate-300 focus:border-primary focus:ring-primary h-14 px-4 ${errors?.dataNascimento ? 'border-red-500' : ''}`}
                placeholder="DD/MM/AAAA"
                maxLength={10}
                value={data.dataNascimento}
                onChange={(e) => updateData({ dataNascimento: maskDate(e.target.value) })}
                />
                 {errors?.dataNascimento && <span className="text-red-500 text-xs mt-1">{errors.dataNascimento}</span>}
            </label>
            <label className="flex flex-col w-full">
                <span className="text-slate-900 font-medium mb-2">Estado Civil</span>
                <select 
                    className="form-select w-full rounded-lg border-slate-300 focus:border-primary focus:ring-primary h-14 px-4"
                    value={data.estadoCivil}
                    onChange={(e) => updateData({ estadoCivil: e.target.value })}
                >
                    <option value="">Selecione</option>
                    <option value="solteiro">Solteiro(a)</option>
                    <option value="casado">Casado(a)</option>
                    <option value="divorciado">Divorciado(a)</option>
                    <option value="viuvo">Viúvo(a)</option>
                </select>
            </label>
            </div>
        </div>

        {/* Professional Section */}
        <div className="flex flex-col gap-4 pt-6">
             <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">work</span>
                Informações Profissionais
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <label className="flex flex-col w-full">
                <span className="text-slate-900 font-medium mb-2">Nome da empresa</span>
                <input
                className="form-input w-full rounded-lg border-slate-300 focus:border-primary focus:ring-primary h-14 px-4"
                placeholder="Onde você trabalha?"
                value={data.empresa}
                onChange={(e) => updateData({ empresa: e.target.value })}
                />
            </label>
            <label className="flex flex-col w-full">
                <span className="text-slate-900 font-medium mb-2">Renda Mensal Bruta</span>
                <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                        <span className="text-slate-500 font-semibold">R$</span>
                    </div>
                    <input
                    className={`form-input w-full rounded-lg border-slate-300 focus:border-primary focus:ring-primary h-14 pl-12 pr-4 ${errors?.renda ? 'border-red-500' : ''}`}
                    placeholder="0,00"
                    value={data.renda}
                    onChange={(e) => updateData({ renda: maskCurrency(e.target.value) })}
                    />
                </div>
                 {errors?.renda && <span className="text-red-500 text-xs mt-1">{errors.renda}</span>}
            </label>
            </div>
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
