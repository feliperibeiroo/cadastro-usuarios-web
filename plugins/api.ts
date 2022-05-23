import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
require('dotenv').config()

const BASE_URL = process.env.BASE_URL

export default function ({ $axios, $cookies}:{ $axios:any, $cookies: any }, inject:any) {
  // Cria uma nova instância axios customizada
  const api = $axios.create({
    baseURL: BASE_URL
  }) as NuxtAxiosInstance

  api.interceptors.request.use((config: AxiosRequestConfig) => {
    config.headers['Authorization'] = `Bearer ${$cookies.get('token')}`
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
    console.log(error.toJSON());
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
