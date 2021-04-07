<template>
  <div id="app">
    
    <nav class="navbar navbar-expand-sm SetUp">
      <router-link :to="{name:'Home'}"  class="navbar-brand" exact>Dog Breed</router-link>  
    </nav>

    <router-view />
  </div>
</template>

<script>
//import HelloWorld from './components/Home.vue'

export default {
  name: 'App',
  components: {
    
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
