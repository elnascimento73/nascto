<template>
<v-form v-model="valid">
    <v-container>
        <v-content>
        <v-row>
            <v-col
                    cols="6"
                    class="pb-0 pr-0 ps-0 px-0 pa-0"
                    :md="item.tamanhomd"
                    v-bind:key="index"
                    v-for="(item,index) in items"
            >
                <v-layout row wrap>
                        <v-text-field
                                :v-model="item.valor"
                                :label="item.label"
                                class="pr-7"
                                required
                                outlined
                        ></v-text-field>
                </v-layout>
            </v-col>
            <v-spacer></v-spacer>

        </v-row>
        <v-btn
                @click="validarDadosEmpresa()"
        >
            Confirmar
        </v-btn>
        </v-content>
    </v-container>
</v-form>
</template>
<script>
    export default {
        data: () => ({
            valid: false,
            firstname: '',
            lastname: '',
            items: [
                {
                    id: 'codigo_id',
                    label: 'Código',
                    valor: '',
                    tamanhomd:1,


                    // eslint-disable-next-line no-console
                    regra: ()=>{console.log(this)}
                },
                {
                    id: 'nome_empresa',
                    label: 'Nome',
                    valor: '',
                    tamanhomd:6,


                },
                {
                    id: 'nome_fantasia',
                    label: 'Fantasia',
                    valor: '',
                    tamanhomd:5,


                },
                {
                    id: 'endereco_rua',
                    label: 'Endereço',
                    valor: '',
                    tamanhomd:5,


                },
                {
                    id: 'endereco_numero',
                    label: 'Nº',
                    valor: '',
                    tamanhomd:1,


                },
                {
                    id: 'endereco_cep',
                    label: 'CEP',
                    valor: '',
                    tamanhomd:2,


                },
                {
                    id: 'endereco_bairro',
                    label: 'Bairro',
                    valor: '',
                    tamanhomd:3,


                },
                {
                    id: 'endereco_complemento',
                    label: 'Complemento',
                    valor: '',
                    tamanhomd:1,


                },
                {
                    id: 'endereco_cidade',
                    label: 'Cidade',
                    valor: '',
                    tamanhomd:3,


                },
                {
                    id: 'endereco_uf',
                    label: 'UF',
                    valor: '',
                    tamanhomd:1,


                },
                {
                    id: 'codigo_ibge',
                    label: 'Código IBGE',
                    valor: '',
                    tamanhomd:1,


                },
                {
                    id: 'cnpj',
                    label: 'CNPJ',
                    valor: '',
                    tamanhomd:2,


                },
                {
                    id: 'inscricao_estadual',
                    label: 'Inscrição Estadual',
                    valor: '',
                    tamanhomd:2,


                },
                {
                    id: 'inscricao_municipal',
                    label: 'Inscrição Municipal',
                    valor: '',
                    tamanhomd:2,


                },
                {
                    id: 'suframa',
                    label: 'Suframa',
                    valor: '',
                    tamanhomd:2,


                },
                {
                    id: 'cnae',
                    label: 'CNAE',
                    valor: '',
                    tamanhomd:1,


                },
                {
                    id: 'cra_validade',
                    label: 'CRA Validade',
                    valor: '',
                    tamanhomd:1,


                },
                {
                    id: 'rntrc',
                    label: 'RNTRC',
                    valor: '',
                    tamanhomd:1,


                },
                {
                    id: 'cert',
                    label: 'CERT',
                    valor: '',
                    tamanhomd:1,


                },
                {
                    id: 'email_empresa',
                    label: 'E-mail Empresa',
                    valor: '',
                    tamanhomd:3,


                },
                {
                    id: 'email_contador',
                    label: 'E-mail Contador',
                    valor: '',
                    tamanhomd:3,


                },
                {
                    id: 'site_empresa',
                    label: 'Site Empresa',
                    valor: '',
                    tamanhomd:3,


                },
                {
                    id: 'telefone_nes',
                    label: 'Telefone NEs',
                    valor: '',
                    tamanhomd:2,


                },
                {
                    id: 'telefone_os',
                    label: 'Telefone OS',
                    valor: '',
                    tamanhomd:2,


                },
                {
                    id: 'representante_nome',
                    label: 'Nome Representante',
                    valor: '',
                    tamanhomd:6,


                },
                {
                    id: 'representante_email',
                    label: 'E-mail Representante',
                    valor: '',
                    tamanhomd:3,


                },
                {
                    id: 'representante_telefone',
                    label: 'Telefone Representante',
                    valor: '',
                    tamanhomd:2,


                },
                {
                    id: 'representante_endereco',
                    label: 'Endereço Representante',
                    valor: '',
                    tamanhomd:5,


                },
                {
                    id: 'representante_cpf',
                    label: 'CPF Representante',
                    valor: '',
                    tamanhomd:2,


                }],
        }),
        methods:{
            validarDadosEmpresa(){

            }
        }
    }
