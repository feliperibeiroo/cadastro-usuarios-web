import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

export default function (context:any, inject:any) {
  // Cria uma nova instância axios customizada
  const api = context.$axios.create({
    baseURL: context.$config.baseURL || 'https://cadastro-usuarios-ws.herokuapp.com'
  }) as NuxtAxiosInstance

  api.interceptors.request.use((config: AxiosRequestConfig) => {
    config.headers['Authorization'] = `Bearer ${context.$cookies.get('token')}`
    window.$nuxt.$loading.start()
    return config
  }, (error) => {
    window.$nuxt.$loading.finish()
    return Promise.reject(error);
  });

  api.interceptors.response.use((config: AxiosRequestConfig) => {
    window.$nuxt.$loading.finish()
    return config
  }, (error: AxiosError) => {
    window.$nuxt.$loading.finish()
    if (error.message==='Network Error') {
      window.$nuxt.$emit('serverNoResponse')
    }

    if (error.message.includes('401')) {
      if (window.$nuxt.$route.path=='/login') {
        window.$nuxt.$emit('invalidCredentials')
      } else {
        window.$nuxt.$emit('accessDenied')
      }
    }
    window.$nuxt.$router.push('/login');
  });

  // Injeta no context como 'api'
  inject('api', api)
}
