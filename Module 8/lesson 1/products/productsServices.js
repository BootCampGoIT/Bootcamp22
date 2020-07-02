import { products } from "./products.js";

export const productsServices = () => {
    const product = {
        productName: '',
        productPrice: 0
    }

    const productForm = document.forms.productForm;

    const getProductInfo = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        product[name] = value;
    }
    const addProduct = (e) => {
        e.preventDefault();
        products.productsItems = [...products.productsItems, {...product, id: Date.now()}];
        productForm.reset();
        console.log(products);
    }

    productForm.addEventListener('input', getProductInfo);
    productForm.addEventListener('submit', addProduct);

}

