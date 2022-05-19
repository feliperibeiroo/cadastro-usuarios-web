<template>
    <b-modal @ok="modalOk" scrollable v-model="modalShow" title="Cadastro de Usuário">
        <span class="box-entrada">
            <label for="nome">Nome</label>
            <b-form-input :state="nomeValidator.value" aria-describedby="input-live-feedback" v-model="usuario.nome" praceholder="Nome" type="text">
            </b-form-input>
            <b-form-invalid-feedback id="input-live-feedback">
                {{ nomeValidator.message }}
            </b-form-invalid-feedback>

        </span>
        <span class="box-entrada">
            <label for="email">Email</label>
            <b-form-input  v-model="usuario.email" id="email" type="text"></b-form-input>
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
        <span class="box-entrada">
            <label for="complemento">Senha</label>
            <b-form-input v-model="usuario.senha" id="senha" type="text"></b-form-input>
        </span>
        <span class="box-entrada">
            <label for="senha-confirmacao">Digite sua senha novamente</label>
            <b-form-input v-model="senhaConfirmacao" id="senha-confirmacao" type="text"></b-form-input>
        </span>
    </b-modal>
</template>
<script lang="ts">
import Vue from 'vue'
import Usuario from '~/models/Usuario'
import { mapGetters, mapActions } from 'vuex'

interface validator {
    value: boolean | null
    message: string
}

export default Vue.extend({
    data() {
        return {
            usuario: {} as Usuario,
            senhaConfirmacao: '',
            modalShow: false
        }
    },
    
    methods: {
        ...mapActions(['cadastrarUsuario']),
        modalOk() {
            this.cadastrarUsuario(this.usuario)
        },
        showModal() {
            this.usuario = {}
            this.modalShow = true
        },
        hideModal() {
            this.modalShow = false
        },
        nomeValidator (): validator {
            return this.usuario.nome===undefined ? 
                {value: null, message: ''} :
                this.usuario.nome==="" ?
                    {value: false, message: 'Campo obrigatório'}:
                    this.usuario.nome?.match(/\w+\s+\w+/)==null ?
                        { value: false, message: 'Insira seu nome completo' }:
                        { value: true, message: 'ok' }
        },
        emailValidator (): validator {
            return this.usuario.email===undefined ? 
                {value: null, message: ''} :
                this.usuario.email==="" ?
                    {value: false, message: 'Campo obrigatório'}:
                    this.usuario.email?.match(/\w+@\w+\.\w+/)==null ?
                        { value: false, message: 'Insira um email válido' }:
                        { value: true, message: 'ok' }
        },
        paisValidator (): validator {
            return this.usuario.endereco?.pais===undefined ? 
                {value: null, message: ''} :
                this.usuario.endereco?.pais==="" ?
                    {value: false, message: 'Campo obrigatório'}:
                    { value: true, message: 'ok' }
        },
        estadoValidator (): validator {
            return this.usuario.endereco?.estado===undefined ? 
                {value: null, message: ''} :
                this.usuario.endereco?.estado==="" ?
                    {value: false, message: 'Campo obrigatório'}:
                    { value: true, message: 'ok' }
        },
        municipioValidator (): validator {
            return this.usuario.endereco?.municipio===undefined ? 
                {value: null, message: ''} :
                this.usuario.endereco?.municipio==="" ?
                    {value: false, message: 'Campo obrigatório'}:
                    { value: true, message: 'ok' }
        },
        cepValidator (): validator {
            return this.usuario.endereco?.cep===undefined ? 
                {value: null, message: ''} :
                this.usuario.endereco?.cep==="" ?
                    {value: false, message: 'Campo obrigatório'}:
                    this.usuario.endereco.cep.length!=9 ?
                        { value: false, message: 'CEP incompleto' } :
                        { value: true, message: 'ok' }

        },
        ruaValidator (): validator {
            return (this.usuario.nome==="") ? 
                {value: false, message: 'Campo obrigatório'} :
                (this.usuario.nome)===undefined ?
                    { value: null, message: '' }:
                    { value: true, message: 'ok' }
        },
        numeroValidator (): validator {
            return this.usuario.endereco?.numero==="" ? 
                {value: false, message: 'Campo obrigatório'} :
                this.usuario.endereco?.numero===undefined ?
                    { value: null, message: '' }:
                    { value: true, message: 'ok' }
        },
        cpfValidator (): validator {
            return this.usuario.cpf==="" ? 
                {value: false, message: 'Campo obrigatório'} :
                this.usuario.cpf===undefined ?
                    { value: null, message: '' }:
                    { value: true, message: 'ok' }
        },
        pisValidator (): validator {
            return this.usuario.pis==="" ? 
                {value: false, message: 'Campo obrigatório'} :
                this.usuario.pis===undefined ?
                    { value: null, message: '' }:
                    { value: true, message: 'ok' }
        },
        senhaValidator (): validator {
            return this.usuario.pis==="" ? 
                {value: false, message: 'Campo obrigatório'} :
                this.usuario.pis===undefined ?
                    { value: null, message: '' }:
                    { value: true, message: 'ok' }
        },
    }
})
</script>
<style lang="scss" scoped>

</style>