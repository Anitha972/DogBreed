<template>
  <div class="container">
     <table v-if="checkSubBreeds" class="table table-bordered D_Border">

        <thead class="thead-light"> 
            <tr>
              <th class="heading"><h5>SubBreeds of {{BreedNameForSearch|capitalize }}</h5></th>
            </tr>
        </thead>

       <tbody>
            <tr class="SubBreedData" v-for="(subBreed,index) in subBreeds" :key="index"> 
               <td>{{subBreed|capitalize}}</td>
            </tr>
       </tbody>

     </table>
  </div>    
</template>

<script>

export default {
   name: 'SubBreed',
   data() {
      return {
        subBreeds: [],
        checkSubBreeds: false,
        ErrorMsg: ''
      }  
   },
   props: ['BreedNameForSearch'],
   methods: {
     goToErrorPage()
     {
       this.ErrorMsg = "Sub Breeds for "+this.BreedNameForSearch+" not existed";
        this.$router.push({
            name: 'Error',
            params: {
                  ErrorMsg: this.ErrorMsg
            }
        });
     }
   }, 
   mounted() {
       this.$store.dispatch('getSubBreedList',this.BreedNameForSearch);
       this.subBreeds = this.$store.state.subBreeds;
       if(this.subBreeds.length == 0) {
         this.goToErrorPage();
       }
       else {
         this.checkSubBreeds = true;
       }
  }
  
}
</script>

<style>
.D_Border {   
    border: black;
    margin-top: 30px;
    text-align: left;
    border-style: double;
}
.SubBreedData {
    border-style: double;
} 
</style>