<template>
    <div>
        <BaseQuestionShell title="HELLO!"/>
        <button v-on:click="EntraNoForm">Iniciar</button>
    </div>
</template>

<script>
import BaseQuestionShell from '@/components/BaseQuestionShell.vue'
import router from "../router"; 


export default {
  name: 'Intro',
  components: {
    BaseQuestionShell
  },
  methods: {
    EntraNoForm: function() {
      router.push({ path: '/form/income' })
    }
  }
}
</script>