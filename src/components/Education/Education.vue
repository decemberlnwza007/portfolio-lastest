<template>
    <section id="education" class="py-10">
        <div class="bg-white shadow-xl rounded-lg border-2 border-gray-300 p-6">
            <div class="flex flex-col items-start">
                <p class="head">ประวัติการศึกษา</p>
                <div class="education-item" v-for="(item, index) in educationHistory" :key="index">
                    <a :href="item.link" target="_blank" class="circle-badge">
                        <img :src="item.image" alt="school badge" />
                    </a>
                    <div class="education-details">
                        <p class="school-name">{{ item.name }}</p>
                        <p class="year">{{ item.year }}</p>
                        <p class="level">ระดับชั้น: {{ item.level }}</p>
                        <p v-if="item.level !== 'ประถมศึกษา'" class="gpax">
                            <p v-if="item.level !== 'มัธยมศึกษาตอนต้น'">
                                <p class="level">สาขาวิชา: {{ item.branch }}</p>
                            เกรดเฉลี่ยสะสม (GPAX): {{ item.grade }}
                            
                        </p>
                        
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from "vue";
import wutthichaiImg from "./../../assets/wutthichai.png";
import bangplaImg from "./../../assets/bangpla.png";
// import technicalImg from "./../../assets/technical.png";
import itImg from "./../../assets/it.png";

const educationHistory = ref([
    { name: 'โรงเรียนวัดบางปลา สมุทรวันราษฏ์บำรุง', level: "ประถมศึกษา", year: "ปี 2013-2018", image: bangplaImg, link: 'https://sites.google.com/skn.go.th/1074590017' },
    { name: 'โรงเรียนสมุทรสาครวุฒิชัย', level: "มัธยมศึกษาตอนต้น", year: "ปี 2019-2022", image: wutthichaiImg, link: 'https://skwc.ac.th/' },
    { name: 'วิทยาลัยเทคนิคสมุทรสาคร', level: "ประกาศนียบัตรวิชาชีพ", year: "ปี 2023-2025", image: itImg, link: 'https://www.skntc.ac.th/', grade: '3.96', branch: 'เทคโนโลยีสารสนเทศ' },
]);
</script>

<style scoped>
.head {
    font-weight: 800;
    font-size: 50px;
    text-decoration: underline;
}

.education-item {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    width: 100%;
    justify-content: flex-start; 
    flex-wrap: wrap;
}

.circle-badge {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #fff; 
    border: 2px solid #d1cfcf;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 0.8rem;
    margin-right: 10px;
    flex-shrink: 0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s, border-color 0.3s; 
}

.circle-badge img {
    width: 70%;
    height: auto;
}

.circle-badge:hover {
    transform: scale(1.05);
    border-color: #fa4616; 
    border-width: 2px;
}

.education-details {
    flex: 1;
    min-width: 200px; 
    text-align: left;
}

.school-name {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
    margin: 5px 0;
}

.year { /* สไตล์ปีการศึกษา */
    font-size: 1.2rem;
    color: #777; /* สีที่เบากว่า */
    margin: 3px 0; /* ลดระยะห่าง */
}

.level, .gpax {
    font-size: 1.2rem;
    color: #555;
    margin: 5px 0;
}

@media (max-width: 768px) {
    .education-item {
        flex-direction: column;
        align-items: center; 
        text-align: center; 
    }

    .circle-badge {
        margin-bottom: 10px;
        margin-right: 0; 
    }

    .school-name {
        font-size: 1.4rem; 
    }

    .level, .gpax {
        font-size: 1rem; 
    }
}
</style>
