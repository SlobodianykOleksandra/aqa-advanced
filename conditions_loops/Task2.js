const averageGrade = 60

try {
  switch (true) {
    case averageGrade === 0 || averageGrade === 1:
      console.log(`For grade ${averageGrade} result is UNSATISFACTORILY`)
      break
    case averageGrade >= 2 && averageGrade < 60:
      console.log(`For grade ${averageGrade} result is UNSATISFACTORILY`)
      break
    case averageGrade >= 60 && averageGrade <= 70:
      console.log(`For grade ${averageGrade} result is SATISFACTORILY`)
      break
    case averageGrade >= 71 && averageGrade <= 80:
      console.log(`For grade ${averageGrade} result is GOOD`)
      break
    case averageGrade >= 81 && averageGrade <= 90:
      console.log(`For grade ${averageGrade} result is VERY GOOD`)
      break
    case averageGrade >= 91 && averageGrade <= 100:
      console.log(`For grade ${averageGrade} result is EXCELLENT`)
      break
    default:
      throw new Error('Not existing grade value')
  }
} catch (error) {
  console.log(error.message)
} finally {
  console.log('Your score has been calculated!')
}
