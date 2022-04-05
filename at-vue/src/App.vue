<template>
  <div id="app">
    <router-link to="/">Sobre - Assessment</router-link>
    <br />
    <br />
    <router-link to="/loja">Loja do Marcos</router-link>
  <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
