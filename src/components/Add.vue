<template>
  <div class="card">
    <Header />
    <div class="card-header">
      <p>
        Add a
      </p>
    </div>
  </div>
</template>

<script>
import Header from './Header.vue';
export default {
  name: 'Add',
  components: {
    Header,
  },
  mounted() {
        let user = localStorage.getItem('user-info');
        if(!user) {
            this.$router.push({name:'SignUp'});
        }
    }
}
</script>
