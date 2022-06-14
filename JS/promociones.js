
    //Promociones
const promo1={
    id:11,
    nombre: "x2 Simple Burger",
    ingredientes:"Precio unitario $280. Llevate 2 riquísimas Simple Burger por tan solo:",
    precio:  480, 
    cantidad: 1,
    subtotal: 480
}

const promo2={
    id:12,
    nombre: "x2 Fugazza",
    ingredientes:"Precio unitario $220. Llevate 2 riquísimas Fugazzas por tan solo:",
    precio:  350, 
    cantidad: 1,
    subtotal: 350
}
    
    let promociones=[promo1, promo2]

   

    //Se crean las cajas de los productos en la sección "Productos" y "Promociones"

for (let i=0; i<2; i++){
    
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
    padreProducto.classList.add("promotions__promotion")

    nombreProducto.innerHTML=promociones[i].nombre
    nombreProducto.classList.add("products__product__title")
    
    descripcionProducto.innerHTML=promociones[i].ingredientes
    descripcionProducto.classList.add("products__product__ingredients")
    
    precioProducto.innerHTML="$"+promociones[i].precio
    precioProducto.classList.add("products__product__price")
    
    //Botón "agregar al carrito" de cada caja
    botonCarrito.innerText="Agregar al Carrito"
    botonCarrito.setAttribute("class","btn btn-warning")

    padreProducto.appendChild(nombreProducto)
    padreProducto.appendChild(descripcionProducto)
    padreProducto.appendChild(precioProducto)
    padreProducto.appendChild(botonCarrito)

    let promosDiv=document.getElementById("promotions")
    promosDiv.appendChild(padreProducto)

    //Se guarda la información que me envía para el carrito  
    
    
    botonCarrito.addEventListener("click",()=>{
        let carrito=[]
        let carritoLocalStorage=JSON.parse(localStorage.getItem("Productos"))
        if (carritoLocalStorage){
            carrito=carritoLocalStorage}
    
        let id=promociones[i].id
        let nombre=promociones[i].nombre
        let precio=promociones[i].precio
        let cantidad=promociones[i].cantidad   
        let subtotal=promociones[i].subtotal
        let index=carrito.findIndex(producto=>producto.id==promociones[i].id)
        
        if (index==-1){
        let productoC=new productoCarrito(id, nombre, precio, cantidad, subtotal)
        carrito.push(productoC)
        } else {
            carrito[index].cantidad++;
            carrito[index].subtotal=carrito[index].cantidad*carrito[index].precio
        }
        
        localStorage.setItem("Productos", JSON.stringify(carrito))

        //Notificacion Tastify
        
        Toastify({
        text: "Producto Agregado",
        duration: 2000,
        position: "center",
        style: {
        boxShadow: "none",
        background: "black",
        border: "1px solid #ffee00"
        },
        offset: 
        {y: 100
        }
        }
        )
        .showToast()
        
        })    }

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
