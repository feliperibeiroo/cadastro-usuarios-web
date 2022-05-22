<template>
    <b-modal 
        @ok="modalOk"
        scrollable 
        v-model="modalShow"
        cancel-title="Cancelar"
        title="Cadastro de Usuário"
        :ok-disabled="!okValidator.value"
    >
        <span class="box-entrada">
            <label for="nome">Nome</label>
            <b-form-input 
                :state="nomeValidator.value" 
                v-model="usuario.nome"
                aria-describedby="nome-feedback"
                placeholder="Nome" 
                type="text"
            ></b-form-input>
            <b-form-invalid-feedback id="nome-feedback">
                {{ nomeValidator.message }}
            </b-form-invalid-feedback>
        </span>
        <span class="box-entrada">
            <label for="email">Email</label>
            <b-form-input 
                :state="emailValidator.value" 
                v-model="usuario.email"
                aria-describedby="email-feedback"
                placeholder="Email" 
                type="text"
            ></b-form-input>
            <b-form-invalid-feedback id="email-feedback">
                {{ emailValidator.message }}
            </b-form-invalid-feedback>
        </span>
        <span class="box-entrada">
            <label for="cpf">CPF</label>
            <b-form-input 
                :state="cpfValidator.value" 
                v-model="usuario.cpf"
                v-mask="'###.###.###-##'"
                aria-describedby="cpf-feedback"
                placeholder="CPF" 
                type="text"
            ></b-form-input>
            <b-form-invalid-feedback id="cpf-feedback">
                {{ cpfValidator.message }}
            </b-form-invalid-feedback>
        </span>
        <span class="box-entrada">
            <label for="pis">PIS</label>
            <b-form-input 
                :state="pisValidator.value" 
                v-model="usuario.pis"
                v-mask="'####################'"
                aria-describedby="pis-feedback"
                placeholder="PIS" 
                type="text"
            ></b-form-input>
            <b-form-invalid-feedback id="pis-feedback">
                {{ pisValidator.message }}
            </b-form-invalid-feedback>
        </span>
        <span class="box-entrada">
            <label for="pais">País</label>
            <b-form-input 
                :state="paisValidator.value" 
                v-model="usuario.pais"
                aria-describedby="pais-feedback"
                placeholder="País" 
                type="text"
            ></b-form-input>
            <b-form-invalid-feedback id="pais-feedback">
                {{ paisValidator.message }}
            </b-form-invalid-feedback>
        </span>
        <span class="box-entrada">
            <label for="estado">Estado</label>
            <b-form-input 
                :state="estadoValidator.value" 
                v-model="usuario.estado"
                aria-describedby="estado-feedback"
                placeholder="Estado" 
                type="text"
            ></b-form-input>
            <b-form-invalid-feedback id="estado-feedback">
                {{ estadoValidator.message }}
            </b-form-invalid-feedback>
        </span>
        <span class="box-entrada">
            <label for="municipio">Município</label>
            <b-form-input 
                :state="municipioValidator.value" 
                v-model="usuario.municipio"
                aria-describedby="municipio-feedback"
                placeholder="Municipio" 
                type="text"
            ></b-form-input>
            <b-form-invalid-feedback id="municipio-feedback">
                {{ municipioValidator.message }}
            </b-form-invalid-feedback>
        </span>
        <span class="box-entrada">
            <label for="cep">CEP</label>
            <b-form-input 
                :state="cepValidator.value" 
                v-model="usuario.cep"
                v-mask="'#####-###'"
                aria-describedby="cep-feedback"
                placeholder="CEP" 
                type="text"
            ></b-form-input>
            <b-form-invalid-feedback id="cep-feedback">
                {{ cepValidator.message }}
            </b-form-invalid-feedback>
        </span>
        <span class="box-entrada">
            <label for="numero">Número</label>
            <b-form-input 
                :state="numeroValidator.value" 
                v-model="usuario.numero"
                v-mask="'##########'"
                aria-describedby="numero-feedback"
                placeholder="Número" 
                type="text"
            ></b-form-input>
            <b-form-invalid-feedback id="numero-feedback">
                {{ numeroValidator.message }}
            </b-form-invalid-feedback>
        </span>
        <span class="box-entrada">
            <label for="rua">Rua</label>
            <b-form-input 
                :state="ruaValidator.value" 
                v-model="usuario.rua"
                aria-describedby="rua-feedback"
                placeholder="Rua" 
                type="text"
            ></b-form-input>
            <b-form-invalid-feedback id="rua-feedback">
                {{ ruaValidator.message }}
            </b-form-invalid-feedback>
        </span>
        <span class="box-entrada">
            <label for="complemento">Complemento</label>
            <b-form-input 
                v-model="usuario.complemento" 
                id="complemento"
                placeholder="Complemento"
                type="text"
            ></b-form-input>
        </span>
        <span class="box-entrada">
            <label for="complemento">Senha</label>
            <b-form-input 
                :state="senhaValidator.value" 
                v-model="usuario.senha"
                aria-describedby="senha-feedback"
                placeholder="Senha" 
                type="password"
            ></b-form-input>
            <b-form-invalid-feedback id="senha-feedback">
                {{ senhaValidator.message }}
            </b-form-invalid-feedback>
        </span>
        <span class="box-entrada">
            <label for="senha-confirmacao">Digite sua senha novamente</label>
            <b-form-input 
                :state="confirmaSenhaValidator.value" 
                v-model="senhaConfirmacao"
                aria-describedby="senha-confirmacao-feedback"
                placeholder="Digite a senha novamente" 
                type="password"
            ></b-form-input>
            <b-form-invalid-feedback id="senha-confirmacao-feedback">
                {{ confirmaSenhaValidator.message }}
            </b-form-invalid-feedback>
        </span>
    </b-modal>
