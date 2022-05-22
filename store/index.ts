import * as Requests from '@/models/Requests'
import * as Responses from '@/models/Responses'
import Usuario from '@/models/Usuario'
import { ActionTree, GetterTree, MutationTree } from 'vuex'
import axios, { AxiosError, AxiosResponse } from 'axios'
export const state = () => ({
  usuario: {} as Responses.UsuarioResponse
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  usuario: state => state.usuario
}

export const mutations: MutationTree<RootState> = {
  SET_USUARIO: (state: any, usuario: Responses.UsuarioResponse) => {
    state.usuario = usuario
  },

  LIMPAR_USUARIO: (state: any) => {
    state.usuario = {}
  },
}

export const actions: ActionTree<RootState, RootState> = {
  async login(_context: any, dataLoginDTO:Requests.DataLoginDTO): Promise<any> {
    await (this as any).$api.post(Requests.USUARIO_LOGIN, dataLoginDTO)
    .then( (resp: AxiosResponse) => {
      (this as any).$cookies.set('token', resp?.data?.token)
      if (resp?.status==200) {
        if (resp?.data?.token) {
          window.$nuxt.$router.push('/')
        }
      }
      return resp
    })
    .catch((err: AxiosError) => {
      throw err
    })
  },

  async cadastrarUsuario(_context: any, usuario:Requests.UsuarioRequest): Promise<any> {
    await (this as any).$api.post(Requests.CADASTRO_USUARIO, usuario)
    .then( (resp: AxiosResponse) => {
      if (resp?.status==200) {
        if (resp.data?.created==true) {
          window.$nuxt.$emit('userCreated')
        } else {
          window.$nuxt.$emit('userNotCreated')
        }
      }
      return resp
    })
    .catch((err: AxiosError) => {
      throw err
    })
  },

  async editarUsuario(context: any, usuario:Requests.UsuarioRequest): Promise<any> {
    await (this as any).$api.put(Requests.USUARIOS, usuario)
    .then( (resp: AxiosResponse) => {
      if (resp?.status==200) {
        if (resp.data?.updated==true) {
          window.$nuxt.$emit('userEdited')
          window.$nuxt.$store.dispatch('getUsuario')
        } else {
          window.$nuxt.$emit('userNotEdited')
        }
      }
      return resp
    })
    .catch((err: AxiosError) => {
      throw err
    })
  },

  async mudarSenha(context: any, changeSenhaRequest:Requests.MudarSenhaRequest): Promise<any> {
    await (this as any).$api.post(Requests.MUDAR_SENHA, changeSenhaRequest)
    .then( (resp: AxiosResponse) => {
      if (resp?.status==200) {
        if (resp.data?.updated==true) {
          window.$nuxt.$emit('passwordChanged')
          window.$nuxt.$store.dispatch('getUsuario')
        } else if (resp.data?.updated=="before-password-not-matches") {
          window.$nuxt.$emit('passwordNotMatch')
        } else {
          window.$nuxt.$emit('passwordNotChanged')
        }
      }
      return resp
    })
    .catch((err: AxiosError) => {
      throw err
    })
  },

  async getUsuario(context: any): Promise<any> {
    await (this as any).$api.get(Requests.USUARIOS)
    .then( (resp: AxiosResponse) => {
      if (resp?.data) {
        context.commit('SET_USUARIO', resp.data?.usuario)
      }
      return resp
    })
    .catch((err: AxiosError) => {
      throw err
    })
  },

  async deleteUsuario(context: any): Promise<any> {
    await (this as any).$api.delete(Requests.USUARIOS)
    .then( (resp: AxiosResponse) => {
      if (resp.data?.deleted==true) {
        window.$nuxt.$emit('userRemoved')
      } else {
        window.$nuxt.$emit('userNotRemoved')
      }
      return resp
    })
    .catch((err: AxiosError) => {
      throw err
    })
  },

  limparUsuario(context: any) {
    context.commit('LIMPAR_USUARIO')
  },

}