alert("hola");
alert(1+9+41);
alert("1+9+41"); 

let saludo = "holaaaaaaa";
//crear variable
let despedida;
//igualar variable a otra
despedida = "adios";

saludo = "hola";

let edad = 16;
edad = 17;
edad+1+576;
edad++; //suma una
edad--; //resta una

let nombreUsuario = "yasmi";

alert(saludo); //puedo concatenar strings usando +
//alert(saludo);

//constantes

alert(saludo+nombreUsuario);
alert(saludo);
console.log( 5 > 4); //mayor o igual que
console.log( 5 < 8); //menor que
console.log(5 >= 6); //mayor o igual que
console.log(5 <= 7); //menor o igual que

console.log(5 == "5") //igual que
console.log(5 === "5"); //estrictamente igual que 
console.log(5 != 7); //no es igual

console.log("a" > "b");
console.log("cortazar" > "navarro");

//condicionales
if (edad >= 18){
    alert("eres mayor de edad");
}
if (premium) {
    console.log("tienes una cuneta premium");
    alert("bienvenido" + nombreUsuario)
} else if (edad >=18){
    console.log("puedes crear una cuenta"); //
} else {
    console.log("no puedes crear una cuenta");//si no es primiem ni +18
}

//interactuar con html DOM
// recojo el elemnto          // que hago //
document.getElementById("texto").innerHTM ="holaaa"
document.getelmentbyid("caja").innerHTM = "<p>hola por siempre</p>"

document.body.style.color = "red";

//funciones
function saludar (){
    alert("bienvenido");
}

function modonoche() {
    document.body.style.color = "white";
    document.body.style.backgroundColor = "black"
}

function modoDia(){
    document.body.style.color = "black"
    document.body.style.backgroundColor = "white"
}
function saludarUsuario(){
    let inputUsuario = document.querySelector("#nombre-usuario").value
    alert("hola"+inputUsuario);
    if (inputUsuario == "yasmi")
    if(generoFemenino.checked){
       alert(bienvenido "inputUsuario");
    }

    mostrarUsuario(inputUsuario); 


}
function mostrarUsuario(inputUsuario){
    const contenedorUsuarios = document.querySelector(#contenido)
    const elementoUsuario = document. createElement("li")

    //ejemplos de usar texto + datos js
    //elementoUsuario.innerHTML = "hola" "+inputUsuario";
    //elementoUsuario.innerHTML = hola ${inputUsuario}

    elementoUsuario.innerHTML = inputUsuario;
    contenedorUsuarios.appendChild(elementoUsuario);

}