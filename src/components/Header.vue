<template>
<div class="navbar">
     <ul class="navbar-nav">
        <li class="nav-item">
            <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Add</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Update</a>
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