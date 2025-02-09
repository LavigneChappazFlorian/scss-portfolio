let iconBurgerOn = document.getElementById('burger');
let menu = document.getElementById('menu')

iconBurgerOn.addEventListener('click', () => {
    menu.classList.toggle('active');
});