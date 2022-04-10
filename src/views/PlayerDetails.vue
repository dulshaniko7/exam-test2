<template>
<div>
  <div class="container">
    <h1 class="text-center mt-4">{{description.name}} </h1>
    <hr/>
    <form @submit.prevent="login">
      <div class="form-group">
        <label>Username</label>
        <input
            v-model="form.name"
            class="form-control"
            placeholder="name"
            required
        />
        <input
            v-model="form.kit"
            class="form-control"
            placeholder="Kit"
            required
        />
      </div>


      <button class="btn btn-success" type="submit" @click="edit">Edit</button>
    </form>
  </div>
</div>
</template>

<script>
import  axios from "axios"
import router from '@/index'
export default {
  name: "PlayerDetails",
  props:['id'],
  data(){
    return{
      description:[],
      form:{
        name:'',
        kit:''
      }
    }
  },
  methods: {
    edit() {
      axios.put(`http://localhost:3000/players/${this.id}`, {name: this.form.name,kitNo:this.form.kit})
          .then(() => {
            console.log("ela")
            router.push({name:'Home'})
          })
      .catch(error => {
        console.log("e",error)
      })
    }
  },
  created() {
  //  axios.get(`http://localhost:3000/players/${this.$route.params.id}`)
    axios.get(`http://localhost:3000/players/${this.id}`)
        .then(response => {
          this.description= response.data
          this.form.name = this.description.name
          this.form.kit = this.description.kitNo
        })


  }
}
</script>

<style scoped>

</style>