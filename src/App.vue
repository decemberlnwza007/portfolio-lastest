<template>
    <div>
        <Navbar />
    </div>
    <div class="about">
        <Home />
    </div>
    <div>
        <Education />
    </div>
    <div>
        <section id="reward"></section>
    </div>
    <div>
        <section id="certificate">Contact</section>
    </div>
</template>

<script setup>
import Navbar from './components/Navbar/Navbar.vue';
import Home from './components/Home/Home.vue';
import Education from './components/Education/Education.vue';
</script>

<style scoped>
section {
    color: #333;
    text-align: center;
    margin: 20px;
}
</style>
