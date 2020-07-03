<template>

    <v-text-field
            v-model="numero"
            prefix="R$:"
            v-on="mudar(numero)"
    ></v-text-field>

</template>

<script>
    export default {
        name: "FiltroMoney",
        props: ['numer'],
        data() {
            return {
                numero: '',
                valor:'',
                tamanhoAnterior:0,
            }
        },
        computed: {
        },
        methods: {
            mudar(){
                // eslint-disable-next-line no-console
                console.log('tamanho numero; ',this.numero.length);
                // eslint-disable-next-line no-console
                console.log('valor: ',this.valor);
                // eslint-disable-next-line no-console
                console.log('========================================')
                if(this.numero.length === 1){ //0,01
                    this.numero = '0,0' + this.numero;
                }
                if(this.numero.length === 5 && this.numero[2] === '0'){ //0,11
                    this.numero = '0,' + this.numero.substring(3,5)
                }
                if(this.numero.length === 3 && this.tamanhoAnterior === 4 && this.numero[0] === '0'){ //0,11 -> 0,01
                    this.numero = '0,0' + this.numero[2]
                }
                if(this.numero.length === 5 && this.numero[2] !== '0' && this.numero[0] === '0'){ // 1,11
                    this.numero = this.numero[2] +  ',' + this.numero.substring(3,5)
                }
                if(this.numero.length === 3 && this.tamanhoAnterior === 4 && this.numero[0] !== '0'){ //1,11 -> 0,11
                    this.numero = '0,' + this.numero[0] + this.numero[2]
                }
                if(this.numero.length === 5 && this.numero[0] !== '0' && this.numero[1] === ','){ //11,11
                    this.numero = this.numero[0] + this.numero[2] +  ',' + this.numero.substring(3,5)
                }
                if(this.numero.length === 4 && this.tamanhoAnterior === 5){    //11,11 -> 1,11
                    this.numero = this.numero[0] + ',' + this.numero[1] + this.numero[3]
                }
                if(this.numero.length === 6 && this.tamanhoAnterior === 5){  //111,11
                    this.valor += this.numero[5]
                    this.numero = this.numero.substring(0,2) + this.numero[3] +  ',' + this.numero.substring(4,6)
                }
                if(this.numero.length === 5 && this.tamanhoAnterior === 6){    //111,11 -> 11,11
                    this.numero = this.numero.substring(0,2) + ',' + this.numero[2] + this.numero[4]
                }
                if(this.numero.length === 7 && this.tamanhoAnterior === 6){ // 1.111,11
                    this.valor += this.numero[6]
                    this.numero = this.numero[0] + '.' + this.numero.substring(1,3) + this.numero[4] + ',' + this.numero.substring(5,7)
                }
                if(this.numero.length === 7 && this.tamanhoAnterior === 8){    // 1.111,11 -> 111,11
                    this.numero = this.numero[0] + this.numero.substring(2,4) +  ',' + this.numero[4] + this.numero[6]
                }
                if(this.numero.length === 9 && this.tamanhoAnterior === 8){ //11.111,11
                    // eslint-disable-next-line no-console
                    console.log('rodando de 8 para 9')
                    this.numero = this.numero[0] + this.numero[2] + '.' + this.numero.substring(3,5) + this.numero[6] + ',' + this.numero.substring(7,9)
                }
                if(this.numero.length === 8 && this.tamanhoAnterior === 9){    // 11.111,11 -> 1.111,11
                    // eslint-disable-next-line no-console
                    console.log('rodando de 9 para 8')
                    this.numero= this.numero[0] + '.' + this.numero[1] + this.numero.substring(3,5) + ',' + this.numero[5] + this.numero[7]
                }
                if(this.numero.length === 10 && this.tamanhoAnterior === 9){ //111.111,11  11.111,111
                    // eslint-disable-next-line no-console
                    console.log('rodando de 9 para 10')
                    this.numero = this.numero.substring(0,2) + this.numero[3] + '.' + this.numero.substring(4,6) + this.numero[7] + ',' + this.numero.substring(8,10)
                }
                if(this.numero.length === 9 && this.tamanhoAnterior === 10){    // 111.111,11 -> 11.111,11
                    this.numero = this.numero.substring(0,2) + '.' + this.numero[2] + this.numero.substring(4,6) +  ',' + this.numero[6] + this.numero[8]
                }
                if(this.numero.length === 11 && this.tamanhoAnterior === 10){ //1.111.111,11
                    this.numero = this.numero[0] + '.' + this.numero.substring(1,3) +  this.numero[4] + '.' + this.numero.substring(5,7) + this.numero[8] + ',' + this.numero[9] + this.numero[10]
                }
                if(this.numero.length === 11 && this.tamanhoAnterior === 12){    // 1.111.111,11 -> 111.111,11
                    this.numero = this.numero[0] + this.numero.substring(2,4) + '.' + this.numero[4] + this.numero.substring(6,8) +  ',' + this.numero[8] + this.numero[10]
                }

                if(this.numero.length === 13 && this.tamanhoAnterior === 12){ //11.111.111,11
                    this.numero = this.numero[0] + this.numero[2] + '.' + this.numero.substring(3,5) +  this.numero[6] + '.' + this.numero.substring(7,9)
                        + this.numero[10] + ',' + this.numero[11] + this.numero[12]
                }
                if(this.numero.length === 12 && this.tamanhoAnterior === 13){    // 11.111.111,11 -> 1.111.111,11
                    this.numero = this.numero[0] + '.'
                        +  this.numero[1] + this.numero.substring(3,5) +  '.'
                        +  this.numero[5] + this.numero.substring(7,9) + ','
                        + this.numero[9] + this.numero[11]
                }
                if(this.numero.length === 14 && this.tamanhoAnterior === 13){ //111.111.111,11
                    this.numero = this.numero.substring(0,2) + this.numero[3] + '.'
                        + this.numero.substring(4,6) +  this.numero[7] + '.'
                        + this.numero.substring(8,10) + this.numero[11] + ',' + this.numero[12] + this.numero[13]
                }
                if(this.numero.length === 13 && this.tamanhoAnterior === 14){    // 111.111.111,11 -> 11.111.111,11
                    this.numero = this.numero[0] + this.numero[1] + '.'
                        +  this.numero[2] + this.numero.substring(4,6) +  '.'
                        +  this.numero[6] + this.numero.substring(8,10) + ','
                        + this.numero[10] + this.numero[12]
                }
                this.tamanhoAnterior= this.numero.length
                this.valor= this.numero.replace('.','').replace(',','.')
            }
        }
    }

</script>

<style scoped>

</style>
