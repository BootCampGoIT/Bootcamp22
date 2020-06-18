// import { funcExpression } from './auth/auth.js'

// // console.log(undefined + Number(undefined))


// const a = 100;

// const x = 10;
// const y = 20;


// // funcExpression(10,100);
// const result = 30;
// console.log(result);
// // const result = 100 + funcExpression(5, 10);
// // console.log(result)


// // ------------------------------------
// function funcDeclaration(a, b) {
//     const result = a + b;
//     return result
// };
// const result = funcDeclaration(100, 200);
// console.log(result)


// // --------------------------------
// const arrowFunc = (a, b) => a + b


// arrowFunc(5, 10)

// arrowFunc(1221, 42332);

// =====================================


// const sum = (num1, num2) => {
//     return num1 + num2;
// }
// const min = (num1, num2) => num1 - num2;
// const mult = (num1, num2) => num1 * num2;
// const dev = (num1, num2) => num1 / num2;

// const number1 = +prompt("Enter number 1");
// const number2 = +prompt("Enter number 2");
// const operator = prompt("Enter operator");

// switch (operator) {
//     case '+':
//         console.log(sum(number1, number2))
//         break;
//     case '-':
//         console.log(min(number1, number2))
//         break;
//     case '*':
//         console.log(mult(number1, number2))
//         break;
//     case '/':
//         console.log(dev(number1, number2))
//         break;
//     default:
//         console.log(`No operations with "${operator}"`)
//         break;
// }

// IIFE - immediately invoked function expression


// let width = 0;
// let height = 0;

// const props = {
//     width: 0,
//     height: 0
// };

// (function () {
//     props.width = window.screen.width
//     props.height = window.screen.height
// })();

// console.log('width', props.width)
// console.log('height', props.height)


// ========================================================


// const getResult = function () {
//     let totalSum = 0;

//     console.log(arguments); //[1, 2, 3, 4, 5];
//     const args = Array.from(arguments);
//     const slice = args.slice(0,3);
//     console.log(slice)

//     for (const number of args) {
//         totalSum += number;
//     }

//     console.log(totalSum)
// }

// getResult(1, 2, 3, 4, 5)

// ============================ rest =======================

// const getResult = function (...array) {
//     console.log(array)

//     let totalSum = 0;


//     for (const number of array) {
//         totalSum += number;
//     }

//     console.log(totalSum)
// }

// getResult(1, 2, 3, 4, 5, 4, 423, 234, 234, 234, 2, 43, 234, 234)

// ==================================================

// const getResult = function (a, b, ...rest) {
//     console.log(rest)

//     console.log(a + b)
// }

// getResult(1, 2, 'daff', 'fsdfs', 4, true);

// ======================================================
// const array = [1, 2, 3, 4, 5]


// const getResult = function (a, b, c, ...rest) {
//     console.log(a)
//     console.log(b)
//     console.log(c)
//     console.log(rest)
// }

// getResult(...array);

// ================================

// const numbers = [1, 2, 3, 4, 5];
// const result = [0, ...numbers];
// console.log(result);

// const comments = [
//     "gahdd",
//     "fdsfdsfdsfdffds",
//     "fdssgg",
//     "sffdfdsdsf"
// ]

// const newComment = ["Hello", "By"];

// // comments.unshift(newComment);
// const comm = [...newComment, ...comments]; // 
// console.log(comm);
// console.log(comments);


// ================================


// const sentence = 'Lorem ipsum dolor sit amet.';
// const withoutDOT = sentence.slice(0, sentence.length -1);
// console.log(withoutDOT);

// const words = withoutDOT.split(' ');
// console.log(words);

// let longestWord = ''; //0

// for (const word of words) {
//     if (longestWord.length <= word.length) {
//         longestWord = word
//     }
// }

// console.log(longestWord);

// ======================================
// const getSentence = (string) => {
//     if (string.length <= 40 ) {
//         return string
//     }
//     if (string.length > 40) {
//         return string.slice(0,40) + '...'
//     }
// }

// console.log(getSentence("Если длина больше 40 символов, то функция обрезает строку до 40-ка символов и добавляет в конец строки троеточие '...', после чего возвращает укороченную версию."))


// console.log(`acvhd fddf sdf dfs "sdf" dsf fds`)


// ======================================
// const x = 10;
// const y = 20;


// const getSum = (a = x, b = y) => {
//     console.log(a + b)
// }

// getSum(100,200)


// =================================

// const getResult = (array = [1, 2, 3, 4, 5]) => {

//     for (const num of array) {
//         console.log(num)
//     }
// }

// getResult([2, 5, 7, 9])





// ========================
// if ((message.toLowerCase() === "spam") || (message.toLowerCase() ==="sale")){
//     return true
// } else return false

// const logins = ["alex", "nick"]
// const logins = []


// // ================
// const isUniqueLogin = (value) => {
//     if (logins.includes(value)) {
//         return true
//     } else return false
// }

// const isValidLogin = (input) => {
//     if (input.length >= 4 && input.length <= 16) {
//         return true
//     } else return false
// }

// // ===============
// let input = ''

// while (input !== null) {
//     const input = prompt("Enter login"); //alex
//     if (!isUniqueLogin(input) && isValidLogin(input)) {
//         logins.push(input);
//     }
//     console.log(logins)
// }





















