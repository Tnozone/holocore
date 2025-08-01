<template>
  <div class="card">
    <Header />
    <h1>{{ msg }}</h1>
    <p>
      Welcome to Holocore, the site for
    </p>
  </div>
</template>

<script>
import Header from './Header.vue';
export default {
  name: 'HomeView',
  components: {
    Header,
  },
  props: {
    msg: String
  },
  mounted() {
        let user = localStorage.getItem('user-info');
        if(!user) {
            this.$router.push({name:'SignUp'});
        }
    }
}
</script>
