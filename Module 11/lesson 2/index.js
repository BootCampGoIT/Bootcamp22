// console.log("First");//1

// console.log("Ghjghj");//2

// function logger(data) {
//     console.log(data)
// }

// setTimeout(() => {
//     console.log("Timeout console"); //4
// }, 3000)


// setTimeout(logger, 3000, { id: 2, name: "Timur" }); //5

// console.log("Last");//3

// ================================ server work emulator =======================================

// setTimeout(() => {
//     console.log("Request to server. I want getting data. Format: JSON");
//     setTimeout(() => {
//         console.log("Yes, you can get data. Format: JSON");
//     }, 2000)
// }, 2000);

// setTimeout(() => {
//     console.log("Can I get info about user?");
// }, 6000);

// setTimeout(() => {
//     console.log("Request received!");
//     setTimeout(() => {
//         console.log("Getting data from DB");
//     }, 2000)

//     const data = {
//         userName: "Alex",
//         id: "hcjdcksb2837",
//         status: "student"
//     }

//     setTimeout(() => {
//         data.status = '200 OK';
//         console.log("Data sending ...", data)
//     }, 4000);

//     setTimeout(() => {
//         console.log("Frontend received data!")
//     }, 6000);

// }, 8000);

// ========================================================

// const preLoader = {
//     isLoading: false
// }

// const loader = document.querySelector('.loader');

// const gettingData = new Promise((resolve, reject) => {

//     loader.innerHTML = "Loading ..."
//     preLoader.isLoading = true;

//     setTimeout(() => {
//         console.log("DB reparing data...");
//         const randomNumber = Math.random(); //0...1
//         if (randomNumber > 0.5) {
//             const data = {
//                 userName: "Alex",
//                 id: "hcjdcksb2837",
//                 status: "student"
//             }
//             resolve(data);
//         } else reject("error. status: 400");
//     }, 3000);
// })

// gettingData
//     .then((response) => ({ ...response, status: "200 OK" }))
//     .then(data => document.querySelector('body').insertAdjacentHTML("afterbegin", data.userName))
//     .catch(error => document.querySelector('body').insertAdjacentHTML("afterbegin", error))
//     .finally(() => { loader.innerHTML = ""; preLoader.isLoading = false })

// gettingData.then((data) => console.log(data), (error) => console.log(error))

// console.dir(gettingData)

// -------------------------------------------------------

// const message = "Hello";

// const prom = (ms, data) => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve({ ms: ms, data: data })
//         }, ms)
//     })
// }

// const logger = ({ ms, data }) => console.log(`Resolve after ${ms}, ${data}`);

// // prom(2000, message).then(response => logger(response));

// // Promise.all([prom(2000, message).then(logger), prom(5000, message).then(logger)])
// //     .then(() => console.log("All promises resolved"));

// Promise.race([prom(2000, message).then(logger), prom(5000, message).then(logger)])
//     .then(() => console.log("promise resolved"));


// ===========================================

// import { getData } from './services.js'

// getData()
//     .then(data => console.log(data))
//     .catch(error => console.log(error))

// =============================================================

// const baseURL = 'https://bc22-72ac2.firebaseio.com/users.json';


// "POST", "GET", "PUT", "PATCH", "DELETE"

// const headers = {
//     "Content-Type": "application/json"
// }

// const getData = (method = "GET", url = baseURL, body = null) => {
//     return fetch(url, {
//         method: method,
//         body: body,
//         headers: headers
//     })
// }

// // getData()
// //     .then(response => response.json())
// //     .then(data => console.log(data))

// getData("POST", baseURL, JSON.stringify({ age: 30, userName: "Oleg" }))


// ================================
// const data2 = fetch('https://bc22-72ac2.firebaseio.com/users.json', {
//     method: "POST",
//     body: JSON.stringify({ userName: "Bob2", age: "25", status: "student" }),
//     headers: {
//         "Content-Type": "application/json"
//     }
// })
//     .then(response => response.json())
//     .then(data => console.log(data))

// console.log(data2)

// ===================================
// fetch('https://bc22-72ac2.firebaseio.com/users.json', {
//     method: "GET",
//     body: null,
//     headers: {
//         "Content-Type": "application/json"
//     }
// })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error))

// =========================== axios ================

// axios.get('https://bc22-72ac2.firebaseio.com/users.json')
//     .then(response => console.log(response.data))

// axios.put('https://bc22-72ac2.firebaseio.com/users/-MCBi1zR_B5NptfC5rAj.json', {userName: "hdydwgjhwgdhjwghhjebhwebhewwce", age: 2323})
//     .then(response => console.log(response.data))





















