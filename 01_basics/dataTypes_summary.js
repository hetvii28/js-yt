 //PRIMITIVE :

 // 7 TYPES : STRING, NUMBER, BOOLEAN, NULL,
 //  UNDEFINED, SYMBOL,BIGINT

 const score = 100
 const scoreValue = 100.3

 const isLoggedIn = false
 const outsideTemp = null
 let userEmail;

 const id = Symbol('123')
 const id2 = Symbol('123')

 console.log(id == id2)

 const bigNum = 1234567890n



 //Reference (NON - PRIMITIVE)
 // ARRAY, OBJECTS, FUNCTIONS

 const heros = ["ganesh","krishna","shiva"]
 let myObj = {
    name:"hetvi",
    age:20,
 }

const myFunction = function(){
    console.log("hello world")
}

console.log(typeof id)



//********//

// STACK (PRIMITIVE), HEAP (NON-PRIMITIVE)

let myYtname = "hetvi"
let anothername = myYtname
anothername = "rajvee"
console.log(myYtname)
console.log(anothername)

let userOne = {
        email:"hetvi@gmail.com",
        upi:"user@okicic",
}

let userTwo = userOne

userTwo.email = "hey@google.com"

console.log(userOne.email);
console.log(userTwo.email);