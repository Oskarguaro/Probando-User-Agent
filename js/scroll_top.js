const d = document;

export default function btnScrollTop(btnScroll) {
    const $btnScroll = d.querySelector(btnScroll);

    d.addEventListener("scroll", () => {
        if(d.documentElement.scrollTop > 862){
            if($btnScroll.matches(".ocultar")){
                $btnScroll.classList.remove("ocultar");
            };
        } else if(!$btnScroll.matches(".ocultar")) {
            $btnScroll.classList.add("ocultar");
        };
    });

    d.addEventListener("click", (e) => {

        if(e.target.matches(btnScroll)){
            scroll({
                top: 0,
                behavior: "smooth",
            });        
        };
    });
};
