
const inputText = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");
const h3 = document.querySelector(".container-h3");
const parrafo = document.querySelector(".container-parrafo");
const copiar = document.querySelector(".copiar");


function btnEncriptar() {
    const textEncriptado = encriptar(inputText.value);
    mensaje.value = textEncriptado;
    mensaje.style.backgroundImage = "none";
    h3.style.display = 'none';
    parrafo.style.display = 'none';
    copiar.style.display = 'block';
    inputText.value = "";
}

function encriptar(stringEncriptado){
    let codigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
stringEncriptado = stringEncriptado.toLowerCase();

for(let i = 0; i < codigo.length; i++){
    if(stringEncriptado.includes(codigo[i][0])){
        stringEncriptado = stringEncriptado.replaceAll
        (codigo[i][0],codigo[i][1])
    }
}
  return stringEncriptado;
}


function btnDesencriptar(){
   const textEncriptado = desecriptar(inputText.value);
    mensaje.value = textEncriptado;
    inputText.value = "";
}

function desecriptar(stringDesencriptado){
    let codigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        stringDesencriptado = stringDesencriptado.toLowerCase();

for(let i = 0; i < codigo.length; i++){
    if(stringDesencriptado.includes(codigo[i][1])){
        stringDesencriptado = stringDesencriptado.replaceAll
        (codigo[i][1],codigo[i][0])
    }
}
return stringDesencriptado;
}

function copiarTexto() {
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";
}

