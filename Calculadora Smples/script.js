function inserir(num) {
    
    var resultado1 = document.getElementById('result').innerHTML
    document.getElementById('result').innerHTML = resultado1 + num
}

function limpar() {

    document.getElementById('result').innerHTML = "  "

}

function apagar() {
    var volta = document.getElementById('result').innerHTML
    document.getElementById('result').innerHTML = volta.substring(0 , volta.length -1)
}

function calculo() {
    
    var resultado2 = document.getElementById('result').innerHTML

    if (resultado2) {
        document.getElementById('result').innerHTML = eval(resultado2)
    }
}