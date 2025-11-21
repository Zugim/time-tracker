<script setup lang="ts">
import { useTrackerManagerStore } from '@/stores/trackerManager'

import { convertSeconds } from '@/utils/convertSeconds'

const trackerManager = useTrackerManagerStore()

function clockIn() {
  trackerManager.toggleClockedIn()
  trackerManager.setDateTimeWhenClockedIn()
}

function clockOut() {
  trackerManager.toggleClockedIn()
  trackerManager.addSecondsWorked(trackerManager.getDateTimeWhenClockedIn())
}
</script>

<template>
  <main>
    <h2>Track how long you've been working 🧑‍💻</h2>
    <button v-if="trackerManager.getClockedIn()" @click="clockOut" class="btn">Clock Out</button>
    <button v-else @click="clockIn" class="btn">Clock In</button>
    <p v-if="trackerManager.getClockedIn()">
      You are clocked in for {{ trackerManager.getDateWhenClockedIn() }}
    </p>
    <p v-else>
      You aren't clocked in<span v-if="trackerManager.getSecondsWorkedToday() > 0"
        >. So far today you've worked for
        {{ convertSeconds(trackerManager.getSecondsWorkedToday()) }}</span
      >
    </p>
  </main>
</template>
