<template>
  <div class="container">
    <transition name="fade" leave-active-class="animated fadeInUp">
      <h2 v-if="show">{{ name }}</h2>
    </transition>
    <h2>Home</h2>
    <p>
      ue provides the components for handling enter / leave and list transitions. However, there are many other ways of
      using animations on the web, even in a Vue application. Here we will discuss a few additional techniques.
    </p>
    <div v-if="false">
      <h3>Here Our players</h3>

      <ul>
        <li v-for="player in players" :key="player.id">
          {{ player.name }}
        </li>
      </ul>
    </div>
    <div>
      <Players v-bind:players="players"/>
    </div>
    <div v-if="false">
      <h3>In the table</h3>
      <table>
        <tr>
          <th>Kit Num</th>
          <th>Name</th>
        </tr>

      </table>
    </div>

    <button type="button" class="btn btn-primary">Primary</button>
  </div>


</template>

<script>
import axios from "axios"
import Players from "@/components/Players";

export default {
  name: "Home",
  components: {Players},
  data() {
    return {
      name: '',
      show: false,
      players: []
    }
  },
  mounted() {
    axios.get("http://localhost:3000/players?_sort=kitNo&_order=asc")
        .then(response => this.players = response.data)

        .catch(error => console.log(error))
  }
}
</script>

<style scoped>

</style>