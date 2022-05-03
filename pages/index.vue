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
            <em>Usuário</em>
          </template>
          <b-dropdown-item href="#">Editar perfil</b-dropdown-item>
          <b-dropdown-item href="#">Sair</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <div class="corpo-pagina">
    <span class="msg-display">Olá Fulano!!!</span>
  </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage'
})
</script>
<style lang="scss" scoped>
.navbar {
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

}
.corpo-pagina {
  margin: $border-page;
  .msg-display {
    font-size: 20px;
  }
}
</style>
