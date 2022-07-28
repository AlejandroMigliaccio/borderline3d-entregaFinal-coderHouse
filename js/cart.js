import { Item } from "./class/Item.js";

let cartBasq = [];
let itId
cartBasq.length < 0 ? itId = 0 : itId = cartBasq.length;


export const addCart = (prod) => {
    let item = new Item(prod.name, prod.price, prod.id = itId);
    cartBasq.push(item);
    saveCart();
  
    const cartList = document.getElementById("cart-list");
    let cartItem = document.createElement("li");
    cartItem.id = itId;
    itId++;
    cartItem.classList.add('cart-list__item');
    cartItem.innerHTML += cart(item);
    cartList.appendChild(cartItem);
    const button = document.getElementById(`cross${item.id}`);
    button.addEventListener('click', () => {
        delItem(item.id, item.id)
    })
}

const saveCart = () => {
    if (cartBasq.length > 0) {
        localStorage.setItem("cart", JSON.stringify(cartBasq))
    }
}

export const cart = (data) => {
    const { name, price, id } = data;
    return `<h2 class="cart-list__item__title">${name}</h2>
            <p class="cart-list__item__price">$${price}</p>
            <img src="../public/cancel_close_cross_delete_remove_icon.svg" alt="close" id='cross${id}'/>`
}

export const reloadCart = () => {

    let reCart
    if (reCart = JSON.parse(localStorage.getItem("cart"))) {
        reCart.forEach(i => { cartBasq.push(i) });
    }
    retunedSaveCart();
}

const retunedSaveCart = () => {

    let itId = 0
    if (cartBasq.length > 0) {
        const cartList = document.getElementById("cart-list");
        cartBasq.forEach(prod => {
            let item = new Item(prod.name, prod.price, prod.id = itId);
            let cartItem = document.createElement('li');
            cartItem.classList.add('cart-list__item');
            cartItem.id = itId;
            itId++;
            cartItem.innerHTML = cart(item)
            cartList.appendChild(cartItem);
            const button = document.getElementById(`cross${item.id}`);
            button.addEventListener('click', () => {
                delItem(item.id)
            });
        })
    }
}

const delItem = (p) => {

    const remuveItem = document.getElementById(`${p}`);
    let na = cartBasq.filter((item) => item.id !== p)
    remuveItem.remove();
    localStorage.removeItem('cart');
    cartBasq = [];
    cartBasq = Object.values(na);
    saveCart();
    alerta();
}

const alerta = () => {

    Swal.fire({
        icon: 'warning',
        title: 'Atención',
        text: 'El item se eliminó',
    })
}


const wipe = document.getElementById("clean-all");
wipe.addEventListener('click', () => {
    cartBasq = [];
    localStorage.removeItem('cart');
    location.reload()
})

export const total = ()=>{
    debugger
    let total = 0
    cartBasq.forEach(i =>{
        total+= i.price;
    })
    return total;
}