let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

function updateClock(){
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;

    let sDeg = ((360 / 60) * second) - 90;
    let mDeg = ((360 / 60) * minute) - 90;
    let hDeg = ((360 / 12) * hour) - 90;

    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;
}

function fixZero(time){
    // Opção convencional
    /*
    if(time < 10){
        return '0'+time;
    }else{
        return time;
    }*/

    // Opção ternário
    return time < 10 ? `0${time}` : time;
}

// Chamamos a função abaixo do setInterval, pois quando acionado o setInterval, o mesmo terá o delay selecionado, por esse motivo, para ser instantâneo, fazemos a chamada dessa função.
setInterval(updateClock, 1000);
updateClock();