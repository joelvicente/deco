<template>
<div style="display: flex;">
<div class="content">
    <div class="description">
        <BaseQuestionShell 
          title="Créditos e Dívidas."
          question="Quanto o valor gasto em crédito por mês?"
          note="Para começar, podes arredondar um valor. No entanto, caso prefira, pode detalhar por categorias de crédito."/>
<div style="height: 200px;">

</div>
<div>
<AnteriorProximoButtons />
</div>
    </div>
    <div class="graph">
<HorizontalBarGraph />
    </div>
    <div class="dica2">
      <div class="dica-child">

      </div>
    </div>
    
</div>
<div class="recomendacao">

</div>


</div>

</template>

<script>
import BaseQuestionShell from '@/components/BaseQuestionShell.vue'
import AnteriorProximoButtons from '@/components/AnteriorProximoButtons.vue'
import HorizontalBarGraph from '@/components/HorizontalBarGraph.vue'

export default {
  name: 'Credit',
  components: {
    BaseQuestionShell,
    AnteriorProximoButtons,
    HorizontalBarGraph
  }
}
</script>

<style>


</style>