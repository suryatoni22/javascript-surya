let nameofstudent="Surya Dev Singh"
studentname= nameofstudent;

studentname="gautam giri"

console.log(nameofstudent);
console.log(studentname)

//here we can see that how stack works. it just copied last value and create new block if we change it it doestn't create problem to the last memory block
//it is case of primitive stack

//+++++++++++++++++++++++++++++++++++++++++++ Heap +++++++++++++++++++++++++++++++++++++++++

// heap is non primitive 
let list1= [ " surya", "aditya","parth","akhil"]
let list2=list1;
list2.surya= "sarthak";
console.log(list2);
console.log(list1);
// here we can see that data is changes in both because both is refference by one. here we can contrast different bw
// stack and heap.



