//Variables globales
const usuario = document.getElementById('usuario');
const password = document.getElementById('password');
const btnEnviar = document.getElementById('btn-enviar');
const btnCifrar = document.getElementById('cifrar');
const btnDecifrar = document.getElementById('decifrar');
const btnBorrar = document.getElementById('borrar');
const btnCerrar = document.getElementById('cerrar');
let intentos = 0;


//Funcionalidad Login
btnEnviar.addEventListener('click', () => {
const nombre = usuario.value;
const passIngreso = password.value;

    if (intentos == 2) {        //Error 3er intento
        document.getElementById('password').disabled = true;
        document.getElementById('usuario').disabled = true;
        document.getElementById('btn-enviar').disabled = true;
        document.getElementById('error').innerHTML= 'Ya utilizaste todos tus intentos, en este momento no podrás ingresar.';
    }
    else {      //Contraseña correcta ingresar
        if (passIngreso == 'LABORATORIA') {   
            document.getElementById('hola-usuario').innerHTML = 'Bienvenido ' + nombre + ', los datos que ingresaras serán confidenciales.';
            document.getElementById('pantalla-login').classList.add('hide');
            document.getElementById('pantalla-cifrado').classList.remove('hide');
        }
        else {
            if (intentos == 0){      //Error 1er intento
                document.getElementById('error').innerHTML = 'La contraseña es incorrecta.';
            }
            if (intentos == 1){      //Error 2er intento   '
                document.getElementById('error').innerHTML = 'La contraseña es incorrecta, intente de nuevo.';
            } 
        }  
        intentos++;  //Cuenta intentos
    }  
});

//Boton cifrar
btnCifrar.addEventListener('click', () => {
    let numeroMes = document.getElementById('offset').value;
    let datosPaciente = document.getElementById('datos').value;
    document.getElementById('resultado').innerHTML = cipher.encode(parseInt(numeroMes), datosPaciente);
    document.getElementById('mensaje').innerHTML= 'El código se ha generado con exito.';
});

//Boton decifrar
btnDecifrar.addEventListener('click', () => {
    let numeroMes = document.getElementById('offset').value;
    let datosPaciente = document.getElementById('datos').value;
    document.getElementById('resultado').innerHTML = cipher.decode(parseInt(numeroMes), datosPaciente);
    document.getElementById('mensaje').innerHTML= 'El código se ha generado con exito.';
});

//Boton borrar
btnBorrar.addEventListener('click', () => {
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('mensaje').innerHTML= ''; 
});

//Boton cerrar
btnCerrar.addEventListener('click', () => {
    location.reload(true);
});



