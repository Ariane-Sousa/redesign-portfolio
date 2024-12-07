<template>
  <header>
    <Info></Info>
    <div class="container-router">
      <nav class="navbar">
        <RouterLink to="/" class="nav-link">About</RouterLink>
        <RouterLink to="/projects" class="nav-link">Projects</RouterLink>
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