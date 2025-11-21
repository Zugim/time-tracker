import { ref } from 'vue'
import { defineStore } from 'pinia'

interface SecondsWorked {
  date: string
  seconds: number
}

export const useManagerStore = defineStore('manager', () => {
  const clockedIn = ref(false)
  function toggleClockedIn() {
    clockedIn.value = !clockedIn.value
  }

  const dateTimeWhenClockedIn = ref()
  function setDateTimeWhenClockedIn() {
    dateTimeWhenClockedIn.value = new Date()
  }

  const secondsWorked = ref<SecondsWorked[]>([])
  function getSecondsWorkedToday(date: string) {
    const itemIndex = secondsWorked.value.findIndex((item) => item.date === date)

    return secondsWorked.value[itemIndex]?.seconds
  }
  function addSecondsWorked(date: string, seconds: number) {
    const itemIndex = secondsWorked.value.findIndex((item) => item.date === date)

    if (itemIndex === -1) {
      console.log(`New entry made for ${date}`)

      secondsWorked.value.push({ date, seconds })
      const item = secondsWorked.value[secondsWorked.value.length - 1]

      console.log('SECONDS ELAPSED:', item?.seconds)
    } else {
      const item = secondsWorked.value[itemIndex]

      if (item) {
        item.seconds = (item.seconds ?? 0) + seconds
      }

      console.log('SECONDS ELAPSED:', item?.seconds)
    }
  }

  return {
    clockedIn,
    toggleClockedIn,
    dateTimeWhenClockedIn,
    setDateTimeWhenClockedIn,
    secondsWorked,
    getSecondsWorkedToday,
    addSecondsWorked,
  }
})
