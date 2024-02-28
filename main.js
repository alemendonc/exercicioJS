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

