<template>
  <b-alert class="alert-message" :show="contador>0" :variant="variant">
    {{ message }}
  </b-alert>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      message: '',
      variant: 'primary',
      tempoExibicaoEmSegundos: 3,
      contador: 0
    }
  },
  mounted() {
    this.$nuxt.$on('serverNoResponse', () => {
      this.showMessage('Não foi possível obter resposta do servidor', 'danger')
    })
    this.$nuxt.$on('accessDenied', () => {
      this.showMessage('Acesso Negado', 'danger')
    })
    this.$nuxt.$on('invalidCredentials', () => {
      this.showMessage('Usuário e/ou senha inválidos', 'danger')
    })
    this.$nuxt.$on('userCreated', () => {
      this.showMessage('Usuário cadastrado com sucesso', 'success')
    })
    this.$nuxt.$on('userNotCreated', () => {
      this.showMessage('CPF, PIS ou email já possui usuário cadastrado', 'danger')
    })
    this.$nuxt.$on('userEdited', () => {
      this.showMessage('Usuário editado com sucesso', 'success')
    })
    this.$nuxt.$on('userNotEdited', () => {
      this.showMessage('Falha ao editar usuário', 'danger')
    })
    this.$nuxt.$on('userRemoved', () => {
      this.showMessage('Usuário removido com sucesso', 'success')
    })
    this.$nuxt.$on('userNotRemoved', () => {
      this.showMessage('Falha ao remover usuário', 'danger')
    })
    this.$nuxt.$on('passwordChanged', () => {
      this.showMessage('Senha alterada com sucesso', 'success')
    })
    this.$nuxt.$on('passwordNotMatch', () => {
      this.showMessage('Senha anterior não confere', 'danger')
    })
    this.$nuxt.$on('passwordNotChanged', () => {
      this.showMessage('Senha não alterada', 'danger')
    })
    this.$nuxt.$on('internalError', () => {
      this.showMessage('Erro ao fazer login', 'danger')
    })
  },
  watch: {
    contador(value) {
      if (value==this.tempoExibicaoEmSegundos) {
        this.dispararContagem()
      }
    }
  },
  methods: {
    showMessage(message:string, variant:string) {
      this.message = message
      this.variant = variant
      this.contador = this.tempoExibicaoEmSegundos
    },
    dispararContagem() {
      const interval = setInterval(() => {
        this.contador-=1
        if (this.contador==0) {
          clearInterval(interval)
        }
      }, 1000)
    }
  }
  
})
</script>
<style lang="scss" scoped>
.alert-message {
  position: absolute;
  right: 30px;
  bottom: 10px;
  z-index: 1000;
}
</style>>