const refs = {
    productForm: document.querySelector('.productForm'),
    productList: document.querySelector('.productList'),
    productPagination: document.querySelector('.productPagination')
}

const shop = {
    products: [{ id: "121232131", name: "Water", price: 20 }, { id: "124321232131", name: "Milk", price: 40 }],
    product: {
        name: "",
        price: 0
    },
    pagination: {
        currentPage: 1,
        totalProducts: 0,
        productsPerPage: 4,
        pagesCount: 0

    },
    cart: []
};

// Получение данных с формы и запись в объект shop.product
const getProductInfo = (e) => {
    shop.product[e.target.name] = e.target.value;
}

// Добавление одной единицы товара в shop.products
const addProduct = (e) => {
    e.preventDefault();
    const newProduct = { ...shop.product, id: `${Date.now()}` }
    shop.products = [newProduct, ...shop.products];
    refs.productForm.reset();
    shop.product.name = "";
    shop.product.price = 0;
    refs.productList.insertAdjacentHTML('afterbegin', createProductMarkup(newProduct));
    createPagination();
    createProductsMarkup();
}

const getProducts = () => {
    const finish = shop.pagination.productsPerPage * shop.pagination.currentPage; //7
    const start = finish - shop.pagination.productsPerPage; //4
    const products = shop.products.slice(start, finish);
    console.log(products)
    return products;
}

// Создание шаблона для одной единицы товара
const createProductMarkup = (product) => {
    return `
    <li class="productListItem" data-id=${product.id}>
        <h2 class="productListItemTitle">${product.name}</h2>
        <p class="productListItemPrice">${product.price}</p>
        <button type="button">Add to cart</button>
        </li>
    `
}

// Создание разметки для отрисовки всех товаров из массива shop.products
const createProductsMarkup = () => {
    const markup = getProducts().reduce((acc, product) => {
        acc += createProductMarkup(product);
        return acc
    }, '');
    refs.productList.innerHTML = markup;
}

// =================== cart ======================

const addToCart = (e) => {
    const parent = e.target.closest('[data-id]'); //ищем родителя у которого есть такой атрибут
    const id = parent.dataset.id;
    const product = shop.products.find(product => product.id === id);
    shop.cart = [...shop.cart, product];

    console.log(shop.cart)
}

// ================== pagination ===================
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
    createProductsMarkup();
    createPagination();
}

// =================================
createProductsMarkup();
createPagination();

const activePage = document.querySelector('.paginationPageItem');
activePage.classList.add('activePaginationPageItem');

refs.productForm.addEventListener('input', getProductInfo);
refs.productForm.addEventListener('submit', addProduct);
refs.productList.addEventListener('click', addToCart);
refs.productPagination.addEventListener('click', changePage)

