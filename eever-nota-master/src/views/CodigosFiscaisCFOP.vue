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
                            <td class="text-left">{{ props.item.codigo}}</td>
                            <td class="text-right"><v-divider vertical></v-divider></td>
                            <td class="pa-0 text-left">{{ props.item.descricao }}</td>
                            <td class="text-right"><v-divider vertical></v-divider></td>

                            <td class="pa-0 text-left">{{ props.item.cfop_convertido }}</td>
                            <td class="text-right"><v-divider vertical></v-divider></td>

                            <td class="pa-0 text-left">{{ props.item.mva}}</td>
                            <td class="text-right"><v-divider vertical></v-divider></td>

                            <td class="pa-0 text-left">{{ props.item.icms }}</td>
                            <td class="text-right"><v-divider vertical></v-divider></td>

                            <td class="pa-0 text-left">{{ props.item.cst_pis_cofins }}</td>
                            <td class="text-right"><v-divider vertical></v-divider></td>

                            <td class="pa-0 text-left">{{ props.item.cst_pis_cofins_isento }}</td>
                            <td class="text-right"><v-divider vertical></v-divider></td>

                            <td class="pa-0 text-left">{{ props.item.combustivel_lubrificante }}</td>
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
                        text: 'Código',
                        align: 'left',
                        value: 'codigo',
                    },
                    {},
                    { text: 'Descrição', value: 'descricao'},
                    {},
                    { text: 'CFOP Convertido', value: 'cfop_convertido'},
                    {},
                    { text: 'MVA', value: 'mva'},
                    {},
                    { text: 'ICMS', value: 'icms'},
                    {},
                    { text: 'CST PIS/COFINS', value: 'cst_pis_cofins'},
                    {},
                    { text: 'CST PIS/COFINS ISENTO', value: 'cst_pis_cofins_isento'},
                    {},
                    { text: 'Combustível/Lubrificante?', value: 'combustivel_lubrificante'},
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

