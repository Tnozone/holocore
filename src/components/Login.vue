<template>
    <h1>Login</h1>
    <div class="col login">
        <input type="text" name="email" v-model="email" placeholder="Enter Email">
        <input type="text" name="password" v-model="password" placeholder="Password">
        <button v-on:click="login">Login</button>
    </div>
    <p>
        <router-link to="/register">No Account? Sign Up</router-link>
    </p>
</template>

<script>
import axios from 'axios';
export default {
    name: 'LoginPage',
    data() {
        return {
            email:'',
            password:''
        }
    },
    methods:{
        async login() {
            let result = await axios.get(
                `http://localhost:3000/users?email=${this.email}&password=${this.password}`
            )

            if(result.status==200 && result.data.length > 0) {
                localStorage.setItem("user-info",JSON.stringify(result.data[0]));
                this.$router.push({name:'Home'});
            }
            console.warn(result)
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if(user) {
            this.$router.push({name:'Home'});
        }
    }
}
</script>