
document.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const ham = document.querySelector('.ham');
    const search = document.querySelector('.search');
    const wishlist = document.querySelector('.wishlist');
    const cart = document.querySelector('.cart');
    const user = document.querySelector('.user');

    const heading = document.querySelector('.title');

    if (window.scrollY > 0) {
        header.classList.add('scrolled');
        ham.classList.add('scrolled');
        search.classList.add('scrolled');
        wishlist.classList.add('scrolled');
        cart.classList.add('scrolled');
        user.classList.add('scrolled');
        heading.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
        ham.classList.remove('scrolled');
        search.classList.remove('scrolled');
        wishlist.classList.remove('scrolled');
        cart.classList.remove('scrolled');
        user.classList.remove('scrolled');
        heading.classList.remove('scrolled');
    }
});