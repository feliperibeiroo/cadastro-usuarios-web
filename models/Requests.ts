export const USUARIO_LOGIN:string = '/oauth/login'
export const USUARIOS:string = '/usuarios'
export const CADASTRO_USUARIO:string = '/usuarios/cadastrar'

export interface DataLoginDTO {
  user: string;
  password: string;
}

export interface UsuarioRequest {
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

