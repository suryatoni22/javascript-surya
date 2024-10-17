function saymyname(){
    console.log("S");
    console.log("u");
    console.log("r");
    console.log("y");
    console.log("a");
    
}

saymyname()

function addtwonumbers(number1,number2){ //number1 and number2 are paramenters
    let result= number1+number2
    return result
}
const result= addtwonumbers(4555,754)
 //here 4555 and 754 is arguements
console.log("result: ",result);

function multiplytwonumber(number1,number2){ //number1 and number2 are paramenters

    return number1*number2
}
const answer= multiplytwonumber(4555,754)
 //here 4555 and 754 is arguements
console.log("result: ",answer);


function LoginUserMessage(username){
    if (username===undefined) {
        console.log("Please enter youur name");
        return
         }
    return`${username} just logged in`
}

console.log(LoginUserMessage("Surya Dev Singh Rajput"));
console.log(LoginUserMessage())

function calculateCartPrice(...num1){  // ... rest operator
    return num1

}
console.log(calculateCartPrice(45,4344,53,4,543));

const user={
    username:"Surya ",
    price:578
}
function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
handleobject(user)
handleobject({
    username:"Akhil Singh",
    price:4555

})


