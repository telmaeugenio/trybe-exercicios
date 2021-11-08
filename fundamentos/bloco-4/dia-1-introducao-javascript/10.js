const custo = 20;
const venda = 40;
if (custo >= 0 && venda >= 0) {
    let valorDeCustoTotal = custo * 1.2;
    let lucro = venda - valorDeCustoTotal;
    console.log(lucro *1000);
} else {
    console.log('Informe valor maior que Zero!')
}
