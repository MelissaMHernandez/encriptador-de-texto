const d = document;
const textArea= d.querySelector(".form__input");
const imagenMuñeco =d.querySelector(".result__img");
const loaderLoading = d.querySelector(".loader");
const resultTitle = d.querySelector(".result__title");
const resultText = d.querySelector(".result__text");
const botonEncriptar = d.querySelector(".form__btn");
const botonDesencriptar = d.querySelector(".form__btn_desencriptar");
const botonCopiar = d.querySelector(".result__btn");


const llaves =[
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];
//funcion para encriptar
function encriptarmensaje(mensaje) {
    let mensajeEncriptado = "";
    for(let i = 0; i < mensaje.length; i++) {
        let letra = mensaje[i];
        let encriptada = letra;
        for (let j = 0; j < llaves.length; j++) {
            if(letra === llaves[j][0]) {
                encriptada = llaves[j][1] //Reemplaza la letra por su equivalente equipado
                break; //Termina el bucle cuansdo se encuentra la correspondencia
            }
        }
        mensajeEncriptado += encriptada
    }
    return mensajeEncriptado;
}
   
//funcion para desencriptar
function desencriptarMensaje(mensaje) {
let mensajeDesencriptado = mensaje;
for (let i = 0; i < llaves.length; i++) {
    let regex = new RegExp(llaves[i][1], 'g'); 
    mensajeDesencriptado = mensajeDesencriptado.replace(regex, llaves[i][0]);
}
return mensajeDesencriptado;
} 


//Lo use para ocultar elementos dinamicamente
textArea.addEventListener("input", (e)=>{
    imagenMuñeco.style.display = "none";
    loaderLoading.classList.remove("hidden");
    resultTitle.textContent = "Capturando Mensaje";
    resultText.textContent = "";
})
//Funcion del boton para encriptar
botonEncriptar.addEventListener("click", (e)=>{

    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeEncriptado = encriptarmensaje(mensaje);
    resultText.textContent = mensajeEncriptado;
    botonCopiar.classList.remove("hidden");
    resultTitle.textContent = "El resultado es:";
})

botonDesencriptar.addEventListener("click", (e)=>{
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeDesencriptado = desencriptarMensaje(mensaje);
    resultText.textContent = mensajeDesencriptado;
    resultTitle.textContent = "El resultado es:";
    botonCopiar.classList.remove("hidden");
})

botonCopiar.addEventListener("click", ()=>{
    let textoCopiado = resultText.textContent;
    navigator.clipboard.writeText( textoCopiado).then(()=> {
        imagenMuñeco.style.display = "block";
        loaderLoading.classList.add("hidden");
        resultTitle.textContent = "Texto copiado";
        botonCopiar.classList.add("hidden");
        resultText.textContent = "";
    })
})




