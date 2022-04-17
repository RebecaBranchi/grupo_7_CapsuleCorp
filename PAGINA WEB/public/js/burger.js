window.addEventListener('load', function() {

    let burger = document.querySelector('.hamburguesa')
    let mainNavBar = document.querySelector('.main-navbar')
    let leftNavBar = document.querySelector('.left-navbar')
    let rightNavBar = document.querySelector('.right-navbar')
    let barra = document.querySelector('.sep')



    burger.addEventListener('click', () => {
        mainNavBar.classList.toggle('mainNavBar')
        leftNavBar.classList.remove('left-navbar')
        rightNavBar.classList.remove('right-navbar')
        barra.classList.toggle('sep2')


    })


})