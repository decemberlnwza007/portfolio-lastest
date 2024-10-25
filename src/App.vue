<template>
    <div>
        <Navbar />
    </div>
    <div class="home">
        <Home />
    </div>
    <div>
        <section id="services">Services</section>
    </div>
    <div>
        <section id="about"></section>
    </div>
    <div>
        <section id="contact">Contact</section>
    </div>
</template>

<script setup>
import Navbar from './components/Navbar/Navbar.vue';
import Home from './components/Home/Home.vue';
</script>

<style scoped>
    section {
    color: #333;
    text-align: center;
    margin: 20px;

}
</style>
