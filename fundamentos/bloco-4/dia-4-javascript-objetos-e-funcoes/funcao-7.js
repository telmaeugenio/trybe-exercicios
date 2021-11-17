function verificaFimPalavra(word, ending) {
    let tamanhoFim = ending.length;
    let tamanhoWord = word.length;
    let resultado;
    for (let i = 0; i < tamanhoFim; i +=1) {
        if (word[tamanhoWord - 1 - i] === ending[tamanhoFim - 1 - i]) {
            resultado = true;
        } else {
            resultado = false;
        }
    }
    return resultado;
}
// Teste com 'trybe' e 'be'
console.log(verificaFimPalavra('trybe', 'be'));
// Teste com 'joaofernando' e 'fernan'
console.log(verificaFimPalavra('joaofernando', 'fernan'));