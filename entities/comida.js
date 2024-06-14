export class Comida{
    tipo;
    porcentaje;
    proteina;
    
    constructor(tipo){
        this.tipo=tipo;
    }

    constructor(porcentaje){
        this.porcentaje=porcentaje;
    }

    constructor(proteina){
        this.proteina=proteina;
    }
}