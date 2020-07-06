import refs from "../refs.js";
import shop from "../shop.js";
import { createPagination } from '../pagination/pagination.js'

export const services = {
    createProductsMarkup() {
        const markup = this.getProducts().reduce((acc, product) => {
            acc += this.createProductMarkup(product);
            return acc
        }, '');
        refs.productList.innerHTML = markup;
    },
    getProductInfo(e) {
        shop.product[e.target.name] = e.target.value;
    },

    // Добавление одной единицы товара в shop.products
    addProduct(e) {
        e.preventDefault();
        const newProduct = { ...shop.product, id: `${Date.now()}` }
        shop.products = [newProduct, ...shop.products];
        refs.productForm.reset();
        shop.product.name = "";
        shop.product.price = 0;

        refs.productList.insertAdjacentHTML('afterbegin', createProductMarkup(newProduct));///ТУТ ОШИБКА, РЕШИТЬ ЕЕ
        createPagination();
        this.createProductsMarkup();
    },

    getProducts() {
        const finish = shop.pagination.productsPerPage * shop.pagination.currentPage; //7
        const start = finish - shop.pagination.productsPerPage; //4
        const products = shop.products.slice(start, finish);
        console.log(products)
        return products;
    },

    // Создание шаблона для одной единицы товара
    createProductMarkup(product) {
        return `
        <li class="productListItem" data-id=${product.id}>
            <h2 class="productListItemTitle">${product.name}</h2>
            <p class="productListItemPrice">${product.price}</p>
            <button type="button">Add to cart</button>
            </li>
        `
    }
}