</template>
<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'
import * as Requests from '@/models/Requests'
import * as Responses from '@/models/Responses'
import UsuarioForm from '~/models/UsuarioForm'
import Usuario from '~/models/Usuario'

interface validator {
    value: boolean | null
    message: string
}

export default Vue.extend({
    data() {
        return {
            usuario: {} as Usuario,
            senhaConfirmacao: undefined,
            modalShow: false
        }
    },
    
    methods: {
        ...mapActions(['cadastrarUsuario']),
        modalOk() {
            let usuario = {
                nome: this.usuario.nome,
                email: this.usuario.email,
                endereco: {
                    pais: this.usuario.pais,
                    estado: this.usuario.estado,
                    municipio: this.usuario.municipio,
                    cep: this.usuario.cep,
                    rua: this.usuario.rua,
                    numero: this.usuario.numero,
                    complemento: this.usuario.complemento,
                },
                cpf: this.usuario.cpf,
                pis: this.usuario.pis,
                senha: this.usuario.senha
            } as Requests.UsuarioRequest
            this.cadastrarUsuario(usuario)
        },
        showModal() {
            this.usuario = {}
            this.modalShow = true
        },
        hideModal() {
            this.modalShow = false
        },
    },

    computed: {
        nomeValidator (): validator {
            return this.usuario.nome===undefined ? 
                {value: null, message: ''} :
                this.usuario.nome=="" ?
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
            return this.usuario.pais===undefined ? 
                {value: null, message: ''} :
                this.usuario.pais==="" ?
                    {value: false, message: 'Campo obrigatório'}:
                    { value: true, message: 'ok' }
        },
        estadoValidator (): validator {
            return this.usuario.estado===undefined ? 
                {value: null, message: ''} :
                this.usuario.estado==="" ?
                    {value: false, message: 'Campo obrigatório'}:
                    { value: true, message: 'ok' }
        },
        municipioValidator (): validator {
            return this.usuario.municipio===undefined ? 
                {value: null, message: ''} :
                this.usuario.municipio==="" ?
                    {value: false, message: 'Campo obrigatório'}:
                    { value: true, message: 'ok' }
        },
        cepValidator (): validator {
            return this.usuario.cep===undefined ? 
                {value: null, message: ''} :
                this.usuario.cep==="" ?
                    {value: false, message: 'Campo obrigatório'}:
                    this.usuario.cep.length!=9 ?
                        { value: false, message: 'CEP incompleto' } :
                        { value: true, message: 'ok' }

        },
        ruaValidator (): validator {
            return (this.usuario.rua==="") ? 
                {value: false, message: 'Campo obrigatório'} :
                (this.usuario.rua)===undefined ?
                    { value: null, message: '' }:
                    { value: true, message: 'ok' }
        },
        numeroValidator (): validator {
            return this.usuario.numero==="" ? 
                {value: false, message: 'Campo obrigatório'} :
                this.usuario.numero===undefined ?
                    { value: null, message: '' }:
                    { value: true, message: 'ok' }
        },
        cpfValidator (): validator {
            return this.usuario.cpf==="" ? 
                {value: false, message: 'Campo obrigatório'} :
                this.usuario.cpf===undefined ?
                    { value: null, message: '' }:
                    this.usuario.cpf.length!=14 ?
                        { value: false, message: 'Insira o CPF completo' }:
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
            return this.usuario.senha==="" ? 
                {value: false, message: 'Campo obrigatório'} :
                this.usuario.senha===undefined ?
                    { value: null, message: '' }:
                    !(this.usuario.senha.length>=8) ?
                    { value: false, message: 'A senha precisa ter pelo menos 8 carateres' } :
                    { value: true, message: 'ok' }
        },
        confirmaSenhaValidator (): validator {
            return this.senhaConfirmacao==="" ? 
                {value: false, message: 'Campo obrigatório'} :
                this.senhaConfirmacao===undefined ?
                    { value: null, message: '' }:
                    this.senhaConfirmacao!=this.usuario.senha ?
                    { value: false, message: 'As senhas não conferem' } :
                    !this.senhaValidator.value ?
                        { value: false, message: 'Senha inválida' }:
                        { value: true, message: '' }
        },
        okValidator (): validator {
            return this.nomeValidator.value &&
                this.emailValidator.value &&
                this.paisValidator.value &&
                this.estadoValidator.value &&
                this.municipioValidator.value &&
                this.cepValidator.value &&
                this.ruaValidator.value &&
                this.numeroValidator.value &&
                this.cpfValidator.value &&
                this.pisValidator.value &&
                this.senhaValidator.value &&
                this.confirmaSenhaValidator.value ?
                    { value: true, message: '' }:
                    { value: false, message: '' }
        }
    }
})
</script>
<style lang="scss" scoped>

</style>