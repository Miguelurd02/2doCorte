
const cedula = document.querySelector('#cedula');
const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const ht_diurnas = document.querySelector('#ht_diurnas');
const ht_vespertinas = document.querySelector('#ht_vespertinas');
const ht_nocturnas = document.querySelector('#ht_nocturnas');

const logcedula = document.getElementById('cedu');
const logname = document.getElementById('name');
const logapellido = document.getElementById('d_name');

const dia = document.getElementById('dia');
const tarde = document.getElementById('tarde');
const noche = document.getElementById('noche');
const horas = document.getElementById('total_h');

const neto = document.getElementById('sueldo_neto');
const ahorro = document.getElementById('ahorro');
const seguro = document.getElementById('seguro');
const saldo = document.getElementById('sueldo_total');

let trabajadores = [];

function ingresar(){

    trabajadores.push ({
        "cedula": cedula.value,
        "nombre": nombre.value,
        "apellido": apellido.value,
        "ht_diurnas": Number(ht_diurnas.value),
        "ht_vespertinas": Number(ht_vespertinas.value),
        "ht_nocturnas": Number(ht_nocturnas.value),
    })
    
    console.log(trabajadores);

    logcedula.textContent = cedula.value;
    logname.textContent = nombre.value;
    logapellido.textContent = apellido.value;
    dia.textContent = Number(ht_diurnas.value);
    tarde.textContent = Number(ht_vespertinas.value);
    noche.textContent = Number(ht_nocturnas.value);
    
    var diurno = Number(675);
    var vespertino = Number(700);
    var nocturno = Number(956.23);

    var total_horas = 0;
    var total_d = 0;
    var total_v = 0;
    var total_n = 0;
    var total_neto = 0;

    var porcentaje_ahorro = 0;
    var ahorro_habitacional = 0;
    var porcentaje_seguro = 0;
    var seguro_social = 0;

    var saldo_total = 0;

    total_horas = Number(ht_diurnas.value) + Number(ht_vespertinas.value) + Number(ht_nocturnas.value);
    total_d = ht_diurnas.value * diurno;
    total_v = ht_vespertinas.value * vespertino;
    total_n = ht_nocturnas.value * nocturno;

    total_neto = total_d + total_v + total_n
    
    neto.textContent = Number(total_neto);
    horas.textContent = Number(total_horas);

    if (total_neto < 85000){
        porcentaje_ahorro = 0.05;
        porcentaje_seguro = 0.075;

        ahorro_habitacional = Number(total_neto) * Number(porcentaje_ahorro);
        seguro_social = Number(total_neto) * Number(porcentaje_seguro);
        saldo_total = Number(total_neto) - Number(ahorro_habitacional) - Number(seguro_social);

        ahorro.textContent = Number(ahorro_habitacional).toFixed(2);
        seguro.textContent = Number(seguro_social).toFixed(2);
        saldo.textContent = Number(saldo_total).toFixed(2);
        
    }
    else if (total_neto >= 85000 && total_neto <= 150000){
        porcentaje_ahorro = 0.075;
        porcentaje_seguro = 0.1;

        ahorro_habitacional = Number(total_neto) * Number(porcentaje_ahorro);
        seguro_social = Number(total_neto) * Number(porcentaje_seguro);
        saldo_total = Number(total_neto) - Number(ahorro_habitacional) - Number(seguro_social);

        ahorro.textContent = Number(ahorro_habitacional).toFixed(2);
        seguro.textContent = Number(seguro_social).toFixed(2);
        saldo.textContent = Number(saldo_total).toFixed(2);
        
    }
    else{
        porcentaje_ahorro = 0.15;
        porcentaje_seguro = 0.125;

        ahorro_habitacional = Number(total_neto) * Number(porcentaje_ahorro);
        seguro_social = Number(total_neto) * Number(porcentaje_seguro);
        saldo_total = Number(total_neto) - Number(ahorro_habitacional) - Number(seguro_social);

        ahorro.textContent = Number(ahorro_habitacional).toFixed(2);
        seguro.textContent = Number(seguro_social).toFixed(2);
        saldo.textContent = Number(saldo_total).toFixed(2);
        
    }
}