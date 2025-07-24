<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Home msg="Welcome to Your Vue.js App"/>
  <SignUp />
</template>

<script>
import SignUp from './components/SignUp.vue';
import HelloWorld from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Home, SignUp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
