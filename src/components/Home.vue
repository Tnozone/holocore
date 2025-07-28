<template>
  <div class="card">
    <h1>{{ msg }}</h1>
    <p>
      Wellcome to Holocore, the site for
    </p>
  </div>
</template>

<script>
export default {
  name: 'Home',
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
