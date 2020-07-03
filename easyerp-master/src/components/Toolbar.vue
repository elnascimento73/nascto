<template>
    <v-container fluid>
        <v-layout row wrap>
            <v-flex sm12>
                <v-toolbar color="#546E7A" fixed dense dark class="hidden-print-only">
                    <v-toolbar-title>
                        <router-link to="/" tag="span" style="cursor: pointer">
                            <!--
                            <v-img v-if="selectedUnit" :src="selectedUnit.logo" aspect-radio="1" width="240"></v-img>
                            -->
                            <v-layout row wrap class="ma-0 pa-0">
                                <h4><v-icon left>home</v-icon>Empresa 1</h4>
                            </v-layout>
                        </router-link>
                    </v-toolbar-title>
                    <v-spacer/>
                    <v-toolbar-items>
                        <v-text-field outlined dense prepend-inner-icon="search" class="mt-1 mx-3"/>
                        <v-card class="transparent mt-n1 mr-n5" flat>
                            <v-layout row wrap>
                                <v-list-item>
                                    <v-icon left>account_circle</v-icon>
                                    <v-list-item-content>
                                        <v-list-item-title class="font-weight-bold">André Sampaio</v-list-item-title>
                                        <v-list-item-subtitle>
                                            info
                                        </v-list-item-subtitle>
                                    </v-list-item-content>
                                    <v-btn fab icon class="mb-1"><v-icon large>more_vert</v-icon></v-btn>
                                </v-list-item>
                            </v-layout>
                        </v-card>
                    </v-toolbar-items>
                </v-toolbar>
            </v-flex>
        </v-layout>
    </v-container>
</template>