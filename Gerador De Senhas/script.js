let botao = document.getElementById("btn")
var senha = document.getElementById("re")




function gerarsenha() {
   senha.innerHTML = Math.random().toString(36).slice(2) + Math.random().toString(36).toUpperCase().slice(2) 
}


