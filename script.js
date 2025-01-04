/*

kitne time period pe callback function hit krna hai . ye hum set krte hai setInterval function se.
setInterval(()=>{
    console.log("hello simran");
    
}, 1000); 1000 1 sec ke liye hai

ek partiular time interval ke baad ek hi baar callback function hit krna hai to hum setTimeout function use krte hai.

setTimeout(()=>{
    alert("hi simran");
},3000)

// asynchronous

alert("hi simran"); // ye ek synchronous function hai jo ki end hone takk sb fuctionality block kr k rkhta hai 
console.log("hi ayu");
const user = await user . find() // hum asynchronous function bnaake variable ko wait kraate hai , ki jab tak data na aa jaaye tab takk wait kr lo bhai 
user.username 
// callback hell ( pyramid of doom)

setInterval(() => {
   console.log("task 1");
   setInterval(() => {
       console.log("task 2");
       setInterval(() => {
           console.log("task 3");
        
       }, 1000);
    }, 1000);
}, 1000);
// promise

const fetchData = () => {
 return  new Promise((resolve, reject) => {
    setTimeout(() => {
      let sucess = true;
      if (sucess) {
        reject("data fetched");
      } else {
        reject("data not fetched");
      }
    }, 3000);
  });
};
// to handle the promise we can use .then () and .catch() method
fetchData()
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log(err);
  });
  // soltuion of callback hell using promise
  const task1 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("task 1");
        resolve("task 1 completed");
      }, 1000);
    });
  };
  const task2 = () => {    
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("task 2");
        resolve("task 2 completed");
      }, 1000);
    });
  }
  
  const task3 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("task 3");
        resolve("task 3 completed");
      }, 1000);
    });
  }
  
  // promise chaining : this is also not a readible approach 
  task1().then(()=>task2().then(()=>task3().then()=>console.log("all tasks completed")))
  
  // async await : the approach that solves the promise chaining problem
  const performtask = async()=>{
      try {
          await task1()
          await task2()
          await task3()
      } catch (error) {
          console.log(error);
          
      }
  }
  
  function numcal(a,b){ // as aragument we can pass any datatype
      return a+b
  }
    console.log(numcal(2,3) ); // passing the value in the function as parameter

    // handling multiple promises together
  const a = new Promise();
  const b = new Promise();
  const c = new Promise();
  
  Promise.all([a, b, c])
    .then((msg) => {})
    .catch((err) => {
      console.log(err);
    });
    
    // Maths 
    console.log(Math.PI);  // 3.141592653589793
    console.log(Math.round(4.7)); 
    console.log(Math.floor(4.7)); 
    console.log(Math.ceil(4.7)); 
    console.log(Math.sqrt(16)); 
    console.log(Math.pow(16,4));
    console.log(Math.random());
    console.log(Math.max(21,32,43));
    console.log(Math.min(21,32,43));
     
    
    // random number generator 
    const random = Math.floor(Math.random()*100)+1
    console.log(random);


    // Date  object 
    const date = new Date()
    console.log(date);
    console.log(date.getFullYear());
    console.log(date.getMonth()); // give the number of month starting from 0 
    console.log(date.getDate());
    console.log(date.getHours());
    console.log(date.getMinutes());


    // creating calender 
    const formattedDate = (date)=>{
        const day = date.getDate()
        const month = date.getMonth()+1
        const year = date.getFullYear()
        return `${day}/${month}/${year}`
    }
    console.log(formattedDate(new Date()));
    

    // Navigator object : it is a BOM(bowser object model) object .
   const navigator = window.navigator
    console.log(navigator.userAgent); // browser and OS details
    console.log(navigator.language); // language of the browser
    console.log(navigator.platform); // platform of the browser
    console.log(navigator.onLine);// online status

    // Geolocation API : using geolocation we can get longitude and latitude
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((pos)=>{
            console.log(pos.coords);
            console.log("latiude", pos.coords.latitude);
            console.log("longitude", pos.coords.longitude);
        },(err)=>{
            console.log(err);
        })
    } else {
      console.log("user does not allow to share their location ");
    }


    // windows object : ye browser ki windows ko represent krta hai
    console.log(window.innerHeight); // height of the window
    console.log(window.innerWidth); // width of the window
    console.log(window.location);
    const reloadBrowser = ()=>{
        window.location.reload()
        }

        
        
        // functions 
        // this is an arrow function
        const specs = ()=>{
            console.log("hello simran");
        }
               
        // normal fn
        function specs(){
            console.log("hello simran");
        }
        
        // anonumous function
        
        (()=>{
            console.log("hello simran");
        })()

        // higher order function (HOF) : ye functions as arguement bhi function accept krte hai aur return bhi ek function hi kr rhe hote hai
        // eg1:
        function higherOrderFn (callback) {
            console.log("calling the callback function ....");
        callback()
        }
        
        higherOrderFn(()=>{
            console.log("hello simran");
        })

        // eg2
        // ek function may be ek callback function as an arguement le . but ye zaruri hai ki ek function ko HOF hone k liye uss return mei function hi dena padega 
        function multiplier (factor) {
           return function (number) {
               return number * factor
           }
        }
        
        const double = multiplier(2)
        console.log(double(5)) ;

// HOF k main functions :- map , filter , reduce , forEach 
map : ek nayi array return krta hai jo original array ke elements par ek fn apply krne k baad bnti hai  
        array jo ki map return krta hai . wo immutable hota hai . 
        const num = [1,2,3,4,5,6,7,8,9,10]
        
        const sq = num.map((num,index , arr)=>{
            console.log("num", num);
            console.log("index", index);
            console.log("arr", arr);
            return num * num 
        })
        console.log(sq);
        // b : filter 
        const numbers = [1,2,3,4,5,6,7,8,9,10]
        const even = numbers.filter((num,k , arr)=>{
            console.log("num", k);
            console.log("arr", arr);
            return num%2 ===0
        })
        console.log(even);

        // c: reduce 
        
        const numbers = [1,2,3,4,5,6,7,8,9,10]
        const sum = numbers.reduce((acc, num )=> acc+ num,0)
        console.log(sum);
        
        // flattening of array 
        
        const arr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
        
        function flatten(array) {
          return array.reduce((acc, value) => {
            if (Array.isArray(value)) {
              acc.push(...flatten(value)); 
            } else {
              acc.push(value);
            }
            return acc;
          }, []);
        }
        
        const flat = flatten(arr);
        console.log(flat);
        // forEach
        
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const u = numbers.forEach((num, index, arr) => {
          console.log("num", num);
          console.log("index", index);
          console.log("arr", arr);
        });
        console.log(u); // it will return undefined 
        
        // real world examples for Map , filter , reduce , forEach
        // 1. map
        
        const names = ["simran", "ayushi", "sakshi"];
        
        const capital = names.map((name)=>{
           return name.toUpperCase()
        })
        console.log(capital);
        
        // 2.filter 
        const people = [{
            name: "simran",
            age: 22
        },
        {
            name: "ayushi",
            age: 23
        },
        {
            name: "sakshi",
            age: 24
        }]
        const newarr = people.filter((elem)=>{
        console.log(elem);
        return elem.age > 22
        })
        console.log(newarr);
 */

