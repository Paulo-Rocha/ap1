module.exports = {
    dif: sub,
    soma: add,
    mult: mult,
    div: divisao
}

function add(n1, n2) {
    return n1 + n2;
}
function sub(n1, n2) {
    return n1 - n2;
}
function mult(n1, n2) {
    return n1 * n2;
}
function divisao(n1, n2) {
    if (n2 === 0) {
        return "Falha: divisão por 0 inválido!";
    }
    return n1 / n2;
}