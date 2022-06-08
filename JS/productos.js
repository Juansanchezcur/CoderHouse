/* Hamburguesas
        Burger House $340 
        Crispy Onion $360
        Doble Smash$300
        Simple Burger$280
        Simple Cheddar$260
          
E
            
Pizzas
      
        Margarita $300  
        Fugazza $220  
        Serrana $290
        Cuatro Quesos $280  
        La Carolina $250






/* Hamburguesas */

const hamburguesa1={
    id:1,
    nombre: "Burger House  ",
    ingredientes:"Pan de queso, blend de carne de 160gr, cheddar, panceta, cebolla morada, rúcula, tomate, cebolla caramelizada y pepinillos",
    precio:  340, 
    cantidad: 1,
    subtotal: 340
}
const hamburguesa2={
    id:2,
    nombre: "Crispy Onion  ",
    ingredientes:"Pan de queso, blend de carne de 100gr x2, aros de cebolla, panceta x2, cheddar x2, salsa barbacoa y morrón al vinagre",
    precio: 360, 
    cantidad: 1,
    subtotal: 360
}
const hamburguesa3={
    id:3,
    nombre: "Doble Smash   ",
    ingredientes:"Pan de papa, blend de carne de 90gr x2, panceta x2, cheddar x2, salsa barbacoa, cebolla caramelizada y pepinillos",
    precio: 300, 
    cantidad: 1,
    subtotal: 300
}
const hamburguesa4={
    id:4,
    nombre: "Simple Burger ",
    ingredientes:"Pan de semilla, blend de carne de 120gr, panceta, muzarella, huevo a la plancha, tomate y lechuga crespa",
    precio: 280, 
    cantidad: 1,
    subtotal:280
}
const hamburguesa5={
    id:5,
    nombre: "Simple Cheddar",
    ingredientes:"Pan de papa, blend de carne de 120gr, cheddar, panceta y salsa de la casa",
    precio: 260, 
    cantidad: 1,
    subtotal: 260
}


/* Pizzas */


const pizza1={
    id:6,
    nombre: "Margarita     ",
    ingredientes:"Muzzarella en bola y albahaca",
    precio:  300, 
    cantidad: 1, 
    subtotal:300
}

const pizza2={
    id:7,
    nombre: "Fugazza       ",
    ingredientes:"Muzzarella, cebolla blanca y orégano",
    precio:  220, 
    cantidad: 1,
    subtotal:220
}

const pizza3={
    id:8,
    nombre: "Serrana       ",
    ingredientes:"Muzzarella, jamón crudo, rúcula y lascas de parmesano  ",
    precio:  290, 
    cantidad: 1,
    subtotal:290 
}

const pizza4={
    id:9,
    nombre: "Cuatro Quesos ",
    ingredientes:"Muzzarella, parmesano, queso azul y cheddar",
    precio:  280, 
    cantidad: 1,
    subtotal:280 
}

const pizza5={
    id:10,
    nombre: "La Carolina   ",
    ingredientes:"Muzzarella, cheddar, panceta",
    precio:  250, 
    cantidad: 1,
    subtotal: 250
}




let productos=[hamburguesa1, hamburguesa2, hamburguesa3, hamburguesa4, hamburguesa5, pizza1, pizza2, pizza3, pizza4, pizza5]




//Se crean las cajas de los productos en la sección "Productos"

for (let i=0; i<10; i++){
    
    let padreProducto=document.createElement("div")
    let nombreProducto=document.createElement("h3")
    let descripcionProducto=document.createElement("p")
    let precioProducto=document.createElement("p")
    
    let botonCarrito=document.createElement("button")
    
    padreProducto.classList.add("col-md-12")
    padreProducto.classList.add("col-sm-12")
    padreProducto.classList.add("d-flex")
    padreProducto.classList.add("flex-column")
    padreProducto.classList.add("align-items-center")
    padreProducto.classList.add("products__product")

    nombreProducto.innerHTML=productos[i].nombre
    nombreProducto.classList.add("products__product__title")
    
    descripcionProducto.innerHTML=productos[i].ingredientes
    descripcionProducto.classList.add("products__product__ingredients")
    
    precioProducto.innerHTML="$"+productos[i].precio
    precioProducto.classList.add("products__product__price")
    
    //Botón "agregar al carrito" de cada caja
    botonCarrito.innerText="Agregar al Carrito"
    botonCarrito.setAttribute("class","btn btn-warning")
    
    //Se guarda la información que me envía para el carrito  
    
    
    botonCarrito.addEventListener("click",()=>{
    let carrito=[]
    let carritoLocalStorage=JSON.parse(localStorage.getItem("Productos"))
    if (carritoLocalStorage){
        carrito=carritoLocalStorage}

    let id=productos[i].id
    let nombre=productos[i].nombre
    let precio=productos[i].precio
    let cantidad=productos[i].cantidad   
    let subtotal=productos[i].subtotal
    let index=carrito.findIndex(producto=>producto.id==productos[i].id)
    
    if (index==-1){
    let productoC=new productoCarrito(id, nombre, precio, cantidad, subtotal)
    carrito.push(productoC)
    } else {
        carrito[index].cantidad++;
        carrito[index].subtotal=carrito[index].cantidad*carrito[index].precio
    }
    
    localStorage.setItem("Productos", JSON.stringify(carrito))
    
    })
    
    padreProducto.appendChild(nombreProducto)
    padreProducto.appendChild(descripcionProducto)
    padreProducto.appendChild(precioProducto)
    padreProducto.appendChild(botonCarrito)
    
    //se ordenan según la ubicación donde van
    if (i<5){
        let hamburgersDiv=document.getElementById("hamburgers")
        
        hamburgersDiv.appendChild(padreProducto)
        
    } else {
        let pizzasDiv=document.getElementById("pizzas")
        pizzasDiv.appendChild(padreProducto)
    }
    
}

   
    //La clase para crear el producto que entra al carrito
    class productoCarrito{
        
        constructor(id,nombre,precio,cantidad, subtotal){
            this.id=id;
            this.nombre=nombre;
            this.precio=precio;
            this.cantidad=cantidad;
            this.subtotal=subtotal

        }
    }