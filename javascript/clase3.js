let nombre = prompt("Ingresá tu nombre!");
let miDiv = document.getElementById("principal");
miDiv.innerHTML="Hola"+nombre;

let btn= document.getElementById ("btn");
btn.addEventListener ("click", sumar);

function sumar () {
    let num = 20;
    let num2 = 67;
    let resultado = num + num2;
    miDiv.innerHTML+= "<p>" + resultado + "</p>";

}

}



