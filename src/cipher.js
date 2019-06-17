window.cipher = {
  encode: (offset, string) => {
    //string=string.toUpperCase();
    //string="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    //offset=33;

    let resultado = '';

    for (let i = 0; i < string.length; i++) {
      if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
        let nuevoCaracter = ((string.charCodeAt(i) - 65 + offset) % 26 + 65);
        //console.log(string.charCodeAt(i) + " - " + string.charAt(i) + " - " + nuevoCaracter + " - " + String.fromCharCode(nuevoCaracter));
        resultado += `${String.fromCharCode(nuevoCaracter)}`;
      }
      else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
        let nuevoCaracter = ((string.charCodeAt(i) - 97 + offset) % 26 + 97);
        resultado += `${String.fromCharCode(nuevoCaracter)}`;
      }
      else {
        resultado += `${string.charAt(i)}`;
      }
    }
    return resultado;
  },
  decode: (offset, string) => {
    //string=string.toUpperCase();
    //string="HIJKLMNOPQRSTUVWXYZABCDEFG";
    //offset=33;

    let resultado = '';

    for (let i = 0; i < string.length; i++) {
      if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
        let nuevoCaracter = ((string.charCodeAt(i) + 65 - offset) % 26 + 65);
        //console.log(string.charCodeAt(i) + " - " + string.charAt(i) + " - " + nuevoCaracter + " - " + String.fromCharCode(nuevoCaracter));
        resultado += `${String.fromCharCode(nuevoCaracter)}`;
      }
      else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
        let nuevoCaracter = ((string.charCodeAt(i) - 97 - offset) + 52) % 26 + 97;
        resultado += `${String.fromCharCode(nuevoCaracter)}`;
      }
      else {
        resultado += `${string.charAt(i)}`;
      }
    }
    return resultado;
  },
};
