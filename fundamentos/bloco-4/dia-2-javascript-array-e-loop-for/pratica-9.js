// Exercicio 9
let numbers = [];
for (let i = 0; i <25 ; i+=1) {
    numbers.push(i + 1);
}
let divisao = [];
for (let number of numbers) {
    divisao.push(number / 2);
}
console.log(divisao);