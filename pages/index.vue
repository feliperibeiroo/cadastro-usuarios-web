<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Desafio</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Home</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>Perfil</em>
            </template>
            <b-dropdown-item @click="editarPerfil" href="#">Editar perfil</b-dropdown-item>
            <b-dropdown-item href="#">Alterar Senha</b-dropdown-item>
            <b-dropdown-item @click="sair" href="#">Sair</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="corpo-pagina">
      <div class="conteudo">
        <span v-if="usuario.nome" class="msg-display">Olá <b>{{ usuario.nome }}</b>!!!</span>
        <b-skeleton v-else height="1.5em" animation="wave" width="20%"></b-skeleton>
      </div>
    </div>
    <ModalEdit ref="modal-edit"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'
export default Vue.extend({
  layout: 'main',
  computed: {
    ...mapGetters(['usuario'])
  },
  async fetch() {
    await this.getUsuario();
  },
  methods: {
    ...mapActions(['getUsuario', 'limparUsuario']),
    editarPerfil() {
      (this.$refs['modal-edit'] as any).showModal();
    },
    sair() {
      this.limparUsuario();
      (this as any).$cookies.remove('token')
      this.$nuxt.$router.push('/login')
    }
  }
})
</script>
<style lang="scss" scoped>
.navbar {
  z-index: 100;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;

}
.corpo-pagina {
  margin: $border-page;
  .conteudo {
    .msg-display {
      font-size: 20px;
    }
  }
}
</style>
