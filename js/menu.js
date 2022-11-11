const hamburguerIcon = document.querySelector('.nav__hamburguer');
const navOverlay = document.querySelector('.nav__overlay');

hamburguerIcon.addEventListener('click', ()=>{
    hamburguerIcon.classList.toggle('nav__hamburguer--open');

    navOverlay.classList.toggle('nav__overlay--show')
});

navOverlay.addEventListener('click', (e) =>{
    e.preventDefault();
    const currentElement = e.target;

    if (isActive(currentElement, 'nav__parent')){

        const subMenu = currentElement.parentElement.children[1];
        
        if (window.innerWidth < 768) {
            let height = (subMenu.clientHeight == 0) ? subMenu.scrollHeight : 0;
            subMenu.style.height = `${height}px`;
        } else {
            
        }
    }
        
    
});

function isActive(element, string){
    return element.classList.value.includes(string);
}