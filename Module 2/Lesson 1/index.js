// const user1 = ["Alex", 23, "student", "bc22", true];
// // const users = [
// //     ["Alex", 23, "student", "bc22", true ], 
// //     ["Alex", 23, "student", "bc22", true ],
// // ];
// const users = [
//     {
//         id: "ghasget6wbysdchsghgweyewbhdb8tyfewy",
//         userName: "Alex",
//         age: 23,
//         status: "student",
//         course: "bc22"
//     },
//     {
//         id: "ghasget6wbysdchsghgweyewbhdb8tyfewy",
//         userName: "Alex",
//         age: 23,
//         status: "student",
//         course: "bc22"
//     },
//     {
//         id: "ghasget6wbysdchsghgweyewbhdb8tyfewy",
//         userName: "Alex",
//         age: 23,
//         status: "student",
//         course: "bc22"
//     }
// ]

// ====================================================================

// const students = ["Alex", "Nikita", "Boris"];
// console.dir(students)

// // const alex = students[0];
// // const nikita = students[1];
// // console.log(nikita)

// students[0] = 'Alexander';
// console.log(students);


// const  = 5;
// console.log(x);

// ================================== for =====================================
// const students = ["Alex", "Nikita", "Boris"]; //3

// for (let i = 0; i < students.length; i += 1) {
//     console.log(i)
//     const index = students.indexOf(students[i]);
//     console.log(students[i], `, index: ${index}`);
// }

// =================================== for ... of ========================================
// const students = ["Alex", "Nikita", "Boris"]; //3

// for (const student of students) {
//     console.log(student);
// }

// ======================================EX 1===============
// const users = [
//     {
//         id: "ghasget6wbysdchsghgweyewbhdb8tyfewy",
//         userName: "Alex",
//         age: 24,
//         status: "student",
//         course: "bc21"
//     },
//     {
//         id: "ghasget6wbysdchsghgweyewbhdb8tyfewy",
//         userName: "Nikita",
//         age: 29,
//         status: "student",
//         course: "bc22"
//     },
//     {
//         id: "ghasget6wbysdchsghgweyewbhdb8tyfewy",
//         userName: "Boris",
//         age: 25,
//         status: "student",
//         course: "bc23"
//     }
// ];

// let searchUser = {};

// for (const user of users) {
//     if (user.userName === "Boris") {
//         searchUser = user;
//     }
// }
// searchUser.userName = "dfsdfdsfdsf";
// console.log(users);


// const students = ["Alex", "Nikita", "Boris"]; 

// // const newStudents = students;

// // newStudents[0] = "Alexander";

// // console.log(students);

// const studentsNames = students;

// ==================== EX 2 =======================

// const students = ["Alex", "Nikita", "Boris"]; //3
// // const students = new Array("Alex", "Nikita", "Boris")

// for (const student of students) {
//     console.log(student);
// }


// const student = "Alex";
// // students.forEach(student => console.log(student))
// // students.forEach(student => console.log(student))
// // console.dir(students);
// =======================================
// const users = [
//     {
//         id: "ghasget6wbysdchsghgweyewbhdb8tyfewy",
//         userName: "Alex",
//         age: 24,
//         status: "student",
//         course: "bc21"
//     },
//     {
//         id: "ghasget6wbysdchsghgweyewbhdb8tyfewy",
//         userName: "Nikita",
//         age: 29,
//         status: "student",
//         course: "bc22"
//     },
//     {
//         id: "ghasget6wbysdchsghgweyewbhdb8tyfewy",
//         userName: "Boris",
//         age: 25,
//         status: "student",
//         course: "bc23"
//     }
// ];

// const result = [];

// for (const user of users) {
//     if (user.age> 26) {
//         result.push({...user})
//     }
// }
// console.log(result)
// console.log(users)


// const result = users.filter(user => user.age > 26);
// console.log(result)

// ===================================================================

// // const fields = [
// //     [{ name: "field1" }, { name: "field2" }, { name: "field3" }],
// //     [{ name: "field4" }, { name: "field5" }, { name: "field6" }],
// //     [{ name: "field7" }, { name: "field8" }, { name: "field9" }],
// // ]
// const fields = [
//     [[[0, 100], [0, 100]], [[100, 200], [0, 100]], [[200, 300], [0, 100]]],
//     [[[0, 100], [100, 200]], [[100, 200], [100, 200]], [[200, 300], [100, 200]]],
//     [[[0, 100], [200, 300]], [[100, 200], [200, 300]], [[200, 300], [200, 300]]],
// ]

