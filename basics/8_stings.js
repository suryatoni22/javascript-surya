const name = "Surya Dev Singh"
const father= "Ashok Singh"
console.log(`My name is ${name} and my father name is ${father}`)
const school_name= new String(`KV Sunjuwan Jammu`)
console.log(school_name)
console.log(school_name[0])
console.log(school_name.length);
console.log(school_name.toUpperCase());
console.log(school_name.toLowerCase());
console.log(school_name.charAt(5));
console.log(school_name.indexOf('a'));

const newstring= school_name.substring(0,10) // last digit mean 10 is not included here
console.log(newstring);

const secondstring= school_name.slice(1,3)
console.log(secondstring);

const thirdstring= String(`   Surya  `)
console.log(thirdstring.trim())//trim method

const url= "https://www.google.com/surya%20Dev"
console.log(url.replace(`%20`,"")); // replace method

console.log(url.includes(`https`)) // includes help us to check where particular string is available or noat
console.log(url.split('.')) // particular is used to separate line into parts
const boldurl= url.bold()
console.log(boldurl);
console.log(url.small());













