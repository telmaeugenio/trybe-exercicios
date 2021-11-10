function menorValor(array) {
    let menor = array[0];
    for (let i in array) {
        if (menor < array[i]) {
            menor = menor;
        } else {
            menor = array[i];
        }
    }
    return array.indexOf(menor);
}
console.log(menorValor([2, 4, 6, 7, 10, 0, -3]));