export interface UsuarioResponse {
  id?: string;
  nome?: string;
  email?: string;
  endereco?: {
      pais?: string;
      estado?: string;
      municipio?: string;
      cep?: string;
      rua?: string;
      numero?: string;
      complemento?: string;
  }
  cpf?: string
  pis?: string
  senha?: string
}
