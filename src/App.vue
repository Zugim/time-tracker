<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <h1>Time Tracker</h1>

  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/tracking">Tracking</RouterLink>
  </nav>
  <RouterView />
</template>
