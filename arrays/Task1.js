const numbers1 = [2, -5, 0, 7, -3, 0, 10, -8, 'Hello', -8, 5]
const numbers2 = [5, 9, 0 ,-10, 7, 0, -1, -99]

function countValues (array){
    let positiveCount = 0
    let negativeCount = 0
    let zeroCount = 0
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
    return [positiveCount, negativeCount, zeroCount]
}

const count1 = countValues(numbers1)
console.log('Count of positive numbers: ',count1[0])
console.log('Count of negative numbers: ',count1[1])
console.log('Count of zero: ',count1[2])

console.log('---------------------')

const count2 = countValues(numbers2)
console.log('Count of positive numbers: ',count2[0])
console.log('Count of negative numbers: ',count2[1])
console.log('Count of zero: ',count2[2])