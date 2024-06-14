import { PlanAlimenticio } from "../entities/plan_alimenticio";
import { Comida } from "../entities/comida";

test("Crear un plan alimenticio correctamente", () =>{
    const plan_alimenticio = new PlanAlimenticio();

    plan_alimenticio.agregarComida(new Comida("AC"));
    plan_alimenticio.agregarComida(new Comida("AC"));
    plan_alimenticio.agregarComida(new Comida("DM"));
    plan_alimenticio.agregarComida(new Comida("DM"));


    expect(plan_alimenticio.obtenerTotalComida()).toBe(4);
    expect(plan_alimenticio.obtenerTotalComidaPorTipo("AC")).toBe(2);
    expect(plan_alimenticio.obtenerTotalComidaPorTipo("DM")).toBe(2);

})