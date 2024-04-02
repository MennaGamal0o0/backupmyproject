// Add to cart
const btnCart = document.querySelector('.btn-cart');
const cart = document.querySelector('.cart');
const btnClose = document.querySelector('#cart-close');

let isCartActive = false;

btnCart.addEventListener('click', () => {
    if (isCartActive) {
        cart.classList.remove('cart-active');
    } else {
        cart.classList.add('cart-active');
    }
    isCartActive = !isCartActive;
});


btnClose.addEventListener('click', () => {
    cart.classList.remove('cart-active');
    isCartActive = false;
});
