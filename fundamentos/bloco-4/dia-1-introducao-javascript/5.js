const a = 30;
const b = 60;
const c = 90;
let resposta;
if (a < 0 || b < 0 || c < 0) {
    console.log('Angulo inválido');
} else if (a + b + c === 180) {
    resposta = true;
    console.log(resposta);
} else {
    resposta = false;
    console.log(resposta);
}