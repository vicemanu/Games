var vbtIniciar;
var vbola;
var vcpu;
var vjogador;
var vPaineltxtPontos;


var game;
var frame;

var posBolaX;
var posBolaY;
var posJogadorX;
var posJogadorY;
var posCpuX;
var posCpuY;

var dirJy;

var posJogIniY = 180;
var posCpuIniY = 180;
var posBolaIniX = 475;
var posBolaIniY = 240;


var campoX= 0;
var campoY= 0;
var campoW = 960
var campoH = 500;
var barraW = 20;
var barraH = 140;
var bolaW = 20;
var bolaH = 20;

var bolaX,bolaY;
var jogY = 0, cpuY = 0;


var velBola, velCpu, velJogador;

var pontos = 0;
var tecla;
var jogo = false;


function controlajog() {
    if(jogo) {
        posJogadorY += velJogador*dirJy

        if ((posJogadorY+barraH)>= campoH || posJogadorY <= 0){
            posJogadorY += (velJogador*dirJy)*-1;
        }
        vjogador.style.top = posJogadorY +"px";
    }
}

function controlaBola() {
    posBolaX += velBola * bolaX;
    posBolaY += velBola * bolaY;

    vbola.style.top = posBolaY+"px";
    vbola.style.left = posBolaX+"px"
}


function teclaDw(e) {
    tecla = e.key
    if(tecla === "ArrowUp" || tecla === "w") {
        dirJy= -1;
    } else if (tecla === "ArrowDown" || tecla === "s") {
        dirJy= 1;
    }
}

function teclaUp(e) {
    tecla = e.key
    if(tecla === "ArrowUp" || tecla === "w") {
        dirJy= 0;
    } else if (tecla === "ArrowDown"|| tecla === "s") {
        dirJy= 0;
    }
}




function game() {
    if (jogo) {
        controlajog()
        controlaBola()
    }
    frame = requestAnimationFrame(game);
}


function iniciaJogo() {
    if (!jogo) {
        cancelAnimationFrame(frame);
        jogo = true;
        dirJy = 0;

        if (Math.random()*10 <= 5) {
            bolaX = -1
        } else {
            bolaX = 1
        }
        bolaY = 0;
        posBolaX = posBolaIniX
        posBolaY = posBolaIniY;
        posJogadorY = posJogIniY;
        posCpuY = posCpuIniY;
        game();
}   
    
}

function iniciliza(){
    velBola = velCpu = velJogador = 8;
    vbtIniciar=document.getElementById("btIniciar");
    vbtIniciar.addEventListener("click", iniciaJogo)
    vjogador=document.getElementById("dvJogador");
    vcpu=document.getElementById("dvCpu");
    vbola=document.getElementById("dvBola");
    vPaineltxtPontos=document.getElementById("txtPontos");
    document.addEventListener("keydown", teclaDw);
    document.addEventListener("keyup", teclaUp);

}

window.addEventListener("load", iniciliza);