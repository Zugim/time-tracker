import { ref } from 'vue'
import { defineStore } from 'pinia'

interface SecondsWorked {
  date: string
  seconds: number
}

export const useTrackerManagerStore = defineStore('manager', () => {
  const clockedIn = ref(false)
  function getClockedIn() {
    return clockedIn.value
  }
  function toggleClockedIn() {
    clockedIn.value = !clockedIn.value
  }

  let dateTimeWhenClockedIn: Date
  function getDateTimeWhenClockedIn() {
    return dateTimeWhenClockedIn
  }
  function setDateTimeWhenClockedIn() {
    dateTimeWhenClockedIn = new Date()
  }

  function getDateWhenClockedIn() {
    return dateTimeWhenClockedIn.toLocaleDateString('ja-JP')
  }

  const secondsWorkedArr = ref<SecondsWorked[]>([])
  function getSecondsWorkedToday() {
    const itemIndex = secondsWorkedArr.value.findIndex(
      (item) => item.date === new Date().toLocaleDateString('ja-JP'),
    )

    return secondsWorkedArr.value[itemIndex]?.seconds || 0
  }
  function addSecondsWorked(date: Date) {
    const extractedDate = date.toLocaleDateString('ja-JP')
    const timeElapsed = (new Date().getTime() - date.getTime()) / 1000

    const itemIndex = secondsWorkedArr.value.findIndex((item) => item.date === extractedDate)

    if (itemIndex === -1) {
      secondsWorkedArr.value.push({ date: extractedDate, seconds: timeElapsed })
    } else {
      const item = secondsWorkedArr.value[itemIndex]

      if (item) {
        item.seconds = (item.seconds ?? 0) + timeElapsed
      }
    }
  }

  return {
    getClockedIn,
    toggleClockedIn,
    getDateTimeWhenClockedIn,
    setDateTimeWhenClockedIn,
    getDateWhenClockedIn,
    getSecondsWorkedToday,
    addSecondsWorked,
  }
})
