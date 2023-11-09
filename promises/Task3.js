const BASIC_URL = 'https://jsonplaceholder.typicode.com/'

async function getTodosAwait(url,id){
    const response = await fetch(`${url}todos/${id}`)
    return await response.json()
}
async function getUsersAwait(url,id){
    const response = await fetch(`${url}users/${id}`)
    return await response.json()
}
const resultTodo = getTodosAwait(BASIC_URL,7)
const resultUser = getUsersAwait(BASIC_URL,5)

const startPromAll = Promise.all([resultTodo,resultUser])
    .catch((error)=>{
        console.log('Error: '+error)
    })
setTimeout(()=>console.log(startPromAll),1_000)

const startPromRace = Promise.race([resultTodo,resultUser])
    .catch((error)=>{
        console.error('Error: '+error)
    })
setTimeout(()=>console.log(startPromRace),3_000)