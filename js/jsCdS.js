const IMG = document.getElementById('imagen');
const NOMBRE = document.getElementById('nombreImagen');

let posicion = 0;
mostrarImagen();


function mostrarImagen() {

   
   

 let img = document.getElementById("foto1");
  let nombreSpan = document.getElementById("nombreImagen");
  let descripcionParrafo = document.getElementById("descripcionImagen");

  img.src = RUTA + imagenes[posicion].archivo;
  img.title = imagenes[posicion].tooltip;

  nombreSpan.textContent = imagenes[posicion].nombre;
  descripcionParrafo.textContent = imagenes[posicion].descripcion;
}





function avanzar() {
    posicion++;
    if (posicion >= imagenes.length) {

        alert('Es la ultima imagen');
        posicion--;

    }

    mostrarImagen();

}

function retroceder() {


    posicion--;
    if (posicion <0) {

        alert('Es la primera imagen');
        posicion++;

    } 

 mostrarImagen();

} 