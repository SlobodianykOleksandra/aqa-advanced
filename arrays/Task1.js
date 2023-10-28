const numbers1 = [2, -5, 0, 7, -3, 0, 10, -8, 'Hello', -8, 5]
const numbers2 = [5, 9, 0 ,-10, 7, 0, -1, -99]

let positiveCount
let negativeCount
let zeroCount
function countValues (array){
    positiveCount = 0
    negativeCount = 0
    zeroCount = 0
    for (let i = 0;i<array.length;i++){
        switch (true){
            case array[i] === 0:
                zeroCount++
                break
            case array[i] < 0:
                negativeCount++
                break
            case array[i] > 0:
                positiveCount++
                break
            default:
                console.log(`Value ${array[i]} on index ${i} is NaN`)
        }
    }
}
countValues(numbers1)
console.log('Count of positive numbers: ',positiveCount)
console.log('Count of negative numbers: ',negativeCount)
console.log('Count of zero: ',zeroCount)

console.log('---------------------')

countValues(numbers2)
console.log('Count of positive numbers: ',positiveCount)
console.log('Count of negative numbers: ',negativeCount)
console.log('Count of zero: ',zeroCount)