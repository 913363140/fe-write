function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time))
}

const sleep = time => {
  return new Promise(resolve => setTimeout(resolve, time))
}