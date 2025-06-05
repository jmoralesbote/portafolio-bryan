// Cambia el color de título cada 3 segundos
const colores = ['#FF0000', '#00FF00', '#0000FF', '#FF00FF', '#FFFF00'];
let actual = 0;

setInterval(() => {
    document.querySelectorAll('h1, h2').forEach(el => {
        el.style.color = colores[actual % colores.length];
    });
    actual++;
}, 3000);

// Animación de letras por letra para el mensaje final
const mensaje = document.querySelector("h2:last-of-type").nextElementSibling;
const texto = mensaje.textContent;
mensaje.textContent = "";

[...texto].forEach((letra, i) => {
    setTimeout(() => {
        mensaje.textContent += letra;
    }, i * 50);
});

// Sonido cuando haces clic en cualquier parte
document.body.addEventListener('click', () => {
    const beep = new Audio('https://www.soundjay.com/button/beep-07.wav');
    beep.play();
});
