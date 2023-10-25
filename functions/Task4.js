function divide(numerator,denominator){
    try {
        if (denominator === 0 || !Number.isInteger(numerator) || !Number.isInteger(denominator)) {
            throw new Error(`Wrong input value: numerator and denominator must be numbers, denominator cannot be equal to 0`)
        }
        else {
            const result = (numerator / denominator)//.toFixed(2)
            console.log(`The result of division ${numerator} on ${denominator} is ${result}`)
            return result
        }
    }catch (err1) {
        console.log(err1.message)
    }finally {
        console.log('The work is completed')
    }
}
divide(72,8)
divide(0,7)
divide(10,0)
divide('NaN',5)
divide(3,'5')