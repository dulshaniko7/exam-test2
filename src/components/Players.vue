<template>
<div>
  Players from props

  <ul>
    <li v-for="player in players" :key="player.id">
    <player v-bind:player="player"/>
    </li>
  </ul>
</div>
</template>

<script>
import Player from "@/components/Player";
export default {
  components: {Player},
  props: ['players'],
  name: "Players",
  data(){
    return{

    }
  }
}
</script>

<style scoped>

</style>