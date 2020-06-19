// const pencilBoxs = [{
//     shape: "cube",
//     color: "black",
//     weight: "120",
//     material: "wood",
//     innerStuff: {
//         count: 18,
//         subject: "pencils",
//         pencilsBrand: ["bik", "parker"]
//     }
// }, {
//     shape: "cube",
//     color: "white",
//     weight: "140",
//     material: "metal",
//     innerStuff: {
//         count: 30,
//         subject: "pencils",
//         pencilsBrand: ["bik", "parker"]
//     }
// }]



// const createMarkup = (pencilBoxs) => {
//     let markup = ''
//     for (const box of pencilBoxs) {
//         markup += `
//         <div class="box">
//         <p>PENCIL BOX</p>
//         <p>Shape: ${box.shape}</p>
//         <p>Color: ${box.color}</p>
//         <p>Weight: ${box.weight}</p>
//         <p>Material: ${box.material}</p>
//         </div>
//         `
//     }
//     return markup
// }



// document.querySelector('body').insertAdjacentHTML('afterbegin', createMarkup(pencilBoxs));

// =====================================================================


// const person1 = {
//     name: "Alex",
//     age: 25,
//     status: "student",
//     canSpeak: function () {
//         console.log("Hello! My name is Alex")
//     }
// }

// const calculator = {
//     type: "inge...",
//     canCount: function (a, b) {
//         console.log("result:", a + b)
//     }
// }

// console.log(person1.name);
// console.log(person1.age);
// person1.canSpeak();

// calculator.canCount(5, 10);

// const string = "LOrem ipsum";

// const string = new String("LOrem ipsum");
// console.dir(string)


// string.includes("O");

// string.toLocaleLowerCase();

// const array = ["adad", "fefsdfsf"];

// const object = {};

// const array = {
//     0: 'adad',
//     1: "fefsdfsf",
//     length: 2,
//     slice: function () {
//     }, 
//     splice: function ( ) {

//     }
// }

// console.log(array.length); 

// const MATH = {
//     max: function (a, b) {
//         if (a > b) {
//             return a
//         } else return b
//     },
//     min: function (a, b) {
//         if (a < b) {
//             return a
//         } else return b
//     }
// }

// console.log(MATH.max(100, 50))

// ====================================================




// const user = {
//     name: "Alex",
//     age: 25
// };

// const usersProps = ["name", "age"];
// for (const prop of usersProps){
//     console.log(user[prop]) 
// }

// ============================================
// map, WeakMap, Set, new Set 
// =================================================

// const user = {
//     personName: "Alex",
//     age: 25
// };

// user.status = "student";

// console.log(user);

// user.course = "BC22";

// console.log(user);

// delete user.age

// console.log(user);

// console.log(user.isOnline) //undefined

// ========================================

// const properties = {
//     status: "student",
//     course: "bootCamp25",
// }

// const user = {
//     name: "",
//     age: "",
//     number: 1,
//     category: "",
//     properties,
// }

// console.log(user.name)

// ======================= MODEL ==============================
// const cart = {
//     totalCount: 0,
//     products: [],
//     totalPrice: 0
// }

// const product1 = {
//     id: "fj,hdsgfuwtq87rthuhueiy8o7weqtri7hwh7",
//     name: "Milk",
//     price: 100,
// }
// const product2 = {
//     id: "fgsrkhfjkfleihfkjsjkfgie7hnfljnkfhbik",
//     name: "Water",
//     price: 30,
// }
// const addProduct = (product) => {
//     cart.products.push(product);
//     cart.totalCount +=1;
//     cart.totalPrice += product.price;
// }

// addProduct(product1);
// console.log(cart)

// addProduct(product2);
// console.log(cart)

// ====================== this =======================
// const alex = {
//     name: "Alex",
//     getName: function getName () {
//         console.log(`Hello! My name is ${this.name}`)
//     }
// }

// alex.getName()

// ======================= this 2 =================================
// function getName () {
//     console.log(`Hello! My name is ${this.name}`)
// }

// const alex = {
//     name: "Alex",
//     getName
// }

// const nick = {
//     name: "Nikita",
//     getName
// }

// nick.getName();
// alex.getName();

// ===========================================================

// const numbers = [1, 2, 3, 4, 5];
// for (const number of numbers) {
//     console.log(number)
// }

// const user = {
//     name: "Alex",
//     age: 25,
//     status: "student",
//     course: "BC22",

// };
// for (const key in user) {
//     console.log(`KEY: ${key}, VALUE: ${user[key]}`)
// }

// ======================== !!!!!!!! =============================
// const user = {
//     name: "Alex",
//     age: 25,
//     status: "student",
//     course: "BC22",
// };
// const findKey = "course";

// if (findKey in user) {
//     console.log("OK")
// }

// ============================= Object.keys =====================================
// const user = {
//     name: "Alex",
//     age: 25,
//     status: "student",
//     course: "BC22",
// };

// // console.dir(user)

// // const keys = []
// // for (const key in user) {
// //     keys.push(key)
// // }
// // console.log(keys)

// // console.dir(Object)

// const keys = Object.keys(user); //["name", "age", "status", "course"]
// for (const key of keys) {
//     console.log(user[key])
// }


// ============================= Object.values =====================================
// const user = {
//     name: "Alex",
//     age: 25,
//     status: "student",
//     course: "BC22",
// };

// // const values = []

// // for (const key in user) {
// //     values.push(user[key])
// // }
// // console.log(values)

// const values = Object.values(user);
// const keys = Object.keys(user);
// console.log(values)
// console.log(keys)

// ============================= Object.entries =====================================
// const user = {
//     name: "Alex",
//     age: 25,
//     status: "student",
//     course: "BC22",
// };

// const entries = Object.entries(user);
// console.log(entries);

// for (const entry of entries) {
//     console.log(entry[0])
//     console.log(entry[1])
// }

// ================================================================

// const name = "Alex";
// const age = 25

// const user = {
//     name,
//     age
// }




// const user = {
//     name: "Alex",
//     age: 25,
//     info: {
//         status: "student",
//         course: "BC22",
//         obj: {
//             name: "dhbsdkjhvs"
//         }
//     }
// }

// const { info: { obj: { name } } } = user
// console.log(name)
// const {name, age, info} = user;


// console.log(info);
// info.course = "BC23";

// console.log(user)

// user.info.course = "BC23";
// console.log(user)

// ===================================

// const x1 = 0;
// const y1 = 100;
// const x2 = 300;
// const y2 = 200;

// const array = [[x1, y1], [x2, y2]];

// const [[xx1, yy1], [xx2, yy2]] = array;
// console.log(yy2);

// const [,[, yy2]] = array;
// console.log(yy2);

// ============================================

const user = {
    name: "Alex",
    age: 25,
    status: "teacher"
}

const { status: userStatus = "student" } = user;
const { status = "student" } = user;
console.log(userStatus);
console.log(status)
console.log(user)










































