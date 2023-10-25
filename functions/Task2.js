function defineAdult(age){
    if (age >= 18){
        console.log(`The person of ${age}y.o is ADULT`)
        return true
    }else {
        console.log(`The person of ${age}y.o is NOT adult`)
        return false
    }
}
defineAdult(25)
defineAdult(15)