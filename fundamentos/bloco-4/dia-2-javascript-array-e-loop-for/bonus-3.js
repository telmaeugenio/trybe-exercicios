let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// Bonus 3
let multiplicacao = [];
for (let i = 1; i < array.length; i +=1) {
  multiplicacao.push(array[i] * array[i - 1]);
}
multiplicacao.push(array[array.length - 1] * 2);
console.log(multiplicacao);