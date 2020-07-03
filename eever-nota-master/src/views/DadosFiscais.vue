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
        name: 'DadosFiscais',
        data: () => ({
            items: [
                //  { header: 'Today' },
                {
                    //avatar: 'https://pps.whatsapp.net/v/t61.24694-24/66182550_358287738443246_6717907567722364928_n.jpg?oe=5E220766&oh=93bd68c0d645acd5ac237e5b174c96a9',
                    title: 'Configurações Fiscais',
                    // subtitle: "<span class='text--primary'>(92) 3302-0900</span> contato@eever.com.br",
                },
                { divider: true, inset: true },
                {
                    title: 'CFOP', //<span class="grey--text text--lighten-1">4</span>',
                    link: '/codigosfiscaisCFOP'
                },
                { divider: true, inset: true },
                {
                    //avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
                    title: 'NCM',
                    //subtitle: "",
                },
                { divider: true, inset: true },
                {
                    //avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
                    title: 'Alíquotas Interestaduais do ICMS',
                    link: '/aliquotasinterestaduaisICMS'
                },
                { divider: true, inset: true },
                {
                    //avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
                    title: 'Natureza das Operações',
                    link: '/naturezadasoperacoes'
                },
                { divider: true, inset: true },
                {
                    //avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
                    title: 'CST PIS',
                    link: '/cst_pis'
                },
                { divider: true, inset: true },
                {
                    //avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
                    title: 'CST Cofins',
                    link: '/cst_cofins'
                },
                { divider: true, inset: true },
                {
                    //avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
                    title: 'CST ICMS',
                    link: '/cst_icms'
                },
                { divider: true, inset: true },
                {
                    //avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
                    title: 'CST IPI',
                    link: '/cst_ipi'
                },
                { divider: true, inset: true },
                {
                    //avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
                    title: 'CSOSN',
                    link: '/csosn'
                },
                { divider: true, inset: true },
                {
                    //avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
                    title: 'Alíquotas de MVA',
                    link: '/aliquotasdeMVA'
                },
                { divider: true, inset: true },
                {
                    //avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
                    title: 'Cadastro de textos legais da NFe',
                    link: 'cadastro_textos_nfe'
                },
                // { divider: true, inset: true },
            ],
        }),
        methods: {
            abrir_link(link){
                this.$router.push(link);
            }
        }
    }
</script>

<style scoped>

</style>