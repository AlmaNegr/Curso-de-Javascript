
const numeros = [1, 2, 3, 4, 5];

const soma = numeros.reduce((acu, atual) => {
    console.log(acu, atual)
    return acu + atual
}, 0);

console.log(soma)