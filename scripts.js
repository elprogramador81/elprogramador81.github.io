function resaltar(elEvento)
{
var evento = elEvento || window.event;
switch(evento.type)
{
case 'mouseover':
this.style.backgroundColor = 'green';
this.style.color='white'
break;
case 'mouseout':
this.style.backgroundColor = 'rgb(202, 198, 198)';
this.style.color='black'
break;
}
}

document.getElementById("i").onmouseover = resaltar;
document.getElementById("i").onmouseout = resaltar;
document.getElementById("ii").onmouseover = resaltar;
document.getElementById("ii").onmouseout = resaltar;
document.getElementById("iii").onmouseover = resaltar;
document.getElementById("iii").onmouseout = resaltar;

/**Agrego la validación del formato correcto de email, 
 * retornando un mensaje de alerta, tanto en caso de que se envíe correctamente
 * como en el caso de que el formulario no se haya llenado con los datos correctos.
 * */

function validateEmail(){                
var emailField = document.getElementById('user-email');
var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

if( validEmail.test(emailField.value) ){
    alert('El mensaje se ha enviado correctamente');
    return true;
}else{
    alert('Email es inválido, Presione el botón "Resetear" para limpiar el formulario');
    return false;
}
}
//función para acceder, desde el comienzo de la pagina, al formulario y la informacion de contacto
let btn = document.querySelector('.btn');
let el = document.querySelector('.contacto');

btn.addEventListener('click', function () {
    el.scrollIntoView(false);
});
//función para volver al comienzo de la pagina
let  volver= document.querySelector('.Volver');
let  arriba= document.querySelector('.hero');

volver.addEventListener('click', function () {
    arriba.scrollIntoView(true);
});
