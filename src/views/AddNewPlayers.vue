<template>
<div>
  <form @submit.prevent="add">
    <div class="form-group">
      <label>name</label>
      <input
          v-model="form.name"
          class="form-control"
          placeholder="name"
          required
      />
      <label>Kit</label>
      <input
          v-model="form.kit"
          class="form-control"
          placeholder="Kit"
          required
      />
    </div>


    <button class="btn btn-success" type="submit">Add</button>
  </form>
</div>
</template>

<script>
import  axios from "axios"
import router from '@/index'
export default {
  name: "AddNewPlayers",
  data(){
    return{
      form:{
        name:'',
        kit:''
      }
    }
  },
  methods: {
    add(){
      axios.post(`http://localhost:3000/players`, {name: this.form.name,kitNo:this.form.kit})
          .then(() => {
            console.log("ela")
            router.push({name:'Home'})
          })
          .catch(error => {
            console.log("e",error)
          })
    }
  }
}
</script>

<style scoped>

</style>