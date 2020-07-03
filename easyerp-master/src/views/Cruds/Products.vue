<template>
    <v-container fluid>
        <v-layout row wrap>
            <v-flex sm12>
                <v-card>
                    <v-card-title>
                        <v-flex sm12>
                            <v-text-field outlined placeholder="Nome do produto" dense prepend-inner-icon="search"/>
                        </v-flex>
                        <v-flex sm12 class="text-right mt-n2">
                            <v-btn fab dark x-small color="primary" class="mx-1">
                                <v-icon @click="newProduct = true">add</v-icon>
                            </v-btn>
                            <v-btn fab dark x-small color="primary" class="mx-1">
                                <v-icon>edit</v-icon>
                            </v-btn>
                            <v-btn fab dark x-small color="primary" class="mx-1">
                                <v-icon>dynamic_feed</v-icon>
                            </v-btn>
                            <v-btn fab dark x-small color="primary" class="mx-1">
                                <v-icon>delete</v-icon>
                            </v-btn>
                        </v-flex>
                    </v-card-title>
                    <v-card-text>
                        <v-data-table v-model="selectedProduct"
                                      :headers="headers"
                                      :items="products"
                                      single-select
                                      item-key="name"
                                      show-select
                                      class="elevation-1"
                        />
                    </v-card-text>
                </v-card>
                <v-dialog v-model="newProduct"><RegisterProduct/></v-dialog>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import RegisterProduct from "../../views/Register/Products"
    export default {
        components: {RegisterProduct},
        data() {
            return {
                singleSelect: false,
                newProduct: false,
                selectedProduct: [],
                headers: [
                    {
                        text: 'Nome',
                        align: 'start',
                        sortable: false,
                        value: 'name',
                    },
                ],
                products: [
                    {
                        name: 'Frozen Yogurt',
                        calories: 159,
                        fat: 6.0,
                        carbs: 24,
                        protein: 4.0,
                        iron: '1%',
                    },
                    {
                        name: 'Ice cream sandwich',
                        calories: 237,
                        fat: 9.0,
                        carbs: 37,
                        protein: 4.3,
                        iron: '1%',
                    },
                    {
                        name: 'Eclair',
                        calories: 262,
                        fat: 16.0,
                        carbs: 23,
                        protein: 6.0,
                        iron: '7%',
                    },
                    {
                        name: 'Cupcake',
                        calories: 305,
                        fat: 3.7,
                        carbs: 67,
                        protein: 4.3,
                        iron: '8%',
                    },
                ],
            }
        },
    }
</script>