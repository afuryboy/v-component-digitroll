<template>
  <div>
    <digitroll :option="option" />
  </div>
</template>
<script>
export default {
  name: 'app',
  data() {
    return {
      option: {
        number: 101
      }
    }
  },
  mounted() {
    setInterval(()=>{
      this.option.number ++
    },1000)
  }
}
</script>
