class Calculadora {
  suma(a: number, b: number): number {
    return a + b;
  }

  resta(a: number, b: number): number {
    return a - b;
  }

  multiplicacion(a: number, b: number): number {
    return a * b;
  }

  division(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Division por cero");
    }
    return a / b;
  }
}

export default Calculadora;