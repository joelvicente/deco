<template>
  <div style="width: 400px; height: 100%;">
    <div id="graph-barras">



      <div v-for="despesa in despesas" :key="despesa" class="container-despesa">
        <div class="container-campos">
          <div class="nome-despesa">
            {{ despesa.nome }}
          </div>
          <div class="valor-input">
            <input type="text" align="right" v-model="despesa.valor" >
            <span style="color: rgb(200,200,200); margin-left: 4px; font-size: 35px">€</span>
          </div>
        </div>

        <div class="grey-back">
          <div class="mask" v-bind:style="{ 'width': CalcularPercentagemWidth(despesa.valor) + '%'}">
            <div class="value-gradient">

            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'HorizontalBarGraphCredit',
  data: function() {
  return {
    despesas: [
      {
        nome: 'Cartão Créd.',
        valor: 1380
      },
      {
        nome: 'Habitação',
        valor: 650
      },
      {
        nome: 'Automóvel',
        valor: 0
      },
            {
        nome: 'Pessoal',
        valor: 290
      },
                  {
        nome: 'Outro',
        valor: 60
      }
    ]
    }
  },
    methods: {
    CalcularPercentagemWidth: function (valor) {
      let maxValue = 0;

      for (let i = 0; i < this.despesas.length; i++) { 
        if (this.despesas[i].valor > maxValue) {
           maxValue = this.despesas[i].valor;
        }
      }
      
      let percentagem = Math.ceil((valor / maxValue)  * 100);

      return percentagem;

    }
  }

}
</script>

<style scoped>
input {
border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom-style: hidden;
    background-color: white;
    font-size: 35px;
    width: 170px;
    display: block;
    text-align: right;
    color: #F0677C;
      }

      input:focus {
      outline: none;
      }

.grey-back {
  height: 7px;
  width: 100%;
  background: rgb(200,200,200);
      border-radius: 10px 10px 10px 10px;
}

.value-gradient {
  height: 7px;
  width: 400px;
background: rgb(29,29,31);
background: linear-gradient(90deg, rgba(29,29,31,1) 0%, rgba(249,106,128,1) 100%);
    border-radius: 10px 10px 10px 10px;
}
.mask {
  height: 7px;
  width: 70%;
  border-radius: 10px 10px 10px 10px;
  overflow: hidden;
}

.container-despesa {
  margin-bottom: 30px;
}

.container-campos {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
}

.nome-despesa {
  font-size: 16px;
  text-transform: uppercase; 
}

.valor-input {
    display: flex;
}

</style>