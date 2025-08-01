<template>
    <h1>Sign Up</h1>
    <div class="col register">
        <input type="text" name="name" v-model="name" placeholder="Enter Name">
        <input type="text" name="email" v-model="email" placeholder="Enter Email">
        <input type="text" name="password" v-model="password" placeholder="Password">
        <button class="btn" v-on:click="signUp">Sign Up</button>
    </div>
    <p>
        <router-link to="/login">Go to Login</router-link>
    </p>
</template>

<script>
import axios from 'axios';
export default {
    name: 'SignUp',
    data() {
        return {
            name:'',
            email:'',
            password:''
        }
    },
    methods:{
        async signUp() {
            let result = await axios.post("http://localhost:3000/users",{
                email:this.email,
                name:this.name,
                password:this.password
            });

            console.warn(result);
            if(result.status==201) {
                localStorage.setItem("user-info",JSON.stringify(result.data));
                this.$router.push({name:'Home'});
            }
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