const bruto = 3000;
let ir;
let inss;
if (bruto > 5189.82) {
    inss = 570.88;
} else if (bruto >= 2594.93) {
    inss = bruto * 0.11;
} else if (bruto >= 1556.95) {
    inss = bruto * 0.09;
} else {
    inss = 0.08;
}
let base = bruto - inss;
if (base > 4664.68) {
    ir = base * 0.275 - 869.36;
} else if (base > 3751.06) {
    ir = base * 0.225 - 636.13;
} else if (base > 2826.66) {
    ir = base * 0.15 - 354.80;
} else if (base >= 1903.99) {
    ir = base * 0.075 - 142.80;
} else {
    ir = 0;
}

let liquido = bruto - inss - ir;
console.log(liquido);
