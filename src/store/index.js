import Vue from "vue";
import Vuex from "vuex";


Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        stepForm: 1,
        despesas: [
          {
            nome: 'Arrendamento',
            valor: 365
          },
          {
            nome: 'Luz, Água e Gás',
            valor: 86
          },
          {
            nome: 'Supermercado',
            valor: 250
          },
                {
            nome: 'Saúde & Fitness',
            valor: 28
          },
                      {
            nome: 'TV, Net e Voz',
            valor: 0
          },
                      {
            nome: 'Transporte',
            valor: 30
          },
                      {
            nome: 'Educação',
            valor: 110
          },
                      {
            nome: 'Lazer',
            valor: 188
          },
                      {
            nome: 'Outro',
            valor: 74
          },
        ],
        creditos: [
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
        ],
        
      },
    getters: {
        getStepForm: state => {
          return state.stepForm;
        },
        getCreditos: state => {
          return state.creditos
        },
        getTotalMensalCredito: state => {
          let valor = 0

          for (let i = 0; i < state.creditos.length; i++) {
            valor += state.creditos[i].valor;
          }

          return valor;
        },
        getTotalMensalDespesa: state => {
          let valor = 0

          for (let i = 0; i < state.despesas.length; i++) {
            valor += state.despesas[i].valor;
          }

          return valor;
        },

        getDespesas: state => {
          return state.despesas
        }
        
      },
      mutations: {
        SET_STEP (state, step) {
          state.stepForm = step
        }
      }
});