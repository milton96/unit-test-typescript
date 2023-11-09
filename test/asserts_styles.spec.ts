import { assert, expect, should } from "chai";

describe("Estilos de assert", () => {
    it("Forma assert", () => {
        //arrange
        const nombre: string = "Johnson";
        const edad: number = 25;
        const tareas: Array<string> = ["tarea", "cocinar", "lavar", "estudiar"];
        const numSuerte: Array<number> = [34, 12, 567, 9, 874, 1000];
        const id: Object = { "nombre": "Johnson", "edad": 25, "color": "azul" };

        //act

        //assert
        assert.isOk(nombre);
        assert.typeOf(nombre, "string");
        assert.equal(nombre, "Johnson");
        
        assert.isOk(edad);
        assert.typeOf(edad, "number");
        assert.equal(edad, 25);

        assert.isOk(tareas);
        assert.typeOf(tareas, "array");
        assert.include(tareas, "lavar");

        assert.isOk(numSuerte);
        assert.typeOf(numSuerte, "array");
        assert.notInclude(numSuerte, 1);
        
        assert.isOk(id);
        assert.typeOf(id, "object");
        assert.property(id, "color");
        assert.propertyVal(id, "color", "azul");
    });
});