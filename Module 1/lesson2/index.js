// ================== parseInt() ================
// const x = 5;
// console.log(`${x}`);

// const x = "20px";
// const y = "16.78789pxdsfsf43da";

// // const styles = {
//     //     backgroundColor: "white",
//     //     padding: "10px"
// // }
// console.dir(Number)
// console.log(Number.parseInt(x));

// ================== parseFloat() ================
// const y = "16.78789pxdsfsf43da";
// console.log(Number.parseFloat(y));

// == !!! ===================== Number.isNaN ================

// const number = 5;
// const str = 'weqwewq';

// const result = Number(str); //NaN
// console.log(Number(result));

// console.log(Number.isNaN(result));

// const x = "5";
// console.log(+x); //



// ===================== Math ============================
// // console.dir(Math)

// const cardsInDB = 19;
// const cardsInList = 6;

// const pages = Math.ceil(cardsInDB/cardsInList);
// console.log(pages);

// // console.log(Math.round(y)); 
// // console.log(Math.ceil(y)); 
// // console.log(Math.floor(y)); 

// ======================== string ===========================

// const name = "Alex";
// const symbol = "!";
// const word = "Hello";

// const string = word + " " + name + symbol;
// console.log(string)
// console.log(`${word} ${name}${symbol}`);

// const x = 5;
// const y = 10;
// const z = "15"

// const result = 5 + "15" + 10 ;
// console.log(result)

// let input = prompt("Enter your choice"); // Kyiv 
// if (input !== null) {
//     switch (input.toLowerCase()) {
//         case 'kiyv':
//             alert("Deliv ... 10 grh");
//             break;
//         case 'chernigiv':
//             console.log("Deliv ... 20 grh");
//             break;
//         case 'kharkiv':
//             console.log("Deliv ... 30 grh");
//             break;
//         default:
//             console.log("No deliv")
//             break;
//     }
// } else alert("Отменено пользователем!");


// if (input === "Kiyv") {
//     console.log("Deliv ... 10 grh");
// } 
// if (input === "Chernigiv") {
//     console.log("Deliv ... 20 grh");
// } 
// if (input === "Kharkiv") {
//     console.log("Deliv ... 30 grh");
// }

// const str = "Lorem ipsum dolor sit amet.";

// console.log(str.length);
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());


// const array = ["dbchjfdhhcd", 2, 3, 4, 5, 6];
// console.log(array.length)



// function getResult() {
//     const position = str.indexOf('d');
//     console.log(str.slice(0, position));
// }

// getResult();

// =================== && =========================
// let isLogin = true;
// let isAuth = true;
// let token = ' ';

// function action () {
//     isLogin && console.log("Hello");
// } 

// document.querySelector('.Butt').addEventListener('click', action);

// const result = isLogin && token && isAuth;

// =================== || =========================

// const result = false || true || false;

// console.log(result);



// =================== ! =========================

// let flag = false;
// console.log(!flag)

// let number = prompt("Enter number!")

// if (number !== null) {
//     if (Number(number) > 10 && Number(number) < 30) {
//         console.log("Ok")
//     } else console.log("Not ok")
// } else console.log("Not a Number");

// true && console.log("OK")
// false || console.log("OK2")

// ===================== if =====================
// const password = prompt("Enter your password");
// falsy: false, NaN, null, 0, undefined, ''

// console.log(password); //null
// if (password) {

//     if (password === '123456') {
//         console.log("Hello user");
//     } else console.log("Wrong password");

// } else if (password === '') {
//     console.log("Not a password")
// } else console.log("Canceled");
// ===================================
// const password = prompt("Enter your password");
// switch (password) {
//     case '123456':
//         console.log("Hello user");
//         break;
//     case null:
//         console.log("Canceled");
//         break;
//     case '':
//         console.log("Not a password")
//         break;
//     default:
//         console.log("Wrong password");
//         break;
// }
// ========================== while ========================
// let password;
// while (password !== null && password !== '') {
//     password = prompt("Enter your password");

//     if (password === '123456') {
//         console.log("Hello user");
//         break;
//     } else console.log("Wrong password");

//     if (password === '') {
//         console.log("Not a password");
//         password = ' ';
//     }
//     if (password === null) {
//         console.log("Canceled")
//         password = ' ';
//     };
//  ==================

// switch (password) {
//     case '123456':
//         console.log("Hello user");
//         password = null;
//         break;
//     case null:
//         console.log("Canceled");
//         break;
//     case '':
//         console.log("Not a password");
//         password = ' '
//         break;
//     default:
//         console.log("Wrong password");
//         break;
// }
// }

// (function input() {
//     let total = 0;
//     while (true) {
//       let input = prompt('Введите число!');
//       if (input === null) {
//         alert(`Общая сумма чисел равна ${total}`);
//         break;
//       }
//       input = Number(input);
//       if (input === 0 || input) {
//         total += +input;
//       } else {
//         alert('Было введено не число, попробуйте еще раз');
//         continue;
//       }
//     }
//   }());

// ================== () ? " " : " " ==========================

// const x = 'darkTheme';

// if (x === 5) {
//     console.log("good")
// } else { console.log("Bad") }

// const styles = {
//     backgroundColor: (x === 'darkTheme') ? 'black' : 'white'
// }

// console.log(styles)

// (x === 5) ? console.log("good") : console.log("Bad");


// ======================== do While =================
// let password = null;

// do {
//     password = prompt("Enter your password");
//     if (password) {
//         if (password === '123456') {
//             console.log("Hello user");
//         } else console.log("Wrong password");
//     } else if (password === '') {
//         console.log("Not a password")
//     } else console.log("Canceled");

// } while (password !== null);


// ============================== for ==========================

// let sum = 50;
// const string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, quos.'
// let totalCount = 0;

// let input = prompt("Enter your word");

// if (string.includes(input)) {
//     let index = string.indexOf(input);
//     let wordLength = input.length;
//     let result = string.slice(0, index) + string.slice(index + wordLength + 1)
//     console.log(result);
// }

// if (string.includes('elit')) {
//     let index = string.indexOf('elit');
//     let word = 'elit';
//     let wordLength = word.length;
//     let result = string.slice(0, index) + string.slice(index + wordLength)
//     console.log(result);
// }
// console.log(string[16])


// for (let i = 0; i < string.length; i += 1) {
//     if (string[i] === 'o') {
//         totalCount += 1
//     }
// }
// console.log(totalCount)


// ======================= global && block ==============

// let a = 5;

//             function getA() {
//                 let a = 10;
//                 // console.log(a)
//             };

// console.log(a);
// getA()
// console.log(a);


// const js = {
//     globalVariables: {
//         a: 5
//     },
//     functions: {
//         getA: {
//             variables: {
//                 a: 10
//             }
//         }
//     }
// }

const array = ["fefsfd", 'dfsdfds'];

let b = 10;
console.log(b); //10

if (true) {
    b = 20;
    console.log("in Block", b); //20
}

// console.log(newb)
console.log(b) //20



































