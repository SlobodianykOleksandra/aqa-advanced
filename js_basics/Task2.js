import chalk from "chalk";

const dogWeight = 28
const DOG_NAME = 'Shakira'
const isHealthy = true
const dogPassportNumber = null
let dogBreed
const dogFullInfo = `The dog name is ${DOG_NAME}, Weight: ${dogWeight}kg, Good health: ${isHealthy}, Passport number: ${dogPassportNumber}, Breed: ${dogBreed}`

console.log(chalk.inverse.cyanBright.bgWhiteBright.bold(`Full information: ${dogFullInfo}`))
console.log(chalk.italic(`A weight between 20-60kg is`),chalk.inverse.greenBright.bgWhiteBright('OK'),chalk.bold.greenBright(`. Your dog has ${dogWeight}kg`))
console.log(chalk.italic.inverse(`We are Vets because of pets! Good luck, ${DOG_NAME}!`))