document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('texto_semTexto').style.display = 'block';
    document.getElementById('texto_comTexto').style.display = 'none';
})

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
};

const codificador = () => {

    let texto = document.querySelector('textarea').value;

    texto = texto.split(" ");
    let textoCodificado="";
    for(palavra of texto){
        
      for(letra of palavra){
        if(letra === "a"){
            textoCodificado += "ai"
        }
        else if(letra === "e"){
            textoCodificado += "enter"
        }
        else if(letra === "i"){
            textoCodificado += "imes"
        }
        else if(letra === "o"){
            textoCodificado += "ober"
        }
        else if(letra === "u"){
            textoCodificado += "ufat"
        }
        else{
            textoCodificado += letra
        };
     
      };
      textoCodificado += " "
    };
    document.getElementById('texto_semTexto').style.display = 'none';
    document.getElementById('texto_comTexto').style.display = 'block';
  exibirTextoNaTela("h2", textoCodificado);
};

const decodificar = () => {
    let texto = document.querySelector('textarea').value;

    texto = texto.split(" ");
    let textoDecodificado = "";
     for(palavra of texto){
        let validacao = palavra.includes("ober") || palavra.includes("enter") || palavra.includes("imes") || palavra.includes("ober") || palavra.includes("ufat");
            while(validacao === true){
          palavra = palavra.replace(/ai/i, "a");
          palavra = palavra.replace(/enter/i, "e");
          palavra = palavra.replace(/imes/i, "i");
          palavra = palavra.replace(/ober/i, "o");
          palavra = palavra.replace(/ufat/i, "u");
    validacao = palavra.includes("ober") || palavra.includes("enter") || palavra.includes("imes") || palavra.includes("ober") || palavra.includes("ufat") || palavra.includes("ai");
            };
         textoDecodificado += palavra + " ";
     };

     document.getElementById('texto_semTexto').style.display = 'none';
     document.getElementById('texto_comTexto').style.display = 'block';
    exibirTextoNaTela("h2", textoDecodificado);
};

const copiarTexto = () => {
            const textoCopiar = document.getElementById('texto_comTexto').querySelector('h2').innerText;
            navigator.clipboard.writeText(textoCopiar)
        };