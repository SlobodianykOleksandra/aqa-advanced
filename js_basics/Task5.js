import chalk from "chalk";

//TASK 5.1
const radius = 8
const mathPi = Math.PI

const circArea = (mathPi*Math.pow(radius,2)).toFixed(2)

console.log(`If a radius of the circle = ${chalk.greenBright.bold(radius)}sm, than an area of the circle = ${chalk.blueBright.bold(circArea)}sm^2`)

//TASK 5.2
const rectLength = 7
const rectWidth = 9

const rectArea = (rectLength*rectWidth).toFixed(2)

console.log(`With a length = ${chalk.greenBright.bold(rectLength)}sm and a width = ${chalk.greenBright.bold(rectWidth)}sm, an area of the rectangle = ${chalk.blueBright.bold(rectArea)}sm^2`)

//TASK 5.3
const cylHeight = 14

const cylVolume = (mathPi*Math.pow(radius,2)*cylHeight).toFixed(2)

console.log(`When a radius = ${chalk.greenBright.bold(radius)}sm and a height = ${chalk.greenBright.bold(cylHeight)}sm, a volume of the cylinder = ${chalk.blueBright.bold(cylVolume)}sm^3`)