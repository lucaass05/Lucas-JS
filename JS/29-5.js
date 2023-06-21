//ej1
var meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
document.getElementById("resultado1").innerHTML= "Ej 1:" + meses;

//ej2

function Ejercicio2() {
  var valores = [true, 5, false, "hola", "adios",2,"gjdjdflk"];
  var posicion = 0;
  var valor = "";

  for (let i = 0; i < valores.length; i++) {
      if (typeof(valores[i]) == "string") {
          if (aux[i].length > aux[i+1].length && i+1 < aux.length) {
          posicion = i;
          valor = aux[i];
          }else {
          posicion = i +1;
          valor = aux[i + 1];
          }
      }
  }
  console.log("el mayor es "+valor);
  //comparacion directa
if (valores[3].length > valores[4].length) {
  console.log("hola en mayor");
}else{
  console.log("adios en mayor")
}
}

function solicitudAJAX() {

  var id = document.querySelector("#entrada").value;
  var url = "https://pokeapi.co/api/v2/pokemon/"+id;

  var objXMLHttpRequest = new XMLHttpRequest();

  objXMLHttpRequest.onreadystatechange = function() {
  if(objXMLHttpRequest.readyState === 4) {
      if(objXMLHttpRequest.status === 200) {
        console.log(objXMLHttpRequest.responseText);
      }else {
        alert('Error Code: ' +  objXMLHttpRequest.status);
        alert('Error Message: ' + objXMLHttpRequest.statusText);
      }
  }
}
objXMLHttpRequest.open('GET', url);
objXMLHttpRequest.send();
}

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

function Ejercicio4(params) {
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K',
'E', 'T'];

var dni = document.querySelector("#dni").value;
var letraUsuario = document.querySelector("#letra").value;
var letraUsuarioMayuscula = letraUsuario.toUpperCase();

if (dni > 0 && dni < 99999999) {
    var posicion = dni % 23;
    if (letras[posicion] == letraUsuarioMayuscula) {
        console.log("El número DNI y la letra son correctos");
    }else {
        console.log("La letra que ha indicado no es correcta");
    }
}else {
    console.log("El número proporcionado no es válido");
}

}

//Ej 5

var num = prompt("Ej 5: Introduce un número entero para calcular su factorial:");
var factorial = 1;


if (num < 0) {
  console.log("Ej 5(numero no positivo): El número introducido no es positivo");
} else {
  
  for (var i = num; i > 0; i--) {
    factorial *= i;
  }
  console.log("Ej 5(correcto): El factorial de " + num + " es: " + factorial);
}


//Ej 6
function saberpares(){
if (numero % 2 === 0) {
    document.getElementById("resultado").innerHTML = "Ejercicio 6: El numero es par";
  } 
  else {
    document.getElementById("resultado").innerHTML ="Ejercicio 6: El número es inpar.";
  }
}
  var numero = prompt("Ej 6: Introduce un número entero:");
  var resultado = saberpares(parseInt(numero));

  //Ej 7

  
    var texto1 = prompt("Ej 7: Introduce un texto con o sin mayus:");

    if (texto1 === texto1.toUpperCase()) {
      console.log("Ej 7: La cadena está formada solo por mayúsculas");
    } else if (texto1 === texto1.toLowerCase()) {
      console.log("Ej 7: La cadena está formada solo por minúsculas");
    } else {
      console.log("Ej 7: La cadena es una mezcla de estas");
    }

// Ej 8
function esPalindromo(cadena) {
    
    cadena = cadena.replace(/\s/g, "").toLowerCase();
    
    
    for (var i = 0; i < cadena.length / 2; i++) {
      if (cadena[i] !== cadena[cadena.length - 1 - i]) {
        return false;
      }
    }
    
    return true;
  }
  
  var texto = prompt("Ej 8: Introduce un texto:");
if (esPalindromo(texto)) {
  console.log("Ej 8: La cadena es un palíndromo.");
} else {
  console.log("Ej 8: La cadena no es un palíndromo.");
}

//ej 9
function Persona(nombre, edad, genero) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
  }
 
 
  Persona.prototype.obtDetalles = function() {
    console.log("Nombre: " + this.nombre);
    console.log("Edad: " + this.edad);
    console.log("Género: " + this.genero);
  };
 
 
  function Estudiante(nombre, edad, genero, curso, grupo) {
    Persona.call(this, nombre, edad, genero);
    this.curso = curso;
    this.grupo = grupo;
  }
 


  Estudiante.prototype = Object.create(Persona.prototype);
  Estudiante.prototype.constructor = Estudiante;


  Estudiante.prototype.registrar = function() {
    console.log("Ej 9 (estudiante): El estudiante " + this.nombre + " ha sido registrado en el curso " + this.curso + " grupo " + this.grupo);
  };
 
 
  function Profesor(nombre, edad, genero, asignatura, nivel) {
    Persona.call(this, nombre, edad, genero);
    this.asignatura = asignatura;
    this.nivel = nivel;
  }
 


  Profesor.prototype = Object.create(Persona.prototype);
  Profesor.prototype.constructor = Profesor;
 
 
  Profesor.prototype.asignar = function() {
    console.log("Ej 9(Profe): El profesor " + this.nombre + " ha sido asignado a la asignatura de " + this.asignatura + " nivel " + this.nivel);
  };
 
 
  var persona = new Persona("Juan", 30, "Masculino");
  persona.obtDetalles();
 
  var estudiante = new Estudiante("Laura", 20, "Femenino", "4°15", "A");
  estudiante.obtDetalles();
  estudiante.registrar();
 
  var profesor = new Profesor("Carlos", 40, "Masculino", "Matemáticas", "Avanzado");
  profesor.obtDetalles();
  profesor.asignar();

   // Ej 10
  function lanzamientoDados() {
    var dado1 = Math.floor(Math.random() * 6) + 1;
    var dado2 = Math.floor(Math.random() * 6) + 1;
    return dado1 + dado2;
  }
 
 
  var apariciones = new Array(11).fill(0);


  for (var i = 0; i < 36000; i++) {
    var suma = lanzamientoDados();
    apariciones[suma - 2]++;
  }
 
 
  for (var x = 0; x < apariciones.length; x++) {
    var resultado = x + 2;
    console.log("Ej 10: Suma " + resultado + ": " + apariciones[x] + " apariciones");
  }
