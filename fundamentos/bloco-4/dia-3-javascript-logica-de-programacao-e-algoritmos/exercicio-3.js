let n = 5;
let string = ''
for (let i = 1; i <= n; i+=1) {
    for (let z = 1; z <= (n - i); z+=1) {
        string = string + ' ';
        for (let x = 1; x <= n; x+=1) {
            string = string + '*';
    }
    }
    console.log(string)
}