let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// exercício 5
let maior = numbers[0];
for (let index = 0; index < numbers.length; index +=1) {
    if (maior > numbers[index]) {
        maior = maior;
    } else {
        maior = numbers[index];
    }
}
console.log(maior);