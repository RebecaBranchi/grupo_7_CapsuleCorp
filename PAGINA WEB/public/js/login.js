
window.addEventListener("load", function() {
    const email = document.querySelector('.email')
    const password = document.querySelector('.password')

    const inputEmail = document.querySelector('#email')
    const inputPassword = document.querySelector('#password')
    const errorEmail = document.querySelector('.errorEmail')
    const button = document.querySelector('button')
   password.style.display = 'none'
   button.innerText = 'Continuar'
  
   button.addEventListener('click',(e)=>{
  //un error para el correo y uno para el pass selecciona un p , como medir la cadena.
        if (inputEmail) {
            button.type = 'submit'
           email.style.display='none'
           button.innerText = 'Ingresar'
           password.style.display = 'block'
           //if (inputPassword.value) {
            //button.type = 'submit'
           
       
           //}
        }else{
            e.preventDefault()
           
        }
   
    })
    
});
