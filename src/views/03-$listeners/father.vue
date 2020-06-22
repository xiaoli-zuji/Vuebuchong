<template>
  <div class="f">
      <h4>父组件</h4>
  </div>
</template>

<script>
export default {
    components: {
        son: () => import('./son')
    }
}
</script>

<style>

</style>