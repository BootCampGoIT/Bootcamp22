import { products } from "./products.js";
import { getProductsMarkup, createProductItemMarkup } from "../services/services.js";

export const productsServices = (content) => {
    const product = {
        productName: '',
        productPrice: 0
    }

    const productsProfileMarkup = `<ul class="productList">${getProductsMarkup()}</ul>`
    content.insertAdjacentHTML('beforeend', productsProfileMarkup);
    const productList = document.querySelector('.productList')
    
    const productForm = document.forms.productForm;
    
    const getProductInfo = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        product[name] = value;
    }
    
    const addProduct = (e) => {
        e.preventDefault();
        const productItem = {...product, id: Date.now()}
        products.productsItems = [...products.productsItems, productItem];
        productForm.reset();
        productList.insertAdjacentHTML('beforeend', createProductItemMarkup(productItem) ) 
    }
    productForm.addEventListener('input', getProductInfo);
    productForm.addEventListener('submit', addProduct);
}

