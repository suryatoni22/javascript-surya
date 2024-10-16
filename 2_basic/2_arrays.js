const marvel_heroes=["superman","spiderman","batman"]
const dc_heroes = ["thor","ironsman"]
marvel_heroes.push(dc_heroes)// here push take dc_heroes as single element
marvel_heroes.pop
console.log(marvel_heroes);
const newhero=marvel_heroes.concat(dc_heroes)// concat help to combine two data into new array
console.log(newhero);

const newherover= [...dc_heroes,...marvel_heroes]// mostly people prefer this also called spread operator
console.log(newherover);

const newarrayhero= newherover.flat(Infinity)// used to flat the array we caan also select depth by 1,2 in place of infinity
console.log(newarrayhero)

console.log(Array.from("Surya"));// this help to change any string into array format

