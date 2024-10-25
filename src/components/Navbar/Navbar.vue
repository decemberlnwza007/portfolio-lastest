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


.content {
    padding-top: 80px; 
}

section {
    color: #333;
    text-align: center;
    margin: 20px;
}

.navbar {
    background-color: #ffffff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    padding: 1rem 2rem;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 10;
    transition: background-color 0.3s ease;
}

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
}

.brand {
    color: #333;
    font-size: 2rem;
    text-decoration: none;
    font-weight: bold;
}

.menu-toggle {
    display: none;
}

.bar {
    height: 3px;
    width: 25px;
    background-color: #333;
    margin: 4px 0;
    transition: background-color 0.3s;
}

.nav-links {
    display: flex;
    gap: 1.5rem;
    position: relative; /* เพื่อให้ ::after ทำงานได้ */
}

.nav-item {
    color: #333;
    text-decoration: none;
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
    position: relative; /* ทำให้ ::after ทำงานได้ */
    transition: color 0.3s ease;
}

.nav-item::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -5px; /* ระยะห่างจากข้อความ */
    width: 0;
    height: 2px;
    background-color: #fa4616; /* สีของเส้น */
    transition: width 0.3s ease, left 0.3s ease;
}

.nav-item:hover {
    color: #fa4616;
}

.nav-item:hover::after {
    width: 100%; /* ขยายให้เต็มเมื่อโฮเวอร์ */
    left: 0; /* เริ่มจากซ้ายสุด */
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
        background-color: #ffffff;
        padding: 1rem;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        z-index: 5;
    }

    .nav-links.active {
        display: flex;
    }
}
</style>
