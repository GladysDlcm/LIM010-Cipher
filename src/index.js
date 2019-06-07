//Variables globales
const usuario = document.getElementById('usuario');
const btn_enviar = document.getElementById('btn_enviar');
let intentos = 0;

//Funcionalidad Login
btn_enviar.addEventListener('click', () => {
const nombre = usuario.value;
const pass_ingreso = document.getElementById('password').value;

    if (intentos == 2) {        //Error 3er intento
        document.getElementById("password").disabled = true;
        document.getElementById("usuario").disabled = true;
        document.getElementById("btn_enviar").disabled = true;
        document.getElementById("error").innerHTML= "Ya utilizaste todos tus intentos, en este momento no podrás ingresar.";
    }
    else {      //Contraseña correcta ingresar
        if (pass_ingreso == "LABORATORIA") {   
            document.getElementById("hola_usuario").innerHTML = "Bienvenido " + nombre + ", los datos que ingresaras serán confidenciales.";
            document.getElementById('pantalla_login').classList.add('hide');
            document.getElementById('pantalla_cifrado').classList.remove('hide');
        }
        else {
            if (intentos == 0){      //Error 1er intento
                document.getElementById("error").innerHTML = "La contraseña es incorrecta.";
            }
            if (intentos == 1){      //Error 2er intento   
                document.getElementById("error").innerHTML = "La contraseña es incorrecta, intente de nuevo.";
            } 
        }  
        intentos++;  //Cuenta intentos
    }  
});