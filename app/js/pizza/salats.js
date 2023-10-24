
function buildCart(event) {

    const cards = event.target.closest('.product__card')
    const imgProduct = cards.querySelector('.product__img').getAttribute('src');
    const prodName = cards.querySelector('.product__title').textContent
    const prodPrice = cards.querySelector('.product__price').textContent
    const prodCountEl = cards.querySelector('.product__counter-number').textContent


    const cardObject = {
        imgProduct,
        prodName,
        prodPrice,
        prodCountEl,
        additional: false
    }
    const card = getLocalData('card');

    card.push(cardObject);
    setLocalData('card', card);
    const bascketCount = document.querySelector('.header__basket-count');
    bascketCount.textContent = card.length;

}


