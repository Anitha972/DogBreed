<template>
  <div>
      <nav class="navbar navbar-expand-sm Header">
         <router-link :to="{name:'Home'}"  class="navbar-brand" exact>Dog Breed</router-link>  
      </nav>
      <router-view />
  </div>   
</template>

<script>
export default {

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

.Header {
  background-color:cyan; 
  padding: 15px !important;  
}

.Header a {
  color:purple; 
  font-weight: bold;
}
</style>