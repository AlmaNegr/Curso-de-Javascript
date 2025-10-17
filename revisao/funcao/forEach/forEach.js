const array = ['maçã', 'uva', 'banana', 'laranha'];
const obj = {
    nome: 'Alisson',
    idade: 34,
    profissao: 'Desenvolvedor'
}
const arrayObj = [
    {
        car: 'Gol',
        color: 'white',
        brand: 'Wolkswagen'
    },
    {
        car: 'Fiat Uno',
        color: 'Green',
        brand: 'Fiat'
    },
    {
        car: 'Onix',
        color: 'Prata',
        brand: 'Chevrolet'
    }
]

array.forEach(function(element) {
    console.log(element.toUpperCase())
});

let i = 0;
arrayObj.forEach((elemento) => {
    if (elemento.color === 'white') {
        console.log(elemento.brand)
    }
    i++
})