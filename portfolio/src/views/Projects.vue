<template>
  <div class="section">
    <div class="container-about">
      <div class="about-title">
        Projetos
      </div>
      <div class="line-title"></div>
      <div class="tabs">
        <button @click="filterProjects('all')" :class="{'active': filter === 'all'}">Todos</button>
        <button @click="filterProjects('portfolioFatec')" :class="{'active': filter === 'portfolioFatec'}">Portfolio Fatec</button>
      </div>
      <div class="projects-container">
        <div v-for="project in filteredProjects" :key="project.id" class="project-card">
          <div class="project-image">
            <img :src="project.image" :alt="project.title"/>
          </div>
          <div class="project-title">{{ project.title }}</div>
          <div class="project-date">{{ project.date }}</div>
        </div>
      </div>
      <div v-if="filter === 'portfolioFatec'" class="portfolio-description">
        Este portfólio reúne os projetos desenvolvidos ao longo do curso, com foco na abordagem de 
        Aprendizado por Projetos Integradores (API). Ele reflete uma parte essencial da minha trajetória acadêmica na 
        Faculdade de Tecnologia de São José dos Campos, onde estou em busca do título de Tecnóloga em Banco de Dados.
      </div>
    </div>
  </div>
</template>

<script>
import "@/styles/views/projects.css";
import betaImage from "@/assets/projects/beta.jpg"
import pro4TechImage from "@/assets/projects/pro4tech.jpg"
import domRockImage from "@/assets/projects/domrock.jpg"
import jaiaImage from "@/assets/projects/jaia.webp"
import tecsusImage from "@/assets/projects/tecsus.jpg"
import spcGrafenoImage from "@/assets/projects/grafeno.jpg"

export default {
  data() {
    return {
      filter: 'all',
      projects: [
        { id: 1, title: 'Assistente Virtual', date: '1º Semestre/2022 - Beta', image: betaImage, category: 'portfolioFatec' }, 
        { id: 2, title: 'Sistema de Gerenciamento de Vagas', date: '2º Semestre/2022 - Pro4Tech', image: pro4TechImage, category: 'portfolioFatec' },
        { id: 3, title: 'Sistema de Predição de Vendas', date: '3º Semestre/2023 - Dom Rock', image: domRockImage, category: 'portfolioFatec' },
        { id: 4, title: 'Sistema de Inspeções Prediais', date: '4º Semestre/2023 - Jaia', image: jaiaImage, category: 'portfolioFatec' },
        { id: 5, title: 'Sistema de Processamento de Contas', date: '5º Semestre/2024 - Tecsus', image: tecsusImage, category: 'portfolioFatec' },
        { id: 6, title: 'Sistema de Previsão e Qualificação de Ativos Financeiros com Machine Learning', date: '6º Semestre/2023 - SPC Grafeno', image: spcGrafenoImage, category: 'portfolioFatec' },
      ]
    };
  },
  computed: {
    filteredProjects() {
      if (this.filter === 'all') {
        return this.projects;
      }
      return this.projects.filter(project => project.category === this.filter);
    }
  },
  methods: {
    filterProjects(category) {
      this.filter = category;
    }
  }
};
</script>

<style scoped>

</style>
