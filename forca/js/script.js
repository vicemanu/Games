var cor = ["AZUL", "AMARELO", "VERMELHO", "VERDE", "TURQUESA", "LARANJA", "ROSA","AZUL MARINHO","BRANCO NAVAJO","CEREJA", "CIANO","ESMERALDA", "FANDANGO", "FELDSPATO"] 
var lugar = ["BRASIL", "ESTADOS UNIDOS", "ARGENTINA", "ESPANHA", "AFRICA DO SUL", "ANDORRA", "BRUNEI", "BULGARIA", "CANADA"] 

var categorias = [cor, lugar];
var nmCategoria = ["COR", "LUGAR"]


var rdcategoria = Math.round(Math.random()*(categorias.length-1));
var categoriaEscolhida = categorias[rdcategoria]
var nomeCategoria = nmCategoria[rdcategoria]

var rdpalavra = Math.round(Math.random()*(categoriaEscolhida.length-1))
var nmPalavra = categoriaEscolhida[rdpalavra]


var categoria;
var palavraSecreta;
var listaDinamica = [];

var tentativas = 6;

var img = document.getElementById("imagem")

console.log(nomeCategoria)
console.log(nmPalavra)

palavraNaTela()
function palavraNaTela() {
    var categoriaTela = document.getElementById("categoria")
    categoriaTela.innerHTML = nomeCategoria

    var palavraSecreta = document.getElementById("plv-secreta")
    palavraSecreta.innerHTML = ""

    for(i=0; i < nmPalavra.length; i++) {
       if(listaDinamica[i] == undefined)  {
           listaDinamica[i] = "&nbsp;"
           palavraSecreta.innerHTML += "<div class='letras'>"+listaDinamica[i]+"</div>"
       } else {
        palavraSecreta.innerHTML += "<div class='letras'>"+listaDinamica[i]+"</div>"
       }
    }

}



function letraEscolhida(letra) {
    document.getElementById("tecla-"+ letra).disabled = true
    if(tentativas > 0) {
        mudarLetra("tecla-"+ letra)
        compararPalavra(letra)
        palavraNaTela()
    }
    
}

function mudarLetra(letra) {
    document.getElementById(letra).style.background = "#8B008B";
    document.getElementById(letra).style.color = "white";
}

function compararPalavra(letra) {
    var pos = nmPalavra.indexOf(letra)
    console.log(pos)
    if(pos < 0) {
        tentativas--
        carregaImagem()

        if (tentativas == 0) {
            window.alert("Infelizmente você perdeu!")
        }

    }else {
        for(i=0; i < nmPalavra.length; i++) {
            if(nmPalavra[i] == letra) {
                listaDinamica[i] = letra;
            }
        }
    }

    var vitoria = true
    for(i=0; i < nmPalavra.length; i++) {
        if(nmPalavra[i] != listaDinamica[i]) {
            vitoria = false
        }
    }

    if (vitoria == true) {
        window.alert("Parabens!!! você venceu")
        tentativas = 0
    }
}

function carregaImagem() {
    switch(tentativas){
        case 5:
            img.style.background = "url(./img/forca01.png)"
        break;
        case 4:
            img.style.background = "url(./img/forca02.png)"
        break;
        case 3:
            img.style.background = "url(./img/forca03.png)"
        break;
        case 2:
            img.style.background = "url(./img/forca04.png)"
        break;
        case 1:
            img.style.background = "url(./img/forca05.png)"
        break;
        case 0:
            img.style.background = "url(./img/forca06.png)"
        break;
        default:
            img.style.background = "url(./img/forca.png)"
    }
}


var reiniciar = document.getElementById("btnReset");
reiniciar.addEventListener("click", function(){
    location.reload();
})