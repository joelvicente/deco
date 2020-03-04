<template>
<div style="display: flex;">
<div class="content">
    <div class="description">
        <BaseQuestionShell 
          title="Rendimentos."
          question="Quanto é gerado pelo agregado familiar?"
          note="Ajuste o valor calculado caso necessário."/>
<div style="height: 200px;">

</div>
<div>
<AnteriorProximoButtons />
</div>
    </div>
    <div class="graph">
<HorizontalBarGraph />
    </div>

</div>

<div class="recomendacao">
    <div class="dica-text">Dica</div>
    <div class="dica-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
    <div class="dica-subtitle">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</div>
</div>


</div>



</template>

<script>
import BaseQuestionShell from '@/components/BaseQuestionShell.vue'
import AnteriorProximoButtons from '@/components/AnteriorProximoButtons.vue'
import HorizontalBarGraph from '@/components/HorizontalBarGraph.vue'

export default {
  name: 'Income',
  components: {
    BaseQuestionShell,
  AnteriorProximoButtons,
  HorizontalBarGraph
    
  }
}
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
-webkit-box-shadow: inset -45px 0px 102px -98px rgba(0,0,0,0.75);
-moz-box-shadow: inset -45px 0px 102px -98px rgba(0,0,0,0.75);
box-shadow: inset -45px 0px 102px -98px rgba(0,0,0,0.75);
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
-webkit-box-shadow: -45px 0px 102px -98px rgba(0,0,0,0.75);
-moz-box-shadow:  -45px 0px 102px -98px rgba(0,0,0,0.75);
box-shadow:  -45px 0px 102px -98px rgba(0,0,0,0.75);
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
  color: rgb(124,124,124);
  margin-bottom: 20px;
}

.dica-subtitle {
  font-size: 18px;
  text-align: start;
}

</style>