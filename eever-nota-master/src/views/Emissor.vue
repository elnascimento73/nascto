<template>
    <v-layout row wrap>
        <v-container>
            <v-card>
                <v-card-title>
                    <v-text-field
                            v-model="search"
                            append-icon="mdi-magnify"
                            label="Busca"
                            single-line
                            hide-details
                    ></v-text-field>

                </v-card-title>
                <!--
                  <v-data-table
                          :headers="headers"
                          :items="lista_produtos"
                          :search="search"
                          :hide-default-footer="true"
                  ></v-data-table>
                -->

                <v-data-table
                        :headers="headers"
                        :items="lista_produtos"
                        class="elevation-1"
                        :search="search"
                        :hide-default-footer="true"
                        :calculate-widths="true"
                >
                    <template v-slot:item="props">
                        <tr>
                            <td class="text-left">{{ props.item.codigo}}</td>
                            <td class="text-right"><v-divider vertical></v-divider></td>
                            <td class="pa-0 text-left">{{ props.item.descricao }}</td>
                            <td class="text-right"><v-divider vertical></v-divider></td>

                            <td class="pa-0 text-left">{{ props.item.quantidade }}</td>
                            <td class="text-right"><v-divider vertical></v-divider></td>

                            <td class="pa-0 text-left">{{ props.item.valor_unitario}}</td>
                            <td class="text-right"><v-divider vertical></v-divider></td>

                            <td class="pa-0 text-left">{{ props.item.desconto }}</td>
                            <td class="text-right"><v-divider vertical></v-divider></td>

                            <td class="pa-0 text-left">{{ props.item.total }}</td>
                            <td></td>
                        </tr>
                    </template>
                </v-data-table>

                <v-card min-height="50" flui class="blue-grey lighten-4" align="right">
                    <v-layout row wrap>
                        <v-flex xs8></v-flex>
                        <v-flex xs4>
                            <v-card class="palavra headline transparent elevation-0">Total a pagar: R$ {{this.total_nota2}}</v-card>
                        </v-flex>
                    </v-layout>
                </v-card>

                <v-card outlined class="blue lighten-4" align="center">
                    <v-flex xs12>
                        <v-layout row wrap>
                            <v-flex xs6>
                                <span class="font-weight-light headline">Forma de Pagamento:</span>
                            </v-flex>
                            <v-flex xs6>
                                <v-btn
                                        rounded
                                        outlined
                                        :class="cores[cor_antiga['Dinheiro']]"
                                        @click="selectFormaDePagamento('Dinheiro', 0)"
                                >
                                    <v-icon>mdi-currency-usd</v-icon>
                                    Dinheiro
                                </v-btn>
                                <v-btn
                                        rounded
                                        outlined
                                        :class="cores[cor_antiga['Credito']]"
                                        @click="selectFormaDePagamento('Credito', 0)"
                                >
                                    <v-icon>mdi-credit-card</v-icon>
                                    Crédito
                                </v-btn>

                                <v-btn
                                        rounded
                                        outlined
                                        :class="cores[cor_antiga['Debito']]"
                                        @click="selectFormaDePagamento('Debito', 0)"
                                >
                                    <v-icon>mdi-credit-card-minus</v-icon>
                                    Débito
                                </v-btn>
                            </v-flex >
                            <v-flex>
                                <FiltroMoney></FiltroMoney>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                </v-card>

            </v-card>
            <v-dialog v-model="abrir_dialog['Dinheiro']" max-width="500px">
                <v-card>
                    <v-card-text>
                        <v-card class="forma_pagamento headline transparent elevation-0 blue-grey--text">Pagamento Dinheiro</v-card>
                        <p></p>
                        <v-flex xs3>
                            <FiltroMoney v-model="valor_recebido['Dinheiro']"></FiltroMoney>

                        </v-flex>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                                text class="blue-grey white--text"
                                @click="selectFormaDePagamento('Dinheiro', valor_recebido.Dinheiro)"
                        >
                            Confirmar
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
            <v-dialog v-model="abrir_dialog['Credito']" max-width="500px">
                <v-card>
                    <v-card-text>
                        <v-card class="forma_pagamento headline transparent elevation-0 blue-grey--text">Pagamento Crédito</v-card>
                        <p></p>
                        <v-flex xs3>
                            <FiltroMoney v-model="valor_recebido['Credito']"></FiltroMoney>

                        </v-flex>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn
                                text class="blue-grey white--text"
                                @click="selectFormaDePagamento('Credito', valor_recebido.Credito)"
                        >
                            Confirmar
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
            <v-dialog v-model="abrir_dialog['Debito']" max-width="500px">
                <v-card>
                    <v-card-text>
                        <v-card class="forma_pagamento headline transparent elevation-0 blue-grey--text">Pagamento Débito</v-card>
                        <p></p>
                        <v-flex xs3>
                            <v-text-field
                                    v-model="valor_recebido['Debito']"
                                    prefix="R$:"
                                    v-on="mudar(valor_recebido['Debito'],valor_recebido_filtro['Debito'],valor_recebido_tamanho_anterior['Debito'])"
                            ></v-text-field>
                        </v-flex>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn
                                text class="blue-grey white--text"
                                @click="selectFormaDePagamento('Debito', valor_recebido.Debito)"
                        >
                            Confirmar
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-container>
    </v-layout>
