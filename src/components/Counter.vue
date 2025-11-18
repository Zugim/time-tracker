<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()
</script>

<template>
  <h2>Here's a counter!</h2>
  <p>{{ counter.count }}</p>
  <button class="btn" @click="counter.increment">Increment Counter</button>
</template>
