function defineAdult(age){
    return age >= 18
}
function showResult(enterAge){
    if (typeof enterAge ==='number' && defineAdult(enterAge)===true){
        console.log(`The person of ${enterAge}y.o is ADULT`)
    }
    else if(typeof enterAge ==='number' && defineAdult(enterAge)===false){
        console.log(`The person of ${enterAge}y.o is NOT adult`)
    }else {
        throw new Error('Wrong value')
    }
}
try {
    showResult(19)
    showResult(10)
    showResult('lalala')
}catch (err){
    console.log(err.message)
}