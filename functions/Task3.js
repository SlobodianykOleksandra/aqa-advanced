function countDown (num) {
  console.log(`Value: ${num}`)
  if (num > 1) {
    countDown(num - 1)
  }
}
countDown(5)
