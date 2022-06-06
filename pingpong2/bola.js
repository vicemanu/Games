class Bola{
    constructor (box,jogador,Jogador2, wid, hei) {
        this.box = box
        this.vel = 6
        this.movimento = false
        this.jogador = jogador
        this.jogador2 = Jogador2
        this.largura = 20
        this.altura = 20
        this.wid = wid
        this.hei = hei
        this.dirX = 0
        this.dirY = 0
        this.x = (this.wid/2) - (this.largura/2)
        this.y = (this.hei/2) - (this.altura/2)
    }

    iniciar () {
        if(!this.movimento) {
        this.movimento = true
        this.dirX = Math.random()*10 > 5 ? -1 : 1
        this.dirY = Math.random()*10 > 5 ? -1 : 1
    }
    }

    gerenciar() {

        if(this.movimento) {
            this.x += this.dirX * this.vel
            this.y += this.dirY * this.vel

            if(this.x < 0 ) {
                this.dirX = 1
                pj2 ++
                this.pararBola()
                
            }
            if(this.x > this.wid-this.largura) {
                this.dirX = -1
                pj1 ++
                this.pararBola()
            }
            if(this.y < 0  || (this.y > this.hei-this.altura)) {
                this.dirY *= -1
            }
            

        }

        if(
            (this.x <= this.jogador.x+this.jogador.largura)&& (this.x+this.largura >= this.jogador.x) && 
            (this.y+this.altura >= this.jogador.y) && (this.y <= this.jogador.y + this.jogador.altura)
        ) {
            this.dirX *= -1
            this.dirY = ((this.y+this.altura)/2 - (this.jogador.y+this.jogador.altura)/2)/16
        }

        if(
            (this.x <= this.jogador2.x+this.jogador2.largura)&& (this.x+this.largura >= this.jogador2.x) && 
            (this.y+this.altura >= this.jogador2.y) && (this.y <= this.jogador2.y + this.jogador2.altura)
        ) {
            this.dirX *= -1
            this.dirY = ((this.y+this.altura)/2 - (this.jogador2.y+this.jogador2.altura)/2)/16
        }

    }

    pararBola() {
        this.movimento = false
        this.x = (this.wid/2) - (this.largura/2)
        this.y = (this.hei/2) - (this.altura/2)
        this.jogador.x = 5
        this.jogador.y = (this.jogador.hei/2) - (this.jogador.altura/2)
        this.jogador2.x = this.jogador2.wid - 5 - this.jogador2.largura
        this.jogador2.y = (this.jogador2.hei/2) - (this.jogador2.altura/2)

    }


 
    desenhar() {
        this.gerenciar()
        this.box.fillStyle="#000";
        this.box.fillRect(this.x,this.y,this.largura,this.altura)
    }
}