function calculo(n) {
    let i = parseInt(n/100);
    let j = n%100;
    return Math.pow((i + j), 2) === n;
}

exports.calculo = calculo;