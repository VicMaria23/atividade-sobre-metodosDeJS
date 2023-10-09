// Para que serve: é utilizado para encontrar um índice dentro de uma string ou array, caso o valor não seja encontrado, ele retorna -1

// Como funciona: O método findIndex executa a função callback uma vez para cada elemento presente no array até encontrar um onde o callback retorna um valor verdadeiro. 
// Se tal elemento for encontrado, findIndex imediatamente retorna o índice deste elemento. Caso contrário, findIndex retorna -1. 

// Exemplo de uso: 

const numbers = [10, 20, 30, 40, 50];

const index = numbers.findIndex(number => number > 25);

console.log(index);