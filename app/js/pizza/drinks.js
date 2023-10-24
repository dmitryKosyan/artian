
// const getLocalData = (name) => JSON.parse(localStorage.getItem(name)) || [];
// const setLocalData = (name, value) => localStorage.setItem(name, JSON.stringify(value));

const Ingridients = ''

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

// function cartContent() {
//     const cardPrice = document.querySelector('.total-price-el')
//     const cart = document.querySelector('.cart-wrapper-item')

//     let card = getLocalData('card')
//     if (!card || !card.length) {
//         cart.innerHTML = '<h4 class="cart-wrapper-h4">КОРЗИНА ПУСТА</h4>';
//         cardPrice.textContent = `0 руб`;
//         return;
//     }
//     console.log(card)
//     let totalPrice = 0
//     let cardProducts = ''
//     card.forEach((el, index) => {


//         let elPrice = parseFloat(el.prodPrice) //* parseFloat(el.prodCountEl)
//         totalPrice += elPrice
//         cardPrice.innerText = `${totalPrice.toFixed(2)}руб.`


//         cardProducts += `
//         <div class="cart-wrapper-content" data-index=${index}>
//                     <div class="cart-product-img">
//                         <img class="img-product-cart" src=${el.imgProduct} />
//                     </div>
//                     <div class="product-name">
//                         <h3 class="cart-product-name">${el.prodName}
//                         </h3>
                 
//                         <div class="counter-cart-wrapper">
//                             <div class="count-minus-cart" data-action="minus">-</div>
                            
//                             <div class="total-price">${elPrice.toFixed(2)} руб.</div>
//                         </div>
//                     </div>
//                     <div class="close-button">
//                      <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43"
//                         viewBox="0 0 43 43" fill="none">
//                         <line x1="10.5176" y1="31.9363" x2="30.7566" y2="9.52154"
//                          stroke="#ec710c" stroke-width="2" />
//                          <line x1="31.6061" y1="32.2923" x2="11.0406" y2="10.1767"
//                         stroke="#ec710c" stroke-width="2" />
//                      </svg>
//                     </div>
//                 </div> 
              
//         `

//     })
//     cart.innerHTML = cardProducts

//     // let quantityButtons = document.querySelectorAll('.counter-cart-wrapper');
//     // if (quantityButtons) {
//     //     quantityButtons = [...quantityButtons];
//     //     quantityButtons.forEach(button => {
//     //         button.addEventListener('click', counter)
//     //     })
//     // }

//     //delete cards from bascket
//     // let removeButtons = document.querySelectorAll('.close-button');
//     // removeButtons.forEach(button => {
//     //     button.addEventListener('click', removePosition)
//     // });

// }
// cartContent()