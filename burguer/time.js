const $clock = document.getElementById("clock"),
$startButton = document.getElementById("startClock"),
$stopButton = document.getElementById("stopClock"),
$startAlarm = document.getElementById("startAlarm"),
$stopAlarm = document.getElementById("stopAlarm"),
$inputAlarm = document.getElementById("inputAlarm"),
$alarm = document.getElementById("alarm")
const alarmDir = "./sounds/alarma1.mp3",
$audio = document.createElement("audio")
let clockTempo,
alarmTempo      



const actualTime = () => {
    let fecha = new Date();
    return fecha.toLocaleTimeString()
    
}

const showClock = () => {
    $startButton.disabled = true
    $stopButton.disabled = false

   clockTempo = setInterval(()=>{
        $clock.innerHTML = `<h3>${actualTime()}</h3>`
    }, 1000)
}

const stopClock = () => {
    $startButton.disabled = false
    $stopButton.disabled = true

    clearInterval(clockTempo)
    $clock.innerHTML = null
}

const getTimeDiff = (startDate, endDate) => {
  
    return Math.round(
      Math.abs(endDate - startDate) 
    );
}

const soundAlarm = () => {
    $startAlarm.disabled = true
    $stopAlarm.disabled = false

    let datetimeInputVal = $inputAlarm.value
    let datetimeToSound = new Date(datetimeInputVal);
    let actualdateTime = new Date()
    let timeDif = getTimeDiff(actualdateTime, datetimeToSound)
    alarmTempo = setTimeout(()=>{
     $audio.src = alarmDir
      $audio.play()
    }, timeDif)

    }

const stopAlarm = () => {
    $startAlarm.disabled = false
    $stopAlarm.disabled = true

    clearTimeout(alarmTempo)
    $audio.pause()
    $audio.currentTime = 0

}


document.addEventListener("click", (e)=>{
    if(e.target.matches("#startClock")) showClock()
    if(e.target.matches("#stopClock")) stopClock()
    if(e.target.matches("#startAlarm")) soundAlarm()
    if(e.target.matches("#stopAlarm")) stopAlarm()


})