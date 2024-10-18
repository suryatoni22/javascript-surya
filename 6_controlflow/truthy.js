const userEmail="surya@rajput.com"
if (userEmail) {
    console.log("got user email")
    
}else{
    console.log("didnt get email")
}

// /*  falsy values  =

// false, 0, -0, bigint 0n, "", null, undefined, NaN

// truthy values  =

// "0", 'false', " ", [], {}, function{(){}

// */

const array1 = []
if (array1.length=== 0){
    console.log("array is empty");
    
}

const objects={}
if (Object.keys(objects).length===0){
    console.log("object is empty");
    
}

// nullish coalescing operator ?? : null undefined

let val1;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 15
console.log(val1);

// ternary operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >=80 ? console.log(" I can afford "): console.log(" I cannot afford")
