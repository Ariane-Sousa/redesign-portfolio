<template>
  <div class="section-home">
    <div class="container-about">
      <div class="about">
        <div class="about-header">
          <h1 class="about-title">
            Sobre mim
          </h1>
          <button class="download-cv">
            <img src="@/assets/icon/download.svg" alt="Download" />
            <a href="/redesign-portfolio/Ariane_Sousa_Curriculo_2024.pdf" download>
              Download CV
            </a>
          </button>
        </div>

        <div class="about-content">
          <p>
            Olá! Sou Ariane Cristine Alves de Sousa, uma entusiasta da tecnologia em início de carreira como desenvolvedora de software júnior. Minha experiência prática abrange o front-end, onde trabalho com JavaScript, Vue.js e Bulma, e o back-end, utilizando Python e Django. Também possuo conhecimentos em bancos de dados relacionais, como MySQL, e não relacionais, como MongoDB. Essa combinação me permite explorar diferentes áreas do desenvolvimento de software, ampliando minha visão e habilidades técnicas.
          </p>
          <p>
            Sou apaixonada por resolver problemas de forma criativa e pelo impacto positivo que a tecnologia pode gerar na vida das pessoas e das empresas. Tenho interesse em áreas como arquitetura de APIs, gerenciamento de dados e otimização de sistemas distribuídos. Com um compromisso constante com a formação contínua, busco acompanhar as tendências tecnológicas, incluindo desenvolvimento web, automação de processos e usabilidade. Meu objetivo é colaborar em projetos inovadores que promovam transformação e impacto positivo, contribuindo para a evolução da indústria de software.
          </p>
        </div>

        <div class="about-skills">
          <span v-for="skill in skills" :key="skill">{{ skill }}</span>
        </div>
      </div>

      <div class="projects" v-if="false">
        <div class="projects-header">
          <h1 class="title">Projetos em destaque</h1>
          <div class="group">
            <p class="subtitle">Deslize para ver alguns dos meus trabalhos recentes</p>
            <button class="all">
              Ver mais
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>

        <swiper
          class="projects-details"
          :modules="modules"
          :pagination="{ clickable: true }"
          :space-between="30"
          :slides-per-view="auto"
          :effect="'slide'"
          :loop="true"
          :slide-to-clicked-slide="true"
        >
          <swiper-slide v-for="(project, index) in projects" :key="index" class="slide">
            <figure class="image-placeholder">
              <img :src="project.image" :alt="project.title" />
            </figure>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script setup>
import "@/styles/views/about.css";
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import * as SwiperModules from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const { Pagination } = SwiperModules;

const skills = ref([
  "Django",
  "FastAPI",
  "Vue.js",
  "Spring Boot",
  "PostgreSQL",
  "MongoDB"
]);

const projects = ref([
  { image: "https://placehold.co/800x400" },
  { image: "https://placehold.co/800x400" },
  { image: "https://placehold.co/800x400" }
]);

const modules = [Pagination];
</script>

<style>
.swiper-pagination-bullet {
  background-color: var(--color-light-1);
  width: 12px; 
  height: 12px; 
  border-radius: 50%;
  opacity: 0.6;
  transition: background-color 0.3s ease, opacity 0.3s ease;
}

.swiper-pagination-bullet-active {
  background-color: var(--color-primary);
  opacity: 1;
}

.swiper-pagination-bullet:hover {
  background-color: var(--color-grey);
}

.swiper .swiper-slide {
  transition: transform 0.3s ease;
  cursor: pointer;
}

.swiper .swiper-slide:hover {
  transform: scale(1.02);
}
</style>