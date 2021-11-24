function mode(){
    /*Funcion para el modo oscuro*/
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
function validarcontra(){
    /*Funcion para validar ambas contraseñas*/
    contra1 = document.getElementById("pass").value;
    contra2 = document.getElementById("repass").value;
    if(contra1 != '' && contra2 != ''){
        if(contra1 == contra2){
            expreg = /[0-9]/d;
            if(expreg.test(contra1) == true){
                expreg = /[a-z]/d;
                if(expreg.test(contra1) == true){
                    expreg = /[A-Z]/d;
                    if(expreg.test(contra1) == true){
                        document.getElementById("warning").innerHTML = "";
                        return contra1;
                    }
                    else{
                        document.getElementById("warning").innerHTML = "Las contraseñas deben de tener almenos una mayuscula";
                        return ""
                    }
                }
                else{
                    document.getElementById("warning").innerHTML = "Las contraseñas deben de tener almenos una minuscula";
                    return ""
                }
            }
            else{
                document.getElementById("warning").innerHTML = "Las contraseñas deben tener almenos un numero";
                return ""
            }
        }
        else{
            document.getElementById("warning").innerHTML = 'Deben ser iguales ambas contraseñas';
            return ""
        }
    }
    else{
        document.getElementById("warning").innerHTML = "Las contraseñas estan vacias";
        return ""
    }
};
function validarrut(){
    /*Funcion para validar que el input no este vacio, y comprobar si el rut es valido o no */
    document.getElementById("rutval").innerHTML = "";
    let rut = document.getElementById("rut").value;
    if(rut != ""){
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
                multiplicador = 2;
            }
        }
        let digitocalculado = 11 - (acumulador%11);
        if(digitocalculado == ut){
            console.log("El rut es valido");
            return rut;
        }
        else{
            console.log("El rut no es valido");
            return ""
        }
    }
    else{
        document.getElementById("rutval").innerHTML = "La pestaña de rut esta vacia";
        return ""
    }
    
}
function validarname(){
    /*Funcion para validar que el input name no este vacio*/
    document.getElementById("nameval").innerHTML = ""
    let name = document.getElementById("name").value;
    if (name != ""){
        return name
    }
    else{
        document.getElementById("nameval").innerHTML = "El nombre esta vacio"
        return "";
    }
}
function validarapell(){
    /*Funcion para validar que el input last_name no este vacio*/
    document.getElementById("lastnameval").innerHTML = ""
    let last_name = document.getElementById("last_name").value;
    if(last_name != ""){
        return last_name;
    }
    else{
        document.getElementById("lastnameval").innerHTML = "El Apellido esta vacio";
        return "";
    }
}

function validarmail(){
    /*Funcion para validar que el input mail no este vacio*/ 
    document.getElementById("mailval").innerHTML = ""
    let mail = document.getElementById("email").value;
    if(mail != ""){
        return mail;
    }
    else{
        document.getElementById("mailval").innerHTML = "El correo esta vacio"
        return "";
    }
}
function llamar(){
    /*Funcion para llamar a las demas funciones */
    rut = validarrut();
    nombre = validarname();
    apellido = validarapell();
    mail = validarmail();
    contraseña = validarcontra();
    if(rut != "" && nombre != "" && apellido != "" && mail != "" && contraseña != ""){
        console.log(rut);
        console.log(nombre);
        console.log(apellido);
        console.log(mail);
        console.log(contraseña)
        alert("El Formulario fue enviado exitosamente")
    }
    else{
        alert("El Formulario no pudo ser enviado por varios errores")
    }
}