
import refs from './src/refs.js';
import { createPagination, changePage } from './src/pagination/pagination.js';
import services from './src/products/services.js'
import { addToCart } from './src/cart/cart.js';

services.createProductsMarkup();
createPagination();

const activePage = document.querySelector('.paginationPageItem');
activePage.classList.add('activePaginationPageItem');

refs.productForm.addEventListener('input', services.getProductInfo);
refs.productForm.addEventListener('submit', services.addProduct);
refs.productList.addEventListener('click', addToCart);
refs.productPagination.addEventListener('click', changePage)

