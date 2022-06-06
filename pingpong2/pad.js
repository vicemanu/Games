//jogador 1

class Pad1{
    constructor (box, teclado, wid, hei) {
        this.box = box
        this.teclado = teclado
        this.vel = 6
        this.largura = 20
        this.altura = 100
        this.wid = wid
        this.hei = hei
        this.x = 5
        this.y = (this.hei/2) - (this.altura/2)
    }

    gerenciar() {
        if(this.teclado.esquerda) {
            if(this.x > 0)
            this.x-= this.vel
        }

        if(this.teclado.direita) {
            if(this.x < (this.wid/3) - this.largura)
            this.x+= this.vel
        }

        if(this.teclado.cima) {
            if(this.y > 0)
            this.y-= this.vel
        }

        if(this.teclado.baixo) {
            if(this.y < (this.hei - this.altura))
            this.y+= this.vel
        }

    }

    desenhar() {
        this.gerenciar()
        this.box.fillStyle="#000";
        this.box.fillRect(this.x,this.y,this.largura,this.altura)
    }
}

//jogador 2


class Pad2{
    constructor (box, teclado, wid, hei) {
        this.box = box
        this.teclado = teclado
        this.vel = 6
        this.largura = 20
        this.altura = 100
        this.wid = wid
        this.hei = hei
        this.x = this.wid - 5 - this.largura
        this.y = (this.hei/2) - (this.altura/2)
    }

    gerenciar() {
        if(this.teclado.esquerda) {
            if(this.x > this.wid/3*2)
            this.x-= this.vel
        }

        if(this.teclado.direita) {
            if(this.x < (this.wid) - this.largura)
            this.x+= this.vel
        }

        if(this.teclado.cima) {
            if(this.y > 0)
            this.y-= this.vel
        }

        if(this.teclado.baixo) {
            if(this.y < (this.hei - this.altura))
            this.y+= this.vel
        }
        

    }

    desenhar() {
        this.gerenciar()
        this.box.fillStyle="#000";
        this.box.fillRect(this.x,this.y,this.largura,this.altura)
    }
}