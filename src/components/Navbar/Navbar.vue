<template>
    <nav class="navbar">
        <div class="container">
            <a href="#" class="brand">Portfolio</a>
            <div class="menu-toggle" @click="toggleMenu">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
            
            <div :class="['nav-links', { 'active': isMenuOpen }]" id="nav-links">
                <a 
                    v-for="(item, index) in menuItems" 
                    :key="index" 
                    :href="item.path" 
                    class="nav-item"
                    @click.prevent="scrollToSection(item.path); toggleMenu()"
                >
                    {{ item.name }}
                </a>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const menuItems = [
    { name: 'ประวัติส่วนตัว', path: '#about' },
    { name: 'ประวัติการศึกษา', path: '#education' },
    { name: 'ผลงาน', path: '#reward' },
    { name: 'เกียรติบัตร', path: '#certificate' },
];

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};
</script>

<style scoped>
body {
    margin: 0;
    font-family: 'Courier New', monospace;
    background-color: #000;
}

.navbar {
    background-color: #c63924;
    border: 5px solid #0f0;
    box-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
    padding: 1rem;
    position: relative;
    z-index: 10; /* เพิ่ม z-index เพื่อให้แน่ใจว่า navbar อยู่เหนือเนื้อหา */
}

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
}

.brand {
    color: #ffcc00;
    font-size: 2rem;
    text-decoration: none;
    text-shadow: 0 0 5px #ffcc00;
}

.menu-toggle {
    display: none;
}

.bar {
    height: 4px;
    width: 30px;
    background-color: #ffcc00;
    margin: 4px 0;
}

.nav-links {
    display: flex;
    gap: 1.5rem;
}

.nav-item {
    color: #ffcc00;
    text-decoration: none;
    padding: 0.5rem 1rem;
    font-size: 2rem;
    transition: color 0.3s ease;
}

.nav-item:hover {
    color: #fff;
}

@media (max-width: 768px) {
    .menu-toggle {
        display: flex;
        flex-direction: column;
        cursor: pointer;
    }

    .nav-links {
        display: none;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background-color: #c63924;
        padding: 1rem;
        box-shadow: 0 4px 10px rgba(0, 255, 0, 0.5);
        z-index: 5; /* เพิ่ม z-index เพื่อให้เมนูแสดงอยู่เหนือเนื้อหา */
    }

    .nav-links.active {
        display: flex;
    }
}
</style>
