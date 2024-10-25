<template>
    <section id="about">
        <div class="nes-container with-title is-rounded">
            <div class="content-container">
                <div class="text-content">
                    <p class="head">ประวัติส่วนตัว</p>
                    <a href="#" class="nes-badge" id="badge">
                        <span class="is-dark">ชื่อ</span>
                    </a>
                    <a href="#" class="nes-badge" id="badge">
                        <span class="is-primary">นายพงศกร ทองรักษ์</span>
                    </a>
                    <a href="#" class="nes-badge" id="badge">
                        <span class="is-primary">ธันวา</span>
                    </a>
                    <br>
                    <a href="#" class="nes-badge" id="badge">
                        <span class="is-dark">วัน/เดือน/ปี เกิด</span>
                    </a>
                    <a href="#" class="nes-badge" id="badge">
                        <span class="is-warning">10 ธันวาคม 2550</span>
                    </a>
                    <a href="#" class="nes-badge" id="badge">
                        <span class="is-warning">อายุ 16 ปี</span>
                    </a>
                    <br>
                    <a href="#" class="nes-badge is-splited" id="badge">
                        <span class="is-dark">เชื้อชาติ</span>
                        <span class="is-success">ไทย</span>
                    </a>
                    <a href="#" class="nes-badge is-splited" id="badge">
                        <span class="is-success">สัญชาติ</span>
                        <span class="is-dark">ไทย</span>
                    </a>
                    <a href="#" class="nes-badge is-splited" id="badge">
                        <span class="is-dark">ศาสนา</span>
                        <span class="is-success">พุทธ</span>
                    </a>
                </div>
                <div class="image-container">
                    <img src="./../../assets/doraemon.png" alt="Profile Image" class="profile-image" />
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.head {
    font-weight: 800;
    font-size: 50px;
    text-decoration: underline;
}

section {
    color: #333;
    text-align: center;
    margin: 20px;
}

.content-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}

.text-content {
    text-align: left;
    flex: 1;
    min-width: 300px;
}

.image-container {
    margin-left: 20px;
    display: flex;
    justify-content: center;
}

.profile-image {
    width: 500px;
    height: auto;
    border-radius: 10px;
}

p {
    font-size: 2rem;
}

.nes-field input {
    width: 200px;
    font-size: 1.5rem;
}

#badge {
    font-size: 20px;
}

.nes-badge {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 5px;
}

@media (max-width: 768px) {
    .content-container {
        flex-direction: column;
        text-align: center;
    }

    .text-content {
        margin-bottom: 20px;
        min-width: auto;
    }

    .image-container {
        margin-left: 0;
    }

    .profile-image {
        width: 100%;
        max-width: 300px; 
    }

    .head {
        font-size: 36px; 
    }

    p {
        font-size: 1.5rem;
    }

    #badge {
        font-size: 16px;
    }
}
</style>
