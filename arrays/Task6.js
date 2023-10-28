const numbersList = [1,10,14,2,4,5,43,34]
const newArray = Array.from(numbersList)
newArray.sort((a, b) => a-b)
console.log('First array: ', numbersList)
console.log('Sorted array: ', newArray)
