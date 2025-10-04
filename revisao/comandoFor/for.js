const frutas = ['manga', 'uva', 'banana', 'laranja', 'goiaba'];
const numeros = [1, 2, 3, 4, 5];

/*for (let i = 0; i <= frutas.length; i++) {
    console.log(frutas[i])
}
    */


for (let fruta of frutas) {
    console.log(fruta)
}

console.log('--')

const maior = frutas.map((fruta) => console.log(fruta.toUpperCase()))

console.log('---------------')

const letraB = frutas.filter((fruta) => fruta.includes('b'))
console.log(letraB)

const soma = numeros.reduce((conta, atual) => conta + atual)
console.log(soma)

