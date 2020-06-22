<template>
  <div>
    <H1>补充</H1>
    <ul>
      <li><router-link to="/texing01">01-特性继承</router-link></li>
      <li><router-link to="/$attrs02">02-$attrs</router-link></li>
      <li><router-link to="/$listeners">03-$listeners</router-link></li>
      <li><router-link to="/dongtai">04-动态</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.f {
  border: 10px solid pink;
}
.s {
  border: 5px solid skyblue;
}
.gs{
  border: 5px solid yellowgreen;
}
</style>