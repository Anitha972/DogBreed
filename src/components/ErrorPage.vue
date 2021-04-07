<template>
    <div class="container">
        <div class="card text-danger  mb-3 error">
            <div class="card-header">
                <h2>{{errorName}}</h2>
            </div>
            <div class="card-body">
                <h5 class="card-title">OOPS!</h5>
                <p class="card-text">{{ErrorMsg}}</p>
           </div>
       </div>

    </div>   
</template>

<script>
export default {
    name: "ErrorPage",
  props: {
    errorName:{
        default:'Error 404'
    },
    ErrorMsg:{
        default:'Page Not found'
    }
  }
}

</script>
<style scoped>
.error {
    margin-top: 20px;
    /* 
      background-color:rgb(241, 180, 161);
    */
    background-color:rgb(241, 202, 190);
    text-align: left;
}
</style>