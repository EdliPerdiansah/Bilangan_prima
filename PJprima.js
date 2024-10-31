function prima(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function nextPrima(num) {
    let nextNum = num + 1;
    while (!prima(nextNum)) {
        nextNum++;
    }
    return nextNum;
}

// Contoh penggunaan
let input = 13;
console.log("Input:", input);
console.log("Bilangan prima setelah", input, "adalah", nextPrima(input));

input = 8;
console.log("Input:", input);
console.log("Bilangan prima setelah", input, "adalah", nextPrima(input));