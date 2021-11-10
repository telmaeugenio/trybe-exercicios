
function verificaPalindrome(palavra = 'arara') {
    let arvalap = palavra.reverse();
    if (palavra == arvalap) {
        return true;
    } else {
        return false;
    }
    console.log(arvalap);
    }

    console.log(verificaPalindrome());