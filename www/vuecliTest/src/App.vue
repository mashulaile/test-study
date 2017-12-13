<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>
      <router-link to="/">首页</router-link>
      <router-link to="/hi">hi页面</router-link>
      <router-link :to="{name:'hi3', params:{username:'mashu', age:18}}">hi页面1</router-link>
      <router-link to="/hi/hi2">hi页面2</router-link>
    </p>
    <router-view/>
    <p>{{$router.name}}</p>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
