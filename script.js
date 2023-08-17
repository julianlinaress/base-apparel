const formulario = document.getElementById('formulario')
const errorText = document.getElementById('error-text')


function validateForm(){
    const input = document.getElementById('email').value
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(input)){
        formulario.classList.remove('claimed')
        formulario.classList.add('error')
        errorText.style.display = 'block'
    }
    else{
        formulario.classList.remove('error')
        formulario.classList.add('claimed')
        errorText.style.display = 'none'
    }
}