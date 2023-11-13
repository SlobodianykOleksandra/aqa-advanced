function printTextWithDelay (text, delay) {
  setTimeout(() => console.log(text), delay)
}
const waitingText = printTextWithDelay('Thanx for waiting!', 4_000)
const greetText = printTextWithDelay('Welcome to our program ☺', 1_000)

// function printTextWithDelay (text,delay){
//     new Promise((resolve)=>{
//         setTimeout(()=>resolve(`${text}`),delay)
//     }).then((resolve)=>console.log(resolve))
//         .catch((error)=>console.log(error))
// }
// printTextWithDelay('Some text', 5_000)
