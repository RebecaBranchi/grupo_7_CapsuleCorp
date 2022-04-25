window.addEventListener('load', function() {

    let burger = document.getElementById('burguerDiv')
    let mainNavBar = document.querySelector('.main-navbar')
    let leftNavBar = document.querySelector('.left-navbar')
    let rightNavBar = document.querySelector('.right-navbar')
    let barra = document.querySelector('.sep')
    let imgProfile = document.querySelector('.imgProfile')

    burger.addEventListener('click', () => {
        if (burger.style.display === 'block' && screen.width <= 768) {
            mainNavBar.classList.toggle('mainNavBar')
            leftNavBar.classList.remove('left-navbar')
            rightNavBar.classList.remove('right-navbar')
            imgProfile.classList.toggle('imgProfile2')
            barra.classList.toggle('sep2')
        }
    })

})