import { User } from 'types/authTypes';

export const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('pt-br', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    timeZone: 'UTC',
  });

export const formatCurrency = (value: number) =>
  Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

export const formatCPF = (cpf: string) => {
  const cpfFormatted = cpf.replace(/[^\d]/g, '');
  return cpfFormatted.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
};

export const formatTelephoneNumber = (telephone: string) => {
  const telephoneFormatted = telephone.replace(/[^\d]/g, '');
  return telephoneFormatted.replace(/(\d)(\d{4})$/, '$1-$2');
};

export const formatPhoneNumber = (phone: string) => {
  let phoneFormatted = phone.replace(/[^\d]/g, '');
  phoneFormatted = phoneFormatted.replace(/^(\d{2})(\d)/g, '($1) $2');
  return phoneFormatted.replace(/(\d)(\d{4})$/, '$1-$2');
};

export const formatCEP = (cep: string) => {
  const cepFormatted = cep.replace(/[^\d]/g, '');
  return cepFormatted.replace(/^(\d{5})(\d)/, '$1-$2');
};

export const formatUser = (user: User): User => {
  const { endereco } = user;
  return {
    uuid: user.uuid || '',
    cpf: formatCPF(user.cpf),
    nome: user.nome || '',
    provider: user.provider || '',
    provider_id: user.provider_id,
    role_usuario: user.role_usuario || '',
    tipo_institucional: user.tipo_institucional || '',
    carga_trabalho: user.carga_trabalho || '',
    email: user.email || '',
    universidade: user.universidade || '',
    sexo: user.sexo || '',
    data_nascimento: user.data_nascimento || '',
    titulacao: user.titulacao || '',
    centro: user.centro || '',
    departamento: user.departamento || '',
    categoria: user.categoria || '',
    telefone: formatTelephoneNumber(user.telefone),
    celular: formatPhoneNumber(user.celular),
    endereco: {
      logradouro: endereco.logradouro || '',
      numero_residencial: endereco.numero_residencial || '',
      complemento: endereco.complemento || '',
      bairro: endereco.bairro || '',
      estado: endereco.estado || '',
      cidade: endereco.cidade || '',
      cep: formatCEP(endereco.cep),
    },
  };
};
