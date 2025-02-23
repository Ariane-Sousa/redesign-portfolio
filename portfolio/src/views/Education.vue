<template>
  <div class="section">
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
              </div>
              <div class="description">
                <template v-if="Array.isArray(education.description)">
                  <ul>
                    <li v-for="(item, idx) in education.description" :key="idx">
                      {{ item }}
                    </li>
                  </ul>
                </template>
                <template v-else>
                  {{ education.description }}
                </template>
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
    title: "Tecnólogo em Banco de Dados",
    institution: "Fatec - Faculdade de Tecnologia do Estado de São Paulo",
    period: "2022 - 2024",
    location: "São José dos Campos - SP",
    description: [
      "Formação técnica voltada para o desenvolvimento de soluções em banco de dados.",
      "Abordagem de conceitos avançados em SQL, modelagem de dados e sistemas de gerenciamento de banco de dados.",
      "Utilização de ferramentas como MySQL, PostgreSQL e MongoDB.",
      "Estudo e aplicação de LGPD (Lei Geral de Proteção de Dados) em sistemas e banco de dados.",
      "Desenvolvimento de aplicações utilizando Python, Java e frameworks como Vue.js, Spring Boot, FastAPI e Quarkus.",
      "Desenvolvimento de APIs e sistemas back-end utilizando FastAPI e Quarkus, com foco em alta performance e escalabilidade.",
      "Integração de sistemas e soluções full-stack com Vue.js para desenvolvimento front-end."
    ]
  },
  {
    title: "Curso de Aprendizagem Industrial - Mecânico de Manutenção",
    institution: "Senai Santos ‘Dumont’",
    period: "2021 - 2023",
    location: "São José dos Campos - SP",
    description: [
      "Curso técnico com foco em manutenção e operação de máquinas industriais.",
      "Treinamento em técnicas de manutenção preventiva, corretiva e preditiva.",
      "Desenvolvimento de habilidades práticas em eletrônica, mecânica e sistemas automatizados."
    ]
  },
  {
    title: "Técnico em Administração",
    institution: "Escola Técnica Estadual Professora Ilza Nascimento Pintus",
    period: "2018 - 2020",
    location: "São José dos Campos - SP",
    description: [
      "Formação técnica voltada para a administração de empresas e gestão de processos.",
      "Aprofundamento em finanças, recursos humanos e logística.",
      "Aplicação de ferramentas administrativas para otimizar processos e resultados empresariais."
    ]
  }
];
</script>
