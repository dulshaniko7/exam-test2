<template>
<div>
  <p>Item {{result}}</p>
<Dropdown @update:option="update"/>
</div>
</template>

<script>


import Dropdown from "@/views/Dropdown";
export default {
  name: "Emit",
  components: {Dropdown},
  data(){
    return{
      result: ''
    }
  },
  methods: {
    update(value){
      this.result = value
    }
  }
}
</script>

<style scoped>

</style>