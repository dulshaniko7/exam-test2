<template>
<div>
  Contact
<div v-for="con in cons" :key="con.id">
  <router-link :to="{name: 'JobDetails', params: {id: con.id}}">
    <h1>{{con.name}}</h1>
  </router-link>
</div>
</div>
</template>

<script>
export default {
  name: "Contact",
  data(){
    return{
      cons: [
        {id:1, name:'Dulshan'},
        {id:2, name:'Dulshan2'},
        {id:3, name:'Dulshan3'}
      ]
    }
  }
}
</script>

<style scoped>

</style>