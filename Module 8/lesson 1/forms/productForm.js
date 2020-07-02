export const productForm = () => {
    return `
    <form class="productForm" name="productForm">
        <input type="text" class="formInput" name="productName" placeholder="Name">
        <input type="number" class="formInput" name="productPrice" placeholder="Price">
        <button class="formButton" type="submit">Add product</button>
    </form>
    `
}

