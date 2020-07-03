<template>
    <v-layout row wrap>
        <v-container>
            <v-card>
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
                            <td class="text-left">{{ props.item.codigo_lei}}</td>
                            <td class="text-right"><v-divider vertical></v-divider></td>
                            <td class="pa-0 text-left">{{ props.item.tipo }}</td>
                            <td class="text-right"><v-divider vertical></v-divider></td>

                            <td class="pa-0 text-left">{{ props.item.aliq_interestadual}}</td>
                            <td class="text-right"><v-divider vertical></v-divider></td>
                            <td class="pa-0 text-left">{{ props.item.aliq_interna}}</td>
                            <td class="text-right"><v-divider vertical></v-divider></td>
                            <td class="pa-0 text-left">{{ props.item.perc_mva}}</td>
                            <td class="text-right"><v-divider vertical></v-divider></td>

                            <td></td>
                        </tr>
                    </template>
                </v-data-table>
            </v-card>
        </v-container>
    </v-layout>
</template>

<script>
    import Vue from 'vue'
    import Vuemask from 'v-mask'
    Vue.use(Vuemask);

    export default {
        data () {
            return {
                headers: [
                    {
                        text: 'Código Lei',
                        align: 'left',
                        value: 'codigo_lei',
                    },
                    {},
                    { text: 'Tipo', value: 'tipo'},
                    {},
                    { text: 'Aliquota Interestadual', value: 'aliq_interestadual'},
                    {},
                    { text: 'Aliquota Interna', value: 'aliq_interna'},
                    {},
                    { text: 'Perc MVA', value: 'perc_mva'},
                    {},
                ],
                items: [],
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

