//Variables generales
const d = document;

//Creando función de conteo regresivo
export function cuentaRegresiva(etiquetaHTML, fechaFinal, mensaje) {

    const $temporizador = d.querySelector(etiquetaHTML);

    let conteo = setInterval(() => {
        let diferenciaTiempo = (new Date(fechaFinal)  - new Date()) / 1000;
        let dias = Math.floor(diferenciaTiempo / (60 * 60 * 24)),
            horas = ("0" + Math.floor((diferenciaTiempo % (60 * 60 *24))/(60 * 60))).slice(-2),
            minutos = ("0" + Math.floor((diferenciaTiempo % (60 * 60)) / 60)).slice(-2),
            segundos = ("0" + Math.floor(diferenciaTiempo % 60)).slice(-2);
        
        $temporizador.innerHTML = `Faltan: <b>${dias} Días ${horas} Horas ${minutos} Minutos ${segundos}</b> Segundos para Pesaj 😊`;

        if(Math.floor(diferenciaTiempo) <= 0){
            clearInterval(conteo);
            $temporizador.classList.remove("temporizador");
            $temporizador.classList.toggle("mensaje");
            $temporizador.textContent = mensaje;   
        };
    }, 1000);
};