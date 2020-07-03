<template>
  <v-app>
    <v-card>
      <v-card-title>

       <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Busca"
                single-line
                hide-details
        ></v-text-field>

        <v-flex xs1>
          <v-spacer></v-spacer>
        </v-flex>

        <v-btn outlined fab class="pink lighten-4">
          <v-icon>mdi-refresh</v-icon>
        </v-btn>

      </v-card-title>
      <v-card outlined class="blue-grey lighten-4" align="center">
        <v-btn
              outlined
              :class="filtros === 'Todos'? cores[0] : cores[1]"
              @click="selectTodos"
              > Todos
        </v-btn>

        <v-btn
              outlined
              :class="filtros === 'NFe'? cores[0] : cores[1]"
              @click="selectNFe"
              > NFe
        </v-btn>
        <v-btn
              outlined
              :class="filtros === 'NFCe'? cores[0] : cores[1]"
              @click="selectNFCe"
              > NFCe
        </v-btn>
      </v-card>
      <v-data-table
              :headers="headers"
              :items="lista_notas"
              :search="search"
              :hide-default-footer="true"
      >
          <template v-slot:item.status="{ item }">
              <v-chip :color="mudarCor(item.status)" dark>{{ item.status }}</v-chip>
          </template>
      </v-data-table>

    </v-card>
  </v-app>
</template>

<script>
  import moment from "moment";
  export default {
    data () {
      return {
        search: '',
        filtros: "Todos",
        cores: ['blue-grey lighten-1 ', 'grey lighten-2'],
        headers: [
          {
            text: 'Nº',
            align: 'left',
            value: 'name',
          },
          { text: 'Série', value: 'serie' },
          { text: 'Valor', value: 'valor' },
          { text: 'Cliente', value: 'cliente' },
          { text: 'Data Emissão', value: 'data_emissao' },
          { text: 'Status', value: 'status' },
        ],
        items: [],
        clientes: ["Olga", "Raul", "Arthur", "Marcos", "Daniel", "Caren", "Adria", "Dom", "Luiz", "Jackson"],
        tipos_status: ["Processando", "Autorizado", "Erro"]
      }
    },
    methods: {
      atualizar(){

      },
      mudarCor(status){
          if (status === "Processando")
              return 'orange';
          else if (status === "Autorizado")
              return 'green';
          else
              return 'red';
      },
      selectTodos(){
        this.filtros = "Todos";
      },
      selectNFe(){
        this.filtros = "NFe";
      },
      selectNFCe(){
        this.filtros = "NFCe";
      }
    },
    computed: {
      lista_notas(){
        let qtd_items = 10;

        for (let i=0; i<qtd_items; i++) {
          let new_item = {name: i+1, serie: (10+i),
            valor: "R$" + (Math.random()*100).toFixed(2),
            cliente: this.clientes[i],
            data_emissao: moment().format('DD/MM/YYYY'),
            status: this.tipos_status[i%3]};
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          this.items.push(new_item);
        }
        return this.items;
      }
    }
  }
</script>
