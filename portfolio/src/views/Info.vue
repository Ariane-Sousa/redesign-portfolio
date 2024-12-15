<template>
    <div class="container-info">
        <div class="personal-info">
            <div class="info-img">
                <img src="@/assets/profile.jpg" alt="Foto de perfil">
            </div>
            <div class="info-name">
                Ariane Sousa
            </div>
            <div class="info-job">
                Software Developer
            </div>
            <div class="line"></div>
            <div class="contacts">
                <div class="group-contact">
                    <div class="icon">
                        <i class="fa-regular fa-envelope"></i>
                    </div>
                    <div class="info">
                        <div class="title">EMAIL</div>
                        <div class="info">
                            <a href="mailto:cristine_ariane@outlook.com">
                                cristine_ariane@outlook.com
                            </a>
                        </div>
                    </div>
                </div>
                <div class="group-contact">
                    <div class="icon">
                        <i class="fa-solid fa-mobile-screen-button"></i>
                    </div>
                    <div class="info">
                        <div class="title">PHONE</div>
                        <div class="info">
                            <a href="https://wa.me/5512992181849">
                                +55 (12) 99218-1849
                            </a>
                        </div>
                    </div>
                </div>
                <div class="group-contact">
                    <div class="icon">
                        <i class="fa-brands fa-linkedin-in"></i>
                    </div>
                    <div class="info">
                        <div class="title">LINKEDIN</div>
                        <div class="info">
                            <a href="https://www.linkedin.com/in/ariane-sousa77" target="_blank">
                                Ariane Sousa
                            </a>
                        </div>
                    </div>
                </div>
                <div class="group-contact">
                    <div class="icon">
                        <i class="fa-brands fa-github"></i>
                    </div>
                    <div class="info">
                        <div class="title">GITHUB</div>
                        <div class="info">
                            <a href="https://github.com/Ariane-Sousa" target="_blank">
                                Ariane-Sousa
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="button-donwloadcv">
                <a href="/redesign-portfolio/ariane.curriculo.pdf" download>
                    <button>Download CV</button>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import "@/styles/views/info.css";
</script>
