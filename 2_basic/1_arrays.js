const myArr= [0,1,2,3,4,5]
const myfriends=["Aditya","Akash","Vikash"]

const myArr2= new Array(1,2,3,4)
console.log(myArr[0])

//array method

myArr.push(9)
myArr.pop() // it used as last in first out
myArr.pop()
console.log(myArr)

myArr.unshift(4)
myArr.unshift(10)// these are starts from starting indexing
myArr.shift()
console.log(myArr.includes(4))


const newArr= myArr.join()
console.log(newArr); // it changed into string from arrays

//slice, splice

console.log(" A ", myArr)
const myn=myArr.slice(1,3)

console.log(myn)
console.log("B ",myArr)

const myn2= myArr.splice(1,3)// it removed the elements
console.log("C ",myArr)
console.log(myn2)
