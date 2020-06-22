<template>
  <div class="f">
      <h1>父组件</h1>
      <son :msg="msg" class="ni" style="color: red;" abc="abc" other="bgm" />
  </div>
</template>

<script>
export default {
    components: {
        son: () => import('./son.vue')
    },
    data() {
        return {
            msg: '你好'
        }
    },
}
</script>

<style>

</style>