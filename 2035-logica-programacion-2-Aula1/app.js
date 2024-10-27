let numeroSecreto = 0
console.log (numeroSecreto);
let intento = 0
let ListaNumerosSorteados =[];
let numerosMaximos = 10 ;

function verificarIntento(){
    let numeroDeusuario = parseInt(document.getElementById("1").value);
    console.log(intento);
    if (numeroDeusuario == numeroSecreto){
        asignarTextoElemento("P", `acertaste en ${intento} ${(intento === 1) ? "vez" : "veces"} ` );
        document.getElementById("reiniciar").removeAttribute("disabled");
    }
    
    else{
        if(numeroDeusuario < numeroSecreto){
            asignarTextoElemento("P","el numero es mayor");
        }else if (numeroDeusuario > numeroSecreto){
            asignarTextoElemento("P","el numero es menor");
        }
       intento++;
       limpiarCaja();
    }
  
    
       return numeroDeusuario;
}
function limpiarCaja() {
    document.getElementById("1").value = "";
    
}
function asignarTextoElemento(elemento , texto){
    let elementoHtml = document.querySelector(elemento)
    elementoHtml.innerHTML = (texto);

};

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()* numerosMaximos)+1

        console.log(numeroGenerado);
        console.log (ListaNumerosSorteados);

    if(ListaNumerosSorteados.length == numerosMaximos){
        asignarTextoElemento("p","ya se sortearon todos los numeros posibles");

    }else {
        if(ListaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
            
    
        }else{
            ListaNumerosSorteados.push(numeroGenerado);
        }
        return numeroGenerado;
        
    }

    }

    
function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector("#reiniciar").setAttribute("disabled",true);
    
};
function condicionesIniciales() {

    asignarTextoElemento("h1","juego del numero secreto");
    asignarTextoElemento("p","indica un numero del 1 al 10 !");
    numeroSecreto = generarNumeroSecreto();
    intento = 1;
    
}
console.log(numeroSecreto);
condicionesIniciales();

let listaGenerica = [];
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin' , 'Python'];

lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');
lenguagesDeProgramacionReverse = [...lenguagesDeProgramacion].reverse();



function mostrarLenguages(){

    console.log (lenguagesDeProgramacion);

}
mostrarLenguages();
console.log(lenguagesDeProgramacionReverse);



function promediar (numeros){
    let suma = numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0); 
    return suma/numeros.length
}

function numeroMaxYMin (numeros){
    let maximo = Math.max(...numeros);
    let minimo = Math.min (...numeros);
    console.log (maximo);
    console.log (minimo);

    return [maximo,minimo];
    
    
}
function suma (numeros){
    let suma = numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
    return suma

}
//Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.

function sumaDeArrays(lista1,lista2) {
     let principal= lista1.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
     let secundario = lista2.reduce((acumulador, valorActual) => acumulador + valorActual, 0);   
     let sumaDeArrays = principal + secundario
     return sumaDeArrays    
}
function sumarPorArrays(lista1, lista2) {
    if (lista1.length !== lista2.length) {
        throw new Error("Las listas deben tener el mismo tamaño.");
    }

    let listaSuma = [];
    for (let i = 0; i < lista1.length; i++) {
        listaSuma.push(lista1[i] + lista2[i]);
    }
    return listaSuma;
}
//Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.

function arrayCuadrado(lista1) {
    let listaCuadrado =[];
    for (let i =0; i < lista1.length; i++){
        listaCuadrado.push(lista1[i]*lista2[i]);
        
    }
    return listaCuadrado;
}
/*function cuadrarNumeros(lista) {
    return lista.map(numero => numero ** 2);
}

// Ejemplo de uso
let numeros = [1, 2, 3, 4, 5];
let cuadrados = cuadrarNumeros(numeros);
console.log(cuadrados); // Salida: [1, 4, 9, 16, 25]*/


let numeros = [10,20,30,40,50];
let lista1 = [10,20,30,40,50];
let lista2 = [10,20,30,40,50];

let calcularPromedio = promediar(numeros);
let numeroMaximo = numeroMaxYMin(numeros);
let adicion = suma(numeros);
let sumaDeListas = sumaDeArrays(lista1,lista2)
let sumarPorIndex = sumarPorArrays(lista1,lista2);
let array2 = arrayCuadrado(lista1);

console.log(calcularPromedio); 
console.log(numeroMaximo);
console.log (adicion);
console.log(sumaDeListas);
console.log(sumarPorIndex);
console.log(array2);




/*function hola(){
    let  nombre = prompt("ingresa tu nombre")
    console.log (`hola ${nombre}`)
    return nombre;
    
}
function holaMundo() {
    console.log("hola mundo")
    
}
function doble (numero){
    return numero * 2;
  }

function promedio (num1,num2,num3){
    let promedio = (num1+num2+num3)/3 
    return promedio;
}
function mayor (num1,num2){
    if (num1 > num2){
        console.log (`${num1} es mayor`)
    }else if(num1<num2){
        console.log(`${num2} es mayor`)
    }else{
        console.log(`${num1} y ${num2} son iguales`)
    }
}
/*function mayor(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'Ambos parámetros deben ser números';
    }

    return num1 > num2 ? `${num1} es mayor` :
           num1 < num2 ? `${num2} es mayor` :
           `${num1} y ${num2} son iguales`;
} funcion mejorada con copilot

// Ejemplo de uso
let resultado = mayor(10, 20);
console.log(resultado); // Salida: 20 es mayor 
function potencia (num1){
    return num1 * num1
}


hola();

holaMundo();

let doblarNumero =  doble(2);
console.log(doblarNumero);

let promediar = promedio(1,2,3);
console.log (promediar)

let comparacion = mayor(2,2);
console.log(comparacion);

let potenciado = potencia(5);
console.log(potenciado)



//Mide tu peso en kilogramos (kg).
//Mide tu altura en metros (m).//
//Divide tu peso entre el cuadrado de tu altura.//

/*function imcCalculo(peso,altura) {
    return peso /(altura*altura);
    
}
let imc = imcCalculo(85 , 1.75)
console.log(imc)



//conversion de dolar a reales
function convertidor(dolar) {
    let real = (4.8);

    return dolar * real    
}
let conversion = convertidor(20)
console.log(conversion)



function calculoArea(largo,altura) {
    return largo * altura
    
}
function calculoPerimetro(largo,altura){
    return (largo *2) +(altura*2)

}

function calculoDoble(largo,altura) {
    let area = largo*altura
    let perimetro = (largo *2) +(altura*2)
     console.log(area)
     console.log(perimetro)
     
    
}
let largo = (10)
let altura = (20)
let area = calculoArea(largo,altura)
let perimetro = calculoPerimetro(largo,altura)
let calculoP = calculoDoble(largo,altura); 
/*console.log(area)
console.log(perimetro)*/
