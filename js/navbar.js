// Responsável por alterar o estilo da barra de navegação durante o scroll.

window.addEventListener('scroll', function () {
    
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-sm');
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.classList.remove('shadow-sm');
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    }
});