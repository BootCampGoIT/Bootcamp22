import { productForm } from "../forms/productForm.js";
import { productsServices } from "../products/productsServices.js";



export const profilePage = (content) => {
    content.innerHTML = productForm;
    productsServices(content); 
}