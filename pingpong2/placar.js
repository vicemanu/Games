class Placar{
    constructor(box, wid) {
        this.box = box;
        this.wid =  wid;
        this.margem = 10
        this.largura = 100

    }
    desenhar() {
        this.box.font = "60px arial";
        this.box.fillStyle = "#000"
        this.box.fillText(pj1, this.margem+30, this.margem+70, this.largura)
        this.box.fillText(pj2, this.wid-this.margem-this.largura, this.margem+70, this.largura)

    }
}