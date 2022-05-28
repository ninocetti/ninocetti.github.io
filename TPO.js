var nombre = document.getElementById("nombre");
var email = document.getElementById("email");
var mensaje = document.getElementById("mensaje");
var form = document.getElementById("formulario");

form.addEventListener("submit", function(evt){
    evt.preventDefault();
    var mensajesError = [];

    if(nombre.value === null || nombre.value === ""){
        mensajesError.push("Ingresa tu nombre");
    }

    if(email.value === null || email.value === ""){
        mensajesError.push("Ingresa tu email");
    }

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(email.value) == false){
    //     alert("La dirección de email " + valor + " es correcta.");
    //      mensajesError.push("Ingresa tu email");
    // } else {
        mensajesError.push("La dirección de email es incorrecta.");
    }

    if(mensaje.value === null || mensaje.value === ""){
        mensajesError.push("Ingresa tu mensaje");
    }

    alert(mensajesError.join());
    nombre.innerHTML = mensajesError.join();
});