</script>

<style scoped>

</style>
Tabela [EMPRESAS]:
[CODIGO] [varchar](1) NOT NULL,
[NOME] [varchar](70) NULL,
[FANTASIA] [varchar](50) NULL,
[ENDERECO] [varchar](50) NULL,
[BAIRRO] [varchar](30) NULL,
[NUMERO] [varchar](5) NULL,
[COMPLEMENTO] [varchar](30) NULL,
[CODMUNICIPIO] [varchar](7) NULL,
[CIDADE] [varchar](20) NULL,
[ESTADO] [varchar](2) NULL,
[CEP] [varchar](10) NULL,
[FAX] [varchar](14) NULL,
[FONE] [varchar](14) NULL,
[CNPJ] [varchar](18) NULL,
[INSCEST] [varchar](15) NULL,
[SUFRAMA] [varchar](20) NULL,
[NOME_RESUMIDO] [varchar](30) NULL,
[TRABALHO] [varchar](1) NULL,
[MATRIZ_FILIAL] [varchar](1) NULL,
[EMAIL] [varchar](40) NULL,
[SITE] [varchar](30) NULL,
[INCL_USER] [varchar](10) NULL,
[INCL_COMP] [varchar](10) NULL,
[INCL_DATA] [datetime] NULL,
[MODI_USER] [varchar](10) NULL,
[MODI_COMP] [varchar](10) NULL,
[MODI_DATA] [datetime] NULL,
[EXCL_USER] [varchar](10) NULL,
[EXCL_COMP] [varchar](10) NULL,
[EXCL_DATA] [datetime] NULL,
[CONNECTION_STRING] [varchar](250) NULL,
[FATPVENDA] [money] NULL,
[FCREP] [money] NULL,
[FPOFERTA] [money] NULL,
[RNTRC] [varchar](8) NULL,
[LOGOMARCA] [image] NULL,
[CERT_REGISTRO_ARMADOR] [varchar](10) NULL,
[VALIDADE_CRA] [datetime] NULL,
[REPR_LEGAL_NOME] [varchar](50) NULL,
[REPR_LEGAL_ENDERECO] [varchar](40) NULL,
[REPR_LEGAL_EMAIL] [varchar](30) NULL,
[REPR_LEGAL_TELEFONE] [varchar](30) NULL,
[REPR_LEGAL_CPF] [varchar](14) NULL,
[INSCMUNICIPAL] [varchar](15) NULL,
[CODIGO_CLIENTE] [varchar](6) NULL,
[TELEFONE_NE] [varchar](30) NULL,
[TELEFONE_OS] [varchar](30) NULL,
[ORDEM_EDITOR_ESTOQUE] [varchar](1) NULL,
[CNAE] [varchar](10) NULL,
[ATUALIZACAO_ENDERECO_SERVIDOR] [varchar](50) NULL,
[ATUALIZACAO_SENHA_SERVIDOR] [varchar](20) NULL,
[ATUALIZACAO_NOME_BANCO_SERVIDOR] [varchar](30) NULL
