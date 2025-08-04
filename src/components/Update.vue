<template>
  <div class="card">
    <Header />
    <div class="card-header">
      <p>
        Update your
      </p>
    </div>
  </div>
</template>

<script>
import Header from './Header.vue';
export default {
  name: 'Update',
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
