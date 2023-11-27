function calcAreaDeclaration (width, height) {
  return width * height
}
const calcAreaExpression = function (width, height) {
  return width * height
}
const calcAreaArrow = (width, height) => width * height

const rectangle1 = calcAreaDeclaration(5, 10)
const rectangle2 = calcAreaExpression(7, 9)
const rectangle3 = calcAreaArrow(6, 8)

console.log(`Calculated area by Function Declaration: ${rectangle1} sm^2`)
console.log(`Calculated area by Function Expression: ${rectangle2} sm^2`)
console.log(`Calculated area by Arrow Function: ${rectangle3} sm^2`)
