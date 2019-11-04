<template>
  <div style="text-align:left;padding:3vw">
      <h3 @click="ret">⬅返回</h3>
      <h1 >旺旺雪饼</h1>
      <p>好吃的雪饼🍥</p>
      <p style="font-weight:bold">联系方式：1234567890</p>
  </div>
</template>

<script>
export default {
methods:{
    ret(){
        this.$router.back()
    }
}
}
</script>

<style>

</style>