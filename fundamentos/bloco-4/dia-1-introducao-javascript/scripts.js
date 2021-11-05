let status = 'fsfs';
switch (status) {
    case 'aprovada':
        console.log('Parabéns, você foi aprovade!');
        break;
    case 'lista':
        console.log('Você está na lista de espera!');
        break;
    case 'reprovada':
        console.log('Você não foi aprovade.');
        break;
    default:
        console.log('Não se aplica');
}