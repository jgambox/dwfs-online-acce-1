
const datos = [
    {
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
    },
    {
        "id": 2,
        "title": "Mens Casual Premium Slim Fit T-Shirts ",
        "price": 22.3,
        "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
    }
]

localStorage.setItem('itemx', JSON.stringify(datos));

function obtener_localstorage(){
    let datosProd = JSON.parse(localStorage.getItem("itemx"));
    console.log(datosProd);
  
        let infoProducto = document.querySelector(".producto"); 
        infoProducto.innerHTML = `
        <img src="${datosProd[0].image}" alt="${datosProd[0].title}" class="imgProducto"/>
        <div class = "caja">
            <h3>${datosProd[0].title}</h3>
            <p class="precio" >${datosProd[0].price}</p>
            <p>${datosProd[0].description}</p>
            <button class="botones">Buy</button>
            <button class="botones">Continue to Checkout!</button>
        </div>
        `
    
}

obtener_localstorage();
/*let infoProducto = document.querySelector(".producto"); 
infoProducto.innerHTML = `
        <img src="${datos.image}" alt="${datos.title}" class="imgProducto"/>
        <div class = "caja">
            <h3>${datos.title}</h3>
            <p class="precio" >${datos.price}</p>
            <p>${datos.description}</p>
            <button class="botonBuy">Buy</button>
            <button class="botonContinue">Continue to Checkout!</button>
        </div>
        `
let botonBuy = document.querySelector(".botonBuy");
botonBuy.addEventListener("click", window.location.href);
let botonContinue = document.querySelector(".botonContinue");
botonBuy.addEventListener("click", window.location.href);*/

