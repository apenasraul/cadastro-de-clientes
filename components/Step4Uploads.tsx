import React from 'react';
import { StepProps, FormData } from '../types';

interface FileUploadCardProps {
  label: string;
  subLabel: string;
  fileKey: keyof FormData;
  currentFile: File | null;
  onFileChange: (file: File) => void;
  onRemove: () => void;
}

const FileUploadCard: React.FC<FileUploadCardProps> = ({ label, subLabel, currentFile, onFileChange, onRemove }) => {
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleDivClick = () => {
    if (!currentFile) {
      fileInputRef.current?.click();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onFileChange(e.target.files[0]);
    }
  };

  return (
    <div
      onClick={handleDivClick}
      className={`group relative flex flex-col items-center gap-4 rounded-xl border-2 border-dashed px-4 py-8 transition-all duration-300
        ${currentFile
          ? 'border-green-500 bg-green-50 cursor-default'
          : 'border-slate-300 hover:border-primary hover:bg-slate-50 cursor-pointer'
        }`}
    >
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        onChange={handleInputChange}
        accept="image/png, image/jpeg, application/pdf"
      />

      {currentFile && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          className="absolute top-2 right-2 p-1 rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition-colors"
          title="Remover arquivo"
        >
          <span className="material-symbols-outlined text-lg">close</span>
        </button>
      )}

      <div className="flex flex-col items-center gap-2 text-center">
        {currentFile ? (
          <div className="size-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
            <span className="material-symbols-outlined text-2xl">check</span>
          </div>
        ) : (
          <div className="size-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 group-hover:text-primary group-hover:bg-primary/10 transition-colors">
            <span className="material-symbols-outlined text-2xl">upload_file</span>
          </div>
        )}

        <div>
          <p className="text-slate-900 font-bold text-lg leading-tight">{label}</p>
          {currentFile ? (
            <p className="text-green-700 text-sm font-medium mt-1 break-all px-2">{currentFile.name}</p>
          ) : (
            <p className="text-slate-500 text-sm mt-1">{subLabel}</p>
          )}
        </div>
      </div>

      {!currentFile && (
        <button className="pointer-events-none mt-2 rounded-lg bg-slate-200 px-4 py-2 text-sm font-bold text-slate-700 group-hover:bg-primary group-hover:text-white transition-colors">
          Selecionar Arquivo
        </button>
      )}
    </div>
  );
};

export const Step4Uploads: React.FC<StepProps> = ({ data, updateData, onNext, onPrev }) => {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-2">
        <h1 className="text-slate-900 text-3xl font-black leading-tight tracking-tight mb-2">
          Envio de Documentos
        </h1>
        <p className="text-slate-500 text-lg font-medium">
          Olá {data.nomeCompleto.split(' ')[0]}! Essa é a última etapa. Por favor, anexe os documentos e clique em 'Enviar'.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FileUploadCard
          label="Documento de Identificação"
          subLabel="RG ou CNH. (JPG, PNG, PDF)"
          fileKey="fileRgCnh"
          currentFile={data.fileRgCnh}
          onFileChange={(f) => {
            const reader = new FileReader();
            reader.onloadend = () => {
              updateData({ fileRgCnh: f, fileRgCnhUrl: reader.result as string });
            };
            reader.readAsDataURL(f);
          }}
          onRemove={() => updateData({ fileRgCnh: null, fileRgCnhUrl: undefined })}
        />
        <FileUploadCard
          label="CPF"
          subLabel="Documento do CPF. (JPG, PNG, PDF)"
          fileKey="fileCpf"
          currentFile={data.fileCpf}
          onFileChange={(f) => {
            const reader = new FileReader();
            reader.onloadend = () => {
              updateData({ fileCpf: f, fileCpfUrl: reader.result as string });
            };
            reader.readAsDataURL(f);
          }}
          onRemove={() => updateData({ fileCpf: null, fileCpfUrl: undefined })}
        />
        <FileUploadCard
          label="Comprovante de Renda"
          subLabel="Últimos 3 meses. (PDF)"
          fileKey="fileRenda"
          currentFile={data.fileRenda}
          onFileChange={(f) => {
            const reader = new FileReader();
            reader.onloadend = () => {
              updateData({ fileRenda: f, fileRendaUrl: reader.result as string });
            };
            reader.readAsDataURL(f);
          }}
          onRemove={() => updateData({ fileRenda: null, fileRendaUrl: undefined })}
        />
        <FileUploadCard
          label="Comprovante de Residência"
          subLabel="Conta recente. (JPG, PNG, PDF)"
          fileKey="fileResidencia"
          currentFile={data.fileResidencia}
          onFileChange={(f) => {
            const reader = new FileReader();
            reader.onloadend = () => {
              updateData({ fileResidencia: f, fileResidenciaUrl: reader.result as string });
            };
            reader.readAsDataURL(f);
          }}
          onRemove={() => updateData({ fileResidencia: null, fileResidenciaUrl: undefined })}
        />
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-between pt-6 gap-4">
        <button
          onClick={onPrev}
          className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-8 py-4 text-base font-bold text-slate-700 transition-all hover:bg-slate-50"
        >
          Voltar
        </button>
        <button
          onClick={onNext}
          className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg bg-green-600 px-10 py-4 text-base font-bold text-white transition-all hover:bg-green-700 shadow-lg shadow-green-600/20"
        >
          Finalizar e Enviar <span className="material-symbols-outlined text-sm font-bold">send</span>
        </button>
      </div>
    </div>
  );
};
