<template>
    <b-modal @ok="modalOK" scrollable v-model="modalShow" title="Cadastro de Usuário">
        <span class="box-entrada">
            <label for="nome">Nome</label>
            <b-form-input v-model="usuario.nome" praceholder="Nome" type="text"></b-form-input>
        </span>
        <span class="box-entrada">
            <label for="email">Email</label>
            <b-form-input v-model="usuario.email" id="email" type="text"></b-form-input>
        </span>
        <span class="box-entrada">
            <label for="cpf">CPF</label>
            <b-form-input v-model="usuario.cpf" id="cpf" type="text"></b-form-input>
        </span>
        <span class="box-entrada">
            <label for="pis">PIS</label>
            <b-form-input v-model="usuario.pis" id="pis" type="text"></b-form-input>
        </span>
        <span class="box-entrada">
            <label for="pais">País</label>
            <b-form-input v-model="usuario.pais" id="pais" type="text"></b-form-input>
        </span>
        <span class="box-entrada">
            <label for="estado">Estado</label>
            <b-form-input v-model="usuario.estado" id="estado" type="text"></b-form-input>
        </span>
        <span class="box-entrada">
            <label for="municipio">Município</label>
            <b-form-input v-model="usuario.municipio" id="municipio" type="text"></b-form-input>
        </span>
        <span class="box-entrada">
            <label for="cep">CEP</label>
            <b-form-input v-model="usuario.cep" id="cep" type="text"></b-form-input>
        </span>
        <span class="box-entrada">
            <label for="numero">Número</label>
            <b-form-input v-model="usuario.numero" id="numero" type="text"></b-form-input>
        </span>
        <span class="box-entrada">
            <label for="rua">Rua</label>
            <b-form-input v-model="usuario.rua" id="rua" type="text"></b-form-input>
        </span>
        <span class="box-entrada">
            <label for="complemento">Complemento</label>
            <b-form-input v-model="usuario.complemento" id="complemento" type="text"></b-form-input>
        </span>
    </b-modal>
</template>
<script lang="ts">
import Vue from 'vue'
import Usuario from '~/models/Usuario'
import { mapGetters } from 'vuex'
export default Vue.extend({
    data() {
        return {
            modalShow: false
        }
    },
    computed: {
        ...mapGetters(['usuario'])
    },
    methods: {
      showModal() {
        this.modalShow = true
      },
      hideModal() {
        this.modalShow = false
      },
      modalOk() {
          
      }
    }
})
</script>
<style lang="scss" scoped>

</style>