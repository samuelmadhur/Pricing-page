const prices = document.querySelectorAll('.price');

prices.forEach((price) => {
    price.addEventListener('mouseenter', () => {
        price.style.color = '#ff8800';
    });

    price.addEventListener('mouseleave', () => {
        price.style.color = '#333';
    });
});
