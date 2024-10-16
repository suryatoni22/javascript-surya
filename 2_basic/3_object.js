const mySym= Symbol("Key")
const JsUser={
    name:"Surya",
    [mySym]:"mykey1",
    "full  name":"Surya Dev Singh",
    age: 19,
    location :"madhya pradesh",
    isLoggedIn : false,
    lastLoginDays: ["monday","saturday"]
}
console.log(JsUser.lastLoginDays);
console.log(JsUser["lastLoginDays"]);
console.log(JsUser["full  name"]);
console.log(JsUser[mySym]);
JsUser["full  name"]="Surya Dev Singh Rajput";
console.log(JsUser);
//Object.freeze(JsUser)

JsUser.greeting= function(){
    console.log("Hello JS user")
}
JsUser.greetingtwo= function(){
    console.log(`Hello JS user, ${this["full  name"]}`)
}
console.log(JsUser.greeting());
console.log(JsUser.greetingtwo())






