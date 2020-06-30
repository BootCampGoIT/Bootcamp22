// const list = document.querySelector('.js-listItem_first');


// ============== old school =====================

// const list = document.getElementById('listElement');
// // const list = document.getElementsByClassName('listItem');
// const listItems = list.getElementsByTagName('li');
// console.log(listItems);

// =================================================

// const list = document.querySelector('.js-listItem_first');
// console.dir(list)

// const listID = document.querySelector('#listElement');
// console.log(listID)
// console.log(list)
// const listItems = list.querySelectorAll('.listItem');
// console.log(listItems)
// console.log(list.parentNode)
// console.log(list.childNodes)
// console.log([...list.childNodes])
// console.log([...list.childNodes][0])

// const listItems = list.children;
// console.log(listItems);

// const elem1 = list.firstChild
// const elem = list.firstElementChild
// console.log(elem1)
// console.log(elem)

// ================= createElement =================
// const heading = document.createElement('h1');
// console.log(heading); // <h1></h1>

// heading.textContent = 'This is a heading';
// console.log(heading); // <h1>This is a heading</h1>

// const image = document.createElement('img');
// // image.setAttribute('src', 'https://placeimg.com/640/480/nature');
// image.src = 'https://placeimg.com/640/480/nature';
// // image.width = 320;
// image.setAttribute('alt', 'nature');

// console.dir(image); // <img src="https://placeimg.com/640/480/nature" alt="nature">


// const body = document.querySelector('body');

// const fragment = document.createDocumentFragment();
// fragment.appendChild(heading);
// fragment.appendChild(image);
// body.appendChild(fragment);




// ======================================================
// const body = document.querySelector('body');

// const array = ["Home", "About", "Contacts", "Join us"]

// const ul = document.querySelector('.list');

// const fragment = document.createDocumentFragment();

// for (const item of array) {
//     const li = document.createElement('li');
//     li.textContent = item;
//     fragment.appendChild(li);
// }

// const div = document.createElement('div')

// const value = array.reduce((acc, item) => {
//     const li = document.createElement('li');
//     li.textContent = item;
//     acc.appendChild(li);
//     return acc
// }, fragment);

// array.forEach(item => {
//     const li = document.createElement('li');
//     li.textContent = item;
//     fragment.appendChild(li);
// })

// ul.appendChild(fragment);



// const fragment = document.createDocumentFragment();
// fragment.appendChild(heading);
// fragment.appendChild(image);
// body.appendChild(fragment);

// ===============================
// const body = document.querySelector('body');

// const script = document.querySelector('script');

// const p = document.createElement('p');
// p.textContent = 'Lorem ipsum dolor sit amet.'

// body.insertBefore(p, script);

// ===================================
// const ul = document.querySelector('ul');
// //! ul.append(document.createElement('li').append((document.createElement('p').textContent = '123')));

// const li = document.createElement('li');
// li.textContent = "Home";
// ul.append(li);

// const newLi = document.createElement('li');
// newLi.textContent = "New";
// ul.prepend(newLi);

// const beforeBase = document.createElement('li');
// beforeBase.textContent = "Before Base";
// ul.children[1].before(beforeBase);
// console.dir(ul.children[3]);

// const replaceLi = document.createElement('li')
// replaceLi.textContent = "REPLACEWITH";
// beforeBase.replaceWith(replaceLi);



// elem.append(nodes)// - добавляет nodes в конец elem
// elem.prepend(nodes)// - добавляет nodes в начало elem
// elem.after(nodes)// - добавляет nodes после узла elem
// elem.before(nodes)// - добавляет nodes перед узлом elem
// elem.replaceWith(nodes)// - добавляет nodes вместо elem


// =============================================
// const ul = document.createElement('ul');
// console.dir(ul)
// ul.style.listStyle = 'none';
// ul.style.backgroundColor = "teal";
// document.querySelector('body').prepend(ul);

// const li = document.createElement('li');
// li.classList.add('visible');
// li.classList.add('newStyle');
// li.textContent = "Home"
// ul.append(li);

// // li.classList.remove('visible');
// // li.classList.replace('visible', 'invisible');
// li.classList.toggle('visible');


// ===============================================

const modalButton = document.querySelector('.modalButton');
const modal = document.querySelector('.modal');
const innerModalButton = document.querySelector('.innerModalButton');
console.log(innerModalButton)

const modalHandler = () => {
    modal.classList.toggle('invisible');
}

modalButton.addEventListener('click', modalHandler)
innerModalButton.addEventListener('click', modalHandler)