</template>

<script>
    import Vue from 'vue'
    import Vuemask from 'v-mask'
    import {VMoney} from 'v-money'
    import FiltroMoney from '../components/FiltroMoney'
    Vue.use(Vuemask);

    function TransformarEmFloat(valor_recebido) {
        var valor = valor_recebido.toLocaleString();
        valor = parseFloat(valor.substring(3).replace(".","").replace(",","."));
        return valor;
    }

    export default {
        components: {FiltroMoney},
        data () {
            return {
                search: '',
                filtros: "",
                money: {
                    decimal: ',',
                    thousands: '.',
                    prefix: 'R$ ',
                    precision: 2,
                    masked: false
                },
                cor_antiga: {"Credito": 1, "Debito": 1,  "Dinheiro": 1},
                cores: ['blue lighten-2 white--text', 'blue lighten-3 white--text'],
                headers: [
                    {
                        text: 'Código',
                        align: 'left',
                        value: 'codigo',
                    },
                    {},
                    { text: 'Descrição', value: 'descricao'},
                    {},
                    { text: 'Quantidade', value: 'quantidade'},
                    {},
                    { text: 'Valor Unitário', value: 'valor_unitario'},
                    {},
                    { text: 'Desconto', value: 'desconto'},
                    {},
                    { text: 'Total', value: 'total'},
                    {}
                ],
                items: [],
                descricao: ["Banana Amassada Com Leite Ninho em Pó", "Feijão", "Ketchup", "Detergente", "Caneca", "Café", "Leite", "Chocolate", "Colher", "Papel"],
                abrir_dialog: {"Credito": false, "Debito": false, "Dinheiro": false},
                dinheiro: false,
                total_nota: 0.0,
                total_nota2:0.0,
                valor_recebido: {"Credito": '', "Debito": '', "Dinheiro": ''},
                valor_recebido_filtro: {"Credito": 0.0, "Debito": 0.0, "Dinheiro": 0.0},
                valor_recebido_tamanho_anterior: {"Credito": 0.0, "Debito": 0.0, "Dinheiro": 0.0}

            }
        },

        directives: {money: VMoney},
        methods: {
            selectFormaDePagamento: function (forma_de_pagamento, valor_recebido) {
                var valor = TransformarEmFloat(valor_recebido);
                let novo_total = parseFloat(this.total_nota) - parseFloat(valor);
                if (novo_total >= 0.00)
                    this.total_nota = novo_total;
                this.total_nota2 = (this.total_nota.toFixed(2)).replace(".", ",");
                this.filtros = forma_de_pagamento;
                this.abrir_dialog[forma_de_pagamento] = !this.abrir_dialog[forma_de_pagamento];
                this.cor_antiga[forma_de_pagamento] = (this.cor_antiga[forma_de_pagamento] + 1) % 2;


                // eslint-disable-next-line no-console
                console.log('valor recebido: ', this.valor_recebido[forma_de_pagamento]);
                // eslint-disable-next-line no-console
                console.log('valor recebido zerado: ', this.valor_recebido[forma_de_pagamento]);
            },
            mudar(valor, semfiltro, tamanhoAnterior){
                // eslint-disable-next-line no-console
                console.log('tamanho numero; ',valor);
                // eslint-disable-next-line no-console
                console.log('valor: ', semfiltro);
                // eslint-disable-next-line no-console
                console.log('========================================')
                if(valor.length === 1){ //0,01
                    valor = '0,0' + valor;
                }
                if(valor.length === 5 && valor[2] === '0'){ //0,11
                    valor = '0,' + valor.substring(3,5)
                }
                if(valor.length === 3 && tamanhoAnterior === 4 && valor[0] === '0'){ //0,11 -> 0,01
                    valor = '0,0' + valor[2]
                }
                if(valor.length === 5 && valor[2] !== '0' && valor[0] === '0'){ // 1,11
                    valor = valor[2] +  ',' + valor.substring(3,5)
                }
                if(valor.length === 3 && tamanhoAnterior === 4 && valor[0] !== '0'){ //1,11 -> 0,11
                    valor = '0,' + valor[0] + valor[2]
                }
                if(valor.length === 5 && valor[0] !== '0' && valor[1] === ','){ //11,11
                    valor = valor[0] + valor[2] +  ',' + valor.substring(3,5)
                }
                if(valor.length === 4 && tamanhoAnterior === 5){    //11,11 -> 1,11
                    valor = valor[0] + ',' + valor[1] + valor[3]
                }
                if(valor.length === 6 && tamanhoAnterior === 5){  //111,11
                    semfiltro += valor[5]
                    valor = valor.substring(0,2) + valor[3] +  ',' + valor.substring(4,6)
                }
                if(valor.length === 5 && tamanhoAnterior === 6){    //111,11 -> 11,11
                    valor = valor.substring(0,2) + ',' + valor[2] + valor[4]
                }
                if(valor.length === 7 && tamanhoAnterior === 6){ // 1.111,11
                    semfiltro += valor[6]
                    valor = valor[0] + '.' + valor.substring(1,3) + valor[4] + ',' + valor.substring(5,7)
                }
                if(valor.length === 7 && tamanhoAnterior === 8){    // 1.111,11 -> 111,11
                    valor = valor[0] + valor.substring(2,4) +  ',' + valor[4] + valor[6]
                }
                if(valor.length === 9 && tamanhoAnterior === 8){ //11.111,11
                    // eslint-disable-next-line no-console
                    console.log('rodando de 8 para 9')
                    valor = valor[0] + valor[2] + '.' + valor.substring(3,5) + valor[6] + ',' + valor.substring(7,9)
                }
                if(valor.length === 8 && tamanhoAnterior === 9){    // 11.111,11 -> 1.111,11
                    // eslint-disable-next-line no-console
                    console.log('rodando de 9 para 8')
                    valor= valor[0] + '.' + valor[1] + valor.substring(3,5) + ',' + valor[5] + valor[7]
                }
                if(valor.length === 10 && tamanhoAnterior === 9){ //111.111,11  11.111,111
                    // eslint-disable-next-line no-console
                    console.log('rodando de 9 para 10')
                    valor = valor.substring(0,2) + valor[3] + '.' + valor.substring(4,6) + valor[7] + ',' + valor.substring(8,10)
                }
                if(valor.length === 9 && tamanhoAnterior === 10){    // 111.111,11 -> 11.111,11
                    valor = valor.substring(0,2) + '.' + valor[2] + valor.substring(4,6) +  ',' + valor[6] + valor[8]
                }
                if(valor.length === 11 && tamanhoAnterior === 10){ //1.111.111,11
                    valor = valor[0] + '.' + valor.substring(1,3) +  valor[4] + '.' + valor.substring(5,7) + valor[8] + ',' + valor[9] + valor[10]
                }
                if(valor.length === 11 && tamanhoAnterior === 12){    // 1.111.111,11 -> 111.111,11
                    valor = valor[0] + valor.substring(2,4) + '.' + valor[4] + valor.substring(6,8) +  ',' + valor[8] + valor[10]
                }

                if(valor.length === 13 && tamanhoAnterior === 12){ //11.111.111,11
                    valor = valor[0] + valor[2] + '.' + valor.substring(3,5) +  valor[6] + '.' + valor.substring(7,9)
                        + valor[10] + ',' + valor[11] + valor[12]
                }
                if(valor.length === 12 && tamanhoAnterior === 13){    // 11.111.111,11 -> 1.111.111,11
                    valor = valor[0] + '.'
                        +  valor[1] + valor.substring(3,5) +  '.'
                        +  valor[5] + valor.substring(7,9) + ','
                        + valor[9] + valor[11]
                }
                if(valor.length === 14 && tamanhoAnterior === 13){ //111.111.111,11
                    valor = valor.substring(0,2) + valor[3] + '.'
                        + valor.substring(4,6) +  valor[7] + '.'
                        + valor.substring(8,10) + valor[11] + ',' + valor[12] + valor[13]
                }
                if(valor.length === 13 && tamanhoAnterior === 14){    // 111.111.111,11 -> 11.111.111,11
                    valor = valor[0] + valor[1] + '.'
                        +  valor[2] + valor.substring(4,6) +  '.'
                        +  valor[6] + valor.substring(8,10) + ','
                        + valor[10] + valor[12]
                }
                tamanhoAnterior= valor.length
                semfiltro= valor.replace('.','').replace(',','.');
                // eslint-disable-next-line no-console
                console.log('tamanho numero; ',valor);

            }

        },
        computed: {
            lista_produtos(){
                let qtd_items = 10;
                if(this.total_nota === 0){
                    for (let i=1; i<=qtd_items; i++) {
                        let valor_unidade = (Math.random()*100).toFixed(2);
                        let valor_unidade2= ((Math.random()*100).toFixed(2)).replace(".",",");
                        let qtd = Math.floor(Math.random()*10);
                        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                        this.total_nota += valor_unidade*qtd;
                        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                        this.total_nota2= (this.total_nota.toFixed(2)).replace(".",",");

                        let new_item = {codigo: i, descricao: this.descricao[i-1], quantidade: qtd,
                            valor_unitario: "R$ " + valor_unidade2,
                            desconto: "0%",
                            total: "R$ " + ((qtd*valor_unidade).toFixed(2)).replace(".",",")};

                        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                        this.items.push(new_item);
                    }
                }
                return this.items;
            },
            mostrarItens(){
                // eslint-disable-next-line no-console
                console.log('itens:', this.valor_recebido)
                return 1
            }
        }

    }
</script>

<style>
    .palavra{
        top: 10px;
        right: 25px;
    }
    .forma_pagamento{
        top: 10px;
        bottom: 100px;
    }
</style>
