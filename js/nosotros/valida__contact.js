//Validacion de formulario contactanos

$(function(){
    $("#datos").validate({
        rules:{
            name:{
                required:true
            },
            email:{
                required:true,
                email:true
            },
            subject:{
                required:true
            },
            message:{
                required:true,
                text:true
            }
        }, //rules
        messages:{
            name:{
                required: 'Ingrese su nombre',
                minlength:'Caracteres insuficientes (3)'
            },
            email:{
                required:'Ingrese su correo electronico',
                email:'Formato de correo no valido'

            },
            subject:{
                required:'Ingrese un asunto'

            },
            message:{
                required:'Ingrese su mensaje',
                minlength:'Caracteres insuficientes (5)',
                maxlength:'El mensaje excede los (120) caracteres'
            },
        }
    })


})


//AVISO DE CONFIRMACION AL ENVIAR FORMULARIO DE CONTACTO
function mostrarToast() {
    var form = document.getElementById('datos');
    if (form.checkValidity()) {
        var toast = new bootstrap.Toast(document.getElementById('toastDiv'));
        toast.show();
    }
}

var form = document.getElementById('datos');
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar el envío del formulario
    mostrarToast();
});