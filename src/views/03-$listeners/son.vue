<template>
  <div class="s">
      <h4>子组件</h4>
      <gs v-on="$listeners" />
  </div>
</template>

<script>
export default {
    components:{
        gs: () => import('./grandson')
    }
}
</script>

<style>

</style>