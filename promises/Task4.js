class GetByPromise{
    constructor(baseUrl,id) {
        this._baseurl = baseUrl
        this._id = id
    }
    get id(){
        if (Number.isNaN(Number(this._id))){
            this._id = 'Wrong type of "ID"'
        }return this._id
    }
    set id(idshka){
        if (Number.isNaN(Number(idshka))){
            console.log('Please, enter a Number type in "ID"')
            return
        }
        this._id = idshka
    }
    _getTodosPromiseInner(){
        return fetch(`${this._baseurl}todos/${this._id}`).then((response1)=>response1.json())
    }
    _getUsersPromiseInner(){
        return fetch(`${this._baseurl}users/${this._id}`).then((response1)=>response1.json())
    }
    getTodosPromise(){
        (this._getTodosPromiseInner())
            // .then((result)=>console.log('Result TODOS by Promise: ', result))
            .catch((error)=>console.log('Error by Promise: ',error))
    }
    getUsersPromise(){
        (this._getUsersPromiseInner())
            // .then((result)=>console.log('Result USERS by Promise: ', result))
            .catch((error)=>console.log('Error by Promise: ',error))
    }
    async getAllInfo(){
        const resultTodo = await this._getTodosPromiseInner()
        const resultUser = await this._getUsersPromiseInner()
        const startPromAll = await Promise.all([resultTodo,resultUser])
            .catch((error)=>{
                console.log('Error: '+error)
            })
        return setTimeout(()=>console.log(startPromAll),5_000)
    }
}

class GetByAwait{
    constructor(baseUrl,id) {
        this._baseurl = baseUrl
        this._id = id
    }
    get id(){
        if (Number.isNaN(Number(this._id))){
            this._id = 'Wrong type of "ID"'
        }return this._id
    }
    set id(idshka){
        if (Number.isNaN(Number(idshka))){
            console.log('Please, enter a Number type in "ID"')
            return
        }
        this._id = idshka
    }
    async _getTodosAwaitInner() {
        const response = await fetch(`${this._baseurl}todos/${this._id}`)
        return await response.json()
    }
    async _getUsersAwaitInner(){
        const response = await fetch(`${this._baseurl}users/${this._id}`)
        return await response.json()
    }
    getTodosAwait(){
        (this._getTodosAwaitInner())
            .then((result)=>console.log('Result TODOS by Async/Await: ', result))
            .catch((error)=>console.log('Error by Async/Await: ',error))
    }
    getUsersAwait(){
        (this._getUsersAwaitInner())
            .then((result)=>console.log('Result TODOS by Async/Await: ', result))
            .catch((error)=>console.log('Error by Async/Await: ',error))
    }
    async getAllInfo(){
        const resultTodo = await this._getTodosAwaitInner()
        const resultUser = await this._getUsersAwaitInner()
        const startPromAll = await Promise.all([resultTodo,resultUser])
            .catch((error)=>{
                console.log('Error: '+error)
            })
        return setTimeout(()=>console.log(startPromAll),5_000)
    }
}

const basicUrl = 'https://jsonplaceholder.typicode.com/'
const wrongUrl = 'https://jsonplaceholder.typicode/'
const firstReqProm = new GetByPromise(basicUrl,1)
// firstReqProm.getTodosPromise()
// firstReqProm.getUsersPromise()
// const secondReqProm = new GetByPromise(wrongUrl,3)
// secondReqProm.getTodosPromise()
// const thirdReqProm = new GetByPromise(basicUrl,"lalala")
// console.log(thirdReqProm.id)
firstReqProm.getAllInfo()

const firstReqAw = new GetByAwait(basicUrl,2)
firstReqAw.getAllInfo()