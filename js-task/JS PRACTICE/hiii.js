// ; Write a function greetUser that takes a name and prints a greeting.

// let user = prompt("your name");

// function greetings(){
//     return `hello ${user}`;
// }

// console.log(greetings());


// ; Create a function add that returns the sum of two numbers.

// function sum(a, b){
//     return a +b ;
// }

// console.log(sum(1, 3));

// ; Write a function checkAge(age) that prints "Adult" if age ≥ 18, else "Minor".

// function checkAge(age){
//     if(age >=18){
//         return "adult";
//     }else{
//         return "minor";
//     }
// }

// let age= +prompt("your age");
// console.log(checkAge(age));


// // Make a function multiply(a, b = 5) that multiplies two numbers but has a default value for b.

// function multiplier(a, b=5){
//     return a*b ;
// }

// console.log(multiplier(4));

// Write a function sumAll(...nums) that adds any number of arguments passed.


// let count = 0;
// function sumAll(...nums){
//    for(let i = 0 ; i<nums.length ;i++){
//      count += nums[i];
//    }
//    return count;
// }

// console.log(sumAll(1, 2, 5, 4, 5, 1, 2, 7));


// Create a function that greets a user object: Hello, Irshad (20 years old)

// let userName = prompt('enter the name');
// let useAge = +prompt('your age');

// const userinfo = {
//    name : userName,
//    age : useAge ,
// }

// function greeting({name, age}){
//    return `hello, ${userName}(${useAge}year old)`;
// }

// console.log(greeting(userinfo));


// //  Show difference between function declaration and function expression.

// // function expression.
// let value = function(val){
//    return val+val;
// }
// console.log(value(2));
// // function declaration :
// function arr(){

// }



//  Convert a regular function to an arrow function.

// let f = function hello(){
//    return 'hello';
// }
// let fa = ()=>{};

// ; Write a function isEven(num) that returns true if even

// let isEven = (val)=>{
//    if(val %2===0){
//       return 'true';
//    }else{
//       return 'false';
//    }
// }

// let val= +prompt('num');

// console.log(isEven(val));


// Create a function sayHello that runs immediately when defined.
// (function hello(){
//    console.log('hello');
// })();


// 🧩 ARRAY PRACTICE QUESTIONS

//  Given [2, 4, 6, 8], create a new array with each number doubled.

// let arr = [2, 4, 6, 8];

// const arr2 = arr.map( (num)=>{
//     return num* 2;
// })

// console.log(arr2);


// ; From [10, 15, 20, 25, 30], filter out numbers less than 20.

// let arr =[10, 15, 20, 25, 30];

// const arr2 =arr.filter((num)=>{
//     return num >20;
// })

// console.log(arr2);

// ; Find the largest number in [1, 22, 3, 99, 4].

// let arr = [1, 22, 3, 99, 4,, 55, 120, 110, 121];

// let arr2 = arr.reduce((acc, val)=>{
//     if(val > acc){
//         return val ;
//     }else{
//         return acc;
//     }
// }, 0)

// console.log(arr2);


// ; Count how many odd numbers exist in [1, 2, 3, 4, 5, 6].
// let count=0
// let arr =[1, 2, 3, 4, 5, 6];
// const arr2 = arr.filter((num)=>{
//   return  num %2 !== 0;
// }
// ).length;

// console.log( arr2);

// ; Find total and average of [90, 80, 70, 60, 50].

// let arr = [90, 80, 70, 60, 50];

// let total = arr.reduce((acc, val)=>{
//     return acc+val ;
// }, 0)

// let avg = ()=>{
//     return total / arr.length;
// }

// console.log('total', total);
// console.log("average ", avg());

// //  Extract first and second values from [100, 200, 300] into variables.

// let arr=[100, 200, 300] ;

// let [a, b] =arr ;

// console.log(a);
// console.log(b);

// // ; Combine [1, 2, 3] and [4, 5] into one array.

// let ar1= [1, 2, 3];
// let ar2= [4 ,5];

// let ar3 = [...ar1,...ar2];


// ; Convert ['HTML', 'CSS', 'JS'] into 'HTML, CSS, JS'.

// let ar=['HTML', 'CSS', 'JS'] ;

// let ar2 = ()=> ar.join(', ');
// console.log(ar2());

// ; Sort names alphabetically: ['Riya', 'Irshad', 'Ayan'].

// let a = ['Riya', 'Irshad', 'Ayan'];

// function short() {
//     return a.sort();
// }

// console.log(short());

// // ; Reverse array [1, 2, 3, 4, 5].

// let a= [1, 2, 3, 4, 5];

// let aa = ()=> a.reverse();

// console.log(aa());



// ; 🧠 OBJECT PRACTICE QUESTIONS


// ; Create an object car with brand, model, and start() method that logs <brand> started.

// let car ={
//     brand : "tata",
//     model : "s1" ,
    
//     start :function (){
//         return `${car.brand} "started"` ;
//     }
// };

// console.log(car.start());

// //  Add a new property to object and then delete it.


// let obj= {
//     name:'hi'
// }

// obj.age =  1;

// console.log(obj);

// delete obj.age;

// console.log(obj);

// ; Access nested property: student.subjects.js from object.

// let student ={
//     name : 'hi',
//     subjects : { 
//         js : "lang",
//     }
// }

// console.log(student.subjects.js);

// // ; Print all keys of an object.

// let subject ={
//     name : "hi",
//     age :10,
//     email :"hi@gmail.com",
// }

// function keys() {
//     return Object.keys(subject);
// }

// console.log(keys())

// ; Print all values of an object.


// let subject ={
//     name : "hi",
//     age :10,
//     email :"hi@gmail.com",
// }

// function val() {
//     return Object.values(subject);
// }

// console.log(val())


// ; Destructure object {name: "Irshad", city: "Mumbai"} into separate variables.

// let me = {name: "Irshad", city: "Mumbai"}

// let { name , city } = me ;

// console.log(name);
// console.log(city);



// ; Given an array of objects, print names only.

//  let users = [
//   { name: "Irshad", age: 20 },
//   { name: "Riya", age: 22 },
//  ];
// function names(){
//     return users.map(function(user){
//         return user.name;
//     })
// }
// console.log(names());



// ; 🟢 Level 1 – Basic Function, Array & Object Code
// ; Tasks (Easy)

// ; 1. Write a function `sayHello()` that prints `"Hello
// ; JavaScript"`

// function hello(){    
//     return 'hello irshad';
// }
// console.log(hello());

// ; 2. Create a function `add(a, b)` that returns their sum
// ; and log the result.

// function sum (a, b){
//  return a+b;
// }
// console.log(sum(4, 5));

// ; 3. Write a function with a default parameter `name =
// ; "Guest"` that prints `"Hi <name>"`.

// function greet(name = 'guest'){
//     return ` hi ${name}`;
// }

// console.log(greet("irshad"));


// ; 4. Use rest parameters to make a function that adds
// ; unlimited numbers.

// let arr=[1, 2, 3];

// function sum(...nums){
//    return nums.reduce((acc, val)=>{
//         return acc+val;
//     },0)
// }
// console.log(sum(...arr));

// 6. Make a nested function where the inner one prints a
//   variable from the outer one.


