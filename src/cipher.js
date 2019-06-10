window.cipher = {
  encode: (offset, string) => {
    
    string=string.toUpperCase();
    // string="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // offset=33;

    let resultado = '';
    
    for(let i = 0; i < string.length; i++) {
      let nuevoCaracter = (( string.charCodeAt(i) - 65 + offset) % 26 + 65);
    //console.log(string.charCodeAt(i) + " - " + string.charAt(i) + " - " + nuevoCaracter + " - " + String.fromCharCode(nuevoCaracter));
      resultado = resultado + String.fromCharCode(nuevoCaracter);
    };

    return resultado;
  },
  decode: (offset, string) => {

    string=string.toUpperCase();
    // string="HIJKLMNOPQRSTUVWXYZABCDEFG";
    // offset=33;

    let resultado = '';
    
    for(let i = 0; i < string.length; i++) {
      let nuevoCaracter = (( string.charCodeAt(i) + 65 - offset) % 26 + 65);
    //console.log(string.charCodeAt(i) + " - " + string.charAt(i) + " - " + nuevoCaracter + " - " + String.fromCharCode(nuevoCaracter));
      resultado = resultado + String.fromCharCode(nuevoCaracter);
    };

    return resultado;
  }
};
