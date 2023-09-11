// 1. Suma de elementos en un arreglo
function sumaElementos(arreglo) {
    const resultado = arreglo.reduce((acumulador, elemento) => acumulador + elemento, 0);
    return resultado;
  }
  
  // Ejemplo de uso:
  const numero = [1, 2, 3, 4, 5];
  const resultadoSuma = sumaElementos(numero);
  console.log(resultadoSuma); 
  
  // 2. Multiplicación de elementos en un arreglo
  function multiplicarElementos(arreglo) {
    const resultado = arreglo.reduce((acumulador, elemento) => acumulador * elemento, 1);
    return resultado;
  }
  
  // Ejemplo de uso:
  const num = [2, 3, 4];
  const resultadoMultiplicacion = multiplicarElementos(num);
  console.log(resultadoMultiplicacion); 
  
  // 3. Concatenación de cadenas en un arreglo
  function concatenarCadenas(arreglo) {
    const resultado = arreglo.reduce((acumulador, cadena) => acumulador + cadena, "");
    return resultado;
  }
  
  // Ejemplo de uso:
  const palabra = ["Hola", " ", "mundo", "!"];
  const resultadoConcatenacion = concatenarCadenas(palabra);
  console.log(resultadoConcatenacion); 
  
  // 4. Calcular el promedio de un arreglo de números
  function calcularPromedio(arreglo) {
    const suma = arreglo.reduce((acumulador, numero) => acumulador + numero, 0);
    const promedio = suma / arreglo.length;
    return promedio;
  }
  
  // Ejemplo de uso:
  const notas = [85, 90, 78, 92, 88];
  const resultadoPromedio = calcularPromedio(notas);
  console.log(resultadoPromedio); 
  
  // 5. Encontrar el valor máximo en un arreglo de números
  function encontrarMaximo(arreglo) {
    const maximo = arreglo.reduce((max, valorActual) => (valorActual > max ? valorActual : max), arreglo[0]);
    return maximo;
  }
  
  // Ejemplo de uso:
  const valores = [54, 23, 87, 12, 98];
  const resultadoMaximo = encontrarMaximo(valores);
  console.log(resultadoMaximo);
  
  // 6. Contar ocurrencias de un elemento en un arreglo
  function contarOcurrencias(arreglo, elemento) {
    const contador = arreglo.reduce((contador, valorActual) => (valorActual === elemento ? contador + 1 : contador), 0);
    return contador;
  }
  
  // Ejemplo de uso:
  const nume = [1, 2, 2, 3, 2, 4, 2];
  const elementoABusca = 2;
  const resultadoConteo = contarOcurrencias(nume, elementoABusca);
  console.log(resultadoConteo); 
  
  // 7. Ordenar palabras por longitud en un arreglo
  function ordenarPorLongitud(arreglo) {
    const resultado = arreglo.sort((a, b) => a.length - b.length);
    return resultado;
  }
  
  // Ejemplo de uso:
  const palabras = ["CASA", "OSO", "PELOTA"];
  const resultadoOrdenado = ordenarPorLongitud(palabras);
  console.log(resultadoOrdenado); 
  
  // 8. Búsqueda de un elemento en un arreglo
  function buscarElemento(arreglo, elemento) {
    const encontrado = arreglo.includes(elemento);
    return encontrado;
  }
  
  // Ejemplo de uso:
  const frutas = ["manzana", "pera", "uva", "banana"];
  const elemABuscar = "uva";
  const resultadBusqueda = buscarElemento(frutas, elemABuscar);
  console.log(resultadBusqueda); 
  
  // 9. Búsqueda de la primera coincidencia en un arreglo
  function buscarPrimeraCoincidencia(arreglo, elemento) {
    const indice = arreglo.findIndex((valor) => valor === elemento);
    return indice !== -1 ? indice : -1;
  }
  
  // Ejemplo de uso:
  const colores = ["rojo", "verde", "azul", "amarillo"];
  const elemntoABuscar = "azul";
  const resultadoBusqeda = buscarPrimeraCoincidencia(colores, elemntoABuscar);
  console.log(resultadoBusqeda); 
  
  // 10. Búsqueda de la última coincidencia en un arreglo
  function buscarUltimaCoincidencia(arreglo, elemento) {
    const indiceReverso = [...arreglo].reverse().findIndex((valor) => valor === elemento);
    return indiceReverso !== -1 ? arreglo.length - 1 - indiceReverso : -1;
  }
  
// Ejemplo de uso:
const numeros = [10, 20, 30, 20, 40];
const elementoABuscar = 20;
const resultadoBusqueda = buscarUltimaCoincidencia(numeros, elementoABuscar);
console.log(resultadoBusqueda); 