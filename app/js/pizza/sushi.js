const Ingridients = `<div class="modal__inner">
                <ul class="modal-ingridient">
                <li class="product-add-somathing" data-price-25sm="1.2" data-price-33sm="2.5" data-price-40sm="3.5">
                    <label  class="input-lable">
                        <input type="checkbox" class="product-add-checkbox" >
                        <span class="check-style"></span>
                        Соус соевый
                    </label>
                    <div class="product-add-current-price">1.2 руб</div>
                </li>
                <li class="product-add-somathing" data-price-25sm="1" data-price-33sm="2" data-price-40sm="3">
                    <label class="input-lable">
                        <input type="checkbox" class="product-add-checkbox" >
                        <span class="check-style"></span>
                        Соус кунжутный
                    </label>
                    <div class="product-add-current-price">2.5 руб</div>
                </li>
                <li class="product-add-somathing" data-price-25sm="1" data-price-33sm="2" data-price-40sm="3">
                    <label  class="input-lable">
                        <input type="checkbox" class="product-add-checkbox" >
                        <span class="check-style"></span>
                         Васаби
                    </label>
                    <div class="product-add-current-price">1 руб</div>
                </li>
                <li class="product-add-somathing" data-price-25sm="0.5" data-price-33sm="0.5" data-price-40sm="0.5">
                    <label  class="input-lable">
                        <input type="checkbox" class="product-add-checkbox" >
                        <span class="check-style"></span>
                        Имбирь
                    </label>
                    <div class="product-add-current-price">0.5 руб</div>
                </li>
                <li class="product-add-somathing" data-price-25sm="0.5" data-price-33sm="0.5" data-price-40sm="0.5">
                    <label class="input-lable">
                        <input type="checkbox" class="product-add-checkbox" >
                        <span class="check-style"></span>
                        Чуку
                    </label>
                    <div class="product-add-current-price">0.5 руб</div>
                </li> 
            </ul > 
         </div> `

function buildCart(event) {

    const cards = event.target.closest('.product__card')
    const imgProduct = cards.querySelector('.product__img').getAttribute('src');
    const prodName = cards.querySelector('.product__title').textContent
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
            prodPrice,
            prodCountEl,
            additional
        }
        const card = getLocalData('card');

        card.push(cardObject);
        setLocalData('card', card);
        const bascketCount = document.querySelector('.header__basket-count');
        bascketCount.textContent = card.length;
    }
}




