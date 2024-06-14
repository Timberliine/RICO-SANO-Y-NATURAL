export class PlanAlimenticio{
    paciente;
    comidas=[];
    edad;
    pesoActual;
    medidaDeCintura;
    duracionDelPlan;
    objetivos;


cantidadDeComidas(){
    return(this.comidas.length);
}
evaluar(){
    const objetivosCumplidos= this.objetivos.filter(obj => obj.cumplido).length;
    const totalObjetivos= this.objetivos.length;
    const porcentaje= (objetivosCumplidos/totalObjetivos)*100;

    if(porcentaje==100)return 'Excelente';
    if(porcentaje>60)return 'Muy buena';
    if(porcentaje>=50)return 'Buena';
    return 'Regular';
}

agregarComida(comida){
    this.comidas.push(comida);
}

agregarColacion(colaciones){
    this.colacion.push(colaciones);
}

agregarBebida(bebidas){
    this.bebida.push(bebidas);
}

obtenerTotalComida(){
    return this.comidas.length;
}

obtenerTotalComidaPorTipo(tipo){
    return this.comidas.filter(comida => comida.tipo === tipo).length;
}

esFuerteEnProteinas(){
    const comidaAC= this.comidas.filter(comida => comida.tipo==="AC");
    const promedioProteina= comidaAC.forEach( ac => ac. + comida.proteina)/comidaAC.length;
    return promedioProteina>=50
}
}