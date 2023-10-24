
const Ingridients = `<div class="modal__inner">
                <ul class="modal-ingridient">
                <li class="product-add-somathing" data-price-25sm="1.2" data-price-33sm="2.5" data-price-40sm="3.5">
                    <label  class="input-lable">
                        <input type="checkbox" class="product-add-checkbox" >
                        <span class="check-style"></span>
                        Соус бешамель
                    </label>
                    <div class="product-add-current-price">1.2 руб</div>
                </li>
                <li class="product-add-somathing" data-price-25sm="1" data-price-33sm="2" data-price-40sm="3">
                    <label class="input-lable">
                        <input type="checkbox" class="product-add-checkbox" >
                        <span class="check-style"></span>
                        Ветчина
                    </label>
                    <div class="product-add-current-price">2.5 руб</div>
                </li>
                <li class="product-add-somathing" data-price-25sm="1" data-price-33sm="2" data-price-40sm="3">
                    <label  class="input-lable">
                        <input type="checkbox" class="product-add-checkbox" >
                        <span class="check-style"></span>
                        Курица
                    </label>
                    <div class="product-add-current-price">1 руб</div>
                </li>
                <li class="product-add-somathing" data-price-25sm="0.5" data-price-33sm="0.5" data-price-40sm="0.5">
                    <label  class="input-lable">
                        <input type="checkbox" class="product-add-checkbox" >
                        <span class="check-style"></span>
                        Маслины
                    </label>
                    <div class="product-add-current-price">0.5 руб</div>
                </li>
                <li class="product-add-somathing" data-price-25sm="0.5" data-price-33sm="0.5" data-price-40sm="0.5">
                    <label class="input-lable">
                        <input type="checkbox" class="product-add-checkbox" >
                        <span class="check-style"></span>
                        Томты
                    </label>
                    <div class="product-add-current-price">0.5 руб</div>
                </li>
                <li class="product-add-somathing" data-price-25sm="0.5" data-price-33sm="0.5" data-price-40sm="0.5">
                    <label  class="input-lable">
                        <input type="checkbox" class="product-add-checkbox" >
                        <span class="check-style"></span>
                        Халапеньо
                    </label>
                    <div class="product-add-current-price">0.5 руб</div>
                </li>
                <li class="product-add-somathing" data-price-25sm="1" data-price-33sm="2" data-price-40sm="2.5">
                    <label  class="input-lable">
                        <input type="checkbox" class="product-add-checkbox" >
                        <span class="check-style"></span>
                        Шампиньены
                    </label>
                    <div class="product-add-current-price">1 руб</div>
                </li>
                <li class="product-add-somathing" data-price-25sm="1.5" data-price-33sm="2" data-price-40sm="2.5">
                    <label  class="input-lable">
                        <input type="checkbox" class="product-add-checkbox">
                        <span class="check-style"></span>
                        Сыр
                    </label>
                    <div class="product-add-current-price">1.5 руб</div>
                </li>
            </ul > 
              </div> `

//change size,price,weigth
function variationSize() {
    const productVarWrap = document.querySelectorAll('.product__item-wrapper');
    productVarWrap.forEach(item => {
        item.addEventListener('click', switchSize);
    })
    const indicators = document.querySelectorAll('.product__variable-indicator');

    for (const indicator of indicators) {
        const parentNode = indicator.parentNode;
        indicator.style.width = `calc(100% / ${[...parentNode.children].length - 1})`;

        const selectedVar = parentNode.querySelector('.selected');
        let left = 0;

        if (selectedVar) {
            const indexElement = [...parentNode.children].findIndex(item => item.classList.contains('selected'));
            left = selectedVar.getBoundingClientRect().width * indexElement;
        }
        indicator.style.left = `${left}px`;
    }
    function switchSize(evt) {
        const parentNode = evt.target.parentNode;
        [...parentNode.children].forEach((el) => {
            el.classList.remove('selected')
        })
        evt.target.classList.add('selected');
        let indicator = parentNode.querySelector('.product__variable-indicator');
        const indexElement = [...parentNode.children].findIndex(item => item == evt.target);
        indicator.style.left = evt.target.getBoundingClientRect().width * indexElement + 'px';

        //change price ,size,weigth
        const activeEl = evt.target.dataset.value
        const activeElWeigth = evt.target.dataset.weigth
        const product = evt.target.closest('.product__card')
        const productVariant = product.querySelectorAll('.product__single-variation')
        productVariant.forEach(elem => {
            const price = activeEl
            const weigthEl = activeElWeigth
            const priceEl = elem.querySelector('.product__price')
            const priceEl2 = elem.querySelector('.product__price-price')
            const weigth = elem.querySelector('.product__weigth')
            priceEl.textContent = `${price} `
            priceEl2.textContent = `${price} `
            weigth.textContent = `/${weigthEl}`

        })
        //change price additions

        const activeSize = evt.target.dataset.price

        const productVar = document.querySelectorAll('.product-add-somathing')
        productVar.forEach(elem => {
            const price = elem.dataset[`price-${activeSize}`]
            const priceEl = elem.querySelector('.product-add-current-price')
            priceEl.textContent = `${price} руб.`

        })

    }
}
variationSize()

function buildCart(event) {

    const cards = event.target.closest('.product__card')
    const imgProduct = cards.querySelector('.product__img').getAttribute('src');
    const prodName = cards.querySelector('.product__title').textContent
    const productSize = cards.querySelector('.product__variable-item.selected ').innerText
    const prodPrice = cards.querySelector('.product__price').textContent
    const prodCountEl = cards.querySelector('.product__counter-number').textContent


    let additional = []

    // get additive and price them
    const addProducts = cards.querySelectorAll('.product-add-somathing');
    if (addProducts) {
        [...addProducts].forEach(addProduct => {
            if (!addProduct.querySelector('.product-add-checkbox:checked')) return;
            const productPrice = addProduct.querySelector('.product-add-current-price').textContent
            const productName = addProduct.querySelector('.input-lable').innerText;
            const addProdObject = {
                productName,
                productPrice
            }
            additional.push(addProdObject)

        })
        const cardObject = {
            imgProduct,
            prodName,
            productSize,
            prodPrice,
            prodCountEl,
            close,
            additional

        }
        const card = getLocalData('card');

        card.push(cardObject);
        setLocalData('card', card);
        const bascketCount = document.querySelector('.header__basket-count');
        bascketCount.textContent = card.length;

    }
}
function resetPrice() {
    const cards = document.querySelectorAll('.product__card')
    cards.forEach(el => {
        const priceEl = el.querySelector('.product__price')
        const curentPrice = el.querySelector('.product__price-price')


        let countEl = el.querySelector('[data-counter]')
        priceEl.textContent = curentPrice.dataset['reset']
        countEl.textContent = '1'

        let indicator = el.querySelector('.product__variable-indicator');
        indicator.style.left = indicator.getBoundingClientRect().width = 0 + 'px';
    })

}
