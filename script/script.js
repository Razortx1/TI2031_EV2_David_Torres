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
/*Funcion para validar ambas contraseñas*/
function validarcontra(){
    contra1 = document.getElementById("pass").value
    contra2 = document.getElementById("repass").value
    if(contra1 != '' && contra2 != ''){
        if(contra1 == contra2){
            expreg = /[0-9]/d
            if(expreg.test(contra1) == true){
                expreg = /[a-z]/d
                if(expreg.test(contra1) == true){
                    expreg = /[A-Z]/d
                    if(expreg.test(contra1) == true){
                        document.getElementById("warning").innerHTML = ""
                    }
                    else{
                        document.getElementById("warning").innerHTML = "Las contraseñas deben de tener almenos una mayuscula"
                    }
                }
                else{
                    document.getElementById("warning").innerHTML = "Las contraseñas deben de tener almenos una minuscula"
                }
            }
            else{
                document.getElementById("warning").innerHTML = "Las contraseñas deben tener almenos un numero"
            }
        }
        else{
            document.getElementById("warning").innerHTML = 'Deben ser iguales ambas contraseñas'
        }
    }
    else{
        document.getElementById("warning").innerHTML = "Las contraseñas estan vacias"
    }
};
function validarrut(){
    let rut = document.getElementById("rut").value;
    let aux = rut.split("-");
    let fr = aux[0];
    let ut = aux[1];
    let rutinver = fr.split("").reverse();
    let acumulador = 0;
    let multiplicador = 2;
    for(let numero of rutinver){
        acumulador += parseInt(numero) * multiplicador;
        multiplicador++
        if(multiplicador==8){
            multiplicador = 2
        }
    }
    let digitocalculado = 11 - (acumulador%11)
    if(digitocalculado == ut){
        console.log("El rut es valido")
    }
    else{
        console.log("El rut no es valido")
    }
}