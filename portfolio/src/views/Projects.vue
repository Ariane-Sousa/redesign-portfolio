<template>
  <div class="section-project">
    <div class="container-project">
      <div class="projects-title">
        <h1>Projetos</h1>
        <h2>Conheça alguns dos projetos que desenvolvi</h2>
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
          <div class="project-title">
            <h1>{{ project.title }}</h1>
            <h2>{{ project.description }}</h2>
          </div>
          <div class="see-more" @click="viewProject(project)">
            <span>Ver detalhes</span>
            <i class="fa-solid fa-arrow-right" />
          </div>
        </div>
      </div>
      <div class="pagination">
        <button @click="goToPage(page)" :class="{ active: currentPage === page }" v-for="page in totalPages" :key="page">
          {{ page }}
        </button>
      </div>
    </div>
  </div>
  <ProjectModal v-if="selectedProject" :project="selectedProject" @close="closeModal" />
</template>

<script setup>
import { ref, computed } from "vue";
import ProjectModal from "@/components/ProjectModal.vue";

import "@/styles/views/projects.css";
import betaImage from "@/assets/projects/beta.jpg";
import pro4TechImage from "@/assets/projects/pro4tech.jpg";
import domRockImage from "@/assets/projects/domrock.jpg";
import jaiaImage from "@/assets/projects/jaia.webp";
import tecsusImage from "@/assets/projects/tecsus.jpg";
import spcGrafenoImage from "@/assets/projects/grafeno.jpg";
import grafos from "@/assets/projects/grafos.webp";
import ecobrew from "@/assets/projects/ecobrew.png";
import talenthubCandidato from "@/assets/projects/talenthub-candidato.png";
import talenthubRecrutador from "@/assets/projects/talenthub-recrutador.png";

const filter = ref("all");
const hover = ref(null);
const currentPage = ref(1);
const itemsPerPage = 6;
const selectedProject = ref(null);

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
    title: "Gerenciamento de Vagas", 
    description: "FATEC 2º Semestre - Pro4Tech", 
    actualDate: "2022-06-01", 
    image: pro4TechImage, 
    category: "portfolioFatec", 
    url: "https://github.com/Ariane-Sousa/pro4tech" 
  },
  { 
    id: 3, 
    title: "Predição de Vendas", 
    description: "FATEC 3º Semestre - Dom Rock", 
    actualDate: "2023-01-01", 
    image: domRockImage, 
    category: "portfolioFatec", 
    url: "https://github.com/Ariane-Sousa/dom-rock" 
  },
  { 
    id: 4, 
    title: "Inspeções Prediais", 
    description: "FATEC 4º Semestre - Jaia", 
    actualDate: "2023-06-01", 
    image: jaiaImage, 
    category: "portfolioFatec", 
    url: "https://github.com/Ariane-Sousa/jaia-predial" 
  },
  { 
    id: 5, 
    title: "Processamento de Contas", 
    description: "FATEC 5º Semestre - Tecsus", 
    actualDate: "2024-01-01", 
    image: tecsusImage, 
    category: "portfolioFatec", 
    url: "https://github.com/Ariane-Sousa/Tecsus" 
  },
  { 
    id: 6, 
    title: "Ativos Financeiros", 
    description: "FATEC 6º Semestre - SPC Grafeno", 
    actualDate: "2024-06-01", 
    image: spcGrafenoImage, 
    category: "portfolioFatec", 
    url: "https://github.com/Ariane-Sousa/SPC-Grafeno" 
  },
  { 
    id: 7, 
    title: "Grafos Georreferenciados", 
    description: "Georreferenciamento otimizado", 
    actualDate: "2024-09-01", 
    image: grafos, 
    category: "all", 
    url: "https://github.com/Ariane-Sousa/grafos" 
  },
  { 
    id: 9, 
    title: "EcoBrew", 
    description: "Protótipo web para uma cafeteria", 
    actualDate: "2025-01-02", 
    image: ecobrew, 
    category: "design", 
    url: "https://www.figma.com/proto/ITUjlrJCqd1YKndJhc2cO2/EcoBrew?page-id=5%3A573&node-id=5-574&p=f&viewport=-292%2C2343%2C0.28&t=yaMryNJyqTDtUyma-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=5%3A574" 
  },
  { 
    id: 10, 
    title: "TalentHub", 
    description: "Protótipo web para gerenciamento e aplicação de vagas", 
    actualDate: "2025-01-10", 
    image: talenthubCandidato, 
    category: "design", 
    url: "https://www.figma.com/proto/6PGgW7K4eLmpj7oh6CWc9g/TalentHub?page-id=1%3A2&node-id=3-34&p=f&viewport=-922%2C-829%2C0.48&t=sTZwZOxqQrbE3o6g-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=3%3A34" 
  },
];

const totalPages = computed(() => Math.ceil(projects.length / itemsPerPage));

const paginatedProjects = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return projects.slice(start, start + itemsPerPage);
});

const goToPage = (page) => {
  currentPage.value = page;
};

const openModal = (project) => {
  selectedProject.value = project;
};

const closeModal = () => {
  selectedProject.value = null;
};

const viewProject = (project) => {
  if (project.url) {
    window.open(project.url, "_blank");
  } else {
    console.warn("O projeto não possui um link.");
  }
};
</script>

<style scoped>
.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 250px;
}
</style>
