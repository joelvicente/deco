<template>
  <div class="buttons-form">
    <button type="button">Anterior</button>
    <button type="button" class="proximo">Próximo</button>
  </div>
</template>

<script>
export default {
  name: 'AnteriorProximoButtons'
}
</script>

<style scoped>
.buttons-form {
  display: flex;
  flex-direction: column;
}

button {
  background-color: Transparent;
    background-repeat:no-repeat;
    border: none;
    cursor:pointer;
    overflow: hidden;
    outline:none;
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
    color: rgb(174,174,174);
    border-color: rgb(174,174,174);
}


</style>