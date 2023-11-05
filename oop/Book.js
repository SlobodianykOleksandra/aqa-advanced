class Book{
    constructor(title, author, yearOfPublic, isAvailable) {
        this._title = title
        this._author = author
        this._yearOfPublic = yearOfPublic
        this._isAvailable = isAvailable
    }
    printInfo(){
        console.log(`Title: ${this._title} | Author: ${this._author} | Year of publication: ${this._yearOfPublic} | Available: ${this._isAvailable}`)
        console.log('---------------------------------')
    }
    static findOldestBook (booksList){
        const result = booksList.reduce((prev, curr) => prev.yearOfPublic < curr.yearOfPublic ? prev : curr)
        return result.printInfo()
    }
    //Title validation
    get title(){
        if (typeof this._title != 'string'){
            this._title = 'Wrong type of "Title"'
        }return this._title
    }
    set title(titleValue){
        if (typeof titleValue != 'string'){
            console.log('Please, enter a String type in "Title"')
            return
        }
        this._title = titleValue
    }
    //Author validation
    get author(){
        if (typeof this._author != 'string'){
            this._author = 'Wrong type of "Author"'
        }return this._author
    }
    set author(authorValue){
        if (typeof authorValue != 'string'){
            console.log('Please, enter a String type in "Author"')
            return
        }
        this._author = authorValue
    }
    //Year of publication validation
    get yearOfPublic(){
        if (Number.isNaN(Number(this._yearOfPublic))){
            this._yearOfPublic = 'Wrong type of "Year of publication"'
        }return this._yearOfPublic
    }
    set yearOfPublic(yearValue){
        if (Number.isNaN(Number(yearValue))){
            console.log('Please, enter a Number type in "Year of publication"')
            return
        }
        else if (yearValue.length != 4){
            console.log('Please, enter a value in format XXXX in "Year of publication"')
            return
        }
        this._yearOfPublic = yearValue
    }
    //Available validation
    get isAvailable(){
        if ((typeof this._isAvailable != 'boolean') && (this._isAvailable != 0) && (this._isAvailable != 1)){
            this._isAvailable = 'Wrong type of "Available"'
        }return Boolean(this._isAvailable)
    }
    set isAvailable(availableValue){
        if ((typeof availableValue === 'boolean') || (availableValue === 0) || (availableValue === 1)) {
            this._isAvailable = Boolean(availableValue)
        }else {
            console.log('Please, enter a boolean type in "Available"')
        }
    }
}
export {Book}