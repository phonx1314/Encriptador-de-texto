let sin_texto= document.querySelector(".sin-txt");
let btn_encriptar = document.querySelector("#btn-encriptar");
let btn_desencriptar = document.querySelector("#btn-desencriptar");
let seccion_copiar = document.querySelector("#seccion-copiar");
let resultado = document.querySelector("#txt-mostrar");
let most_txt = document.querySelector("#mostrar-texto");
let txt_area = document.querySelector("#ingreso-texto");

//window.onload = ocultar;


/**txt_area.addEventListener('input', function() {
  // Cambiar el fondo a verde cuando se escribe texto
  txt_area.style.backgroundColor = 'green';
});**/

txt_area.addEventListener('input', function() {
  // Cambiar el fondo a rojo cuando se borra todo el texto
  if (txt_area.value.trim() === '') {
    rot_no();
    sin_texto.classList.remove("ocultar");
    seccion_copiar.style.display = 'none';
  }else{
    btn_encriptar.onclick = encriptar;
    btn_desencriptar.onclick = desencriptar;    
  }
});

function rot(){  
    seccion_copiar.classList.add("rotadotxt");
    most_txt.classList.add("rotado");
}
function rot_no(){
    seccion_copiar.classList.remove("rotadotxt");
    most_txt.classList.remove("rotado");
}

function encriptar (){
    if(txt_area.value != ""){
        ocultar_adelante();
        rot();
        let caja_txt = recuperar_texto();
       // setTimeout(function() {
            resultado.textContent = encriptador(caja_txt);
       // }, 2000);
    }

}
function desencriptar (){

    if(txt_area.value != ""){
        ocultar_adelante();
        rot();
        let caja_txt = recuperar_texto();
        //setTimeout(function() {
            resultado.textContent = desencriptador(caja_txt);
        //}, 2000);
    }
}
function recuperar_texto(){
    let caja_txt = document.querySelector("#ingreso-texto");
    //setTimeout(function() {
        return caja_txt.value;
    //}, 2000);

}
function ocultar_adelante(){
    sin_texto.classList.add("ocultar");
    setTimeout(function() {
        seccion_copiar.style.display = 'block';
    }, 2000);
    //seccion_copiar.style.transition = 'display 5s ease-in-out 2s';
    //seccion_copiar.classList.remove("ocultar");
}
/*function ocultar(){
    seccion_copiar.classList.add("ocultar");
}*/


function encriptador(texto){
   let mensaje = texto;
   let aux = "";
   for (let i = 0; i < mensaje.length; i++) {
        if(mensaje[i] === "a"){
            
            aux = aux + "ai";  /*hola ----- hoberlaia */
        }
        else if(mensaje[i] == "e"){
            aux = aux +"enter";
        }
        else if(mensaje[i] == "i"){
            aux = aux +"imes";
        }
        else if(mensaje[i] == "o"){
            aux = aux +"ober";
        }
        else if(mensaje[i] == "u"){
            aux = aux +"ufat";
        }
        else{
            
            aux = aux + mensaje[i];  
            
        }
    
   }
   return aux;
}
function desencriptador(texto){
    let mensaje = texto;
    let aux = "";
    for (let i = 0; i < mensaje.length; i++) {
        if(mensaje[i] == "a"){
            aux = aux +"a";
            i=i+1;
        }
        else if(mensaje[i] == "e"){
            aux = aux +"e";
            i=i+4;
        }
        else if(mensaje[i] == "i"){
            aux = aux +"i";
            i=i+3;
        }
        else if(mensaje[i] == "o"){
            aux = aux +"o";
            i=i+3;
        }
        else if(mensaje[i] == "u"){
            aux = aux +"u";
            i=i+3;
        }
        else{
            aux = aux + mensaje[i];           
        }
     
    } 
    return aux;
}

let btn_copiar = document.querySelector("#btn-copiar");
btn_copiar.addEventListener("click",copiar = () =>{
    let contenido = document.querySelector("#txt-mostrar").textContent;
    navigator.clipboard.writeText(contenido);

})
