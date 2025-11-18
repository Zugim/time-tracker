<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import Counter from './components/Counter.vue'
</script>

<template>
  <h1>Time Tracker</h1>

  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/tracking">Tracking</RouterLink>
  </nav>

  <p>Track how long you've been working 🧑‍💻</p>

  <Counter />

  <RouterView />
</template>
