const abrirMenu = document.querySelector('.ham');
const enlaces = document.querySelector('.enlaces-menu');
const barras = document.querySelectorAll('.ham span');

abrirMenu.addEventListener('click', ()=> {
    enlaces.classList.toggle('activo')
    barras.forEach(child => {
        child.classList.toggle('activo')
    });
})