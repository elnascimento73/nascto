
<template>
    <v-container fluid class="ma-0 pa-0">
        <v-layout row wrap>
            <v-flex sm12>
                <v-card>
                    <v-card-text>
                        <v-expansion-panels v-model="panel">
                            <v-expansion-panel>
                                <v-expansion-panel-header class="primary--text font-weight-bold">Dados do produto
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <v-layout row wrap>
                                        <v-flex sm12>
                                            <v-checkbox v-model="copyDataProduct" label="Manter dados do produto"
                                                        color="success" value="success" hide-details/>
                                        </v-flex>

                                        <v-flex sm3 class="ml-5">
                                            <v-text-field v-model="product.code" label="Código" outlined dense/>
                                        </v-flex>
                                        <v-flex sm5 class="mx-5">
                                            <v-text-field v-model="product.description" label="Descrição" outlined
                                                          dense/>
                                        </v-flex>
                                    </v-layout>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel>
                                <v-expansion-panel-header class="primary--text font-weight-bold">Dados do fornecedor
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <v-layout column wrap>
                                        <v-flex sm12>
                                            <v-checkbox v-model="copyDataGroup" label="Manter dados do fornecedor"
                                                        color="success" value="success" hide-details/>
                                        </v-flex>
                                    </v-layout>
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                        </v-expansion-panels>


                    </v-card-text>
                    <v-card-actions class="mx-3">
                        <v-flex sm6>

                        </v-flex>
                        <v-spacer/>
                        <v-btn rounded color="success" dense>Salvar</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
    export default {
        data: () => ({
            panel: [0, 1],
            product: {
                code: '',
                description: '',
            },
            copyDataProduct: false,
            copyDataGroup: false,
        })
    }
</script>