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

    it("Forma expect", () => {
        //arrange
        const nombre: string = "Johnson";
        const edad: number = 25;
        const tareas: Array<string> = ["tarea", "cocinar", "lavar", "estudiar"];
        const numSuerte: Array<number> = [34, 12, 567, 9, 874, 1000];
        const id: Object = { "nombre": "Johnson", "edad": 25, "color": "azul" };

        //act

        //assert
        expect(nombre).to.be.ok;
        expect(nombre).to.be.a("string");
        expect(nombre).to.be.equal("Johnson");
        
        expect(edad).to.be.ok;
        expect(edad).to.be.a("number");
        expect(edad).to.be.equal(25);

        expect(tareas).to.be.ok;
        expect(tareas).to.be.a("array");
        expect(tareas).to.include("lavar");

        expect(numSuerte).to.be.ok;
        expect(numSuerte).to.be.a("array");
        expect(numSuerte).to.not.include(1);
        
        expect(id).to.be.ok;
        expect(id).to.be.a("object");
        expect(id).to.haveOwnProperty("color");
        expect(id).to.have.property("color", "azul");
    });

    it("Forma should", () => {
        should();
        //arrange
        const nombre: string = "Johnson";
        const edad: number = 25;
        const tareas: Array<string> = ["tarea", "cocinar", "lavar", "estudiar"];
        const numSuerte: Array<number> = [34, 12, 567, 9, 874, 1000];
        const id: Object = { "nombre": "Johnson", "edad": 25, "color": "azul" };

        //act

        //assert
        nombre.should.to.be.ok;
        nombre.should.to.be.a("string");
        nombre.should.to.be.equal("Johnson");
        
        edad.should.to.be.ok;
        edad.should.to.be.a("number");
        edad.should.to.be.equal(25);

        tareas.should.to.be.ok;
        tareas.should.to.be.a("array");
        tareas.should.to.include("lavar");

        numSuerte.should.to.be.ok;
        numSuerte.should.to.be.a("array");
        numSuerte.should.to.not.include(1);
        
        id.should.to.be.ok;
        id.should.to.be.a("object");
        id.should.to.haveOwnProperty("color");
        id.should.to.have.property("color", "azul");
    });
});