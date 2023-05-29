//ej1
var meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
console.log("Ej 1:" + meses);

//ej2

var valores = [true, false, 5, "hola", "adios", 2];
if (valores[2] > valores[5] ){
    console.log("Ej 2: el numero mayor es: "+ valores[2])
}
else{
    console.log("Ej 2: el numero mayor es: "+ valores[5])
}
var valorTrue = valores[2] || valores[5];
console.log("Ejercicio 2 (valoresTrue): " + valorTrue);
var valorFalse = valores[2] && valores[5];
console.log("Ej 2 (valoresFalse): " + valorFalse);
console.log("Ej 2 (suma): " + (valores[2] + valores[5]) );
console.log("Ej 2 (resta): " + (valores[2] - valores[5]) );
console.log("Ej 2 (division): " + (valores[2] / valores[5]) );
console.log("Ej 2 (multiplicacion): " + (valores[2] * valores[5]) );
console.log("Ej 2 (modulo): " + (valores[2] % valores[5]) );

//ej3

var numero1 = 5;
var numero2 = 8;
if(numero1 < numero2) {
console.log("Ej 3(primer if): numero1 no es mayor que numero2");
}
if(numero2 > 0 ) {
console.log("Ej 3(segundo if): numero2 es positivo");
}
if(numero1 < 0 || numero1 !== 0) {
console.log("Ej 3(tercer if): numero1 es negativo o distinto de cero");
}
if((numero1 + 1) <= numero2) {
console.log("Ej 3(cuarto if): Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}

//ej 4

var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

var numDNI = prompt("Ej 4: Introduce el número de DNI:");
var letraDNI = prompt("Ej 4: Introduce la letra del DNI:");


if (numDNI < 0 || numDNI > 99999999) {
  console.log("Ej 4(num no validado): El número de DNI proporcionado no es válido.");
} else {
  
  var resto = numDNI % 23;
  var letraCalculada = letras[resto];

  
  if (letraCalculada !== letraDNI.toUpperCase()) {
    console.log("Ej 4 (letra no correcta):La letra indicada no es correcta.");
  } else {
    console.log("Ej 4 (todo correcto):El número y la letra de DNI son correctos.");
  }
}

//Ej 5

var numero = prompt("Ej 5: Introduce un número entero para calcular su factorial:");
var factorial = 1;


if (numero < 0) {
  console.log("Ej 5(numero no positivo): El número introducido no es positivo");
} else {
  
  for (var i = numero; i > 0; i--) {
    factorial *= i;
  }
  console.log("Ej 5(correcto): El factorial de " + numero + " es: " + factorial);
}


//Ej 6
function saberpares(){
if (numero % 2 === 0) {
    console.log("Ej 6(par): El número es par");
  } 
  else {
    console.log ("Ej 6(inpar): El número es inpar.");
  }
}
  var numero = prompt("Ej 6: Introduce un número entero:");
  var resultado = saberpares(parseInt(numero));

  //Ej 7

  function analizarCadena(cadena) {
    if (cadena === cadena.toUpperCase()) {
      console.log("Ej 7: La cadena está formada solo por mayúsculas");
    } else if (cadena === cadena.toLowerCase()) {
      console.log("Ej 7: La cadena está formada solo por minúsculas");
    } else {
      console.log("Ej 7: La cadena es una mezcla de estas");
    }
  }
analizarCadena("PAPU"); 
analizarCadena("papu"); 
analizarCadena("Papu");
  
  