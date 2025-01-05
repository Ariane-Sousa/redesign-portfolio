<template>
  <div class="section">
    <div class="container-about">
      <div class="about-title">
        Projetos
      </div>
      <div class="line-title"></div>
      <div class="tabs">
        <button @click="filterProjects('all')" :class="{ active: filter === 'all' }">Todos</button>
        <button @click="filterProjects('portfolioFatec')" :class="{ active: filter === 'portfolioFatec' }">Portfolio Fatec</button>
        <button @click="filterProjects('design')" :class="{ active: filter === 'design' }">Web design</button>
      </div>
      <div class="projects-container">
        <div v-for="project in paginatedProjects" :key="project.id" class="project-card">
          <div
            class="project-image"
            @mouseenter="hover = project.id"
            @mouseleave="hover = null"
          >
            <img :src="project.image" :alt="project.title" />
            <div v-if="hover === project.id" class="overlay">
              <i class="fas fa-eye project-eye" @click="viewProject(project)"></i>
            </div>
          </div>
          <div class="project-title">{{ project.title }}</div>
          <div class="project-date">{{ project.description }}</div>
        </div>
      </div>
      <div class="pagination">
        <button @click="goToPage(page)" :class="{ active: currentPage === page }" v-for="page in totalPages" :key="page">
          {{ page }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import "@/styles/views/projects.css";
import betaImage from "@/assets/projects/beta.jpg";
import pro4TechImage from "@/assets/projects/pro4tech.jpg";
import domRockImage from "@/assets/projects/domrock.jpg";
import jaiaImage from "@/assets/projects/jaia.webp";
import tecsusImage from "@/assets/projects/tecsus.jpg";
import spcGrafenoImage from "@/assets/projects/grafeno.jpg";
import grafos from "@/assets/projects/grafos.webp";
import ecobrew from "@/assets/projects/ecobrew.png"

const filter = ref("all");
const hover = ref(null);
const currentPage = ref(1);
const itemsPerPage = 6;
const projects = [
  { 
    id: 1, 
    title: "Assistente Virtual",
    description: "FATEC 1º Semestre - Beta",
    actualDate: "2022-01-01",
    image: betaImage,
    category: "portfolioFatec",
    url: "https://github.com/Ariane-Sousa/beta" 
  },
  { 
    id: 2, 
    title: "Sistema de Gerenciamento de Vagas", 
    description: "FATEC 2º Semestre - Pro4Tech", 
    actualDate: "2022-06-01", 
    image: pro4TechImage, 
    category: "portfolioFatec", 
    url: "https://github.com/Ariane-Sousa/pro4tech" 
  },
  { 
    id: 3, 
    title: "Sistema de Predição de Vendas", 
    description: "FATEC 3º Semestre - Dom Rock", 
    actualDate: "2023-01-01", 
    image: domRockImage, 
    category: "portfolioFatec", 
    url: "https://github.com/Ariane-Sousa/dom-rock" 
  },
  { 
    id: 4, 
    title: "Sistema de Inspeções Prediais", 
    description: "FATEC 4º Semestre - Jaia", 
    actualDate: "2023-06-01", 
    image: jaiaImage, 
    category: "portfolioFatec", 
    url: "https://github.com/Ariane-Sousa/jaia-predial" 
  },
  { 
    id: 5, 
    title: "Sistema de Processamento de Contas", 
    description: "FATEC 5º Semestre - Tecsus", 
    actualDate: "2024-01-01", 
    image: tecsusImage, 
    category: "portfolioFatec", 
    url: "https://github.com/Ariane-Sousa/Tecsus" 
  },
  { 
    id: 6, 
    title: "Sistema de Previsão e Qualificação de Ativos Financeiros com Machine Learning", 
    description: "FATEC 6º Semestre - SPC Grafeno", 
    actualDate: "2024-06-01", 
    image: spcGrafenoImage, 
    category: "portfolioFatec", 
    url: "https://github.com/Ariane-Sousa/SPC-Grafeno" 
  },
  { 
    id: 7, 
    title: "API de Grafos Georreferenciados com PostGIS: Otimização e Roteamento", 
    description: "Georreferenciamento otimizado", 
    actualDate: "2024-09-01", 
    image: grafos, 
    category: "all", 
    url: "https://github.com/Ariane-Sousa/grafos" 
  },
  { 
    id: 9, 
    title: "Web Design - EcoBrew", 
    description: "Protótipo de um site para uma cafeteria fictícia", 
    actualDate: "2025-01-02", 
    image: ecobrew, 
    category: "design", 
    url: "https://github.com/Ariane-Sousa/ecobrew-design" 
  },
];

const filteredProjects = computed(() => {
  let filtered = filter.value === "all" ? projects : projects.filter(project => project.category === filter.value);
  filtered = filtered.sort((a, b) => new Date(b.actualDate) - new Date(a.actualDate));
  return filtered;
});

const totalPages = computed(() => {
  return Math.ceil(filteredProjects.value.length / itemsPerPage);
});

const paginatedProjects = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return filteredProjects.value.slice(start, end);
});

const filterProjects = (category) => {
  filter.value = category;
  currentPage.value = 1;
};

const goToPage = (page) => {
  currentPage.value = page;
};

const viewProject = (project) => {
  if (project.url) {
    window.open(project.url, "_blank");
  } else {
    console.log("URL não definida para o projeto: ", project);
  }
};
</script>
