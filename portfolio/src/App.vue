<template>
  <div class="layout">
    <SideBar></SideBar>
    <main class="container-router">
      <div class="content">
        <RouterView />
      </div>
    </main>
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import SideBar from "@/views/SideBar.vue";
</script>