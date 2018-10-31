function calculo(n) {
    let c = parseInt(n/100);
    let du = n%100;
    let d = parseInt(du/10);
    let u = du%10;

    return Math.pow(c, 3) + Math.pow(d, 3) + Math.pow(u, 3) === n;
}

exports.calculo = calculo;