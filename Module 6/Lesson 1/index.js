
// const a = 5;
// const b = 10;
// let result = 0;

// function getSum(a, b) {
//     result = a + b;

//     return result
// }

// getSum(5, 10);

// console.log(result += 1)//1


// const data = [{ a: 1 }, { a: 2 }, { a: 3 }];

// const newData = data.map(item => ({ ...item }))

// console.log(newData)
// newData[0].a = 5;
// console.log(data)

// const newData = [...data];

// function rewriteValue() {
//     data.forEach(item => item.a += 1)
// }

// rewriteValue()
// console.log(data)










// const array = [1, 2, 3, 4, 5, 6];

// for (const elem of array) {
//     console.log(elem)
// }

// for (let i = 0; i < array.length; i += 1) {
//     console.log(array[i])
// }

// const result = array.forEach(elem => console.log(elem));
// console.log(result);

// =========================================================
// const array = [1, 2, 3, 4, 5, 6];
// let x = 10;

// const func = function (a, b) {
//     const result = Math.random();
//     x = a * result + b
//     return x
// }

// console.log(func(5, 10))


// ==================== immutation ========================

// const array = [1, 2, 3, 4, 5, 6];

// const copy = [...array];

// console.log(copy)

// ========================================================

// const array = [1, 2, 3, 4, 5];

// array.method((item, indx, array) => {
//     console.log(item);//2
//     console.log(indx);//1
//     console.log(array);//[1, 2, 3, 4, 5]

// })
// array.method(item => {
//     console.log(item);//2
//     console.log(indx);//1
//     console.log(array);//[1, 2, 3, 4, 5]

// })
// array.method((item, indx) => {
//     console.log(item);//2
//     console.log(indx);//1
//     console.log(array);//[1, 2, 3, 4, 5]
// })


// =========================== forEach ================================
// const array = [1, 2, 3, 4, 5];

// array.forEach((num, i) => {
//     console.log(`Index: ${i}, value: ${num}`)
// });



// =========================== map ================================

// const array = [1, 2, 3, 1, 5]; //[{index: 0, value: 1}, {index: 1, value: 2}]

// // const result = array.map((item, idx) => {
// //     return { index: idx, value: item }
// // });

// const result = array.map((item, idx) => ({ index: idx, value: item }));
// const result1 = array.map(item => item * 5);
// const result2 = array.map(item => (item === 1) ? 0 : item );

// console.log(array)
// console.log(result);
// console.log(result1);
// console.log(result2);

// ============================= filter ==================================

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// // const getValue = (item, idx, array) => (item > 3) && (item < 6);

// // const result = array.filter(getValue);
// const result = array.filter((item, idx, array)=> console.log(item, idx, array));
// const result1 = array.filter(console.log);
// // const result = array.filter(item => ((item > 3) && (item < 6)));

// console.log(result1);

// ------------
// const filter = function (a, b, callback) {
//     callback(a, b)
// }
// filter(5, 10, (a, b) => console.log(a + b))
// ---------------

// ============================== find ==========================
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// const users = [{ id: 1, name: "Bob" }, { id: 2, name: "Nikita" }, { id: 3, name: "Bob" },];

// // const result = array.find(item => item < 8);

// // const result = users.find(item => item.name === "Bob");

// const result1 = users.filter(item => (item.name === "Bob"))
// // console.log(result)
// console.log(result1)

// ============================== every ==========================
// const users = [
//     { id: 1, name: "Bob", isOnline: true },
//     { id: 2, name: "Nikita", isOnline: false },
//     { id: 3, name: "Bob", isOnline: true }
// ];

// const result = users.every(user => user.isOnline);
// console.log(result)


// ============================== some ==========================
// const users = [
//     { id: 1, name: "Bob", isOnline: false },
//     { id: 2, name: "Nikita", isOnline: false },
//     { id: 3, name: "Bob", isOnline: true }
// ];

// const result = users.some(user => user.isOnline);
// console.log(result)

// ============================== reduce ==========================

// let array = [];

// for (const user of users) {
//     if (user.name === 'Bob') {
//         array.push(user)
//     }
// }

// const users = [
//     { id: 1, name: "Bob", isOnline: false },
//     { id: 2, name: "Nikita", isOnline: false },
//     { id: 3, name: "Bob", isOnline: true }
// ];
// const result = users.reduce((acc, user) => {
//     if (user.name === 'Bob') {
//         acc.push(user)
//     }
//     return acc
// }, []);
// console.log(result)


// const numbers = [1, 2, 3, 4, 5];
// const result1 = numbers.reduce((acc, item) => {
//     acc += item
//     return acc
// }, 0);
// console.log(result1)

// const data = ["Home", "About", "Contacts", "SignIn", "SignUp"];

// const result1 = data.reduce((acc, item) => {
//     acc += `<li class="listItem">${item}</li>`
//     return acc;
// }, '');

