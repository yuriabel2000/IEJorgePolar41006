//JavaScript
//Documento .js que contiene el HTML del header del sitio WEB
document.write('<header> <nav class="nav"> <a href="index.html" class="nav_img_logo"> <img class="logo" src="../assets/icons/Logo-Oficial_Nav&Footer.png" alt="logo"> </a> <ul class="enlaces__menu"> <li><a class="inicio" href="index.html">Inicio</a></li> <li><a class="nosotros" href="nosotros.html">Nosotros</a></li> <li><a class="contacto" href="form.html">Contacto </a></li> <li><a class="historia" href="historia.html">Historia</a></li> <li><a class="galery" href="galeria.html">Galeria</a></li> </ul> <button class="ham" type="button"> <!--Use & Delete: Se esta aplicando una tecnica interesante para añadir el boton de menu responsive.. **solo necesitas comprueba si esta bueno el uso--> <span class="br-1"></span> <span class="br-2"></span> <span class="br-3"></span> </button> </nav> </header>')
/* =============================Funcionalidad despleagable============================= */
const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.enlaces__menu');
const barras = document.querySelectorAll('.ham span');



ham.addEventListener('click', () => {
    enlaces.classList.toggle('activado');
    barras.forEach(child => {child.classList.toggle('animado')});
    ham.classList.toggle('girar');
});