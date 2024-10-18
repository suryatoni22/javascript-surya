// if

const temperature = 37
if (temperature > 40){
    console.log(`It's too hot today! ${temperature}*C today`);
}else{
    console.log("Weather is good today!");
    
}

const marks_english=45
const marks_maths=49
const marks_sst=40

const total_marks= marks_english+marks_maths+marks_sst
if (total_marks>=120){
    console.log("Your grade is A")
} else if(total_marks>=80){
    console.log("You score is B");
}else{
    console.log("You score is less than 80 Please try again");
}

const userloggedin= true
const debitcard= true
if (userloggedin && debitcard== true){
    console.log(" you can buy course");
}else if (userloggedin= true && debitcard==false){
    console.log("It is compulsory to have debit card");
}else {
    console.log( " you cannot access it first you have to login");
    
}

