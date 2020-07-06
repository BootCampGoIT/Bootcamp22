import shop from '../shop.js'

export const addToCart = (e) => {
    const parent = e.target.closest('[data-id]'); //ищем родителя у которого есть такой атрибут
    const id = parent.dataset.id;
    const product = shop.products.find(product => product.id === id);
    shop.cart = [...shop.cart, product];
    console.log(shop.cart);
}