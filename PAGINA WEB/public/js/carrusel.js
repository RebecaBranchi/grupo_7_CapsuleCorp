
const big = document.querySelector('.big');
const point = document.querySelectorAll('.point')

point.forEach((eachPoint, i)=>{
    point[i].addEventListener('click',()=>{
        let position = i;
        let operation= position * -100;
        big.style.transform = `translateX(${operation}%)`
        point.forEach((eachPoint, i )=>{
            point[i].classList.remove('activo')
        })
        point[i].classList.add('activo')
    })
})