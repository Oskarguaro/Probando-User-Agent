const d = document,
    w = window,
    n = navigator;

export default function detectorConexion(seccion) {
    // console.log(n.onLine);

    const $div = d.createElement("div"),
        $seccion11 = d.querySelector(seccion);

    if(!$seccion11.querySelector(".img-conexion")){
        if(n.onLine){
            $seccion11.children[1].innerHTML += `
                <p class="p-conexion">Online</p>
                <img class="img-conexion" src="imagenes/conectado.png" alt="Conexion">
            `
        } else {
            $seccion11.innerHTML += `
                <p class="p-conexion">Offline</p>
                <img class="img-conexion" src="imagenes/desconectado.png" alt="Descsonectado">
            `
        };
    };

    const $p = $seccion11.querySelector(".p-conexion"),
         $img = $seccion11.querySelector(".img-conexion");

    w.addEventListener("online", () => {
        // console.log("Hola estoy conectado");
        $p.textContent = "Online";
        $img.setAttribute("src", "imagenes/conectado.png");

        $div.className = "online";
        $div.textContent = "Conexión reestablecida";
        d.body.appendChild($div);
    });
    
    w.addEventListener("offline", () => {
        // console.log("Hola no estoy conectado");
        $p.textContent = "Offline";
        $img.setAttribute("src", "imagenes/desconectado.png");

        $div.className = "offline";
        $div.textContent = "Se ha perdido la conexión";
        d.body.appendChild($div);
    });
};