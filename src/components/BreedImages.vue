<template>
  <div class="container">
    
     <div v-if="checkImageExist" class ="row">
          <div v-for="(img,index) in pageOfItems" :key="index" class="col-md-3 spacing">
                <img :src='img' :alt="img" width="200px" height="180px">
          </div>
      </div>

      <div v-if="checkImageExist" class="card text-center m-3">
          <div class="card-footer pb-0 pt-3">
              <jw-pagination :items="imgURL" @changePage="onChangePage" :pageSize="12"></jw-pagination>
          </div>
      </div>

  </div>   
</template>

<script>
import axios from 'axios'

export default {
   name: 'BreedImages',
   data() {
     return {
        imgURL: [],
        pageOfItems: [],
        ErrorMsg:'',
        checkImageExist:true,
     }
   },
   methods: {
     onChangePage(pageOfItems) {
          // update page of items
          this.pageOfItems = pageOfItems;
      }
  },
   props: ['BreedName'],
   mounted() {
       axios.get('https://dog.ceo/api/breed/'+this.BreedName+'/images').then((resp) => {
          console.log(resp);
          this.imgURL = resp.data.message;
       }).catch((err) => {
           console.log(err);
           this.checkImageExist = false;
           this.$router.push({
            name: 'Error',
            params: {
                ErrorMsg: "Breed name is not found"
            }
        });
       })
   }
}
</script>

<style>
.spacing {
    margin-top: 20px;
} 
.text-design {
    margin-top: 20px;
    color: red;
}
</style>