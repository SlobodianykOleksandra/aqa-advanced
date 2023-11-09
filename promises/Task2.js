const BASIC_URL = 'https://jsonplaceholder.typicode.com/'
function getTodosPromise(url, id){
    return fetch(`${url}todos/${id}`).then((response1)=>response1.json())
        // .then((response2)=>console.log('Result TODOS: ', response2))
}
function getUsersPromise(url,id){
    return fetch(`${url}users/${id}`).then((response1)=>response1.json())
        // .then((response2)=>console.log('Result USERS: ', response2))/
}
const resultTodo = getTodosPromise(BASIC_URL,10)
const resultUser = getUsersPromise(BASIC_URL,1)

const startPromAll = Promise.all([resultTodo,resultUser])
    .catch((error)=>{
        console.log('Error: '+error)
    })
setTimeout(()=>console.log(startPromAll),5_000)

const startPromRace = Promise.race([resultTodo,resultUser])
    .catch((error)=>{
        console.error('Error: '+error)
    })
setTimeout(()=>console.log(startPromRace),3_000)