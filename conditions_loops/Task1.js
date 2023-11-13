const averageGrade = 'test'

try {
  if (averageGrade === 0 || averageGrade === 1) {
    console.log(`For grade ${averageGrade} result is UNSATISFACTORILY`)
  } else if (averageGrade >= 2 && averageGrade < 60) {
    console.log(`For grade ${averageGrade} result is UNSATISFACTORILY`)
  } else if (averageGrade >= 60 && averageGrade <= 70) {
    console.log(`For grade ${averageGrade} result is SATISFACTORILY`)
  } else if (averageGrade >= 71 && averageGrade <= 80) {
    console.log(`For grade ${averageGrade} result is GOOD`)
  } else if (averageGrade >= 81 && averageGrade <= 90) {
    console.log(`For grade ${averageGrade} result is VERY GOOD`)
  } else if (averageGrade >= 91 && averageGrade <= 100) {
    console.log(`For grade ${averageGrade} result is EXCELLENT`)
  } else {
    throw new Error('Not existing grade value')
  }
} catch (error) {
  console.log(error.message)
} finally {
  console.log('Your score has been calculated!')
}
