import { addCart } from "./cart.js";

const URL = '../public/productsList.json';

export const getData = ()=> {
    fetch(URL)
    .then(res => res.json())
    .then((data) => {
        loadList(data.products)
    })
    .catch(err => console.error(err))
}
export const loadList = (products)=>{
    const productList = document.getElementById("product-list");
    products.forEach(e => {
        const card = document.createElement("div");
        card.classList.add("product-list__product-card");
        card.innerHTML += productCard(e);
        productList.appendChild(card);
        const button = document.getElementById(`button${e.id}`)
        button.addEventListener('click', ()=>{
            confirmado();
            addCart(e);
            
        })
    });

}

export const productCard = (data) => {
    const { url, name, id, price, description } = data
    return `<div class="product-list__product-card__title">
                <img alr="${name}" src="${url}"/>
                <h2>${name}<h2>
            </div>
            <div class="product-list__product-card__details">
                <h3 class="product-list__product-card__details__price"> $ ${price}</h3>
                <p class='product-list__product-card__details__description'>${description}</p>
            </div>
            <button class='product-list__product-card__button' id='button${id}'>Agregar</button>`
}

const confirmado = ()=>{    
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'El producto se ha añadido a su carrito',
        showConfirmButton: false,
        timer: 1500
      })
    }