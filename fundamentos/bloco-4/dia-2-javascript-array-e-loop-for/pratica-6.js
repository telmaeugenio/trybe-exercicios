let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// exercício 6
let contadorImpar = 0;
for (let index = 0; index < numbers.length; index +=1) {
    if (numbers[index] % 2 != 0) {
        contadorImpar = contadorImpar + 1;
    } else {
        contadorImpar = contadorImpar;
    }
}
console.log(contadorImpar);