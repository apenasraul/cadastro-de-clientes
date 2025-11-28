import React from 'react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  label: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps, label }) => {
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="flex flex-col gap-3 pb-6">
      <div className="flex justify-between gap-6">
        <p className="text-slate-900 text-base font-medium leading-normal">
          Passo {currentStep} de {totalSteps}
        </p>
      </div>
      <div className="h-2 w-full rounded bg-slate-200 overflow-hidden">
        <div
          className="h-full bg-primary transition-all duration-500 ease-out"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      <p className="text-slate-500 text-sm font-normal leading-normal">{label}</p>
    </div>
  );
};
