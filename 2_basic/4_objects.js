//const tinderUser=new Object()
const tinderUser={}

tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false
//console.log(tinderUser);

const regularUser={
    email:"someone@gmail.com",
    fullname:{
        userfullname: {
            firstname: "Surya",
            lastname:"Dev Singh"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);


const obj1= {a:1,b:2}
const obj2={c:3,d:4}
const newobject= Object.assign(obj1,obj2)
console.log(newobject);

console.log(Object.values(newobject));
console.log(Object.keys(newobject));
