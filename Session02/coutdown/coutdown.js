var p = document.getElementById('demo')

function coutdownTime(seconds) {
    const coutdownInterval = setInterval(coutdownSecond, 1000)
    function coutdownSecond() {
        console.log(seconds)
        p.innerText = seconds
        seconds == 0 ? (clearInterval(coutdownInterval)) : --seconds
    }
    // seconds == 0 ? inputSeconds(coutdownTime) : ''
}

function inputSeconds(callback) {

    var seconds = prompt('Please enter second to coutdown')
    // console.log(seconds)
    callback(seconds)
    // seconds > 0 ? callback(seconds) : inputSeconds()
}
inputSeconds(coutdownTime)