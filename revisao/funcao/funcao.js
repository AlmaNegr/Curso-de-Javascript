function dobro(num) {
    let dobrado = num.map((n) => {
        return n * 2
    })

    return dobrado
}

const nome = (nome, idade) => {
    return `Meu nome é ${nome} e tenho ${idade} anos de idade.`
}

let numero = [1, 2, 3, 4, 5]
console.log(nome("Alisson", 34))
console.log(dobro(numero))
console.log(numero.reverse())