// document.querySelector('.list').innerHTML = result1;

// ============================== sort ==========================
// const numbers = [2, 1, 3, 5, 4]
// const names = ["Alfa", "Eco", "Juliet", "Bravo", "Abrams", 'altei'];

// const result = numbers.sort();
// console.log(result)
// const result1 = names.sort();
// console.log(result1)

// ===============================================================

// const users = [
//     { name: 'Mango', daysActive: 15 },
//     { name: 'Poly', daysActive: 4 },
//     { name: 'Ajax', daysActive: 27 },
//     { name: 'Chelsey', daysActive: 2 },
// ];

// // const sortByActiveDays = (a, b) => a.name > b.name;
// const result = users
//     .map(item => item.name)//['Mango','Poly','Ajax','Chelsey']
//     .sort() //["Ajax", "Chelsey", "Mango", "Poly"]
//     .map(item => users.find(user => user.name === item));

// // const result = users
// // .map(item => item.name)
// // .sort()
// // const newResult = result.map(item => users.find(user=> user.name === item))

// console.log(result);
// // console.log(newResult)

// // console.log(users.sort());


// ========================== new Set ===========================
// const arr = [1, 2, 3, 4, 4, 5, 2];

// for (const num of arr) {
//     console.log(arr.indexOf(num))
// }

// const result5 = arr.filter(item=> item !== 2);
// console.log(result5)


// const set = new Set(arr); //{1, 2, 3, 4, 5, 6}
// console.log('set :', set);
// const array = [...set];
// console.log(array)

// const object1 = { a: 1 }
// const object2 = { a: 2, b: 5 }
// const object3 = { b: 7, a: 3 }

// const resultObject = { ...object3, ...object1, ...object2, }
// console.log(resultObject)

// set.add(10).add(20).add('fhgfh');
// console.log('set :', set);
// console.log('set.entries() :', set.entries()); //[["1", "1"]]

// let newArr = []
// set.forEach(value => newArr.push(value));
// console.log('newArr :', newArr);

// const unique = Array.from(new Set(arr));
// console.log('unique :', unique);
// // ----- OR ----------------->
// const unique2 = [...new Set(arr)]; //new Set(arr) ====> {1, 2, 3, 4, 5, 6} ===> [1, 2, 3, 4, 5, 6]
// console.log('unique2 :', unique2);



// !++++++++++++++++++++++++++++++++++++++++++++!
// =========== map ====================================================>

// const user = {
//     name: "Andrii",
//     age: 25,
//     status: "teacher"
// }

// // console.log('user :', Object.entries(user)); // [["name", "Andrii"], ["age", "25"], ["isActive", "true"], ["status", "teacher"]];

// const entries = [["name", "Andrii"], ["age", "25"], ["status", "teacher"]];

// // console.log(Object.fromEntries(entries));

// const map = new Map(entries);

// console.log('map :', map);

// console.log('map.get("status") :', map.get("status"));

// map.set("isActive", true);
// console.log('map :', map);

// // map.set(user, 'something').set("some", 25);
// console.log('map :', map);

// map.delete("status");
// console.log(map.has("status"));

// console.log(map.size);

// map.clear()
// console.log(map.size);
// console.log('map :', map);


// ===== forEach map ======================================================>

// const user = {
//     name: "Andrii",
//     age: 25,
//     status: "teacher"
// }


// const entry = new Map(Object.entries(user)); //[[],[]]
// console.log(entry);

// entry.forEach((value, key, arr) => console.log(value, key));

// // const mapa = Object.fromEntries([...entry]);
// // console.log('mapa :', mapa);

// // const map = new Map(entries);
// const newMapa = Array.from(entry);
// console.log('newMapa :', newMapa);

// ========= new Set ===============================================================>

// const arr = [1, 2, 3, 4, 5, 6, 6, 6, 6, 3, 2]
// const set = new Set(arr); //{}
// console.log('set :', set);

// set.add(10).add(20).add('fhgfh');
// console.log('set :', set);
// console.log('set.entries() :', set.entries()); //[["1", "1"]]

// let newArr = []
// set.forEach(value => newArr.push(value));
// console.log('newArr :', newArr);

// const unique = Array.from(new Set(arr));
// console.log('unique :', unique);
// // ----- OR ----------------->
// const unique2 = [...new Set(arr)]; //new Set(arr) ====> {1, 2, 3, 4, 5, 6} ===> [1, 2, 3, 4, 5, 6]
// console.log('unique2 :', unique2);

// ============ weakMap ==========================================================>

// let obj = { name: "Nastya" }

// const arr = [obj]

// obj = null;
// console.log('obj :', obj);
// console.log('arr :', arr);

//  ------------->

// let newObj = { name: "Nastya" }

// const map = new WeakMap([[newObj, "Nastya"]])
// console.log('map :', map);

// newObj = null;

// console.log('map :', map);

// -- WeekMap methods ---- get set delete has --------->

