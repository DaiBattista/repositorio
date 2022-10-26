const form=document.getElementById('form')
const nombre=document.getElementById('nombre');
const apellido=document.getElementById('apellido');
const correo=document.getElementById('correo');
const cantidad= document.getElementById('cantidad');
const categoria= document.getElementById('categoria');
const botonResumen= document.getElementById('resumen');
const botonBorrar= document.getElementById('borrar');
const total= document.getElementById('total');

form.addEventListener('submit', e => {
	e.preventDefault();
	checkInputs();

    botonResumen.addEventListener('click', totalPagar, (Event) =>{
        Event.preventDefault();
    }
    );
});

function checkInputs() {
	const nombreValue = nombre.value.trim();
	const apellidoValue = apellido.value.trim();
	const correoValue = correo.value.trim();
    const cantidadValue = cantidad.value.trim();

if(nombreValue === '') {
        setErrorFor(nombre, 'El nombre no puede quedar en blanco.');
} else {
        setSuccessFor(nombre);
}

if(apellidoValue === '') {
    setErrorFor(apellido, 'El apellido no puede quedar en blanco.');
} else {
    setSuccessFor(apellido);
}

if(correoValue === '') {
        setErrorFor(correo, 'El mail no puede quedar en blanco.');
    } else if (!isEmail(correoValue)) {
        setErrorFor(correo, 'No ingresaste un mail válido.');
    } else {
        setSuccessFor(correo);
}

if(cantidadValue === '') {
    setErrorFor(cantidad, 'La cantidad no puede quedar en blanco.');
} else if (!isNaN(cantidadValue)) {
    setSuccessFor(cantidad);
} else {
    setErrorFor(cantidad, 'Sólo podes ingresar números.');
}
}

function setErrorFor(input, message) {
    const formValidacion = input.parentElement;
    const small = formValidacion.querySelector('small');
    formValidacion.className = 'form-validacion error';
    small.innerText = message;
}

function setSuccessFor(input, message){
    const formValidacion = input.parentElement;
    formValidacion.className = 'form-validacion success';

}

function isEmail(correo){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(correo);
}

const valorTicket=200;

let descuentoEstudiante= 0.8;
let descuentoTrainee= 0.5;
let descuentoJunior= 0.15;

function totalPagar(){
    let totalValor = (cantidad.value) * valorTicket;
    if(categoria.value == 1){
        totalValor = totalValor - (totalValor * descuentoEstudiante);
    }
   else if(categoria.value == 2){
        totalValor = totalValor - (totalValor * descuentoTrainee);
    }
    else if(categoria.value == 3){
        totalValor = totalValor - (totalValor * descuentoJunior);
    }
    
    total.innerHTML = `Total a pagar: $ ${totalValor}`;
}



botonBorrar.addEventListener('click', ()=>{
    total.innerHTML = `Total a pagar: $`;
})

