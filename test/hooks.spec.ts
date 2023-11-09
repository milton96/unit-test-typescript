import { expect } from "chai";
import Calculadora from "../src/calculadora";

describe.skip("Clase Calculadora con hooks", () => {
  let calc: Calculadora;

  before(() => {
    console.log("Antes del primer test");
    calc = new Calculadora();
  });

  beforeEach(() => {
    console.log("Antes de cada test");
  });

  afterEach(() => {
    console.log("Despues de cada test");
  });

  after(() => {
    console.log("Despues del ultimo test");
  });

  it("Debe sumar dos numeros y devolver la suma de esos numeros", () => {
    //arrange
    //act
    const suma = calc.suma(3, 8);

    //assert
    expect(suma).to.be.equal(11);
  });

  it("Debe restar dos numeros y devolver la resta de esos numeros", () => {
    //arrange
    //act
    const resta = calc.resta(4, 2);

    //assert
    expect(resta).to.be.equal(2);
  });

  it("Debe multiplicar dos numeros y devolver la multiplicación de esos numeros", () => {
    //arrange
    //act
    const mutiplicacion = calc.multiplicacion(3, 8);

    //assert
    expect(mutiplicacion).to.be.equal(24);
  });

  it("Debe dividir dos numeros y devolver la división de esos numeros", () => {
    //arrange
    //act
    const division = calc.division(12, 3);

    //assert
    expect(division).to.be.equal(4);
  });

  it("Excepción al dividir por cero", () => {
    //arrange
    //act

    //assert
    expect(() => calc.division(12, 0)).to.throw("Division por cero");
  });
});
