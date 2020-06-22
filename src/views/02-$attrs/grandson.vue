<template>
  <div class="gs">
      <h3>孙子组件</h3>
      {{myname}} | {{myage}}
  </div>
</template>

<script>
export default {
    props: ['myname', 'myage']
}
</script>

<style>

</style>