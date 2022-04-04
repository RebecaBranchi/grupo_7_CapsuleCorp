window.addEventListener('load', function(){


    let formCreateProduct = document.querySelector('form');

    formCreateProduct.addEventListener('submit', function(e){
       let errors = [];

        let inputFirstName = document.querySelector('#first_name') ;

        if (inputFirstName.value == '') {
            errors.push('El campo no debe estar vacío');
        }

        let inputLasttName = document.querySelector('#last_name') ;

        if (inputLasttName.value == '') {
            errors.push('El campo no debe estar vacío');
        }

        let inputEmail = document.querySelector('#email') ;

        if (inputEmail.value == '') {
            errors.push('El campo no debe estar vacío');
        } 

        let inputPassword = document.querySelector('#password') ;

        if (inputPassword.value == '') {
            errors.push('El campo no debe estar vacío');
        } else if (inputPassword.value.length < 8) {
            errors.push('La contraseña debe tener al menos 8 caracteres')
        }

        if(errors.length > 0) {
            e.preventDefault();

            let ulErrors = document.querySelector('#errors');
            for (let i = 0; i < errors.length; i++) {
                
                ulErrors.innerHTML += '<li>'+ errors[i] + '</li>'
            }
        }
    })
})