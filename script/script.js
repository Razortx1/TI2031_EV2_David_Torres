/*Funcion para el modo oscuro*/
function mode(){
    document.querySelector('.body').classList.toggle('dark');
    boton = document.getElementById("boton");
    if (boton.innerText == 'Modo Oscuro'){
        boton.innerText = 'Modo Claro';
        boton.className = 'btn btn-light';
    }
    else{
        boton.innerText = 'Modo Oscuro';
        boton.className = 'btn btn-dark';
    }
};