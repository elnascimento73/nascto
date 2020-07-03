<template>
    <v-container fluid class="ma-0 pa-0">
        <v-layout row wrap class="ma-0 pa-0">
            <v-flex sm12>
                <Toolbar class="ma-0 pa-0" style="width: 100%"/>
            </v-flex>
            <v-flex sm2>
                <Menu class="ma-0 pa-0 fill-height"/>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
    import Toolbar from "../components/Toolbar"
    import Menu from "../components/Menu"

    export default {
        components: {Toolbar, Menu},
        data: () => ({
            //
        }),
    }
</script>