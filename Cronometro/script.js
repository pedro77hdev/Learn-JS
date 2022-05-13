var hour = 0 /* variable declarations */
var minutes = 0
var seconds = 0

var time = 1000 /* IT'S TIMEEEE*/
var chronomter

function start() {

    chronomter = setInterval(() => {

        timer()

    }, time)

}

function pause() {

    clearInterval(chronomter)

}

function stop() {

    clearInterval(chronomter)
    hour = 0
    minutes = 0
    seconds = 0

    document.getElementById("tiempo").innerHTML = '00:00:00'

}

function timer() {

    seconds++

    if (seconds = 60) {

        seconds = 0
        minutes++


        if (minutes = 60) {

            minutes = 0
            hour++
        }

    }
    let text = (seconds<10 ? "0" + seconds:seconds)  + ":" + (minutes<10 ? "0" + minutes:minutes) + ":" + (hour<10 ? "0" + hour:hour)
    
    document.getElementById("tiempo").innerHTML = text

}