let texto = document.querySelector('#texto')
let botonCambiarTexto = document.querySelector('#coca')



botonCambiarTexto.onclick = function(){
    texto.style.color = 'white'
    texto.innerText = 'Diferentes cocas'
    function cambiarImagen() {
        if(cambio == false) {
         coca.src = 'https://www.coca-cola.com/content/dam/onexp/es/es/products/coca-cola-zero/es_coca-cola-zero_product_750.jpg'
         coca.alt = 'Coca Cero';
         cambio = true
       }else
       {
         coca.src = 'https://bebicash.com/wp-content/uploads/5449000000996-24.jpg'
       cambio  = false
       }
       }
}
