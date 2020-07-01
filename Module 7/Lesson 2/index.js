// const image = document.querySelector('img');
// // image.style.width = '320px';

// const getImage = (event) => {
//     console.log(event.target);
//     console.log(image)
//     console.log(event.target.dataset.bigpicture)
//     // event.target.classList.toggle('bigPicture')
//     image.src = event.target.dataset.bigpicture; 
// }

// image.addEventListener('click', getImage);
// // console.dir(buttonHandler.dataset.button)
// // console.dir(buttonHandler1)

// ---------------------- modal window ----------------------------

// const buttonHandler = document.querySelector('button[data-button="modalopener"]');
// const modal = document.querySelector('.modal');
// const closeModalButton = document.querySelector('.closeModalButton');

// const closeModal = (e) => {
//     console.log(e)
//     // if (e.keyCode === 27) {
//     //     console.log("You press Escape")
//     // }

//     if ((e.target === e.currentTarget) || e.target.dataset.button === 'closebutton' || e.key === "Escape") {
//         modal.classList.toggle('visibility');
//         modal.removeEventListener('click', closeModal);
//         document.removeEventListener('keydown', closeModal);
//     }
// }

// // keydown -> keypress -> keyup -> click

// const showModal = () => {
//     modal.classList.toggle('visibility');
//     modal.addEventListener('click', closeModal);
//     document.addEventListener('keydown', closeModal);
// }
// const logger = (e, message) => {
//     console.log(message)
// }
// buttonHandler.addEventListener('click', showModal);
// buttonHandler.addEventListener('click', (e) => logger(e.target, "Hello"))


// ================================= Forms ====================================
// const authForm = document.querySelector('.authForm');

// const authForm = document.forms.authForm;
// const email = authForm.email;
// const password = authForm.password;

// const user = {
//     email: '',
//     password: ''
// }

// const validator = (target) => {
//     if (target.name === 'email') {
//         if (user.email.includes("@") && user.email.includes(".")) {
//             target.classList.remove('valid')
//             target.classList.add('invalid')
//         } else target.classList.add('valid')
//     }

//     if (target.name === 'password') {
//         if (user.password.length < 6) {
//             target.classList.remove('valid')
//             target.classList.add('invalid')
//         } else target.classList.add('valid')
//     }
// }

// const getData = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     user[name] = value;
//     validator(e.target);
// }


// authForm.addEventListener('input', getData);

// ==================================
// const authForm = document.querySelector('.authForm');
// // console.dir(authForm.elements[2])

// const user = {
//     email: '',
//     password: ''
// }

// // const getData = (e) => {
// //     console.log("fdsfds")
// //     const name = e.target.name;
// //     user[name] = e.target.value
// //     console.log(user)
// // }

// const sendData = (e) => {
//     e.preventDefault();
//     user.email = authForm.email.value;
//     user.password = authForm.password.value;
//     console.log(user)
// }

// // authForm.addEventListener('change', getData);
// authForm.addEventListener('submit', sendData);
// authForm.addEventListener('blur', ()=>console.log("blur"));

// =======================================
// const help = document.querySelector('.help')
// help.addEventListener('blur', () => console.log("blur"))
// help.addEventListener('focus', () => console.log("focus"))
// help.addEventListener('change', () => console.log("change"))
// help.addEventListener('input', () => console.log("input"))

// ======================================
// const list = document.querySelector('.list');


// const logger = (e) => {

//     if (e.target === e.currentTarget) {
//         return
//     }
//     console.log(e.target)
// }

// // // authForm.addEventListener('change', getData);
// list.addEventListener('click', logger);


// ======================================
// document.addEventListener('DOMContentLoaded', ()=> console.log("DOMContentLoaded"))
// window.addEventListener('load', ()=> console.log("loaded"))
// document.addEventListener('beforeunload', ()=> console.log("beforeunload"))
// document.addEventListener('unload', ()=> console.log("unload"))

// ==========================================
const blockInput = document.querySelector('.blockInput');
const block = document.querySelector('.block');
const button = document.querySelector('[data-button="generate"]');

console.log(button)

const generateBlocks = () => {
    const blocks = Number(blockInput.value);//3
    let markup = ''
    let x = 30;
    for (let i = 1; i <= blocks; i += 1) {
        x += 10
        markup += `<div class="square" style="width: ${x}px; height: ${x}px; border: 1px solid black; backgroundColor: red"></div>`
    }
    block.innerHTML = markup;

}

button.addEventListener('click', generateBlocks)
blockInput.addEventListener('change', generateBlocks)
