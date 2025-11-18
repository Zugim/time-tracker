<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import { useCounterStore } from './stores/counter'

const counter = useCounterStore()
</script>

<template>
  <h1>Time Tracker</h1>

  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/tracking">Tracking</RouterLink>
  </nav>

  <p>Track how long you've been working 🧑‍💻</p>

  <h2>Here's a counter!</h2>
  <p>{{ counter.count }}</p>
  <button class="btn" @click="counter.increment">Increment Counter</button>

  <RouterView />
</template>

<style scoped></style>
