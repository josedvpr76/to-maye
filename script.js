const carta = document.getElementById('carta');
const papel = document.getElementById('papel');

const corazon = document.createElement('img');
corazon.id = "corazon";
corazon.src = "corazon.svg";
corazon.width = 100;
corazon.height = 100;
carta.appendChild(corazon);

let abierta = false;
let papelListo = false;

// Abrir
carta.addEventListener('click', (e) => {
    e.stopPropagation();
    if (abierta) return;
    abierta = true;
    carta.classList.add('abierta');

    setTimeout(() => {
        papel.classList.add('mostrar');
        papelListo = true;
    }, 2000);
});

papel.addEventListener('click', (e) => e.stopPropagation());


document.addEventListener('click', (e) => {
    if (!papelListo) return;
    if (!papel.classList.contains('mostrar')) return;
    if (papel.contains(e.target)) return;

    papelListo = false;
    abierta = false;

    papel.classList.remove('mostrar');
    papel.classList.add('ocultar');

    setTimeout(() => {
        papel.classList.remove('ocultar');
        carta.classList.remove('abierta');
    }, 500);
});