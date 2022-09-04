import hamburgerMenu from "./DOM JS/menu_hamburguesa.js";
import { digitalClock, alarm } from "./DOM JS/rejoj.js";
import { moveBall, shortcuts } from "./DOM JS/teclado.js";
import countdown from "./DOM JS/Cuenta_regresiva.js";
import scrollTopButton from "./DOM JS/boton_scroll-.js";
import darkTheme from "./DOM JS/tema_oscuro.js";
import responsiveMedia from "./DOM JS/objeto_responsive.js";
import responsiveTester from "./DOM JS/prueba_responsive.js";
import networkStatus from "./DOM JS/deteccion_red.js";
import webCam from "./DOM JS/deteccion_webcam.js";
import getGeolocation from "./DOM JS/geolocalizacion.js";
import searchfilters from "./DOM JS/filtro_busqueda.js";
import draw from "./DOM JS/sorteo.js";
import slider from "./DOM JS/carrusel.js";
import scrollSpy from "./DOM JS/scroll_espia.js";
import smartVideo from "./DOM JS/video_inteligente.js";
import contactFormValidations from "./DOM JS/validaciones_formularios.js";


const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu(".pane-btn", ".pane", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("assets/alarma-evacuacion.mp3", "#activar-alarma", "#desactivar-alarma")
    countdown("countDown", "Apr 08, 2023 08:08:08", "Feliz cumple Marce")
    scrollTopButton(".scroll-top-btn")
    //darkTheme(".dark-theme-btn", "dark-mode")
    responsiveMedia(
        "youtube",
        "(min-width: 1024px)",
        `<a href="https://youtu.be/6IwUl-4pAzc" target="_blank"> Ver Video en YOUTUBE </a>`,
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    );
    responsiveMedia(
        "gmaps",
        "(min-width: 1024px)",
        `<a href="https://goo.gl/maps/W7rSpZ62S1fUDMcQA" target="_blank"> Ver mapa en Google Maps</a>`,
        `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14240.971499135763!2d-65.2026019!3d-26.83222635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c0febbe97db%3A0x65937e9ca09416ef!2sCasa%20Hist%C3%B3rica%20-%20Museo%20Nacional%20de%20la%20Independencia!5e0!3m2!1sen!2sar!4v1659055637951!5m2!1sen!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    );
    responsiveTester("responsive-tester");

    webCam("webcamara");

    getGeolocation("geolocation");

    searchfilters(".card-filter", ".card");

    draw("#winner-btn", ".player");

    slider();

    scrollSpy();

    smartVideo();

    contactFormValidations();

});


d.addEventListener("keydown", (e) => {
    darkTheme(".dark-theme-btn", "dark-mode")
    shortcuts(e);
    moveBall(e, ".ball", ".stage");
});

darkTheme(".dark-theme-btn", "dark-mode")
networkStatus();