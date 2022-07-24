import { Item } from "./class/Item.js";

let cartBasq = [];
let itId = 0
export const addCart = (prod) => {
    let item = new Item(prod.name, prod.price,prod.id= itId);
    cartBasq.push(item);
    const cartList = document.getElementById("cart-list");
    let cartItem = document.createElement("li");
    cartItem.id = itId;
    itId++;
    cartItem.classList.add('cart-list__item');
    cartItem.innerHTML += cart(item);
    cartList.appendChild(cartItem);
    const button = document.getElementById(`cross${item.id}`);
    console.log(item.id)
    button.addEventListener('click', () => {
        delItem(item.id)
        alerta();
    })
    //createCart(cartBasq, cartList)
}

// const createCart = (cartA, inH) =>{
//     inH.innerHTML= ``;
//     let id = 0;

//     cartA.forEach(e=>{
//         debugger
//         let cartItem = document.createElement("li");
//         cartItem.id = id;
//         e.id= id;
//         console.log(e);
//         cartItem.classList.add('cart-list__item');
//         cartItem.innerHTML = cart(e);
//         inH.appendChild(cartItem);
//         id ++;
//         const button = document.getElementById(`corss${cartItem.id}`);
//         button.addEventListener('click')
//     })

// }

const cart = (data) => {
    const { name, price, id} = data;
    return `<h2 class="cart-list__item__title">${name}</h2>
            <p class="cart-list__item__price">${price}</p>
            <img src="../public/cancel_close_cross_delete_remove_icon.svg" alt="close" id='cross${id}'/>`
}

const delItem = (p) => {
    const remuveItem = document.getElementById(`${p}`)
    remuveItem.remove()
}