<script setup lang="ts">
import { useManagerStore } from '@/stores/manager'

const manager = useManagerStore()

function clockIn() {
  manager.toggleClockedIn()
  manager.setDateTimeWhenClockedIn()
  console.log(`Clocked in on ${manager.dateTimeWhenClockedIn}`)
}

function clockOut() {
  manager.toggleClockedIn()

  const timeElapsedInSeconds =
    (new Date().getTime() - manager.dateTimeWhenClockedIn.getTime()) / 1000

  manager.addSecondsWorked(
    manager.dateTimeWhenClockedIn.toLocaleDateString('ja-JP'),
    timeElapsedInSeconds,
  )
}
</script>

<template>
  <main>
    <h2>Track how long you've been working 🧑‍💻</h2>
    <button v-if="manager.clockedIn" @click="clockOut" class="btn">Clock Out</button>
    <button v-else @click="clockIn" class="btn">Clock In</button>
    <p v-if="manager.clockedIn">You clocked in at {{ manager.dateTimeWhenClockedIn }}</p>
    <p v-else>
      You aren't clocked in. So far today you've worked for
      {{ manager.getSecondsWorkedToday(new Date().toLocaleDateString('ja-JP')) }} seconds
    </p>
  </main>
</template>
