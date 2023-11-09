import { expect } from "chai";
import sinon, { SinonSpy } from "sinon";
import Calculadora from "../src/calculadora";

describe.only("spy, stub y mock", () => {
  let calc: Calculadora;
  let spy: SinonSpy;

  before(() => {
    calc = new Calculadora();
  });

  afterEach(() => {
    if (spy) spy.restore();
  })

  describe("Tests para suma", () => {
    it("Debe sumar dos numeros y devolver la suma de esos numeros", () => {
      //arrange
      spy = sinon.spy(calc, "suma");

      //act
      const suma = calc.suma(3, 8);

      //assert
      expect(suma).to.be.equal(11);
      expect(spy.calledOnceWith(3,8)).to.be.true;
    });
  });

  describe("Tests para resta", () => {
    it("Debe restar dos numeros y devolver la rsta de esos numeros", () => {
      //arrange
      spy = sinon.spy(calc, "resta");

      //act
      const suma = calc.resta(4, 2);

      //assert
      expect(suma).to.be.equal(2);
      expect(spy.calledOnceWith(4,2)).to.be.true;
    });
  });
});
