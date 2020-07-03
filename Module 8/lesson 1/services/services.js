import { products } from "../products/products.js";

export const createProductItemMarkup = (product) => {
    return `
    <li class="productListItem">
        <h2 class="productName">${product.productName}</h2>
        <p class="productPrice">${product.productPrice}</p>
        <button type="button">Add to cart</button>
    </li>
    `
}

// [{}, {}, {}]

export const getProductsMarkup = () => {
    return products.productsItems.reduce((acc, product) => {
        acc += createProductItemMarkup(product)
        return acc
    }, '');
}