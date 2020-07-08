import axios from 'axios';
import users from './users.json';
import userTemplate from './template.hbs';
import './styles.css';

// const result = users.map(user => ({...user, age: user.age > 50 ? "old" : "young"}))
// console.log(result)


const data = userTemplate(users); //string


const data2 = users.reduce((acc, user) => {
  acc += `<li class="${ user.age > 50 ? "bdksk" : "djkhsk" }"></li>`
  return acc
},'')
console.log(data2)


console.log(data);

document.querySelector('.users').innerHTML = data;




// const template = users.reduce((acc, user) => {
//   acc += userTemplate(user)
//   return acc
// }, '')
// console.log(template)




// // console.log("Hello")

// // console.dir(axios);
// const sendPost = () => {
//   axios.post("https://bc22-72ac2.firebaseio.com/products.json", { productName: "Milk", price: 100, })
// }


// const getusers = () => {
//   axios.get("https://bc22-72ac2.firebaseio.com/users/-MBhJUW7Rn7Q6KNuTwsD.json")
//   .then(response=> console.log(response));
// }



// document.querySelector('.sendUser').addEventListener('click', sendPost)
// document.querySelector('.getUsers').addEventListener('click', getusers)

// const user = {
//   email: "",
//   password: ""
// }



// const auth = document.querySelector('.auth');

// const getUserInfo = (e) => {
//   user[e.target.name] = e.target.value;
//   // console.log(user)
// }


// const setLocal = (e) => {
//   e.preventDefault();
//   // if (localStorage.getItem('users')) {
//   //   const data = JSON.parse(localStorage.getItem('users'));//{}
//   //   localStorage.setItem('users', JSON.stringify([...data, user]));
//   // } else { localStorage.setItem('users', JSON.stringify([user])) }

//   //cosnt user =  {
//   //   email: "Alex",
//   //   password: "dfsfsd"
//   // }
//   // ===============================================================
//   localStorage.setItem(`${ user.email } `, JSON.stringify(user));
//   const userInfo = JSON.parse(localStorage.getItem(`${ user.email } `));
//   console.log(userInfo)

//   auth.reset();

//   // localStorage.clear();

// }


// auth.addEventListener('input', getUserInfo)
// auth.addEventListener('submit', setLocal)


// const localHost4040 = {
//   users: []
// }
