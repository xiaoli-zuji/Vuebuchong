<template>
  <div class="f">
      <h4>父组件</h4>
      <son @pass="pass" />
  </div>
</template>

<script>
export default {
    components: {
        son: () => import('./son')
    },
    methods: {
        pass (v) {
            console.log(v);
        }
    },
}
</script>

<style>

</style>