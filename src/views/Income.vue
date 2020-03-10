<template>
  <div>
    <TopMenuForm />

    <div style="display: flex;">
      <div class="content">
        <div class="description">
          <BaseQuestionShell
            title="Rendimentos."
            question="Quanto é gerado pelo agregado familiar?"
            note="Ajuste o valor calculado caso necessário."
          />
          <div class="input-container">
            <div>
              <input type="number" class="txtIncome" v-model="incomeTotal" />
              <span class="txt-sec">€ mensais para</span>
              <input type="number" class="txtPessoas" v-model="numeroPessoas" />
              <span class="txt-sec">pessoa(s)</span>
            </div>
          </div>

          <div>
            <AnteriorProximoButtons :step="'1'" />
          </div>
        </div>
         <div id="graph">
           <apexchart width="500" type="radialBar" :options="options" :series="series"></apexchart>
          </div>

      </div>

      <div class="recomendacao">
        <div class="dica-text">Dica</div>
        <div class="dica-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        <div
          class="dica-subtitle"
        >Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseQuestionShell from "@/components/BaseQuestionShell.vue";
import AnteriorProximoButtons from "@/components/AnteriorProximoButtons.vue";
import TopMenuForm from "@/components/TopMenuForm.vue";
import VueApexCharts from 'vue-apexcharts'

export default {
  name: "Income",
  components: {
    BaseQuestionShell,
    AnteriorProximoButtons,
    TopMenuForm,
    apexchart: VueApexCharts
  },
  data: function() {
    return {
      incomeTotal: Number,
      numeroPessoas: Number,
      options: {
  chart: {
    height: 280,
    type: "radialBar",
    width: '300px'
  },
  
  series: [67],
  
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 15,
        size: "70%"
      },
      
      track: {
        dropShadow: {
          enabled: true,
          top: 2,
          left: 0,
          blur: 4,
          opacity: 0.15
        }
      },
     
      dataLabels: {
        showOn: "always",
        name: {
          offsetY: -10,
          show: true,
          color: "#888",
          fontSize: "13px"
        },
        value: {
          color: "#111",
          fontSize: "30px",
          show: true
        }
      }
    }
  },
           fill: {
             colors: '#1D1D1F',
              type: 'gradient',
              gradient: {
                shade: 'dark',
                type: 'horizontal',
                shadeIntensity: 0.5,
                gradientToColors: ['#2CD9C5'],
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100]
              }
            },
  stroke: {
    lineCap: "round",
  },
  labels: ["Progress"]
},
      series: [67],

    };
  }
};
</script>

<style>
.content {
  display: flex;
  background: white;
  height: 80vh;
  padding: 60px 45px;

  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 65%;
}
.description {
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 40%;
}

.graph {
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 60%;

  display: flex;
  justify-content: center;
}

.dica {
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 30%;
  height: 100%;
  width: 100%;
  border: solid 0px #000;
  border-color: transparent #000 transparent transparent;
  border-radius: 0 800px 800px 0;
  -webkit-box-shadow: inset -45px 0px 102px -98px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: inset -45px 0px 102px -98px rgba(0, 0, 0, 0.75);
  box-shadow: inset -45px 0px 102px -98px rgba(0, 0, 0, 0.75);
}

.recomendacao {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0px 20px;

  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 35%;

  background: white;
  -webkit-box-shadow: -45px 0px 102px -98px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -45px 0px 102px -98px rgba(0, 0, 0, 0.75);
  box-shadow: -45px 0px 102px -98px rgba(0, 0, 0, 0.75);
  max-width: 350px;
}
.dica-text {
  font-size: 20px;
  text-transform: uppercase;
  text-align: start;
  width: 100%;
  margin-bottom: 20px;
}

.dica-title {
  font-size: 28px;
  text-align: start;
  color: rgb(124, 124, 124);
  margin-bottom: 20px;
}

.dica-subtitle {
  font-size: 18px;
  text-align: start;
}

.txtIncome {
  width: 187px;
}

.txtPessoas {
  width: 50px;
}

.txtIncome,
.txtPessoas {
  outline: none;
  border: none;
  color: #25c1b0;
  font-size: 32px;
  font-weight: 600;
  border-bottom-color: #d3d3d3;
  border-bottom-width: 2px;
  border-bottom-style: solid;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

.txt-sec {
  font-size: 36px;
  font-weight: 600;
  color: #d3d3d3;
}

.input-container {
  display: flex;
  align-items: center;
  height: 220px;
  margin-bottom: 50px;
}

.input-container > div {
  height: 141px;
  width: 220px;
  line-height: 38px;
}
</style>