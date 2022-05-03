<template>
    <b-modal v-model="modalShow" title="Cadastro de Usuário">
        <p class="">Hello from modal!</p>
        <span class="box-entrada">
            <label for="nome">Nome</label>
            <b-form-input praceholder="Nome" type="text"></b-form-input>
        </span>
        <span class="box-entrada">
            <label for="nome">Email</label>
            <b-form-input id="nome" type="text"></b-form-input>
        </span>
    </b-modal>
</template>
<script lang="ts">
import Vue from 'vue'
import Usuario from '~/models/Usuario'
export default Vue.extend({
    data() {
        return {
            modalShow: false,
            usuario: {} as Usuario
        }
    },
    methods: {
      showModal() {
        this.modalShow = true
      },
      hideModal() {
        this.modalShow = false
      },
    }
})
</script>
<style lang="scss" scoped>

</style>