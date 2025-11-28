import { supabase } from './supabaseClient';
import { Broker, ClientSubmission, Company } from '../types';

// --- Brokers ---

export const getBrokers = async (): Promise<Broker[]> => {
  const { data, error } = await supabase
    .from('brokers')
    .select('*');

  if (error) {
    console.error('Error fetching brokers:', error);
    return [];
  }

  return data || [];
};

export const addBroker = async (broker: Broker) => {
  const { error } = await supabase
    .from('brokers')
    .insert([broker]);

  if (error) {
    console.error('Error adding broker:', error);
    throw error;
  }
};

export const deleteBroker = async (id: string) => {
  const { error } = await supabase
    .from('brokers')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting broker:', error);
    throw error;
  }
};

export const getBrokerById = async (id: string): Promise<Broker | undefined> => {
  const { data, error } = await supabase
    .from('brokers')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching broker:', error);
    return undefined;
  }

  return data;
};

// --- Companies ---

export const getCompanies = async (): Promise<Company[]> => {
  const { data, error } = await supabase
    .from('companies')
    .select('*');

  if (error) {
    console.error('Error fetching companies:', error);
    return [];
  }

  return data || [];
};

export const addCompany = async (company: Company) => {
  const { error } = await supabase
    .from('companies')
    .insert([company]);

  if (error) {
    console.error('Error adding company:', error);
    throw error;
  }
};

export const deleteCompany = async (id: string) => {
  const { error } = await supabase
    .from('companies')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting company:', error);
    throw error;
  }
};

export const getCompanyById = async (id: string): Promise<Company | undefined> => {
  const { data, error} = await supabase
    .from('companies')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching company:', error);
    return undefined;
  }

  return data;
};

// --- Clients ---

export const getClients = async (): Promise<ClientSubmission[]> => {
  const { data, error } = await supabase
    .from('clients')
    .select('*');

  if (error) {
    console.error('Error fetching clients:', error);
    return [];
  }

  // Map DB columns back to ClientSubmission format
  return (data || []).map((row: any) => ({
    id: row.id,
    brokerId: row.broker_id,
    companyId: row.company_id,
    nomeCompleto: row.nome_completo,
    cpf: row.cpf,
    rg: row.rg,
    dataNascimento: row.data_nascimento,
    estadoCivil: row.estado_civil,
    telefone1: row.telefone1,
    telefone2: row.telefone2,
    email: row.email,
    cep: row.cep,
    logradouro: row.logradouro,
    numero: row.numero,
    complemento: row.complemento,
    bairro: row.bairro,
    cidade: row.cidade,
    uf: row.uf,
    empresa: row.empresa,
    renda: row.renda,
    status: row.status,
    submittedAt: row.submitted_at,
    // Map file URLs from JSONB
    fileRgCnh: null, // Files are not stored in DB, only URLs
    fileCpf: null,
    fileRenda: null,
    fileResidencia: null,
    fileRgCnhUrl: row.file_urls?.rg,
    fileCpfUrl: row.file_urls?.cpf,
    fileRendaUrl: row.file_urls?.renda,
    fileResidenciaUrl: row.file_urls?.residencia,
  }));
};

export const addClient = async (client: ClientSubmission) => {
  const dbClient = {
    id: client.id,
    broker_id: client.brokerId,
    company_id: client.companyId,
    nome_completo: client.nomeCompleto,
    cpf: client.cpf,
    rg: client.rg,
    data_nascimento: client.dataNascimento,
    estado_civil: client.estadoCivil,
    telefone1: client.telefone1,
    telefone2: client.telefone2,
    email: client.email,
    cep: client.cep,
    logradouro: client.logradouro,
    numero: client.numero,
    complemento: client.complemento,
    bairro: client.bairro,
    cidade: client.cidade,
    uf: client.uf,
    empresa: client.empresa,
    renda: client.renda,
    status: client.status,
    submitted_at: client.submittedAt,
    file_urls: {
      rg: client.fileRgCnhUrl,
      cpf: client.fileCpfUrl,
      renda: client.fileRendaUrl,
      residencia: client.fileResidenciaUrl
    }
  };

  const { error } = await supabase
    .from('clients')
    .insert([dbClient]);

  if (error) {
    console.error('Error adding client:', error);
    throw error;
  }
};

export const updateClient = async (client: ClientSubmission) => {
  const dbClient = {
    broker_id: client.brokerId,
    company_id: client.companyId,
    nome_completo: client.nomeCompleto,
    cpf: client.cpf,
    rg: client.rg,
    data_nascimento: client.dataNascimento,
    estado_civil: client.estadoCivil,
    telefone1: client.telefone1,
    telefone2: client.telefone2,
    email: client.email,
    cep: client.cep,
    logradouro: client.logradouro,
    numero: client.numero,
    complemento: client.complemento,
    bairro: client.bairro,
    cidade: client.cidade,
    uf: client.uf,
    empresa: client.empresa,
    renda: client.renda,
    status: client.status,
    file_urls: {
      rg: client.fileRgCnhUrl,
      cpf: client.fileCpfUrl,
      renda: client.fileRendaUrl,
      residencia: client.fileResidenciaUrl
    }
  };

  const { error } = await supabase
    .from('clients')
    .update(dbClient)
    .eq('id', client.id);

  if (error) {
    console.error('Error updating client:', error);
    throw error;
  }
};
