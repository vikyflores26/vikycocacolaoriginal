S
let botoncolor = document.querySelector('#botoncolor')
botoncolor.onclick = function(){

    botoncolor.style.color = 'red'

}

let boton = document.querySelector('#cambiarImagen')

let imagenCambiada = false;

boton.onclick = function () {
    if (imagenCambiada == false) {
        titulo.innerText = 'Hola como estan'
        imagen.src = 'https://sakoteacasa.com.ar/wp-content/uploads/2018/05/31620.jpg'
        imagenCambiada = true
    }else{
        titulo.innerText = 'DOM' 
        imagen.src = 'https://www.losandes.com.ar/resizer/flZBRU0x5cqahizPYN75eLEVMQQ=/980x640/smart/filters:quality(75):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/6ECEOA47QJH3LPLTJ6NG5JWBPU.jpg'
        imagenCambiada = false
    } 

}

let botonRojo = document.querySelector('#rojo')


botonRojo.onclick = function(){
    
    titulo.style.color = 'red'
}