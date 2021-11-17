function somatorio(n) {
    let x = 0;
    for (let i = 1; i <=n ; i +=1) {
        x = x + i;
    }
    return x;
}
//Teste com n = 5
console.log(somatorio(5));