function present(){
    var contenedor = document.getElementsByClassName("contenedor_1")[0];
    var computedStyle = window.getComputedStyle(contenedor); 
    

    if(computedStyle.style.visibility == "hidden") {
        contenedor.style.visibility = "visible";
    }
    else{
        contenedor.style.visibility = "hidden";

    }
}