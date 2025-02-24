<template>
  <div class="section-experience">
    <div class="container-experience">
      <section class="timeline">
        <div class="title-wrapper">
          <div class="icon-box">
            <i class="fa-solid fa-book"></i> 
          </div>
          <div class="experience-title">
            <h1>Experiência Profissional</h1>
            <h2>Conheça a minha jornada profissional</h2>
          </div>
        </div>
        <ol class="timeline-list">
          <li v-for="(experience, index) in experiences" :key="index" class="timeline-item">
            <div class="timeline-item-frame">
              <div class="header">
                <h1>{{ experience.title }}</h1>
                <h2>{{ experience.company }}</h2>
              </div>
              <div class="group-items">
                <div class="period">
                  <i class="fa-solid fa-business-time"></i>
                  <span>{{ experience.period }}</span>
                </div>
                <div class="region">
                  <i class="fa-solid fa-location-dot"></i>
                  <span>{{ experience.location }}</span>
                </div>
                <div class="type">
                  <i class="fa-solid fa-briefcase"></i>
                  <span>{{ experience.type }}</span>
                </div>
              </div>
              <div class="description">
                {{ experience.description }}
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

const experiences = [
  {
    title: "Desenvolvedora de Software",
    company: "Altave",
    period: "Set 2024 - Atual",
    location: "São José dos Campos - SP",
    type: "Efetivo",
    description:
      "Atuo no desenvolvimento de soluções completas, abrangendo tanto o front-end quanto o back-end. Trabalho com Django (Python) e Vue.js (JavaScript), implementando e otimizando componentes interativos. Além disso, participo da integração de sistemas IoT, incluindo a ativação remota de equipamentos como speakers via Redis, RabbitMQ e MQTT (Mosquitto). Minha atuação também envolve a manipulação de dados em tempo real para garantir a alta disponibilidade e escalabilidade das aplicações. No back-end, desenvolvo métodos em Python para integração e armazenamento de arquivos no Amazon S3 e utilizo Celery para gerenciamento de tarefas assíncronas e processamento distribuído. No front-end, sou responsável pelo desenvolvimento e manutenção de players de vídeo em tempo real utilizando Video.js no Vue.js. Além disso, colaboro com equipes multidisciplinares para garantir a entrega de projetos integrados e escaláveis."
  },
  {
    title: "Desenvolvedora de Software",
    company: "Altave",
    period: "Out 2023 - Set 2024",
    location: "São José dos Campos - SP",
    type: "Estágio",
    description:
      "Durante meu estágio, adquiri experiência prática no desenvolvimento front-end e back-end utilizando Django (Python) e Vue.js (JavaScript). Contribuí para a implementação e manutenção de componentes Vue.js em projetos reais e participei do desenvolvimento de funcionalidades para monitoramento de dados em tempo real. Também auxiliei na integração de sistemas IoT e na comunicação entre dispositivos via RabbitMQ e Redis. No back-end, atuei no suporte à criação de processos assíncronos utilizando Celery para otimizar fluxos internos. Além disso, desenvolvi soluções para automação e otimização de processos internos, aprimorando minhas habilidades técnicas e colaborativas ao longo do ciclo de desenvolvimento de software."
  },
  {
    title: "Monitoramento de Banco de Dados",
    company: "HTI Tecnologia",
    period: "Mar 2023 - Out 2023",
    location: "São José dos Campos - SP",
    type: "Efetivo",
    description:
      "Trabalhei com o monitoramento de bancos de dados, garantindo sua integridade e desempenho. Minha atuação envolvia o levantamento de informações relevantes para suporte e análise técnica, além da análise de métricas e estatísticas relacionadas ao uso e desempenho de servidores. Também identifiquei e resolvi problemas para otimizar os recursos e melhorar a eficiência dos sistemas."
  },
  {
    title: "Mecânico de Manutenção",
    company: "Embraer",
    period: "Fev 2021 - Fev 2023",
    location: "São José dos Campos - SP",
    type: "Aprendiz",
    description:
      "Participei do curso de capacitação profissional em Mecânica de Manutenção pelo SENAI, onde desenvolvi habilidades técnicas em diagnóstico e reparo de sistemas mecânicos. Durante esse período, adquiri experiência prática e teórica em manutenção mecânica em um ambiente industrial de alta performance."
  }
];
</script>
