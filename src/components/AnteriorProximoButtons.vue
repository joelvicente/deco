<template>
  <div class="buttons-form">
    <button type="button" v-on:click="PaginaAnterior()">Anterior</button>
    <button type="button" class="proximo" v-on:click="ProximaPagina()">Próximo</button>
  </div>
</template>

<script>
import router from "../router";
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: "AnteriorProximoButtons",
  prop: ["step"],
  data() {
    return {
      step: 1
    };
  },
  computed: {
    ...mapGetters(['getStepForm'])
  },

  methods: {
    ...mapMutations(['SET_STEP']),
    PaginaAnterior() {
      if (this.step > 1) {
        this.SET_STEP(this.step - 1);
        let caminho = this.DevolveCaminhoStep(this.step - 1);
        router.push({ path: "/" + caminho });
      }
    },
    ProximaPagina() {

      if (this.step < 6) {
        this.SET_STEP(this.step + 1);
        let caminho = this.DevolveCaminhoStep(this.step + 1);
        router.push({ path: "/" + caminho });
      }
    },
    DevolveCaminhoStep(step) {
      switch (step) {
        case 1:
          return "income";
        case 2:
          return "credit";
        case 3:
          return "expense";
        default:
          return "income";
      }
    }
  },
  created() {
    var pageURL = window.location.href;
    var lastURLSegment = pageURL.substr(pageURL.lastIndexOf('/') + 1);
      switch (lastURLSegment) {
        case 'income':
          this.SET_STEP(1);
          break;
        case 'credit':
          this.SET_STEP(2);
          break;
        case 'expense':
          this.SET_STEP(3);
          break;
        default:
          this.SET_STEP(1);
          break;
      }
    this.step = this.getStepForm;
  }
};
</script>

<style scoped>
.buttons-form {
  display: flex;
  flex-direction: column;
}

button {
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  font-size: 18px;
  font-weight: 550;
  text-transform: uppercase;
  width: 140px;
}

.proximo {
  margin-top: 20px;
  border-radius: 50px;
  border: 1px solid black;
  padding: 13px 10px;
  color: #1D1D1F;
  border-color: #1D1D1F;
  /*color: rgb(174, 174, 174);
  border-color: rgb(174, 174, 174);*/
}
</style>