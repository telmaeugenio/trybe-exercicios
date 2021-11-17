
function verificaPalindrome(palavra) {
    let palavra2 = [];
 for (let key in palavra) {
     palavra2.push(palavra[key])
 }
    let arvalap = palavra2.reverse();
for (let key in palavra) {
    if (palavra[key] === arvalap[key]) {
        return true;
    } else {
        return false;
    }
}
}
// Teste com 'arara'
console.log(verificaPalindrome('arara'));
// Teste com 'desenvolvimento'
console.log(verificaPalindrome('desenvolvimento'));