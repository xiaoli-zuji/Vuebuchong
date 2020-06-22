<template>
  <div class="f">
    <h2>父组件</h2>
    <son :myname="myname" :myage="myage" />
  </div>
</template>

<script>
export default {
    components: {
        son: () => import('./son')
    },
    data() {
        return {
            myname: '熊大',
            myage: 18
        }
    },
}
</script>

<style>

</style>