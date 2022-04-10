<template>
<div>
  <h1>LOGIN</h1>
  <form @submit.prevent="login">
    <div class="form-group">
      <label>Username</label>
      <input
          v-model="form.username"
          class="form-control"
          placeholder="Username"
          required
      />
    </div>
    <div class="form-group">
      <label>Password</label>
      <input
          v-model="form.password"
          class="form-control"
          type="password"
          placeholder="Password"
          required
      />
    </div>

    <button class="btn btn-success btn-block my-2" type="submit" @click="login">Login</button>
  </form>
</div>

</template>

<script>
import router from '@/index'
import Store from '@/store/userStore'

export default {
  name: "Login",

  data(){
    return{
      form:{
        username: "",
        password: "",
      },
      show:true,
    }
  },
  methods: {
    login(){
      if(this.form.username === Store.state.username){
        Store.state.isLog = true
     router.push({name:'Home'})

      }
    }
  }
}
</script>

<style scoped>

</style>