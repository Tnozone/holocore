<template>
    <h1>Sign Up</h1>
    <div class="col register">
        <input type="text" name="name" placeholder="Enter Name">
        <input type="text" name="email" placeholder="Enter Email">
        <input type="text" name="password" placeholder="Password">
        <button>Sign Up</button>
    </div>
</template>

<script>
export default {
    name: 'SignUp'
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