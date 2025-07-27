<template>
  <router-view />
  <Home msg="Welcome Home"/>
  <SignUp />
</template>

<script>
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
