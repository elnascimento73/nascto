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
                            <td class="text-left">{{ props.item.cst_icms}}</td>
                            <td class="text-right"><v-divider vertical></v-divider></td>
                            <td class="pa-0 text-left">{{ props.item.descricao_icms }}</td>
                            <td class="text-right"><v-divider vertical></v-divider></td>

                            <td class="pa-0 text-left">{{ props.item.csosn }}</td>
                            <td class="text-right"><v-divider vertical></v-divider></td>
                            <td class="pa-0 text-left">{{ props.item.cst_conv }}</td>
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
                        text: 'COD_CST',
                        align: 'left',
                        value: 'cod_cst',
                    },
                    {},
                    { text: 'Descrição_CST', value: 'descricao_cst'},
                    {},
                    { text: 'CSOSN', value: 'csosn'},
                    {},
                    { text: 'CST_CONV', value: 'cst_conv'},
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

