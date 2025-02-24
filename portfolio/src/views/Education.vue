<template>
  <div class="section-education">
    <div class="container-experience">
      <section class="timeline">
        <div class="title-wrapper">
          <div class="icon-box">
            <i class="fa-solid fa-book"></i> 
          </div>
          <div class="experience-title">
            <h1>Educação</h1>
            <h2>Minha jornada acadêmica e cursos realizados</h2>
          </div>
        </div>
        <ol class="timeline-list">
          <li v-for="(education, index) in academicEducation" :key="index" class="timeline-item">
            <div class="timeline-item-frame">
              <div class="header">
                <h1>{{ education.title }}</h1>
                <h2>{{ education.company }}</h2>
              </div>
              <div class="group-items">
                <div class="period">
                    <i class="fa-solid fa-briefcase"></i>
                    <span>{{ education.period }}</span>
                </div>
                <div class="region">
                  <i class="fa-solid fa-location-dot"></i>
                  <span>{{ education.location }}</span>
                </div>
                <div class="type">
                  <i class="fa-solid fa-briefcase"></i>
                  <span>{{ education.type }}</span>
                </div>
              </div>
              <div class="description">
                {{ education.description }}
              </div>
            </div>
          </li>
        </ol>
      </section>
    </div>
  </div>
</template>

<script setup>
import "@/styles/views/experience.css";

const academicEducation = [
  {
    title: "Banco de Dados",
    institution: "Fatec - Faculdade de Tecnologia do Estado de São Paulo",
    period: "2022 - 2024",
    location: "São José dos Campos - SP",
    type: "Técnologo",
    description:
      "Durante a formação, aprimorei habilidades no desenvolvimento de soluções em banco de dados, com foco em SQL, modelagem de dados e sistemas de gerenciamento como MySQL, PostgreSQL e MongoDB. Também estudei e apliquei conceitos da LGPD (Lei Geral de Proteção de Dados) em sistemas e bancos de dados. Além disso, desenvolvi aplicações utilizando Python, Java e frameworks como Vue.js, Spring Boot, FastAPI e Quarkus. Minha experiência incluiu o desenvolvimento de APIs e sistemas back-end com FastAPI e Quarkus, priorizando alta performance e escalabilidade, além da integração de soluções full-stack com Vue.js para o desenvolvimento front-end."
  },
  {
    title: "Mecânico de Manutenção",
    institution: "Senai Santos ‘Dumont’",
    period: "2021 - 2023",
    location: "São José dos Campos - SP",
    type: "Aprendizagem Industrial",
    description:
      "O curso técnico teve foco na manutenção e operação de máquinas industriais, abrangendo técnicas de manutenção preventiva, corretiva e preditiva. Durante a formação, desenvolvi habilidades práticas em eletrônica, mecânica e sistemas automatizados, aplicando os conhecimentos adquiridos em ambientes industriais."
  },
  {
    title: "Administração",
    institution: "Escola Técnica Estadual Professora Ilza Nascimento Pintus",
    period: "2018 - 2020",
    location: "São José dos Campos - SP",
    type: "Técnico",
    description:
      "A formação técnica em administração proporcionou conhecimentos sobre gestão de empresas, finanças, recursos humanos e logística. Durante o curso, adquiri experiência na aplicação de ferramentas administrativas para otimizar processos e melhorar os resultados empresariais."
  }
];
</script>
