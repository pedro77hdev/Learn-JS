const botao = document.getElementById("btm")
const not = document.querySelector("#ntf")





 botao.addEventListener(`click` , () => tweet())

function tweet(){
    var mensagem = document.querySelector("#mytxt")
    var a = mensagem.value
let noti = document.createElement("div")

not.appendChild(noti)
noti.classList.add("not")
    

noti.innerHTML = a

}
