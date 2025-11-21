export function convertSeconds(seconds: number) {
  const hrs = Math.floor(seconds / (60 * 60))
  let remainder = seconds % (60 * 60)

  const mins = Math.floor(remainder / 60)
  remainder = remainder % 60

  const secs = Math.floor(remainder)

  let hrsFormatted: string
  let minsFormatted: string
  let secsFormatted: string

  if (hrs == 1) {
    hrsFormatted = `${hrs} hour,`
  } else if (hrs > 1) {
    hrsFormatted = `${hrs} hours,`
  } else {
    hrsFormatted = ''
  }

  if (mins == 1) {
    minsFormatted = `${mins} minutes,`
  } else if (mins > 1) {
    minsFormatted = `${mins} minutes,`
  } else {
    minsFormatted = ''
  }

  if (secs == 1) {
    secsFormatted = `${secs} second,`
  } else if (secs > 1) {
    secsFormatted = `${secs} seconds`
  } else {
    secsFormatted = ''
  }

  return `${hrsFormatted} ${minsFormatted} ${secsFormatted}`
}
