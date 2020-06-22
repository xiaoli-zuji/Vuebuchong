<template>
  <div>
      <ul>
          <li @click="comname='login'">登录</li>
          <li @click="comname='register'">注册</li>
      </ul>
      <component :is="comname"></component>
  </div>
</template>

<script>
import login from './login'
import register from './register'
export default {
  data() {
      return {
          comname: 'login'
      }
  },
  components: {
      login,
      register
  }
}
</script>

<style>

</style>