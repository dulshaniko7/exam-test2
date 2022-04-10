<template>
<div>
  <router-link :to="{ name: 'PlayerDetails', params: {id:player.id}}">
    <h4>{{player.name}} || {{player.country}} </h4>

  </router-link>
  <button @click="del">Del</button>

</div>
</template>

<script>
import axios from "axios";
export default {
  props:['player'],
methods : {
    del(){
      axios.delete(`http://localhost:3000/players/${this.player.id}`, {data: {id: this.player.id}})
          .then(() => {
            console.log('ela')
          })
          .catch(error => {
            console.log(error.message)
          })
    }
}
}
</script>

<style scoped>

</style>