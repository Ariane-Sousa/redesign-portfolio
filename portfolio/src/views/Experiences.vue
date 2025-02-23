<template>
  <div class="section">
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
                <template v-if="Array.isArray(experience.description)">
                  <ul>
                    <li v-for="(item, idx) in experience.description" :key="idx">
                      {{ item }}
                    </li>
                  </ul>
                </template>
                <template v-else>
                  {{ experience.description }}
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

const experiences = [
  {
    title: "Desenvolvedora de Software",
    company: "Altave",
    period: "Set 2024 - Atual",
    location: "São José dos Campos - SP",
    type: "Efetivo",
    description: [
      "Desenvolvimento de soluções completas, abrangendo front-end e back-end.",
      "Atuação com Django (Python) e Vue.js (JavaScript), implementando e otimizando componentes interativos.",
      "Integração de sistemas IoT, incluindo ativação remota de equipamentos como speakers via Redis, RabbitMQ e MQTT (Mosquitto).",
      "Trabalho com dados em tempo real, garantindo alta disponibilidade e escalabilidade das aplicações.",
      "Implementação de métodos do Python para integração e manipulação de arquivos no Amazon S3.",
      "Uso do Celery para gerenciamento de tarefas assíncronas e processamento distribuído.",
      "Desenvolvimento e manutenção de players de vídeo em tempo real utilizando Video.js no Vue.js.",
      "Colaboração com equipes multidisciplinares para entrega de projetos integrados e escaláveis."
    ]
  },
  {
    title: "Desenvolvedora de Software",
    company: "Altave",
    period: "Out 2023 - Set 2024",
    location: "São José dos Campos - SP",
    type: "Estágio",
    description: [
      "Experiência prática em desenvolvimento front-end e back-end utilizando Django (Python) e Vue.js (JavaScript).",
      "Participação em projetos reais, contribuindo na implementação e manutenção de componentes Vue.js.",
      "Colaboração no desenvolvimento de funcionalidades para monitoramento de dados em tempo real.",
      "Auxílio na integração de sistemas IoT e na comunicação entre dispositivos via RabbitMQ e Redis.",
      "Suporte na criação de processos assíncronos com Celery para otimização de fluxos internos.",
      "Implementação de soluções para otimização de processos internos, incluindo automação de tarefas.",
      "Aprimoramento de habilidades técnicas e colaborativas ao atuar diretamente no ciclo de desenvolvimento de software."
    ]
  },
  {
    title: "Monitoramento de Banco de Dados",
    company: "HTI Tecnologia",
    period: "Mar 2023 - Out 2023",
    location: "São Paulo - SP",
    type: "Efetivo",
    description: [
      "Monitoramento de bancos de dados para garantir a integridade e o desempenho.",
      "Levantamento de informações relevantes para suporte e análise técnica.",
      "Análise de métricas e estatísticas relacionadas ao desempenho e uso de servidores.",
      "Identificação e resolução de problemas para otimização de recursos."
    ]
  },
  {
    title: "Mecânico de Manutenção",
    company: "Embraer",
    period: "Fev 2021 - Fev 2023",
    location: "São José dos Campos - SP",
    type: "Aprendiz",
    description: [
      "Participação no curso de capacitação profissional em Mecânica de Manutenção pelo SENAI.",
      "Desenvolvimento de habilidades técnicas em manutenção mecânica, incluindo diagnóstico e reparo de sistemas.",
      "Aprendizado prático e teórico em ambientes industriais de alta performance."
    ]
  },
];
</script>
