
<template>
    <v-container fluid fill-height class="ma-0 pa-0 mt-n4">
        <v-layout row wrap class="align-center justify-center" style="background-color: #546E7A">
            <v-flex xs12 sm8>
                <v-card>
                    <v-layout row wrap>
                        <v-flex sm4>
                            <img :src="require('../../assets/logoEeverCortado2.jpg')" height="100%">
                        </v-flex>
                        <v-flex sm8>
                            <v-card-text class="ma-4">
                                <v-text-field
                                        class="mr-12"
                                        slot="activator"
                                        v-model="email"
                                        label="Login"
                                        persistent-hint
                                        prepend-icon="mdi-account"
                                        :error="credentialError"
                                />
                                <v-text-field
                                        class="mr-12"
                                        slot="activator"
                                        v-model="password"
                                        label="Senha"
                                        type="password"
                                        prepend-icon="mdi-fingerprint"
                                        persistent-hint
                                        :error="passwordError"
                                />
                                <v-combobox
                                        class="mr-12"
                                        slot="activator"
                                        v-model="empresa"
                                        prepend-icon="mdi-store"
                                        label="Empresa Selecionada"
                                        persistent-hint
                                        :items="empresas"
                                />
                            </v-card-text>
                            <v-card-actions>
                                <v-layout row wrap>
                                    <v-flex sm12 class="justify-space-between ml-12 mt-n8 mb-4">
                                        <v-layout row wrap>
                                            <v-flex sm3>
                                                <v-btn :loading="loading" small outlined rounded @click.native="signIn" color="red">
                                                    Entrar
                                                </v-btn>
                                            </v-flex>
                                            <v-flex sm8 class="text-right justify-end">
                                                <span class="caption mr-3 mt-6">1.00.0001 Copyright (R) eEver Soluções Tecnológicas</span>
                                            </v-flex>
                                        </v-layout>
                                    </v-flex>
                                    <v-flex xs12>
                                        <v-progress-linear :indeterminate="true" v-if="loading"/>
                                    </v-flex>
                                    <v-spacer/>
                                </v-layout>
                            </v-card-actions>
                            <v-fade-transition mode="out-in">
                                <v-card v-show="errorMessage" style="min-width: 300px">
                                    <v-layout row wrap class="align-center">
                                        <v-flex class="my-sub-headline text-center">
                                            {{errorMessage}}
                                        </v-flex>
                                    </v-layout>
                                </v-card>
                            </v-fade-transition>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                email: '',
                credentialError: false,
                password: '',
                empresa: '',
                empresas: ['empresa 1', 'empresa 2', 'empresa 3'],
                passwordError: false,
                loading: false,
                errorMessage: undefined
            }
        },
        methods: {
            async signIn() {
                this.loading = true;
                try {
                    this.loading = true;
                    //Chamar função para puxar usuarios
                    //let user = await firebase.auth().signInWithEmailAndPassword(this.email, this.password);
                    //await this.$store.dispatch('getUser', user);
                    //await this.$router.go()
                } catch (e) {
                    switch (e.code) {
                        case 'auth/user-not-found':
                            this.errorMessage = 'Usuário não cadastrado';
                            break;
                        case 'auth/wrong-password':
                            this.errorMessage = 'Senha incorreta';
                            break
                    }
                    setTimeout(() => {
                        this.errorMessage = undefined
                    }, 2000)
                }
                this.loading = false
            }
        },
        mounted() {
            //Verificar se está logado
            // this.$router.push('/')
        }
    }
</script>