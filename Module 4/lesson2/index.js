// const person = {

//     name: "Alex",
//     age: 25,

//     getName: function () {
//         console.log(this.name)
//     },
//     getAge: function () {
//         console.log(this.age)
//     },
//     getInfo() {
//         this.getAge();
//         this.getName();
//     }
// }
// const person2 = {
//     name: "Nikita",
//     age: 22,
// }

// person.getInfo();


// ===========================================================

// const user = {
//     canWrite: false,
//     canRead: true,
//     write(){
//         console.log("I can't write")
//     },
// }

// const admin = {
//     canWrite: true,
//     canRead: true,
//     write(){
//         console.log("I can write")
//     },
// }

// const alex = {...user};
// alex.canWrite = true;
// console.log(alex);
// console.log(user);

// ===========================================

// const user = {
//     canWrite: false,
//     canRead: true,
//     write(){
//         console.log("I can't write")
//     },
// }

// const newUser = user
// console.log(user === newUser)

// =======================================

// const getResult = function (n) {
//     return function () {
//         return console.log("result:", n * 1000)
//     }
// }

// const newResult = getResult(12);
// console.log(newResult);
// newResult()
// =======================================
// const getResult = function (newValue = 10) {
//     let n = newValue;
//     return function () {
//         return console.log("result:", n += 1)
//     }
// }
// // getResult()();

// const newResult = getResult();
// newResult();
// newResult();
// newResult();
// newResult();
// newResult();

// ================================================

// const counter = function (n = 50) {
//     let count = n
//     return function (step = 2) {
//         count += step
//         return console.log('count', count)
//     }
// }

// const range1 = counter(50);
// console.log(counter)
// console.log(range1)
// range1(-2);
// range1(-2);
// range1(-2);
// range1(-2);
// range1(-2);
// range1(-2);

// const range2 = counter(10);
// range2(2);
// range2(2);
// range2(2);
// range2(2);
// range2(2);
// range2(2);

// ===============================================
// const counter = function (n = 50) {
//     let count = n
//     return function (step = 2) {
//         count += step
//         console.log('count', count)
//         return count
//     }
// }

// const range1 = counter(50);

// const range2 = counter(10);

// const getRange1 = () => {
//     range1(2);
// }
// const getRange2 = () => {
//     range2(2);
// }
// const getRange2min = () => {
//     range2(-2);
// }

// const buttonClickCLASS = document.querySelector('.buttonClickCLASS')
// const buttonClickID = document.querySelector('#buttonClickID')
// const buttonClickDATA = document.querySelector('[data-button="buttonClickDATA"]')
// const input = document.querySelector('.gdhjdsjgjfds');
// const image = document.querySelector('.image');

// const getImage = () => {
//     image.src = 'https://images.unsplash.com/photo-1579273166082-a8b7ed138d77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
// }

// input.addEventListener('input', (e) => console.log(e.target.value))
// buttonClickCLASS.addEventListener('click', getImage)
// buttonClickID.addEventListener('click', getRange2)
// buttonClickDATA.addEventListener('click', getRange2min)

// const project = {
//     products: {
//         productsByCategory: [
//             {
//                 books: [
//                     { id: "aewaeaw", name: "milk", price: 100 },
//                     { id: "fdg", name: "milk1", price: 200 },
//                     { id: "aewaegdfgfdaw", name: "milk2", price: 300 },
//                     { id: "aewafgdfgeaw", name: "milk3", price: 400 }
//                 ],
//                 count: 0
//             },
//         ],
//         count: 0
//     },
//     cart: {
//         products: [],
//         count: 0
//     }
// }
// const data = project.products.productsByCategory[0].books.filter(book => book.id === 'aewafgdfgeaw')
// console.log(data[0]);

// ===============================================

// const account = {
//     name: "Alex",
//     age: 25,
//     getInfo: function(key) {
//         // console.log(this[key])
//         switch (key) {
//             case 'name':
//                 const getName = () => {
//                     console.log(this.name)
//                 }
//                 getName();
//                 break;
//             case 'age':
//                 const getAge = () => {
//                     console.log(this.age)
//                 }
//                 getAge();
//                 break;

//             default:
//                 console.log(`No key:'${key}' in this object`)
//                 break;
//         }
//     }
// }
// =====================================


// const arrowFunc = () => {
//     console.log(this)//undefined
// }
// const arrowFunc1 = function () {
//     console.log(this)
// }
//  function arrowFunc2 () {
//     console.log(this)
// }

// const object = {
//     name: "Alex",
//     age: 25,
//     func: arrowFunc2
// }

// console.log()


// ==========================
// const object = {
//     name: "Milk",
//     price: 100,
//     getPrice: function () {
//         const arrow = new Function('return this.name') 
//         return arrow()
//     }
// }

// console.log(object.getPrice())

// =============== РЕКУРСИЯ =====================

let n = 0;
const recursion = () => {
    n += 1;
    console.log(n);
    if (n < 10) {
        recursion();
    }
}

recursion();


// =================================================








