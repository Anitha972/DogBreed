<template>
  <div id="app">
    <Header/>
  </div>
</template>

<script>
import Header from "./components/Header"


export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.SetUp {
  background-color:cyan;
  padding: 15px !important;  
}

.SetUp a {
  color:purple;
  font-weight: bold;
}
</style>
