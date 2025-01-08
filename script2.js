/*
 console.log(4-"2"); 2 will be type casted as - operator is using . but + will concat
const obj={
    name:"simran"
}
obj.name = "ayush"
console.log(obj);
// finding maximum number in an array
const ar = [1,2,3,4,5,6]
const a= Math.max(...ar)
console.log( a);

// another approach to find max nmber in an array
let isMax = 0;

for (let i = 0; i < ar.length; i++) {
  if (ar[i] < isMax) {
    console.log("this is the max.", isMax);
  } else {
    isMax = isMax+ ar[i];
  }
}


// finding even numbers
const ar = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < ar.length; i++) {
  if (ar[i] % 2 == 0) {
    console.log(ar[i]);
  }
}
// explaination of push and pop
const a = ['fruit',2,true , "ayush"]
console.log(a.pop())  // pop will delete element from the end due to LIFO 
console.log(a);
a.push("simran")
console.log(a);

// reversing an array 
let reversedArray = []
for (let i = a.length-1; i >= 0; i--) {
 reversedArray.push(a[i])
}
console.log(reversedArray);

// more functions in array : shift() unshift() slice() splice() 
const a = [12,23,43,54,5]
// a.unshift(1) // this will add the value in starting of the araay
// a.shift() // remove the value from starting 
const slicedArray = a.slice(1,3) 
console.log(slicedArray) // slice starts from the starting point given and goes till end -1 

a.splice(1,2,"ayush") // delete the elements from the array till the indexing passed 
console.log(a);

// Sets : ek set unique values ka collection hota hai . jisme duplicate values nahi store hoti hai . 

const num = new Set ([12,32,43])
num.add(4) // add the number in set 
num.delete(12) // directly delete the element from the set 
const isExist = num.has(32) // does the given element exists in set or not 
console.log(num.size);
// OOPs in js : it is the style of programming . in which we have 4 types : encapsulation , abstraction , inheritance and polymorphism

// encapsulation

class BankAccount {
  #balance; // private property
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.#balance = balance; // private field
  }
  getBalance() {
    return this.#balance;
  }
  deposit(amount) {
    this.#balance = this.#balance + amount;
    console.log(`Deposit :${amount} , new balance ${this.#balance}`);
  }
}

const acc1 = new BankAccount ("12345",1000)
const acc2 = new BankAccount ("123432",3000)
console.log(acc2.getBalance());
// inheritance 

class Animal {
  constructor(name) {
    this.name = name
  }
  speak(){
    console.log(`${this.name} makes a sound`)
  }
}

class Dog extends Animal{
  speak(){
    console.log(`${this.name} barks`);
  }
}

const dog = new Dog("Buddy")
dog.speak()



const obj = {
  name: "ayush",
  display: function () {
    console.log(`${this.name} is 20 years old`);
  },
};
obj.display();


// DOM - document object model 
const title = document.getElementById("title")
title.textContent =title.textContent + " hi ayush "
// their are multiple function in dom  to access the elements of HTML : getElementById , getElementByClassName , getElementByTagName , querySelector

const list = document.querySelector("ul")

// creating new list 
const newList = document.createElement("li")// <li></li>
newList.innerText = "this is new list" // <li>this is new list</li>
newList.classList .add("color")
list.appendChild(newList)  


// event listners 

const btn = document.querySelector(".btn") // note : add event listner function is only available with querySelector
const nameHeading  = document.getElementsByClassName("yourName")[0]
console.log(nameHeading);

btn.addEventListener("click",()=>{
  const n = prompt("enter your name")
  console.log(n);
  
nameHeading.textContent = n
})





// call , apply & bind 

const person ={
  firstname:"ayush",
  lastname:"kumar"
}
function greet(greeting , punct) { 

  console.log(`${greeting}, ${this.firstname} ${this.lastname} ${punct} `);
  
  }
  // call
greet.call(person,"hello","!")

// apply 
greet.apply(person,["Hi", "."])

//bind
const greetPerson = greet.bind(person,"hey")
greetPerson("? ")

// closure 

function outerFunction(outerVar) {
  return function innerFunction(innerVar) {
    console.log(`Outer ${outerVar} , ${innerVar}`);
    
  }
}
const closure = outerFunction("coder")
closure("inside")
*/


greet()
function greet() {
  console.log("hello");
  
}
