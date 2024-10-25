<template>
    <div>
        <Navbar />
    </div>
    
    <div>
        <Home />
    </div>
    <div>
        <Education />
    </div>
    <div>
        <!-- <section id="reward">ฟหกหฟ</section> -->
    </div>
    <div>
        <Certificate />
    </div>
</template>

<script setup>
import Navbar from './components/Navbar/Navbar.vue';
import Home from './components/Home/Home.vue';
import Education from './components/Education/Education.vue';
import Certificate from './components/Certificate/Certificate.vue';
</script>

<style scoped>
section {
    color: #333;
    text-align: center;
    margin: 20px;
    margin-top: 100px; /* เพิ่ม margin-top */
}
</style>
