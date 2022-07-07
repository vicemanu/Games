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
var posJogIniX = 10;
var posCpuIniX = 860;


var campoX= 0;
var campoY= 0;
var campoW = 890;
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

function controlacpu() {
    if (jogo) {
        if((posBolaX > (campoW/2))&& (bolaX > 0)) {

            if(((posBolaY+(bolaH/2))>((posCpuY+(barraH/2)))+velCpu)) {
                if((posCpuY+barraH)<= campoH) {
                    posCpuY+=velCpu;
                }
            } else if ((posBolaY+(bolaH/2)) < (posCpuY+(barraH/2)) -velCpu) {
                if(posCpuY >= 0) {
                    posCpuY-=velCpu;
                }
            }
        } else {
            if ((posCpuY+(barraH/2)) < (campoH/2)) {
                posCpuY+=velCpu;
            } else if((posCpuY+(barraH/2)) > (campoH/2)) {
                posCpuY -=velCpu;
            }
        }
        vcpu.style.top = posCpuY + "px"
    }
}

function controlaBola() {
    posBolaX += velBola * bolaX;
    posBolaY += velBola * bolaY;

    //Colisão com Jogador
    if(
        (posBolaX <= posJogadorX+barraW) && ((posBolaY+bolaH >= posJogadorY) && (posBolaY<= posJogadorY+barraH))
        ) {
            bolaY = ((bolaY=posBolaY+(bolaH/2)) - (posJogadorY+(barraH/2)))/16;
            bolaX *= -1;
      }

    //Colisão com CPU
    if((posBolaX >= (posCpuX-barraW)) && ((posBolaY+bolaH) >= posCpuY) && (posBolaY<= (posCpuY+barraH))) {

        bolaY = ((bolaY=posBolaY+(bolaH/2)) - (posCpuY+(barraH/2)))/16;
        bolaX*= -1
      }
    
      // Colisão com a barra superior e inferior 

      if (posBolaY >= 480 || posBolaY <= 0) {
          bolaY *= -1
      }

      // Se marcar ponto 

      if (posBolaX >= campoW-bolaW) {
          velBola = 0;
          
          posJogadorY = posJogIniY
          posCpuY = posCpuIniY
          pontos ++
          vPaineltxtPontos.value = pontos;
          jogo =false;
          vjogador.style.top = posJogadorY+"px"
          vcpu.style.top = posCpuY + "px"
          posBolaX = posBolaIniX
          posBolaY = posBolaIniY

      }else if (posBolaX <= 0) {
        velBola = 0;
        posJogadorY = posJogIniY
        posCpuY = posCpuIniY
        pontos --
        vPaineltxtPontos.value = pontos;
        jogo =false;
        vjogador.style.top = posJogadorY+"px"
        vcpu.style.top = posCpuY+"px"
        posBolaX = posBolaIniX
        posBolaY = posBolaIniY

    }

    vbola.style.top = posBolaY +"px"
    vbola.style.left = posBolaX +"px"
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
        controlacpu()
    }
    frame = requestAnimationFrame(game);
}


function iniciaJogo() {
    if (!jogo) {
        velBola = velCpu = velJogador = 8;
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
        posJogadorX=posJogIniX;
        posCpuX=posCpuIniX;
        game();
}   
    
}

function iniciliza(){
    velBola = velCpu = velJogador = 8;
    vbtIniciar=document.getElementById("btIniciar");
    vbtIniciar.addEventListener("click", iniciaJogo)
    vjogador=document.getElementById("dvJogador");
    vcpu = document.getElementById("dvCPU")
    vbola=document.getElementById("dvBola");
    vPaineltxtPontos=document.getElementById("txtPontos");
    document.addEventListener("keydown", teclaDw);
    document.addEventListener("keyup", teclaUp);

}

window.addEventListener("load", iniciliza);