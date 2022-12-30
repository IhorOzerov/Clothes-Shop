/*let data = [
    {
        photo,
        title,
        price,
        colors,
        sizes,
        details
    }
]*/

let burger = document.getElementById('burgerBtn')
let nav2 = document.getElementById('nav2')
let headerNav = document.getElementById('burgerMenu')

burger.addEventListener('click', () => {

    nav2.classList.toggle('hidden')
    headerNav.classList.toggle('header-nav')
    headerNav.classList.toggle('burger_menu')
})


