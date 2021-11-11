function maiorNome(array) {
   let x = [0, 0];
    for (let nome in array) {
        if (x[0] < array[nome].length) {
            x[0] = array[nome]. length;
            x[1] = array[nome];
        } else {
            x = x;
        }
    }
    return x [1];
}
console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
