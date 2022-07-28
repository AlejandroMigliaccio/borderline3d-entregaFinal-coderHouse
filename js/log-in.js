let resumen = [];

const total = (a) => {
    let reCart
    if (reCart = JSON.parse(localStorage.getItem("cart"))) {
        reCart.forEach(i => { a.push(i) });
    }
}

const mailIn = document.getElementById("exampleInputEmail1");
const nameIn = document.getElementById("name");

const totFinal = () => {
    const show = document.getElementById("total")
    let a = 0
    resumen.forEach(i => {
        a += i.price;
    })
    return show.innerHTML += `TOTAL: $${a}`;
}
const confirmPer = () => {
    Swal.fire({
        icon: 'success',
        title: 'Operacion con exito',
        text: 'gracias por confiar',
    })
}

const error = () => {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Asegurese de tener elementos en el carrito',
    })
}

const pagar = document.getElementById("pagar");
pagar.addEventListener('click', (event) => {
    event.preventDefault();
    resumen == 0 ? error() : confirmPer();
    resumen = [];
    localStorage.removeItem('cart');
})

total(resumen);
totFinal();

const validation = { mail: false, name: false };

const even = (e) => !e;

const checkValidity = () => {
    pagar.disabled = Object.values(validation).some(even);
}

mailIn.onchange = () => {
    validation.mail = mailIn.checkValidity();
    checkValidity();
}
nameIn.onchange = () => {
    validation.name = nameIn.checkValidity();
    checkValidity();
}


