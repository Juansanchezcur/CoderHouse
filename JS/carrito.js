let carrito= JSON.parse(localStorage.getItem("Productos")) ||[]
let total=0
let tbody=document.querySelector("#tbody")

//Llena el carrito con los productos que tengo almacenados
function rellenarCarrito(carrito){
    
    calcularTotal(carrito)
    for(let producto of carrito){
    let row=document.createElement("tr")
    
    row.innerHTML=`<td class="productRow">${producto.nombre}</td><td class="productRow">$${producto.precio}</td><td class="productRow">${producto.cantidad}</td><td class="productRow">$${producto.subtotal}</td><td class="productRow"><button class="eliminar btn btn-warning" id="${producto.id}">Eliminar</button></td>`
    
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
    if (carrito.length>0){
        imputNombre.value && imputApellido.value && imputEmail.value && imputDireccion.value ? enviarFormulario(event) : mensajeError(event, 'Por favor, ingresa todos los datos.')
    } else {
        mensajeError(event,'Tu carrito está vacío, agrega algun producto.')

    }
})

function mensajeError(event, mensaje){
    event.preventDefault()
    Swal.fire({
        title: 'Error!',
        text: mensaje,
        icon: 'error',
        confirmButtonText: 'Ok',
        confirmButtonColor: "#ffee0085"
      })
    
    
}

function enviarFormulario(event){
    event.preventDefault()
    Swal.fire({
        title: 'Perfecto!',
        text: 'Gracias por elegirnos, en seguida nos comunicaremos contigo.',
        icon: 'success',
        confirmButtonText: 'Ok',
        confirmButtonColor: "#ffee0085"
      })
    carrito=[]
    localStorage.setItem("Productos", JSON.stringify(carrito))
    let rows=document.querySelectorAll(".productRow")
    console.log(rows)
    rows.forEach(box => {
        box.remove() 
    })
}


    
    
