
if (true){
    let a = 10
    let b =10
    const c=100
    var d =1000
}
console.log(d)  // As resulted we can see that here a,b and c are not able to defined as it is 
// it is in the if statement on the other side we saw that c which is variable it prints thatswhy we 
// dont use var. as it is also called local scope and outside the if statment called global scope.
console.log(d);

function one(){
    const username="hitesh"

    function two(){
        const website= "youtube"
        console.log(username);
    }
   // console.log(website);
    two()
}
one()// inner function get scope internally of parent function but parent function cannot works here.It is like that small children can take icecream from elders but on the other side elder caanot take icevreak form small children.

addone(45)
function addone(num){
    return num+1
}
addtwo(54)
const addtwo= function a(num){
    return num+2
}

