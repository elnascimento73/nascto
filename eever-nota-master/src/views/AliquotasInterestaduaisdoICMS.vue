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
                            <td class="text-left">{{ props.item.destino}}</td>
                            <td class="text-right"><v-divider vertical></v-divider></td>
                            <td class="pa-0 text-left">{{ props.item.origem }}</td>
                            <td class="text-right"><v-divider vertical></v-divider></td>

                            <td class="pa-0 text-left">{{ props.item.aliquota }}</td>
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
                        text: 'Origem',
                        align: 'left',
                        value: 'origem',
                    },
                    {},
                    { text: 'Destino', value: 'destino'},
                    {},
                    { text: 'Aliquota', value: 'aliquota'},
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

