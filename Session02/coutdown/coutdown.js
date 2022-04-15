var p = document.getElementById('demo')

function coutdownTime(seconds) {
    const coutdownInterval = setInterval(coutdownSecond,1000)
    function coutdownSecond() {
        p.innerText = seconds
        if (seconds < 0) p.innerText = 'Time out!'
        seconds == 0 ? (clearInterval(coutdownInterval)) : --seconds
    }
}

function inputSeconds(callback) {
    var seconds = prompt('Please enter second to coutdown')
    callback(seconds)
}
inputSeconds(coutdownTime)