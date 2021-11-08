let peca = 'Cavalo';
let pecaDeXadrez = peca.toLowerCase();
switch (pecaDeXadrez) {
    case 'rei':
        console.log('1 (uma) casa na direção vertical, horizontal ou diagonal, limitada a condição da casa para o qual deseja-se mover a peça não estar sob ataque das peças adversárias');
        break;
    case 'rainha':
        console.log('possui o movimento combinado da Torre e do Bispo, movendo-se em linha reta nas fileiras, colunas e diagonais.');
        break;
    case 'bispo':
        console.log('Seu movimento é oblíquo, movimentando-se em linhas retas nas diagonais do tabuleiro.');
        break;
    case 'cavalo':
        console.log('move-se para a casa mais próxima de onde está desde que não seja na mesma coluna, diagonal ou fileiras do Tabuleiro, com o formato característico da letra L,');
        break;
    case 'torre':
        console.log('move-se em linha reta nas colunas e fileiras do Tabuleiro.[');
        break;
    case 'peão':
        console.log('Seu movimento consiste no avanço para a casa desocupada imediatamente a sua frente na mesma coluna ou no primeiro movimento opcionalmente por duas casas na mesma coluna desde que ambas as casas estejam desocupadas. Para captura, toma o lugar da peça oponente que está na direção diagonal na fileira imediatamente a sua frente.');
        break;
    default:
        console.log('erro!')
}