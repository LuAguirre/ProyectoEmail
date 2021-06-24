// variables
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar')
const form = document.querySelector('#enviar-mail')

eventListener()
function eventListener(){
document.addEventListener('DOMContentLoaded', startApp)
email.addEventListener('blur', validetaForm);
asunto.addEventListener('blur', validetaForm);
mensaje.addEventListener('blur', validetaForm);
form.addEventListener('submit', sendEmail);
}

function startApp(){
     btnEnviar.disabled = true;
     btnEnviar.classList.add('cursor-not-allowed', )
     
}

function validetaForm(e){
     if(e.target.value.length > 0){

          const error = document.querySelector('p.error');
          

          e.target.classList.remove('border', 'border-red-500');
          e.target.classList.add('border', 'border-green-500');
          btnEnviar.disabled = false;
     } else{
          e.target.classList.remove('border', 'border-green-500');
          e.target.style.borderBottomColor = 'red';
          e.target.classList.add('border', 'border-red-500');
          showError('Todos los campos son obligatorios')
     }
     if(e.target.type === 'email'){
          const re =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          if(re.test(e.target.value)){
              console.log('Email válido')
          }else{
               showError('Email no válido')
          }
     }
}

function showError(message){
     const messageError = document.createElement('p');
     messageError.textContent = message;
     messageError.classList.add('border', 'border-red-500', 'background-color-100', 'text-red-500', 'p-3', 'mt-6', 'text-center', 'error');

     const errores = document.querySelectorAll('.error');
     if(errores.length === 0){
          form.appendChild(messageError)
     }
     
}

function sendEmail(e){
     e.preventDefault();

     const spinner = document.getElementById('spinner');
     spinner.style.display = 'flex';

     setTimeout(function(){ 
          alert("Email enviado correctamente");
          spinner.style.display = 'none';
      }, 3000);
}

