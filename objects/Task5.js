const user1 = {
    id: 1,
    login: '3215248921',
    dateRegistration: '18.10.2023',
    yearOfBirth: 1988,
    isResident: true
}
const user2 = {
    id: 2,
    login: '2985448921',
    dateRegistration: '10.05.2020',
    yearOfBirth: 1981,
    isResident: false
}
const user3 = {
    id: 3,
    login: '3655805122',
    dateRegistration: '16.08.2021',
    yearOfBirth: 2000
}
const users = [user1,user2,user3]
// const users = [{login: '3215248921',dateRegistration: '18.10.2023',yearOfBirth: 1988,isResident: true},
//     {login: '2985448921',dateRegistration: '10.05.2020',yearOfBirth: 1981,isResident: false},
//     {login: '3655805122',dateRegistration: '16.08.2021',yearOfBirth: 2000}]
console.log('Print elements/elements data using cycle for...of')
for (const user of users){
    // console.log(user) //Виведення елементів масиву
    console.log(`USER ${user.id}| Login:${user.login}, Date of Registration: ${user.dateRegistration}, Year of Birth: ${user.yearOfBirth}, Residence: ${(user.isResident)??'no info'}`)
}
console.log('-----------------------------')
console.log('Destructurisation')
for (const {id,login,dateRegistration,yearOfBirth,isResident = 'no info'} of users){
    console.log(`USER ${id}| Login:${login}, Date of Registration: ${dateRegistration}, Year of Birth: ${yearOfBirth}, Residence: ${isResident}`)
}