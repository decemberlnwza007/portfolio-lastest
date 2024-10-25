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
                    @click.prevent="scrollToSection(item.path)"
                >
                    {{ item.name }}
                </a>
            </div>
            <!-- <div class="icons">
                <a href="#" class="icon" @click="openSearchModal"><i class="fas fa-search"></i></a>
                <a href="#" class="icon"><i class="fas fa-user"></i></a>
            </div> -->
        </div>
    </nav>

    
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);
const isSearchModalOpen = ref(false);
const searchQuery = ref('');

const menuItems = [
    { name: 'ประวัติส่วนตัว', path: '#home' },
    { name: 'ประวัติการศึกษา', path: '#services' },
    { name: 'ผลงาน', path: '#about' },
    { name: 'เกียรติบัตร', path: '#contact' },
];

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const openSearchModal = () => {
    isSearchModalOpen.value = true;
    document.body.classList.add('blur-background');
};

const performSearch = () => {
    console.log('Searching for', searchQuery.value);
    closeSearchModal();
};

const closeSearchModal = () => {
    isSearchModalOpen.value = false;
    document.body.classList.remove('blur-background');
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
    background-color: #c63924; /* Red */
    border: 5px solid #0f0; /* Green border */
    box-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
    padding: 1rem;
    position: relative;
}

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
}

.brand {
    color: #ffcc00; /* Yellow */
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
    background-color: #ffcc00; /* Yellow */
    margin: 4px 0;
}

.nav-links {
    display: flex;
    gap: 1.5rem;
}

.nav-item {
    color: #ffcc00; /* Yellow */
    text-decoration: none;
    padding: 0.5rem 1rem;
    border: 2px solid transparent;
    position: relative;
    overflow: hidden;
    transition: color 0.3s ease;
    font-size: 2rem;
}

.nav-item::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: #0f0;
    transform: scaleY(0);
    transform-origin: bottom;
    transition: transform 0.3s ease;
}

.nav-item:hover::before {
    transform: scaleY(1);
}

.nav-item:hover {
    color: #fff;
}

.icons {
    display: flex;
    gap: 1rem;
}

.icon {
    color: #ffcc00; /* Yellow */
    font-size: 1.5rem;
    transition: color 0.3s ease;
}

.icon:hover {
    color: #fff;
}

.search-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.search-modal-content {
    background: #222;
    border: 5px solid #0f0; /* Green border */
    padding: 2rem;
    text-align: center;
}

.search-input {
    border: 2px solid #ffcc00; /* Yellow */
    background: transparent;
    color: #ffcc00; /* Yellow */
    padding: 0.5rem;
    width: 100%;
}

.close-button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 2rem;
    background: none;
    border: none;
    color: #ffcc00; /* Yellow */
    cursor: pointer;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
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
        background-color: #c63924; /* Red */
        padding: 1rem;
        box-shadow: 0 4px 10px rgba(0, 255, 0, 0.5);
    }

    .nav-links.active {
        display: flex;
    }
}
</style>
