<template>
    <h1>Login</h1>
    <div class="col login">
        <input type="text" name="email" v-model="email" placeholder="Enter Email">
        <input type="text" name="password" v-model="password" placeholder="Password">
        <button>Login</button>
    </div>
    <p>
        <router-link to="/register">No Account? Sign Up</router-link>
    </p>
</template>

<script>
export default {
    name:'Login'
}
</script>