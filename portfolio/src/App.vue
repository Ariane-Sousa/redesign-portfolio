<template>
  <header>
    <Info></Info>
    <div class="container-router">
      <nav class="navbar">
        <RouterLink to="/" class="nav-link">Sobre</RouterLink>
        <RouterLink to="/projects" class="nav-link">Projetos</RouterLink>
      </nav>
      <div class="content">
        <RouterView />
      </div>
    </div>
  </header>

</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import Info from "@/views/Info.vue";
</script>