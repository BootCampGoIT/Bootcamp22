// ================================ setTimeout ==============================

// function timer(message, deltaTime ) {
//     console.log(`${message} after ${deltaTime} ms`);
// }

// const ms = 3000;

// const timerID = setTimeout(() => { console.log("!!!") }, 4000, "dfsdf");
// const timerID2 = setTimeout(timer, ms, "hello", ms);
// console.log(timerID);
// console.log(timerID2);

// clearTimeout(timerID);

// ================================= setInterval ===========================

// let i = 0;

// const timerID = setInterval(function () {
//     i += 1;
//     if (i === 10) {
//         clearInterval(timerID)
//     }
//     console.log(i)
// }, 1000);

// ==========================================================
// function timer(message, deltaTime) {
//     console.log(`${message} after ${deltaTime} ms`);
// }

// setTimeout(timer, 0, "hello", 5);
// setTimeout(timer, 0, "hello", 10);

// console.log("fhshfsdf");
// for (let i = 0; i < 100; i += 1) {
//     console.log(i)
// }

// =========================================================
// const elem = document.querySelector('#elem');

// elem.addEventListener('input', function (){
//     console.log(this);//elem
//     let self = this;
//     setInterval(function(){
//         console.log(self.value)
//     }, 5000)
// })


// const elem = document.querySelector('#elem');

// elem.addEventListener('click', function () {
//     setInterval(getValue(this), 1000)
//     function getValue(context) {
//         return function () {
//             console.log("context Value:", context.value)
//         }
//     }
// })


// =====================================================
// const start = document.querySelector('.start');
// const finish = document.querySelector('.finish');

// let timerId;
// let i = 0;
// // finish.disabled = true;

// const bang = function () {
//     timerId = setInterval(function () {
//         console.log(i += 1)
//     }, 1000);
//     // start.disabled = true;
//     // finish.disabled = false;
//     start.removeEventListener("click", bang)
//     finish.addEventListener("click", bang)
// }

// start.addEventListener('click',bang)

// console.dir(start)

// finish.addEventListener('click', function () {
//     clearInterval(timerId);
//     // start.disabled = false;
//     // finish.disabled = true;
//     start.addEventListener("click", bang);
//     finish.removeEventListener("click", bang)
// })

// ================================================ Date ===========================================
// function addZero(num) {
//     num += 1
//     if (num >= 0 && num <= 9) {
//         return "0" + num
//     } else return num
// }

// let date = new Date();
// console.dir(date);
// console.log(date.getFullYear());
// const result = date.getMonth()

// const correctData = String(result + 1).padStart(2, "0");
// console.log(correctData)

// const correctData = addZero(result);
// console.log(correctData)



// ==================================================
// let date = new Date();//1 jun 1970

// function addZero(num) {
//     if (num >= 0 && num <= 9) {
//         return "0" + num
//     } else return num
// }

// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());

// console.log(
//     addZero(date.getHours()) + "-" +
//     addZero(date.getMinutes()) + "-" +
//     addZero(date.getSeconds()) + "-" +
//     addZero(date.getMilliseconds())
// )

// =========================================

// const start = document.querySelector('.start');
// const finish = document.querySelector('.finish');

// let timerId;

// // finish.disabled = true;

// const bang = function () {
//     timerId = setInterval(function () {
//         let date = new Date();//1 jun 1970
//         console.log(
//             addZero(date.getHours()) + "-" +
//             addZero(date.getMinutes()) + "-" +
//             addZero(date.getSeconds())
//             // addZero(date.getMilliseconds())
//         )
//     }, 1000);
//     // start.disabled = true;
//     // finish.disabled = false;
//     start.removeEventListener("click", bang)
//     finish.addEventListener("click", bang)
// }

// start.addEventListener('click', bang)

// console.dir(start)

// finish.addEventListener('click', function () {
//     clearInterval(timerId);
//     // start.disabled = false;
//     // finish.disabled = true;
//     start.addEventListener("click", bang);
//     finish.removeEventListener("click", bang)
// })


// // ==========================================
// let date = new Date()

// function addZero(num) {
//     if (num >= 0 && num <= 9) {
//         return "0" + num
//     } else return num
// }

// // 2020-05-04 => 04/05/2020

// const string =
//     addZero(date.getDate()) + "-" +
//     addZero(date.getMonth() + 1) + "-" +
//     addZero(date.getFullYear())

// console.log(string)

// const newString = string.split('-');//[]
// // console.log(newString);
// const result = newString.reverse();
// const result1 = result.join('/');
// console.log(result1)


// =========================================================
// const date = new Date();

// ---------- weekDay ------------------
// const day = date.getDay();
// console.log(day); //1

// const days = ["вс", "пн", "вт", "ср", "чт", "пт", "сб" ];
// console.log(days[day]);

// ---------------------------------
// let date = new Date(2021, 0, 1, 0, 0, 0);
// console.log(date)
// console.log(date.getTime());

// let currentDate = new Date();
// console.log(currentDate);
// console.log(currentDate.getTime());

// const result = date.getTime() - currentDate.getTime();
// console.log(result);

// // result.getDays();
// console.log(result / (365 * 7 * 24 * 1000 * 60 * 60))

// =================================================================




// const result = fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => response.json())
// .then(json => console.log(json));

// console.log(result);

const promise = new Promise((resolve, reject) => {
    resolve("Hello");
});
console.log(promise)





















