import { Book } from './Book.js'
import { EBook } from './EBook.js'

// Task1 - class Book
console.log('TASK 1 - CREATE BOOK INSTANCES')
const childrensBook = new Book('Charlie and the Chocolate Factory', 'Roald Dahl', 1964, false)
childrensBook.printInfo()
const teensBook = new Book('The Maze Runner', 'James Dashner', 2009, true)
teensBook.printInfo()
const adultsBook = new Book('The Lord of the Rings', 'J. R. R. Tolkien', 1954, true)
adultsBook.printInfo()

// Task2 - class EBook
console.log('TASK 2 - CREATE E-BOOK INSTANCES')
const adultsEbook = new EBook('EPUB', 'The Innovators', 'Walter Isaacson', 2014, true)
adultsEbook.printInfo()
const youngAdultsEbook = new EBook('FB2', 'The Last Wish', 'Andrzej Sapkowski', 1993, false)
youngAdultsEbook.printInfo()

// Task3 - Getters/Setters
console.log('TASK 3.1 GET/SET FOR BOOK')
const validateBook = new Book(1998, true, 'Something14', 0)
console.log(validateBook.title)
validateBook.title = true
validateBook.title = 'The Prestige'
console.log(validateBook.title)
console.log('******************')

// console.log(validateBook.author)
// validateBook.author = 10001
// validateBook.author = 'Christopher Priest'
// console.log(validateBook.author)
// console.log('******************')

console.log(validateBook.yearOfPublic)
validateBook.yearOfPublic = true
validateBook.yearOfPublic = '1995prestige'
validateBook.yearOfPublic = '1995'
console.log(validateBook.yearOfPublic)
console.log('******************')

console.log(validateBook.isAvailable)
validateBook.isAvailable = 'true'
validateBook.isAvailable = 1
console.log(validateBook.isAvailable)
console.log('******************')

console.log('TASK 3.2 GET/SET FOR E-BOOK')
const verifyEBook = new EBook(123, 1998, 'C. S. Lewis', 1950, true)

console.log(verifyEBook.title)
verifyEBook.title = true
verifyEBook.title = 'The Chronicles of Narnia'
console.log(verifyEBook.title)
console.log('******************')

console.log(verifyEBook.format)
verifyEBook.format = 'PDF EPUB'
verifyEBook.format = 'epub'
console.log(verifyEBook.format)
console.log('******************')

console.log('TASK 4 FIND-OLDEST-BOOK')
Book.findOldestBook([childrensBook, teensBook, adultsBook, adultsEbook, youngAdultsEbook, validateBook, verifyEBook])

console.log('TASK 5 CREATE-E-BOOK')
const eChildrensBook = EBook.fromBook(childrensBook, 'PDF')
eChildrensBook.printInfo()
