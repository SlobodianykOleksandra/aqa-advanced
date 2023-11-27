import { Book } from './Book.js'

class EBook extends Book {
  constructor (format, title, author, yearOfPublic, isAvailable) {
    super(title, author, yearOfPublic, isAvailable)
    this._format = format
  }

  printInfo () {
    console.log(`Format: ${this._format} | Title: ${this._title} | Author: ${this._author} | Year of publication: ${this._yearOfPublic} | Available: ${this._isAvailable}`)
    console.log('---------------------------------')
  }

  static fromBook (book, format) {
    return new EBook(format, book.title, book.author, book.yearOfPublic, book.isAvailable)
  }

  get format () {
    if (typeof this._format !== 'string') {
      this._format = 'Wrong type of "Format"'
    } return this._format
  }

  set format (formatValue) {
    if (typeof formatValue !== 'string') {
      console.log('Please, enter a String type in "Format"')
      return
    } else if (formatValue.length > 4) {
      console.log('Please, enter a correct value in "Format"')
      return
    } this._format = formatValue.toUpperCase()
  }
}
export { EBook }
