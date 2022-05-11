var cor = ["azul", "amarelo", "vermelho", "verde", "turquesa", "laranja", "rosa"] 
var lugar = ["brasil", "estados unidos", "argentina", "espanha"] 

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