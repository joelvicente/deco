<template>
  <div>
    <TopMenuForm />
    <div style="display: flex;">
      <div class="content">
        <div class="description">
          <BaseQuestionShell
            title="Despesas."
            question="Quanto é gasto pelo agregado familiar todo mês?"
            note="Para começar, podes arredondar um valor. No entanto, caso prefira, pode detalhar por categorias de crédito."
          />
          <div class="input-container">
            <div>
              <input v-bind:class="{ 'input-disabled': tipoVisao == 'categorias'}" v-bind:style="{ 'width': tipoVisao == 'categorias' ? ((creditoMensal.length + 1) * 8) + 'px !important' : '187px'}" type="number" class="txtIncome" v-model="creditoMensal" />

              <span class="txt-sec">€ mensais em créditos.</span>
            </div>
          </div>
          <div>
            <AnteriorProximoButtons step="2" />
          </div>
        </div>
        <div class="graph">
          <div style="margin-bottom: 50px; margin-top: 40px">
            <div class="div-buttons">
              <button v-bind:class="{ 'button-selecionado': tipoVisao == 'geral'}" v-on:click="TipoVisaoGeral()">visão geral</button>
              <button v-bind:class="{ 'button-selecionado': tipoVisao == 'categorias'}" v-on:click="TipoVisaoCategorias()">categorias</button>
            </div>
          </div>
          <HorizontalBarGraph />
        </div>
        <div class="dica2">
          <div class="dica-child"></div>
        </div>
      </div>
      <div class="recomendacao"></div>
    </div>
  </div>
</template>

<script>
import BaseQuestionShell from "@/components/BaseQuestionShell.vue";
import AnteriorProximoButtons from "@/components/AnteriorProximoButtons.vue";
import HorizontalBarGraph from "@/components/HorizontalBarGraph.vue";
import TopMenuForm from "@/components/TopMenuForm.vue";
import { mapGetters } from 'vuex'

export default {
  name: "Expense",
  data: function() {
    return {
      stepCredit: 2,
      creditoMensal: 0,
      tipoVisao: 'geral'
    };
  },
  components: {
    BaseQuestionShell,
    AnteriorProximoButtons,
    HorizontalBarGraph,
    TopMenuForm
  },
  methods: {
    TipoVisaoGeral() {
      this.tipoVisao = 'geral';
    },
    TipoVisaoCategorias() {
      this.tipoVisao = 'categorias';
    }
  },
  computed: {
    ...mapGetters(['getTotalMensalDespesa'])
  },
  created() {
    this.creditoMensal = this.getTotalMensalDespesa
  }
};
</script>

<style>
.graph {
  flex-direction: column;
  align-items: center;
}

.div-buttons {
  background-color: #F3F3F4;
  border-radius: 80px;
  width: 260px;
  height: 40px;
  display: flex;
  justify-content: space-around;
}

button {
background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
  cursor: pointer;
	outline: inherit;
  font-weight: 600;
  width: 130px;
    border-radius: 80px;
}

.button-selecionado {
  background: white;
  border-color: #F3F3F4;
    border-width: 3px;
    border-style: solid;
}

.creditoMensal-div {

    font-size: 32px;
  font-weight: 600;
  border-bottom-color: #d3d3d3;
  border-bottom-width: 2px;
  border-bottom-style: solid;
}

.input-disabled {
 border-bottom: none; 
 width: none;
}

</style>