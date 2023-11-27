function divide (numerator, denominator) {
  if (denominator === 0) {
    throw new Error('Error: denominator cannot be equal to 0')
  } else if (!Number.isInteger(numerator) || !Number.isInteger(denominator)) {
    throw new Error('Error: numerator and denominator must be numbers')
  } else {
    return (numerator / denominator)
  }
}

try {
  const result1 = divide(72, 8)
  console.log(result1)
  const result2 = divide(0, 7)
  console.log(result2)
  const result3 = divide(10, 0)
  console.log(result3)
  const result4 = divide('NaN', 5)
  console.log(result4)
  const result5 = divide(3, '5')
  console.log(result5)
} catch (err) {
  console.log(err.message)
} finally {
  console.log('The work is completed')
}
