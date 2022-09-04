const d = document,
      n = navigator;

export default function getGeolocation(id){

const $id = d.getElementById(id),
      options = {
        enableHighAccuracy:true,
        timeout: 5000,
        maximumAge:0
      };

    const succes = (position)=>{
        let coords = position.coords;
        //console.log(position);
        $id.innerHTML = `
        <p>Tu posición es:</P>
        <ul>
        <li>Longuitud:<b>${coords.longitude}</b></li>
        <li>Latitud:<b>${coords.latitude}</b></li>
        <li>precisión:<b>${coords.accuracy}</b> metros</li>
        </ul>
        </br>
        <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},20z" target="_blank">Ir a google Maps</a>
        `
    };

    const error = (err)=>{
        $id.innerHTML = `<p>Error: Codigo${err.code}; ${err.message}</p>`
        console.log(`Error: Codigo${err.code}; ${err.message}`)
    }

      n.geolocation.getCurrentPosition(succes, error, options)

}