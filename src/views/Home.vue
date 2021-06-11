<template>
  <div class="Home container">   
     
      <div class="row search">
           <div class="col-md-4">            
              <input class="form-control"  type="text" name="breedName" v-model="BreedNameForSearch"  placeholder="Search By Dog Breed Name"/>
            </div>

            <div class="col-md-1">
               <button class="btn btn-primary BtnAdjustment" @click="goToSearch">Search</button>
            </div>
      </div>

      <div class ="row Images">
          <div v-for="(dog,index) in pageOfItems" :key="index" class="col-md-3 DogList">
              <router-link :to="{name:'BreedImages', params:{BreedName: dog.name} }">
                <img :src='dog.img' :alt="dog.img" class = "dogImage" width="200px" height="180px">
              </router-link>  
              <p>{{dog.name | capitalize}}</p>
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
      dogs:[],
      pageOfItems: [],
      BreedNameForSearch: '',
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
    this.dogs = this.$store.state.dogs;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

 .search {
  padding: 20px;
}

.Home {
  margin-left: 40px;
} 

.Images {
  margin-top: 30px;
}

.DogList {
  margin-top: 20px;
  border: 1px solid grey;
  margin-left: 40px;
  background-color:  #d3d3d361;
  text-align: center;
}

@media only screen and (max-width: 480px) {
  .dogImage {
    width: 300px;
    height: 185px;
  }
  .BtnAdjustment {
    margin: 10px;
  }
  .DogList {
    margin-right: 30px;
  }  
}

@media only screen and (max-width: 768px){
  .dogImage {
    width: 180px;
    height: 185px;
  }
  .Home {
    margin-left: 2px;
  } 
  .BtnAdjustment {
    margin: 10px;
  } 
}

</style>
