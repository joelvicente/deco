<template>
  <div>
    <section class="main-card">
      <h1>{{ title }}</h1>
      <span class="question">{{ question}}</span>
      <span class="note"> {{ note }}</span>
    </section>
  </div>
</template>

<script>
export default {
  name: 'BaseQuestionShell',
  props: ['title', 'question', 'note']
}
</script>

<style scoped>
.main-card {
  background-color: white;
  max-width: 1700px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

h1 {
  font-size: 4.5ch;
  line-height: 2.3ch;
  color: rgb(123,123,123);
  font-weight: 600;
}

.question {
  font-size: 5ch;
  line-height: 2.1ch;
  color: rgb(22,22,22);
  font-weight: 700;
  text-align: start;

}

.note {
  color: rgb(123,123,123);
    font-size: 3ch;
  line-height: 2.1ch;
  text-align: start;
  display: inline-block;
  margin-top: 25px;
}
</style>