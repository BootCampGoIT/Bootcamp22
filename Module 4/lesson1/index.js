// import { home } from "./pages/home.js";
// import { contacts } from "./pages/contacts.js";
// const list = document.querySelector('.list');
// const highOrderFunc = (e) => {
//     switch (e.target.dataset.page) {
//         case 'home':
//             document.querySelector('.content').innerHTML = home();

//             break;
//         case 'contacts':
//             document.querySelector('.content').innerHTML = contacts();
//             break;

//         default:
//             break;
//     }
// }
// list.addEventListener('click', highOrderFunc);

// ===========================================================



// import { logger, getData } from './functions.js'

// const click = (callback) => {
//     const message = "Hello"
//     callback(message);
// }

// click(logger);

// const driil = () => {
//     console.log("я сверлю")
// }
// const hummer = () => {
//     console.log("я забиваю")
// }
// const screwdriver = () => {
//     console.log("я закручиваю")
// }

// const toolBox = (callback) => {
//     callback()
// }

// toolBox(driil);

// ===================================
// ----- function declaration -----------
// function printMessage(message) {
//     console.log(message)
// }

// ------- function expression -------------
// const printMessage = function (message) {
//     console.log(message)
// }

// ------- arrow function ------------
// const printMessage = (message) => {
//     console.log(message)
// }

// const printer = (sheets, count) => {
//     for (const i = 1; i <= count; i += 1) {
//         printMessage(sheets)
//     }
// }

// printer("Hello", 5);

// ================================
// const printMessage = (message) => {
//     console.log(message)
// }

// const printMessageWithTitle = (message) => {
//     console.log(`Hello dear friend! ${message}`)
// }

// const printer = (sentence, count, callback) => {
//     for (let i = 1; i <= count; i += 1) {
//         callback(sentence)
//     }
// }

// printer("Lorem ipsum sit amet.", 5, printMessage);
// printer("Lorem ipsum sit amet.", 20, printMessageWithTitle);


// =========================================
// // const printMessageWithTitle = (message) => {
// //     console.log(`Hello dear friend! ${message}`)
// // }

// const printer = (sentence, count, callback) => {
//     for (let i = 1; i <= count; i += 1) {
//         callback(sentence)
//     }
// }

// printer("Lorem ipsum sit amet.", 5, (message) => {
//     console.log(`Hello dear friend! ${message}`)
// });

// =================================================

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// const result = [];

// const filter = (array, filterNum) => {
//     for (const number of array) {
//         if (number > filterNum) {
//             result.push(number)
//         }
//     }
//     console.log(result)
// }

// filter(numbers, 5)


// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
// const result = array.filter(number => number > 5);
// console.log(result)

// const fruits = [
//     { name: 'apples', quantity: 200, isFresh: true },
//     { name: 'grapes', quantity: 150, isFresh: false },
//     { name: 'bananas', quantity: 100, isFresh: true },
// ];

// const badFruits = fruits.filter(fruit => !fruit.isFresh);
// console.log(badFruits)


// ================================================


// const sum = (a, b) => a + b;

// const calc = (callback, a, b) => {
//     const result = callback(a, b)
//     console.log(result);
// }

// calc(sum, 5, 10);

// 1. calc start

// 2. sum start
// 3. sum finish

// 4. clg start
// 5. clg finish

// 6. calc finish


// ===============================================

// const myFunc = () => {
//     console.log("global Context")
// }
// const newFunc = function () {
//     console.log(this)
//     const message = "Hello";
//     const newFunction = function() {
//         console.log(this)
//     }
//     newFunction()
// }
// newFunc();
// const getHello = function () {
//     console.log(this)
//     this.prototype = function() {
//         console.log("Hello")
//     }
// }
// const user = {
//     name: "Alex",
//     getHello
// }
// console.log(getHello())
// window.console.log("Hello");



// ================================ this ============================

// const getContext = function () {
//     console.log(this)
// }

// getContext(); //undefined

// ==============================================

// const getContext = function () {
//     console.log(this.age)
// }

// const alex = {
//     name: "Alex",
//     age: 25,
//     getContext
// }

// const nikita = {
//     name: "Nikita",
//     age: 35,
//     getContext
// }

// alex.getContext(); // {name: "Alex", age: 25, getContext} 
// nikita.getContext(); // {name: "Nikita", age: 35, getContext} 

// ==============================================

// const alex = {
//     name: "Alex",
//     age: 25,
//     getContext: function () {
//         console.log(this.age)
//     }
// }
// const user1 = alex;

// console.log(user1);

// user1.getContext()

// user1.age = 35;

// console.log(alex);

// ==============================================
// function getProperties() {
//     // console.log(this);

//     console.group(`${this.name} properties`);
//     console.log('Name:', this.name)
//     console.log('Age:', this.age)
//     console.log('Course:', this.info[0])
//     console.log('Status:', this.info[1])
//     console.groupEnd();
// }

// const users = [
//     {
//         name: "Alex",
//         age: 25,
//         info: ["BC:22", "student"]
//     },
//     {
//         name: "Nikita",
//         age: 27,
//         info: ["BC:23", "student"],
//     }, {
//         name: "Alex",
//         age: 25,
//         info: ["BC:22", "student"]
//     },
//     {
//         name: "Nikita",
//         age: 27,
//         info: ["BC:23", "student"],
//     }, {
//         name: "Alex",
//         age: 25,
//         info: ["BC:22", "student"]
//     },
//     {
//         name: "Nikita",
//         age: 27,
//         info: ["BC:23", "student"],
//     },
// ]

// for (const user of users) {
//    const result = getProperties.bind(user);
//    result()
//     // getProperties.apply(user);
// }

// =================================================
// function getProperties() {
//     console.log(this);
//     console.group(`${this.name} properties`);
//     console.log('Name:', this.name)
//     console.log('Age:', this.age)
//     console.log('Course:', this.info[0])
//     console.log('Status:', this.info[1])
//     console.groupEnd();
// }

// const user = {
//     name: "Alex",
//     age: 25,
//     info: ["BC:22", "student"]
// }
// const user2 = {
//     name: "Nikita",
//     age: 27,
//     info: ["BC:22", "student"]
// }

// const result = getProperties.bind(user);
// const result2 = getProperties.bind(user2);

// document.querySelector('.userInfo').addEventListener('click', result)
// document.querySelector('.userInfo2').addEventListener('click', result2)

// getProperties.apply(user);

// ================================
// const func1 = function () {
//     return function () {
//         console.log("Hello")
//         return function () {
//             console.log("My name")
//             return function () {
//                 console.log("is")
//                 return function () {
//                     console.log("Alex")
//                 }
//             }
//         }
//     }
// }

// func1()()()()()
































