import { getProductsMarkup } from "../services/services.js";

export const productsPage = (content) => {
    content.innerHTML = `<ul class="productList">${getProductsMarkup()}</ul>`;
}