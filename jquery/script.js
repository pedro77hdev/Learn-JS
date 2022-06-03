$(document).ready(function () {
    $("#rapaz").click(function () {
        var rapaz = new Audio("sons/rapaz.mp3")
        rapaz.play()
    })
    $("#calma").click(function(){
        var calma = new Audio("sons/calma.mp3")
        calma.play()
    })
    $("#uepa").click(function(){
        var uepa = new Audio("sons/uepa.mp3")
        uepa.play()
    })
    $("#elegosta").click(function(){
        var elegosta = new Audio("sons/elegosta.mp3")
        elegosta.play()
    })
})

