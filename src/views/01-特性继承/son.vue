<template>
  <div class="s">
      <h4>子组件</h4>
      {{msg}}
  </div>
</template>

<script>
export default {
    // 禁用特性继承
    inheritAttrs: false,
    props: ['msg']
}
</script>

<style>

</style>