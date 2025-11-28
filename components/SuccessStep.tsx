import React from 'react';

export const SuccessStep: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-10 animate-in zoom-in duration-500 text-center">
      <div className="size-24 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-4 animate-bounce">
        <span className="material-symbols-outlined text-6xl">check_circle</span>
      </div>
      <h1 className="text-slate-900 text-4xl font-black leading-tight tracking-tight">
        Cadastro Enviado!
      </h1>
      <p className="text-slate-500 text-lg max-w-lg">
        Recebemos seus dados e documentos com sucesso. Nossa equipe analisará as informações e entrará em contato em breve através do email cadastrado.
      </p>
      
      <div className="mt-8 p-6 bg-slate-50 rounded-xl border border-slate-200 w-full max-w-md">
        <p className="font-bold text-slate-800 mb-2">Próximos Passos:</p>
        <ul className="text-left text-slate-600 space-y-2 text-sm">
            <li className="flex gap-2">
                <span className="material-symbols-outlined text-primary text-lg">looks_one</span>
                Análise de crédito (até 24h úteis)
            </li>
            <li className="flex gap-2">
                <span className="material-symbols-outlined text-primary text-lg">looks_two</span>
                Validação documental
            </li>
            <li className="flex gap-2">
                <span className="material-symbols-outlined text-primary text-lg">looks_3</span>
                Contato do corretor para assinatura
            </li>
        </ul>
      </div>

      <button onClick={() => window.location.reload()} className="mt-8 text-primary font-bold hover:underline">
        Voltar ao início
      </button>
    </div>
  );
};
