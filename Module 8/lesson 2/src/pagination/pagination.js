import shop from '../shop.js';
import refs from '../refs.js';
import services from '../products/services.js'

const createPaginationPage = (pageNumber) => {
    return `
    <li class="paginationPageItem" data-page=${pageNumber}>${pageNumber}</li>`
}

const createPaginationMarkup = () => {
    let markup = '';
    for (let i = 1; i <= shop.pagination.pagesCount; i += 1) {
        markup += createPaginationPage(i)
    }
    return markup;
}

const getActivePage = () => {
    const pages = document.querySelectorAll('.paginationPageItem');
    pages[shop.pagination.currentPage - 1].classList.add('activePaginationPageItem')
}

const createPagination = () => {
    shop.pagination.totalProducts = shop.products.length;
    shop.pagination.pagesCount = Math.ceil(shop.pagination.totalProducts / shop.pagination.productsPerPage)
    refs.productPagination.innerHTML = createPaginationMarkup();
    getActivePage();
}
const changePage = (e) => {
    shop.pagination.currentPage = e.target.dataset.page;
    services.createProductsMarkup();
    createPagination();
}

export {createPagination, changePage}