<template>
  <div class="card">
    <Header />
    <h1>Hello {{ name }}</h1>
    <p>
      Welcome to Holocore, the site for uploading basic low-budget recepes for others.
    </p>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <td>Recepe</td>
          <td>Name</td>
          <td>Type</td>
          <td>Estimated Price</td>
          <td>Ingredients</td>
          <td>Instructions</td>
          <td>Actions</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in recepe" :key="item.id">
          <td>{{ item.recepe }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.type }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.ingredients }}</td>
          <td>{{ item.instructions }}</td>
          <td><router-link :to="'/update/'+item.id">Update</router-link></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import router from '@/routers';
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

      let result = await axios.get('http://localhost:3000/recepe');
      this.list = result.data;
    }
}
</script>
