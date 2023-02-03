const d = document,
$regresiveCount = d.getElementById("regresiveCount")

let fechaEsperada = new Date("Jan 31 2023 12:00:00")
let msecPerMinute = 1000 * 60;
let msecPerHour = msecPerMinute * 60;
let msecPerDay = msecPerHour * 24;

const obtenerDiferencia = (currentTime, endTime) => {

    let interval = Math.abs(currentTime.getTime() - endTime.getTime())

    let days = Math.floor(interval / msecPerDay );
    interval = interval - (days * msecPerDay );
    
    let hours = Math.floor(interval / msecPerHour );
    interval = interval - (hours * msecPerHour );

    let minutes = Math.floor(interval / msecPerMinute );
    interval = interval - (minutes * msecPerMinute );
    
    let seconds = Math.floor(interval / 1000 );
    
    return {
        days,
        hours,
        minutes,
        seconds
    }
}



d.addEventListener("DOMContentLoaded", (e) => {
    mostrarCuentaRegresiva()
})

const mostrarCuentaRegresiva = () => {
    setInterval(() => {
        let fechaActual = new Date()
        const {days, hours, minutes, seconds} = obtenerDiferencia(fechaActual, fechaEsperada)
        $regresiveCount.innerHTML = `<h3>${days} días, ${hours} horas, ${minutes} minutos, y ${seconds} segundos</h3>`
    }, 1000)
}