let carrito= JSON.parse(localStorage.getItem("Productos"))
let total=0
let tbody=document.querySelector("#tbody")

//Llena el carrito con los productos que tengo almacenados
function rellenarCarrito(carrito){
    
    calcularTotal(carrito)
    for(let producto of carrito){
    let row=document.createElement("tr")
    
    row.innerHTML=`<td>${producto.nombre}</td><td>$${producto.precio}</td><td>${producto.cantidad}</td><td>$${producto.subtotal}</td><td><button class="eliminar btn btn-warning" id="${producto.id}">Eliminar</button></td>`
    
    tbody.appendChild(row)
} 
}

//Se manipula el total del carrito
let parrafoTotal=document.getElementById("parrafoTotal")

function calcularTotal(carrito){
    total=0
    for(let producto of carrito){
    
        total+=producto.subtotal
        
        parrafoTotal.innerHTML=`Total: ${total}`
        
}

let resultadoTotal= total==0? true: false
resultadoTotal && (parrafoTotal.innerHTML=`Total: 0`)
}

rellenarCarrito(carrito)


//Botones Eliminar producto del carrito
let botonesEliminar= document.querySelectorAll(".eliminar")
botonesEliminar.forEach(elemento=>{
elemento.addEventListener("click", eliminarProducto)
})
function eliminarProducto(e){

let index =carrito.findIndex(producto=> producto.id==e.target.id)
carrito.splice(index, 1)
e.target.parentNode.parentNode.remove();
calcularTotal(carrito)
localStorage.setItem("Productos", JSON.stringify(carrito))
console.log(e.target.id)
}

//botón submit
imputNombre=document.getElementById("Nombre")
imputApellido=document.getElementById("Apellido")
imputEmail=document.getElementById("Email")
imputDireccion=document.getElementById("Direccion")

btnsubmit=document.getElementById("submit")
btnsubmit.addEventListener("click", ()=>{
imputNombre.value && imputApellido.value && imputEmail.value && imputDireccion.value ?   alert ("Gracias por elegirnos, en seguida nos comunicaremos contigo."): alert ("Por favor, ingresa todos los datos")
})
