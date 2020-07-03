<template>
    <v-container text-xs-center>
        <v-layout>
            <v-flex xs12 sm6 offset-sm3>
                <v-card>
                    <v-card-text>
                        <div class="title font-weight-regular">Login</div>
                        <v-container>
                            <form>
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-text-field
                                                name="email"
                                                label="Email"
                                                id="email"
                                                v-model="email"
                                                type="email"
                                                required></v-text-field>

                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-text-field
                                                name="senha"
                                                label="Senha"
                                                id="senha"
                                                v-model="senha"
                                                type="password"
                                                required></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row wrap>
                                    <v-flex xs12>
                                        <v-btn @click="logar">
                                            Logar
                                        </v-btn>
                                    </v-flex>
                                </v-layout>
                            </form>
                        </v-container>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {

        data: () => ({
            email: '',
            senha: '',
            confirmaSenha: '',

        }),
        methods:{
            logar(){
                this.$router.push('/')
            }
        }
    }
</script>
