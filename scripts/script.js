document.addEventListener('DOMContentLoaded', () => {
    const productList = document.querySelector('.product-list');
    const productForm = document.getElementById('product-form');
    const products = [
        {
            name: 'Stormtrooper',
            price: 60.00,
            image: 'images/stormtrooper.jpg'
        },
        {
            name: 'Game Boy Classic',
            price: 60.00,
            image: 'images/gameboy.jpg'
        }
    ];

    const renderProducts = () => {
        productList.innerHTML = '';
        products.forEach((product, index) => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>$ ${product.price.toFixed(2)}</p>
                <button class="delete-button" data-index="${index}">🗑️</button>
            `;
            productList.appendChild(productCard);
        });
    };

    const addProduct = (name, price, image) => {
        products.push({ name, price: parseFloat(price), image });
        renderProducts();
    };

    const deleteProduct = (index) => {
        products.splice(index, 1);
        renderProducts();
    };

    productForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('product-name').value;
        const price = document.getElementById('product-price').value;
        const image = document.getElementById('product-image').value;
        addProduct(name, price, image);
        productForm.reset();
    });

    productList.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-button')) {
            const index = e.target.getAttribute('data-index');
            deleteProduct(index);
        }
    });

    renderProducts();
});
