function maiorValor(array) {
    let maior = array[0];
    for (let i in array) {
        if (maior > array[i]) {
            maior = maior;
        } else {
            maior = array[i];
        }
    }
    return array.indexOf(maior);
}
console.log(maiorValor([2, 3, 6, 7, 10, 1]));