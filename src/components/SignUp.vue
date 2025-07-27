<template>
    <h1>Sign Up</h1>
    <div class="col register">
        <input type="text" name="name" v-model="name" placeholder="Enter Name">
        <input type="text" name="email" v-model="email" placeholder="Enter Email">
        <input type="text" name="password" v-model="password" placeholder="Password">
        <button v-on:click="signUp">Sign Up</button>
    </div>
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
                alert("User registered");
                localStorage.setItem("user-info",JSON.stringify(result.data));
            }
        }
    }
}
</script>

<style>
    .register input {
        width: 300px;
        height: 40px;
        padding-left: 20px;
        display: block;
        margin-bottom: 30px;
        margin-right: auto;
        margin-left: auto;
        border: 1px solid skyblue;
    }

    .register button {
        width: 320px;
        height: 40px;
        border: 1px solid skyblue;
        background: skyblue;
        color: #fff;
        cursor: pointer;
    }
</style>