<template>
  <div>
    hi
<select name="dropdown" id="dropdown" @change="change" v-model="selectedOption">
  <option value="0">option 0</option>
  <option value="1">option 1</option>
  <option value="2">option 2</option>
</select>
  </div>
</template>

<script>
export default {
  name: "Dropdown",
  data(){
    return{
      selectedOption: null
    }
  },
  methods: {
    change(value){
      console.log('change')
      console.log(value)
      this.$emit('update:option', this.selectedOption)
    }
  }
}
</script>

<style scoped>

</style>