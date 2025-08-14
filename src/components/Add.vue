<template>
  <div class="card">
    <Header />
    <div class="card-header">
      <p>
        Add a Recepe.
      </p>
    </div>
    <div class="card-body">
      <form action="">
        <div class="form-group">
          <label for="userName">Your Name</label>
          <input type="text" class="form-control" name="name" placeholder="Enter Name" v-model="recepe.name" />
        </div>
        <div class="form-group">
          <label for="recepe">Dish Name</label>
          <input type="text" class="form-control" name="recepe" placeholder="Enter Recepe Name" v-model="recepe.recepe" />
        </div>
        <div class="form-group">
          <label for="typeRecepe">Type of Dish</label>
          <input type="text" class="form-control" name="type" placeholder="Enter Recepe Type" v-model="recepe.type" />
        </div>
        <div class="form-group">
          <label for="price">Estimated Cost</label>
          <input type="text" class="form-control" name="price" placeholder="Enter Estimated Price of Ingredients" v-model="recepe.price" />
        </div>
        <div class="form-group">
          <label for="ingredients">Ingredients</label>
          <input type="text" class="form-control" name="ingredients" placeholder="Enter List of Ingredients" v-model="recepe.ingredients" />
        </div>
        <div class="form-group">
          <label for="instructions">Preperation Instructions</label>
          <textarea class="form-control" name="instructions" placeholder="Detail Your Recepe" rows="3" v-model="recepe.instructions"></textarea>
        </div>
        <button type="submit" class="btn btn-primary" v-on:click="addRecepe">Share Your Recepe</button>
      </form>
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
  data() {
    return {
      recepe :{
        name:'',
        recepe:'',
        type:'',
        price:'',
        ingredients:'',
        instructions:''
      }
    }
  },
  methods: {
    addRecepe() {
      console.log(this.recepe)
    }
  },
  mounted() {
        let user = localStorage.getItem('user-info');
        if(!user) {
            this.$router.push({name:'SignUp'});
        }
    }
}
</script>
