// const objectPrototype = {
//     name: "some name",
//     showThis: function () {
//         console.log(this);
//         const self = this;
//         const fn = function () {
//             console.log(this)
//             const fn2 = () => {
//                 console.log(this)
//             }
//             fn2()
//         }
//         fn.call(self);
//         console.dir(fn)
//         console.log(this)
//     }
// }

// objectPrototype.showThis();

// =============================================================
// const getInfo = function () {
//     console.log(this.name)
// }


// const User = function (name, age, status) {
//     this.name = name;
//     this.age = age;
//     this.status = status;
//     this.getInfo = getInfo;
// }

// const alex = new User("Alex", 25, 'student')
// const poly = new User("Poly", 27, 'student')
// const nikita = new User("Nikita", 35, 'teacher')

// console.log(alex)
// console.log(poly)
// console.log(nikita)

// ========================================================
// const Manager = function (name, sales) {
//     this.name = name;
//     this.sales = sales;
//     this.nationality = "ukrainian";
//     this.soldProducts = [];
//     this.sell = function (product) {
//         this.sales += 1;
//         this.soldProducts.push(product.id)
//         console.log(`${this.name} sold ${product.name}`)
//     }
// }

// const mango = new Manager("Mango", 5);
// const poly = new Manager("Poly", 3);
// const carter = new Manager("Carter", 2);

// // // const {name, sales, soldProducts} = mango;
// // // const newObject = {...mango}
// // // const destructMango = {name, sales, soldProducts};

// const product1 = {
//     id: "gfdgdffd",
//     name: "car"
// }

// mango.sell(product1)
// console.log(mango);
// poly.sell({ id: "gfdgdcdfsffd", name: "car1" })
// console.log(poly);
// carter.sell({ id: "gfsdfdsfdgdffd", name: "car2" })
// console.log(carter);

// ========================= ------ proto ------ ==============================
// const array = [1, 2, 3, 4, 5];
// console.dir(array);

// const animal = { eats: true };
// const dog = { barks: true };

// dog.__proto__ = animal;

// console.dir(dog);
// console.log(dog.eats);

// ===============================================================

// const animal = { eats: true };
// const dog = { barks: true };

// dog.__proto__ = animal;

// console.dir(dog);
// console.log(dog.eats);

// =============================== Object.create ===================
// const animal = { eats: true };

// const dog = Object.create(animal);
// dog.barks = true;

// console.dir(dog);
// console.dir(animal.hasOwnProperty('eats'));

// ===================== example for class ================================

// const Guest = function (name, room) {
//     this.name = name;
//     this.room = room;
// }

// Guest.prototype.showGuestInfo = function () {
//     console.log(`name: ${this.name}, room: ${this.room}`)
// }

// const mango = new Guest("Mango", 28);
// const poly = new Guest("Poly", 35);

// console.log(mango);
// console.log(poly);

// mango.showGuestInfo()
// poly.showGuestInfo()

// ===================================================

// games "MARVEL'S HERO"

// const Hero = function ({ name, health = 100, hitPower = 1.1, speed = 1 }) {
//     this.name = name;
//     this.health = health;
//     this.hitPower = hitPower;
//     this.speed = speed;
// }

// const weapons = {
//     hands: 1,
//     ak47: 2.3,
//     lazer: 2.7,
//     mop: 90,
//     pan: 100,
// }

// Hero.prototype.hit = function (hitPower, speed, weapon = weapons.hands) {
//     this.health -= hitPower * speed * weapon;
// }

// const ironMan = new Hero({ name: "Iron Man", hitPower: 1.3, speed: 2.3 });
// const hulk = new Hero({ name: "Hulk", hitPower: 6, speed: 0.2 });

// document.querySelector('.hero1Name').textContent = 'Iron MAn';
// document.querySelector('.hero2Name').textContent = 'Hulk';

// document.querySelector('.hero2Health').textContent = hulk.health;
// document.querySelector('.hero1Health').textContent = ironMan.health;

// const hero1HitHero2 = () => {
//     hulk.hit(ironMan.hitPower, ironMan.speed, weapons.pan);
//     document.querySelector('.hero2Health').textContent = hulk.health
// }

// document.querySelector('.hero1').addEventListener('click', hero1HitHero2)

// const hero2HitHero1 = () => {
//     ironMan.hit(hulk.hitPower, hulk.speed, weapons.mop);
//     document.querySelector('.hero1Health').textContent = ironMan.health
// }

// document.querySelector('.hero2').addEventListener('click', hero2HitHero1)


// ======================== class ============================

// class User {
//     constructor({ name, email, password }) {
//         this.name = name;
//         this.email = email;
//         this.password = password;
//     }

//     invitation() {
//         console.log(`Hello ${this.name}!`)
//     }
// }

// const nikita = new User({
//     name: "Nikita",
//     email: "nick@gmail.com",
//     password: "123456",
// })
// const alex = new User({
//     name: "Alex",
//     email: "alex@gmail.com",
//     password: "123456777"
// })

// console.log(nikita)
// console.log()

// nikita.invitation();
// alex.invitation();


// ================================================
// class User {
//     static type = "User"
//     constructor({ name, email, password }) {
//         this.name = name;
//         this.email = email;
//         this.password = password;
//     }
//     invitation() {
//         console.log(`Hello ${this.name}!`)
//     }
// }
// class Guest extends User {
//     static type = "Guest";
//     constructor({ name, email, password, terms }) {
//         super({ name, email, password });
//         this.terms = terms;
//     }
//     getTerms(){
//         super.invitation()
//         console.log(`You can use this account before ${this.terms}`)
//     }
// }
// const nikita = new Guest({
//     email: "nick@gmail.com",
//     password: "123456",
//     name: "Nikita",
//     terms: '26.06.2020',

// })
// const alex = new Guest({
//     name: "Alex",
//     email: "alex@gmail.com",
//     password: "123456777",
//     terms: '27.06.2020'
// })

// console.log(nikita)
// console.log(alex);

// nikita.invitation()
// nikita.getTerms()

// console.log(User.type);

// ============================
class User {
    constructor({ name, email, password }) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    // get username () {
    //     return this.name;
    // }

    // set username (prop) {
    //     this.name = prop 
    // }

    get info() {
        return { name: this.name, email: this.email }
    }
    set info({ name, email }) {
        this.name = name;
        this.email = email;
    }
}

const nikita = new User({
    email: "nick@gmail.com",
    password: "123456",
    name: "Nikita",
})


// console.log(nikita.name)
// nikita.name = "Nick";
console.log(nikita.info)
nikita.info = { name: "Poly", email: "Poly@gmail.com" }
console.log(nikita)


















// const Guest = function (name, room) {
//     this.name = name;
//     this.room = room;
// }

// Guest.prototype.showGuestInfo = function () {
//     console.log(`name: ${this.name}, room: ${this.room}`)
// }

// const mango = new Guest("Mango", 28);
// const poly = new Guest("Poly", 35);

// console.log(mango);
// console.log(poly);

// mango.showGuestInfo()
// poly.showGuestInfo()











