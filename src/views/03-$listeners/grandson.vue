<template>
  <div class="gs">
      <h4>孙子组件</h4>
      <div>myname:  {{myname}}</div>
      <button @click="fn">点我</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            myname: '熊大和熊二'
        }
    },
    methods: {
        fn () {
            this.$emit('pass', this.myname)
        }
    },
}
</script>

<style>

</style>