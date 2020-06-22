<template>
  <div class="s">
      <h2>子组件</h2>
      <gs v-bind="$attrs" />
  </div>
</template>

<script>
export default {
    // 禁用特性继承
    // inheritAttrs: false,
    components: {
        gs: () => import('./grandson')
    }
}
</script>

<style>

</style>