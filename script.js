const abrir = document.getElementById("abrir");
const musica = document.getElementById("musica");
const segunda = document.getElementById("segunda");
const tercera = document.getElementById("tercera");

abrir.addEventListener("click", () => {

    musica.play();

    segunda.scrollIntoView({
        behavior: "smooth"
    });

});

/* Cambia automáticamente a la tercera página
   después de 20 segundos */

setTimeout(() => {

    tercera.scrollIntoView({
        behavior: "smooth"
    });

}, 20000);