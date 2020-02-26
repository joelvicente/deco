<template>
  <div>
    <section class="main-card">
      <h1>{{ title }}</h1>
    </section>
  </div>
</template>

<script>
export default {
  name: 'BaseQuestionShell',
  props: ['title']
}
</script>

<style scoped>
.main-card {
  background-color: white;
  max-width: 1700px;
}

h1 {
  font-size: 7ch;
}
</style>