const user={
    username:"Surya",
    price:890,

    welcomeMessage: function() {// basically this  is used for current context just their status local scope
        console.log(`${this.username}, welcome to website`)

    }

}
user.welcomeMessage()// this function is not work in functions

const chai = () => {
    let usename="histesh"
    console.log(this.username)
}
chai()

const addtwo= (num1,num2) => { // arrow function explicit function because we use return
    return num1+num2
}
console.log(addtwo(444,98489));


const addthree= (num1,num2,num3) =>  num1+num2+num3// wecan also use arrow function this like this is implicit 

console.log(addthree(444,98489,345));