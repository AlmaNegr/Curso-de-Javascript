const frutas = ['manga', 'uva', 'banana', 'laranja', 'goiaba'];
const numeros = [1, 2, 3, 4, 5]
//const letraA = frutas.filter((fruta) => fruta.includes('u'));
//console.log(letraA)

//const maiuscula = frutas.map((fruta) => fruta.toUpperCase());
//console.log(maiuscula)

const maior = frutas.map((fruta) => fruta.toUpperCase());
const letraG = frutas.filter((fruta) => fruta.includes('g'));
const soma = numeros.reduce((acu, atual) => acu + atual);

console.log(soma)

console.log(letraG)

console.log(maior)