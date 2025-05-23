let propina = 0;
let monto = 0;
let resultado = 0;
let inputMonto = document.getElementById('monto');

const ingresarMonto = () => {

    if(inputMonto.value === ''){
        alert('Debes agregar un monto');
        return;

    } else {
        monto = parseFloat(inputMonto.value);
        agregarTexto('#montoAgregado', `<p>Monto:</p> <span>$${monto}</span>`);
        agregarTexto("#resultado", '');
    }

    inputMonto.value = '';

    inputMonto.blur();

    return monto;
}


//Ingresar monto con tecla Enter
document.getElementById('monto').addEventListener('keydown', (event) => {
    if(event.key === 'Enter'){
        ingresarMonto();
        return;
    }
})

function agregarPropina(){
    let botones = document.querySelectorAll('.btnPropina'); 
    botones.forEach(boton => {
        boton.addEventListener('click', function(){
            propina = parseInt(boton.getAttribute('value'));
            agregarTexto('#propinaSeleccionada', `<p>Propina:</p><span>${propina}%</span>`);
            return propina;
        })
    })
}

agregarPropina();

function calcularTotal(){
    resultado = monto * (propina / 100);
    agregarTexto('#resultado', `Total con propina de ${propina}%: <br><span>$${resultado + monto}</span>`)
    return resultado;
}

function agregarTexto(elemento, texto){
    elemento = document.querySelector(elemento);
    elemento.innerHTML = texto;
}

