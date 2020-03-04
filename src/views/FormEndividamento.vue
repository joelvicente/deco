<template>
    <div>
        <TopMenuForm />
        
        <div>
          <div v-if="pagina == 0">
             <Income/>
          </div>
          <div v-if="pagina == 1">
            <Credit />
          </div>
        </div>


        <button v-on:click="ProximoTab">Próximo</button>

    </div>
</template>

<script>
import Income from '@/views/Income.vue'
import Credit from '@/views/Credit.vue'
import TopMenuForm from "@/components/TopMenuForm.vue"

export default {
  name: 'Intro',
  data: function() {
    return {
      pagina: 0
    };
  },
  components: {
    Income,
    Credit,
    TopMenuForm
  },
  methods: {
    ProximoTab: function() {
      this.pagina += 1;
    }
  }
}
</script>