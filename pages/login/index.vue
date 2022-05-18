<template>
  <div>
    <ModalCadastro ref="modalCadastro"/>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Desafio</b-navbar-brand>
    </b-navbar>
    <div class="corpo-pagina">
      <div class="banner">
        <span>Olá Visitante</span>
      </div>
      <div class="form-login">
        <span class="email">
          <label for="email_pis">Email ou PIS</label>
          <b-form-input @keydown.enter="fazerLogin" v-model="loginDTO.user" id="email_pis" type="text"></b-form-input>
        </span>
        <span class="senha">
          <label for="senha">Senha</label>
          <b-form-input @keydown.enter="fazerLogin" v-model="loginDTO.password" id="senha" type="password"></b-form-input>
        </span>
        <span class="form-submit">
          <b-button :disabled="!(loginDTO.user && loginDTO.password)" variant="primary" @click="fazerLogin">Entrar</b-button>
          <span class="txt-registrar">
            <b-link @click="showModalCadastro()">Registrar-se</b-link>
          </span>
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'
import * as Requests from '@/models/Requests'
export default Vue.extend({
  layout: 'main',
  data() {
      return {
          loginDTO: {
              user: "",
              password: ""
          } as Requests.DataLoginDTO
      };
  },
  methods: {
      ...mapActions(["login"]),
      showModalCadastro() {
          (this.$refs.modalCadastro as any).showModal();
      },
      async fazerLogin() {
        await this.login(this.loginDTO);
    }
  }
})
</script>
<style lang="scss">
body {
  height: 100vh;
}
</style>
<style lang="scss" scoped>
.navbar {
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

}
.corpo-pagina {
  padding-top: 56px;
  display: flex;
  flex-direction: row;
  height: 100vh;
  .banner {
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 50%;
    align-items: center;
    justify-content: center;
    background: rgb(102, 169, 201);
    span {
      font-size: 30px;
    }
  }
  .form-login {
    margin: auto !important;
    margin: $border-page;
    display: flex;
    flex-direction: column;
    width: 40%;
    max-width: 400px;
    * {
      margin-bottom: 7px;
    }
    .form-submit {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .text-registrar {
        background-color: blue;
        display: flex;
        flex-direction: row;
        align-items: center;
        text-justify: center;
      }
    }
  }
}

@media (max-width: 600px) {
  .corpo-pagina {
    display: flex;
    flex-direction: column;
    .banner {
      height: 100px;
      width: 100%;
    }
    .form-login {
      padding-top: 20px;
      width: 80%;
    }
  }
}
</style>
