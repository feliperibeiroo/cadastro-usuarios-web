<template>
    <b-modal 
        @ok="modalOk"
        scrollable 
        v-model="modalShow"
        cancel-title="Cancelar"
        title="Alterar Senha"
        :ok-disabled="!okValidator.value"
    >
        <span class="box-entrada">
            <label for="senha-atual">Senha atual</label>
            <b-form-input
                :state="senhaAtualValidator.value" 
                v-model="senhaAtual"
                aria-describedby="senha-atual-feedback"
                placeholder="Senha atual"
                type="password"
            ></b-form-input>
            <b-form-invalid-feedback id="senha-atual-feedback">
                {{ senhaAtualValidator.message }}
            </b-form-invalid-feedback>
        </span>
        <span class="box-entrada">
            <label for="senha">Nova senha</label>
            <b-form-input 
                :state="senhaValidator.value" 
                v-model="senha"
                aria-describedby="senha-feedback"
                placeholder="Nova senha" 
                type="password"
            ></b-form-input>
            <b-form-invalid-feedback id="senha-feedback">
                {{ senhaValidator.message }}
            </b-form-invalid-feedback>
        </span>
        <span class="box-entrada">
            <label for="Confirme a nova senha">Confirme a nova senha</label>
            <b-form-input 
                :state="confirmaSenhaValidator.value" 
                v-model="senhaConfirmacao"
                aria-describedby="senha-confirmacao-feedback"
                placeholder="Confirme a nova senha" 
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

interface validator {
    value: boolean | null
    message: string
}

export default Vue.extend({
    data() {
        return {
            senhaAtual: undefined as string | undefined,
            senha: undefined as string | undefined,
            senhaConfirmacao: undefined as string | undefined,
            modalShow: false
        }
    },
    
    methods: {
        ...mapActions(['mudarSenha']),
        modalOk() {
            let changePasswordData = {
                senhaNova: this.senha,
                senhaAnterior: this.senhaAtual
            } as Requests.MudarSenhaRequest
            this.mudarSenha(changePasswordData)
        },
        showModal() {
            this.senha = undefined
            this.senhaAtual = undefined
            this.senhaConfirmacao = undefined
            this.modalShow = true
        },
        hideModal() {
            this.modalShow = false
        },
    },

    computed: {
        senhaAtualValidator (): validator {
            return this.senhaAtual==="" ? 
                {value: false, message: 'Campo obrigatório'} :
                this.senhaAtual===undefined ?
                    { value: null, message: '' }:
                    { value: true, message: 'ok' }
        },
        senhaValidator (): validator {
            return this.senha==="" ? 
                {value: false, message: 'Campo obrigatório'} :
                this.senha===undefined ?
                    { value: null, message: '' }:
                    !((this.senha || "").length>=8) ?
                    { value: false, message: 'A senha precisa ter pelo menos 8 carateres' } :
                    { value: true, message: 'ok' }
        },
        confirmaSenhaValidator (): validator {
            return this.senhaConfirmacao==="" ? 
                {value: false, message: 'Campo obrigatório'} :
                this.senhaConfirmacao===undefined ?
                    { value: null, message: '' }:
                    this.senhaConfirmacao!=this.senha ?
                    { value: false, message: 'As senhas não conferem' } :
                    !this.senhaValidator.value ?
                        { value: false, message: 'Senha inválida' }:
                        { value: true, message: '' }
        },
        okValidator (): validator {
            return this.senhaValidator.value &&
                this.confirmaSenhaValidator.value ?
                    { value: true, message: '' }:
                    { value: false, message: '' }
        }
    }
})
</script>
<style lang="scss" scoped>

</style>