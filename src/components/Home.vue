<template>
  <div class="card">
    <Header />
    <h1>Hello {{ name }}</h1>
    <p>
      Welcome to Holocore, the site for
    </p>
    <table class="table">
      <tr v-for="item in list" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.job }}</td>
        <td>{{ item.contact }}</td>
        <td>{{ item.city }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import Header from './Header.vue';
import axios from 'axios';
export default {
  name: 'HomeView',
  data() {
    return {
      name:'',
      list: [],
    }
  },
  components: {
    Header,
  },
  async mounted() {
      let user = localStorage.getItem('user-info');
      this.name = JSON.parse(user.name);
      if(!user) {
          this.$router.push({name:'SignUp'});
      }

      let result = await axios.get('http://localhost:3000/list');
      this.list = result.data;
    }
}
</script>
