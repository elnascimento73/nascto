<template>
  <v-app>
    <div>
      <v-toolbar v-if="hide">
        <v-toolbar-items>

          <v-btn
                  outlined
                  fab
                  class="pink--text"
                  @click="drawer = !drawer"
          >
            <v-icon> mdi-menu </v-icon>
          </v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>

        <v-toolbar-items>

          <v-btn
                  outlined
                  fab
                  class="pink--text"
                  @click="abrir_emissor()"
          >
            <v-icon> mdi-plus-thick </v-icon>
          </v-btn>

        </v-toolbar-items>

      </v-toolbar>
    </div>

    <!--
     MENU LATERAL
     -->

    <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
            app
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://www.bleedingcool.com/wp-content/uploads/2019/12/babyyoda-1.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Olga Leão</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>

        <v-list-item
                v-for="item in items"
                :key="item.title"
                :to="item.link"
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

    <v-content>
      <router-view></router-view>
    </v-content>

  </v-app>
</template>

<script>


export default {
  name: 'App',

  data: () => ({
      drawer: null,
      items: [
        { title: 'Notas Fiscais', icon: 'mdi-note-multiple-outline', link: '/' },
        { title: 'Dados Básicos', icon: 'mdi-account-card-details-outline', link: '/dadosbasicos' },
        { title: 'Dados Fiscais', icon: 'mdi-clipboard-text', link: '/dadosfiscais' },
        { title: 'Ferramentas', icon: 'mdi-tools', link:'/ferramentas' },
        { title: 'Check-List', icon: 'mdi-format-list-bulleted' },
      ]
  }),
  computed:{
    hide(){
      return this.$route.path !== '/login'; // && this.$route.path !== '/dadosbasicos';
    }
  },
  methods: {
    abrir_emissor(){
      this.$router.push('/emissor')
    },
    abrir_monitor(){
      this.$router.push('/')
    }
  }};
</script>
