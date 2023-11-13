const numbers = [11, 22, 30, 48, 59]
const sumNum = numbers.reduce((accum, number) => accum + number, 0)
console.log('Start array: ', numbers)
console.log('Sum of start array`s elements: ', sumNum)
