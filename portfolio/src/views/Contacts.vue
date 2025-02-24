<template>
  <section class="contact-section">
    <div class="contact-container">
      <h1 class="contact-title">Contato</h1>
      <p class="contact-subtitle">Entre em contato comigo para conversarmos sobre oportunidades e colaborações</p>
      <form @submit.prevent="handleSubmit" class="contact-form">
        <div class="input-group">
          <div class="input-field">
            <label for="name">Nome</label>
            <input id="name" v-model="name" placeholder="Digite o nome" type="text" required />
          </div>
          <div class="input-field">
            <label for="email">Email</label>
            <input id="email" v-model="email" placeholder="Digite seu email" type="email" required />
          </div>
        </div>
        <div class="input-group">
          <div class="input-field">
            <label for="subject">Assunto</label>
            <input id="subject" v-model="subject" placeholder="Digite o assunto" type="text" required />
          </div>
        </div>
        <div class="input-group">
          <div class="input-field">
            <label for="message">Mensagem</label>
            <textarea id="message" v-model="message" placeholder="Digite sua mensagem" required></textarea>
          </div>
        </div>
        <button type="submit" class="submit-btn">
          Enviar mensagem
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
import "@/styles/views/contacts.css";
import { ref } from "vue";

const name = ref("");
const email = ref("");
const subject = ref("");
const message = ref("");

const handleSubmit = () => {
  alert(`Mensagem enviada por ${name.value} (${email.value}): ${message.value}`);
  name.value = "";
  email.value = "";
  message.value = "";
  subject.value = "";
};
</script>
