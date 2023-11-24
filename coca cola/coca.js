let texto = document.querySelector('#texto')
let botonCambiarTexto = document.querySelector('#coca')



botonCambiarTexto.onclick = function(){
    texto.style.color = 'white'
    texto.innerText = 'Solo voy a aprobar a vicky y clari'
}
