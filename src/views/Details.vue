<template>
<div>
  Details {{ id }}
</div>
</template>

<script>

export default {
  name: "Details",
  props:['id'],
  data(){
    return{
    //  id:this.$route.params.id
    }
  }
}
</script>

<style scoped>

</style>