// // console.log(fields.length);
// // console.log(fields[0].length);
// // console.log(fields[0][1]);

// // console.log(fields[1][1][0][0]);
// let x1 = fields[1][1][0][0];//100 
// console.log(x1);
// x1 = 999;

// fields[1][1][0][0] = 999

// console.log(fields);
// // let x = 5;
// // let y = 30
// // x = y;
// // console.log(x)

// ===================== split =======================

// const string = 'fsd#fs dsdg#fgfdgd#fgdfgdf gdf#gdfgfdgdfggdf#gdfgfdfd';
// const array = string.split('');
// console.log(array)
// console.log(string);

// ===================== join =======================
// const result = array.join('');
// console.log(result)
// ===================== includes() =======================

// const users = ["Alex", "Boris", "Nikita", "Nikita", "Nikita", "Borya", "Boryan"];


// const result = [];
// for (const user of users) {
//     if (user.includes('Bor')) {
//         result.push(user)
//     }
// }
// console.log(result)

// const result1 = users.includes("Bor");
// console.log(result1)


// console.log(result);

// result.push(element)


// ===================== indexOf() =======================
// const users = ["Alex", "Boris", "Nikita", "Nikita", "Nikita", "Borya", "Boryan", "Nikita"];

// const result = [];

//!!!!!!!// for (const user of users) {
//     const arrayFromUser = [users.indexOf(user), user];
//     result.push(arrayFromUser)
// }
// console.log(result)

// -------------------------------
// let i = 0;
// for (const user of users) {
//     const arrayFromUser = [i, user];
//     result.push(arrayFromUser);
//     i += 1
// }
// console.log(result)

// ----------------------------------
// for (let i = 0; i < users.length; i += 1) {
//     const arrayFromUser = [i, users[i]];
//     result.push(arrayFromUser)
// }
// console.log(result)

// [[0,"Alex"], [1,"Boris"]];

// ========================== push ===========================
// const arrayOfNumbers = [];
// arrayOfNumbers.push({name: "Alex"});
// arrayOfNumbers.push(31);
// arrayOfNumbers.push(32);
// arrayOfNumbers.push(32);
// arrayOfNumbers.push(32);
// arrayOfNumbers.push(32);
// arrayOfNumbers.push(32);
// arrayOfNumbers.push(32);
// arrayOfNumbers.push(32);
// arrayOfNumbers.push(32);
// arrayOfNumbers.push(32);
// arrayOfNumbers.push(32);
// arrayOfNumbers.push(32);
// arrayOfNumbers.push(32);
// arrayOfNumbers.push(32);
// arrayOfNumbers.push(32);
// arrayOfNumbers.push([33]);
// console.log(arrayOfNumbers)
// // ============================= pop =============================
// arrayOfNumbers.pop();
// console.log(arrayOfNumbers);

// // ============================== shift ===========================
// arrayOfNumbers.shift()
// console.log(arrayOfNumbers);
// // ================================ unshift =========================
// arrayOfNumbers.unshift({name: "Alex"})
// console.log(arrayOfNumbers);

// // =============================== reverse ===================================
// arrayOfNumbers.reverse()
// console.log(arrayOfNumbers);

// ================================= slice ==================================
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// const result = array.slice(0, 5);
// console.log(result);

// const result1 = array.slice(5);
// console.log(result1);

// const copy = array.slice()
// console.log(copy);

// ================================== splice ===============================
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// const result = array.splice(8, 2);
// console.log(array);
// console.log(result);

// ================================== concat ==================================

// const newArray = array.concat(result);
// console.log(newArray);

// newArray[0] = "fsdfsf";
// console.log(newArray);
// console.log(array)




// --------------------------------
// const newArr = [...array, ...result,"fsdfdsf","sdfsdf","sdf","sdf"];
// console.log(newArr);

// const user = {
//     name: "Alex",
//     age: 20
// }

// const age = 25;
// const modifiedUser = {...user, age};
// console.log(modifiedUser);



// ======================= concat ===================

const arr1 = ['a', 2, 3, 4, 5];
const arr2 = ['a', 'b', 'c', 'd'];
const res = arr2.concat(arr1);
console.log(res);
console.log(arr1);
console.log(arr2);
































