<template>
    <div class="container-info">
        <div class="personal-info">
            <div class="info-img">
                <img src="@/assets/profile.png" alt="Foto de perfil">
            </div>
            <div class="info-name">
                Ariane C. A. Sousa
            </div>
            <div class="info-job">
                Desenvolvedora de software
            </div>
            <div class="line"></div>

            <div class="routers">
                <router-link :to="{ name: 'home' }" exact-active-class="active">Home</router-link>
                <router-link :to="{ name: 'experiences' }" exact-active-class="active">
                    Experiências
                </router-link>
                <router-link :to="{ name: 'projects' }" exact-active-class="active">Projeto</router-link>
                <router-link :to="{ name: 'education' }" exact-active-class="active">Educação</router-link>
                <router-link :to="{ name: 'contacts' }" exact-active-class="active">Contato</router-link>
            </div>

            <div class="utils">
                <div class="language-dropdown">
                    <button @click="toggleLanguageMenu" class="language-btn">
                        <img src="@/assets/icon/language.svg" alt="Idioma" />
                        <span>{{ languages[selectedLanguage] }}</span>
                    </button>
                    <ul v-if="isLanguageMenuOpen" class="language-menu">
                        <li @click="changeLanguage('pt')">🇧🇷 Português (Brasil)</li>
                        <li @click="changeLanguage('en')">🇺🇸 English (US)</li>
                    </ul>
                </div>

                <button @click="toggleTheme" class="theme-toggle">
                    <i v-if="isDarkMode" class="fas fa-moon"></i>
                    <i v-else class="fas fa-sun"></i>
                </button>
            </div>

            <div class="line"></div>

            <div class="social-medias">
                <a href="https://www.linkedin.com/in/ariane-sousa77/" target="_blank" rel="noopener noreferrer">
                    <img src="@/assets/icon/linkedin.svg" alt="LinkedIn" />
                </a>
                <a href="mailto:cristine_ariane@outlook.com">
                    <img src="@/assets/icon/email.svg" alt="Email" />
                </a>
                <a href="https://github.com/Ariane-Sousa" target="_blank" rel="noopener noreferrer">
                    <img src="@/assets/icon/github.svg" alt="GitHub" />
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import "@/styles/views/info.css";
import { ref } from "vue";

const isDarkMode = ref(false);
const isLanguageMenuOpen = ref(false);
const selectedLanguage = ref("pt");

const languages = {
    pt: "Português",
    en: "English",
};

const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value;
    document.body.classList.toggle("dark-mode", isDarkMode.value);
};

const toggleLanguageMenu = () => {
    isLanguageMenuOpen.value = !isLanguageMenuOpen.value;
};

const changeLanguage = (lang) => {
    selectedLanguage.value = lang;
    isLanguageMenuOpen.value = false;
    console.log(`Idioma alterado para: ${languages[lang]}`);
};
</script>