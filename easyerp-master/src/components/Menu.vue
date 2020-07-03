<template>
    <v-card height="560px" width="256" class="mx-auto">
        <v-navigation-drawer permanent>

            <v-list dense nav>
                <v-list-item
                        v-for="item in items"
                        :key="item.title"
                        link
                >
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </v-card>
</template>
<script>
    export default {
        data() {
            return {
                items: [
                    {title: 'Cadastro', icon: 'mdi-view-dashboard'},
                    {title: 'Vendas', icon: 'mdi-image'},
                    {title: 'Estoque', icon: 'mdi-help-box'},
                    {title: 'Faturamento', icon: 'mdi-view-dashboard'},
                    {title: 'Controles', icon: 'mdi-image'},
                    {title: 'Pagar', icon: 'mdi-help-box'},
                    {title: 'Food', icon: 'mdi-view-dashboard'},
                    {title: 'Transportadoras', icon: 'mdi-image'},
                    {title: 'Parking', icon: 'mdi-help-box'},
                    {title: 'Outros', icon: 'mdi-view-dashboard'},
                    {title: 'Produção', icon: 'mdi-image'},
                ],
                right: null,
            }
        },
    }
</script>