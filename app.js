let propina = 0;
let monto = 0;
let resultado = 0;

const ingresarMonto = () => {

    if(document.getElementById('monto').value === ''){
        alert('Debes agregar un monto');
        return;
    }else{
        monto = parseFloat(document.getElementById('monto').value);
        agregarTexto('#montoAgregado', `<p>Monto:</p> <span>$${monto}</span>`);
    }

    document.getElementById('monto').value = '';
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

function calcularPropina(){
    resultado = monto * (propina / 100);
    agregarTexto('#resultado', `Debes dar una propina de $${resultado}`)
    return resultado;
}

function agregarTexto(elemento, texto){
    elemento = document.querySelector(elemento);
    elemento.innerHTML = texto;
}

