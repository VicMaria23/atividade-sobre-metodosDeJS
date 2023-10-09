// Para que serve: Soma todos os valores que estiverem dentro do array.

// Como funciona: Esse método reduz os elementos de um array a um único valor com base em uma função fornecida, e o valor acumulado é retornado no final.

// Exemplo de uso:

const compras = [10, 20, 30, 40, 50];

const total = compras.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log('A soma dos números é '+ total);