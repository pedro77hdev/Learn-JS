$(document).ready(()=>{
    $("#rapaz").click(function () {
        var rapaz = new Audio("sons/rapaz.mp3")
        rapaz.play()
    })
    $("#calma").click(()=>{
        var calma = new Audio("sons/calma.mp3")
        calma.play()
    })
    $("#uepa").click(()=>{
        var uepa = new Audio("sons/uepa.mp3")
        uepa.play()
    })
    $("#elegosta").click(()=>{
        var elegosta = new Audio("sons/elegosta.mp3")
        elegosta.play()
    })
    $("#olha").click(()=>{
        var calma = new Audio("sons/olha.mp3")
        calma.play()
    })
})