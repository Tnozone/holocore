<template>
<div class="navbar">
     <ul class="navbar-nav">
        <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/add">Add</router-link>
        </li>
        <li class="nav-item">
            <a class="nav-link" v-on:click="logout" href="#">Logout</a>
        </li>
    </ul>
</div>>
</template>

<script>
export default {
    name: 'Header',
    methods: {
        logout() {
            localStorage.clear();
            this.$router.push({name:'Login'})
        }
    }
}
</script>