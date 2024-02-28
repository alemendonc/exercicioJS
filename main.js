function mudarCorTexto(){

    alert("hello")
    console.log(document.querySelector("#p1"))
    document.querySelector("#p1").style.color="black"
}

function mudarCorFundo(){
    alert("alguma coisa")
    document.querySelector("#p1").style.background="white"

}

function alterarTexto(){
    textoForm= document.querySelector("#textinput").value

     document.querySelector("#texto2").innerHTML=textoForm
}
{ var readlineSync = require("readline-sync")
var numero1 = Number (readlineSync.question("digite um numero: "))
var numero2 = Number (readlineSync.question("digite um numero: "))
console.log("a soma entre ${numero1} e [numero2} é igual a ${numero1 = numero2}")
}

