<template>
    <v-card
            class="mx-auto"
    >

        <v-list three-line>
            <template v-for="(item, index) in items">



                    <v-divider
                            v-if="item.divider"
                            :key="index"
                            :inset="item.inset"
                    ></v-divider>

                    <v-list-item
                            v-else
                            :key="item.title"
                            @click="abrir_link(item.link)"
                    >
                        <v-list-item-avatar>
                            <v-img :src="item.avatar"></v-img>
                        </v-list-item-avatar>

                        <v-list-item-content>
                            <v-list-item-title v-html="item.title"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

            </template>
        </v-list>
    </v-card>
</template>

<script>
    export default {
        name: 'DadosBasicos',
        data: () => ({
            items: [
              //  { header: 'Today' },
                {
                    avatar: 'https://pps.whatsapp.net/v/t61.24694-24/66182550_358287738443246_6717907567722364928_n.jpg?oe=5E220766&oh=93bd68c0d645acd5ac237e5b174c96a9',
                    title: 'eEver Soluções Tecnológicas',
                    subtitle: "<span class='text--primary'>(92) 3302-0900</span> contato@eever.com.br",
                    link: '/'
                },
                { divider: true, inset: true },
                {
                    //avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
                    title: 'Clientes', //<span class="grey--text text--lighten-1">4</span>',
                    //subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.",
                },
                { divider: true, inset: true },
                {
                    //avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
                    title: 'Produtos/Serviços',
                    //subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?",
                },
            ],
        }),
        methods: {
            abrir_link(link){
                this.$router.push(link);
            }
        }
    };
</script>

<style scoped>

</style>
