const hamburguerIcon = document.querySelector('.nav__hamburguer');
const navOverlay = document.querySelector('.nav__overlay');

hamburguerIcon.addEventListener('click', ()=>{
    hamburguerIcon.classList.toggle('nav__hamburguer--open');

    navOverlay.classList.toggle('nav__overlay--show')
});