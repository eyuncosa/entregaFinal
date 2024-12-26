console.log("ok");

const productos = [
    {
        nombre: "Disco Duro Sólido Western Digital M.2 500 GB",
        descripcion: "accusamus, repudiandae recusandae deleniti provident odit dicta nostrum earum commodi id.",
        imagen: "images/wd1tb.jpg",
        precio: 80000
    },
    {
        nombre: "Disco Duro Sólido Western Digital M.2 2280 1 TB",
        descripcion: "accusamus, repudiandae recusandae deleniti provident odit dicta nostrum earum commodi id.",
        imagen: "images/wd1tb.jpg",
        precio: 130000
    },
    {
        nombre: "Memoria Sodimm 16 Gb DDR4 Corsair",
        descripcion: "accusamus, repudiandae recusandae deleniti provident odit dicta nostrum",
        imagen: "images/ddr4.jpg",
        precio: 300000

    }
]
console.log(productos[2].imagen);
let ventas = "";
for (indice =0; indice <productos.length; indice++){


ventas +=`
         
            <div class="venta">
                <h2>${productos[indice].nombre}</h2>
                <h3>${productos[indice].descripcion}</h3>
                <p><h2>$${productos[indice].precio}</h2></p>
                <img src="${productos[indice].imagen}"alt="256gb">
                <input class ="BotonAgregarCarrito" type = "button" value = "Agregar al carrito">
            </div>

`;
}
console.log(ventas)
const contenedorVentas = document.querySelectorAll(".ventas")[0];
contenedorVentas.innerHTML = ventas;

/*****************************listener a botones de productos********************/

const btnAgregarAlCarrito = document.querySelectorAll(".BotonAgregarCarrito");
const ListaCarrito = document.querySelector("#carrito ul");
const totalCarrito = document.querySelector("#carrito p");
let totalAPagar = 0;

for(let indice =0; indice < btnAgregarAlCarrito.length;indice++){

    function agregarElementoCarrito(){
        console.log("clic " + indice);
        const elementoLi = document.createElement("li");
        
        elementoLi.innerText =  `${productos[indice].nombre} $${productos[indice].precio}`;
        
        ListaCarrito.appendChild(elementoLi);
        
        totalAPagar += productos[indice].precio;
        
        totalCarrito.innerText =  "Total a Pagar: $"+totalAPagar;

    }

    btnAgregarAlCarrito[indice].addEventListener("click",agregarElementoCarrito);

}
