alert ("!Bienvenido a creditos ya online !");
let nombre =prompt("Por favor ingrese su nombre");
alert("Hola "+ nombre +" ,Siga los pasos para simular su prestamo");
let monto =prompt("A continuacion ingrese el monto deseado $");
let cuota = prompt("A continuacion ingrese el numero de cuotas deseadas");
prestamo = (monto/cuota);
if (monto>50000) {
    prestamofinal=((prestamo*0.35)+prestamo);
  } else {
    prestamofinal=((prestamo*0.45)+prestamo);
  }

  alert("Muy bien "+ nombre +" ,El monto a pagar es de$"+prestamofinal+" en "+ cuota+" cuotas" ) ;