<template>
  <div class="container spacing">   
     
      <div class="row search">
           <div class="col-md-4">            
              <input class="form-control"  type="text" name="breedName" v-model="BreedNameForSearch"  placeholder="Search By Dog Breed Name"/>
            </div>

            <div class="col-md-1">
               <button class="btn btn-primary btnAdjustment" @click="goToSearch">Search</button>
            </div>
      </div>

      <div class ="row images">
          <div v-for="(dog,index) in pageOfItems" :key="index" class="col-md-3">
              <router-link :to="{name:'BreedImages', params:{BreedName: dog.name} }">
                <img :src='dog.img' :alt="dog.img" class = "dogImage" width="200px" height="180px">
              </router-link>  
              <p>{{dog.name}}</p>
          </div>
      </div>

      <div class="card text-center m-3">
          <div class="card-footer pb-0 pt-3">
              <jw-pagination :items="dogs" @changePage="onChangePage" :pageSize="12"></jw-pagination>
          </div>
      </div>
    
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      breeds:[ ],
      dogs:[],
      pageOfItems: [],
      BreedNameForSearch: '',
      BreedArray: [],
      ErrorMsg:''
    }
  },
  methods: {
     onChangePage(pageOfItems) {
          // update page of items
          this.pageOfItems = pageOfItems;
      },
      goToSearch() {
          this.$router.push({
              name: 'SubBreed',
              params: {
                  BreedNameForSearch : this.BreedNameForSearch 
              }
          });
      }
  },
  mounted() { 
    this.$store.dispatch('getAllDogNames');
    this.breeds = this.$store.state.breeds;
    this.dogs = this.$store.state.dogs;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

 .search {
  padding: 20px;
}

.spacing {
  margin-left: 40px;
} 

.images {
  margin-top: 30px;
}

@media only screen and (max-width: 480px) {
  .dogImage {
    width: 300px;
    height: 185px;
  }
  .btnAdjustment {
    margin: 10px;
  }  
}

@media only screen and (max-width: 768px){
  .dogImage {
    width: 180px;
    height: 185px;
  }
  .spacing {
    margin-left: 2px;
  } 
  .btnAdjustment {
    margin: 10px;
  } 
}

</style>
