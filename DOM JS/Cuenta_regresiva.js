const d = document;

export default function countdown(id, limitDate, finalMessage){

    const $countdown = d.getElementById(id),
          countdownDate = new Date(limitDate).getTime();

    let countdownTempo = setInterval(()=>{
            let now = new Date().getTime(),
                limitTime = (countdownDate - now),
                day = Math.floor(limitTime/(1000*60*60*24)),
                hours = ("0" + Math.floor((limitTime % (1000*60*60*24)) / (1000*60*60))).slice(-2), 
                minutes = ("0"+ Math.floor((limitTime%(1000*60*60)) / (1000*60))).slice(-2),
                seconds = ("0"+ Math.floor((limitTime%(1000*60)) / 1000)).slice(-2);

                //console.log(minutes, seconds)

    $countdown.innerHTML = `<h3>Faltan: ${day} dias ${hours} horas ${minutes} minutos y ${seconds} segundos </h3>`;
 
    // if(limitTime<0){
    //     clearInterval(countdownTempo);
    //     $countdown.innerHTML = `<h3>${finalMessage}</h3>`
    // }
    }, 1000)

}