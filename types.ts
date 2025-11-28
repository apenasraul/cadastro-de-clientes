export interface FormData {
  // Step 1: Personal
  nomeCompleto: string;
  telefone1: string;
  telefone2: string;
  email: string;

  // Step 2: Address
  cep: string;
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;

  // Step 3: Financial
  cpf: string;
  rg: string;
  dataNascimento: string;
  estadoCivil: string;
  empresa: string;
  renda: string;

  // Step 4: Files (Stubs for file names)
  fileRgCnh: File | null;
  fileRgCnhUrl?: string; // Base64
  fileCpf: File | null;
  fileCpfUrl?: string; // Base64
  fileRenda: File | null;
  fileRendaUrl?: string; // Base64
  fileResidencia: File | null;
  fileResidenciaUrl?: string; // Base64
}

export type StepProps = {
  data: FormData;
  updateData: (partial: Partial<FormData>) => void;
  onNext?: () => void;
  onPrev?: () => void;
  errors?: Record<string, string>;
  broker?: Broker; // Step 1 needs this
};

export interface Broker {
  id: string;
  name: string;
  creci: string;
  photo: string;
}

export interface Company {
  id: string;
  name: string;
  cnpj: string;
  logo: string;
}

export interface ClientSubmission extends FormData {
  id: string;
  brokerId: string;
  companyId?: string;
  submittedAt: string;
  status: 'Novo' | 'Em Análise' | 'Aprovado' | 'Pendente' | 'Inativo';
}
