import * as Requests from '@/models/Requests'
import Usuario from '@/models/Usuario'
import { ActionTree, GetterTree, MutationTree } from 'vuex'
import axios, { AxiosError, AxiosResponse } from 'axios'
export const state = () => ({
  usuario: {} as Usuario
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  usuario: state => state.usuario
}

export const mutations: MutationTree<RootState> = {
  SET_USUARIO: (state: any, response: any) => {
    state.usuario = response.usuario as Usuario
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
        window.$nuxt.$router.push('/')
      }
      return resp
    })
    .catch((err: AxiosError) => {
      throw err
    })
  },
  async cadastrarUsuario(_context: any, usuario:Usuario): Promise<any> {
    await (this as any).$api.post(Requests.CADASTRO_USUARIO, usuario)
    .then( (resp: AxiosResponse) => {
      if (resp?.status==200) {
        window.$nuxt.$emit('userCreated')
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
        context.commit('SET_USUARIO', resp.data)
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