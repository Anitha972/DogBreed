<template>
    <div class="container">
        <div class="card text-danger  mb-3 ErrorPage">
            <div class="card-header">
                <h2>{{ErrorName}}</h2>
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
    ErrorName:{
        default:'Error 404'
    },
    ErrorMsg:{
        default:'Page Not found'
    }
  }
}

</script>
<style scoped>
.ErrorPage {
    margin-top: 20px;
    background-color:rgb(241, 202, 190);
    text-align: left;
}
</style>