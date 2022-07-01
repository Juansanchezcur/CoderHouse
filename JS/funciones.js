//Traer Productos del archivo json y crear cajas   
async function traerProductos(ruta){
    const resp= await fetch(ruta);
    const datos= await (resp.json());  
    return datos
  }
  async function armarCajas(){
    productos.then(lista=>{
    
    const {productos, promociones}=lista  
  for(let producto of (productos||promociones)){
     
      const { id, nombre, precio, cantidad, subtotal, tipo }=producto
      

      //crea cada caja
      
      const padreProducto=document.createElement("div")
      
      const nombreProducto=document.createElement("h3")
      
      const descripcionProducto=document.createElement("p")
      const precioProducto=document.createElement("p")
      
      const botonCarrito=document.createElement("button")
      
      
      //Propiedades de las cajas
      
      //Div Padre
      padreProducto.classList.add("col-md-12")
      padreProducto.classList.add("col-sm-12")
      padreProducto.classList.add("d-flex")
      padreProducto.classList.add("flex-column")
      padreProducto.classList.add("align-items-center")
      padreProducto.classList.add("products__product")

      //Nombre
      nombreProducto.innerHTML=producto.nombre
      nombreProducto.classList.add("products__product__title")
      
      //Ingredientes
      
      descripcionProducto.innerHTML=producto.ingredientes
      descripcionProducto.classList.add("products__product__ingredients")
      
      //Precio
      precioProducto.innerHTML="$"+producto.precio
      precioProducto.classList.add("products__product__price")
      
      
      //Botón "agregar al carrito" de cada caja
      
      botonCarrito.innerText="Agregar al Carrito"
      botonCarrito.setAttribute("class","btn btn-warning")
      
      
      //Se guarda, pulsando el botón, la información para el carrito  
       
      botonCarrito.addEventListener("click",()=>{
          let carrito=[]
          const carritoLocalStorage=JSON.parse(localStorage.getItem("Productos"))
          if (carritoLocalStorage){
              carrito=carritoLocalStorage}
          
         
          const index=carrito.findIndex(productoBuscado=>productoBuscado.id==producto.id)
          
          
          // Varía la acción si el producto ya estaba o no dentro del carrito
          
          if (index==-1){
          const productoC=new productoCarrito(id, nombre, precio, cantidad, subtotal)
          carrito.push(productoC)
          } else {
              carrito[index].cantidad++;
              carrito[index].subtotal=carrito[index].cantidad*carrito[index].precio
          }
          
          localStorage.setItem("Productos", JSON.stringify(carrito))

          //Notificación Toastify
      
          notificacionToastify()
      }
  )
 
    //Mete todos los elementos del producto dentro de su div Padre
    
    padreProducto.appendChild(nombreProducto)
    padreProducto.appendChild(descripcionProducto)
    padreProducto.appendChild(precioProducto)
    padreProducto.appendChild(botonCarrito)
  
  
  
    // Ordenamos las cajas en su lugar según el tipo de producto   
   
      if ( producto.tipo === "Hamburguesa" ){
        console.log(tipo)
        const hamburgersDiv = document.getElementById("hamburgers")
        
        hamburgersDiv.appendChild(padreProducto)
        
    } else if ( producto.tipo === "Pizza" ) {
        const pizzasDiv=document.getElementById("pizzas")
        pizzasDiv.appendChild(padreProducto)
    }
    else {
        const promotionsDiv=document.getElementById("promotions")
        promotionsDiv.appendChild(padreProducto)
    }

}

}
) 
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
  
//Notificación Toastify
function notificacionToastify(){
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
}

    