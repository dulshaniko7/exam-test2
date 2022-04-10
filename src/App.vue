<template>

  <div id="nav">
    <router-link to="/">Index |</router-link>
    <router-link to="/home" v-if='isLogged'>Home |</router-link>
    <router-link to="/about" v-if="isLogged">About |</router-link>
    <router-link to="/add" v-if="isLogged">Add New Player |</router-link>
    <router-link to="/contact" v-if="isLogged">Contact |</router-link>
    <router-link to="/login" v-if="!isLogged">LOGIN</router-link>
    <router-link to="/emit">Emit</router-link>
  </div>
<transition name="router-animate" enter-active-class="animated fadeInDown" leave-active-class="animated fadeInDown">
  <router-view />
</transition>
</template>

<script>

import Store from '@/store/userStore'


export default {
  name: 'App',
  data(){
    return{
      show:false
    }
  },
 computed : {
    isLogged(){
      return Store.state.isLog
    }
 },

}
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  margin-top: 60px;
}
body {
  background: rgb(233, 233, 233);
  font-family:Arial, Helvetica, sans-serif;
}

.page {
  position: fixed;
  width: inherit;
}
</style>
