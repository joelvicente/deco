<template>
  <div class="menu">
    <section class="main-card">
      <span class="top-title">Saúde Financeira</span>
      
    </section>
  </div>
</template>

<script>
export default {
  name: 'TopMenuForm'
}
</script>

<style scoped>

.menu {
  background: white;
  width: 100%;
  height: 50px;
border-bottom: 1px solid #b1b1b1;
}

.main-card {
  background-color: white;
  max-width: 1700px;
  height: 50px;
  display: flex;
  align-items: center;
  
}

h1 {
  font-size: 7ch;
}

.top-title {
  margin-left: 45px;
  display: inline-block;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 17px;
}
</style>