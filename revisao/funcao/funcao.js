function dobro(num) {
    let dobrado = num.map((n) => {
        return n * 2
    })

    return dobrado
}

let numero = [1, 2, 3, 4, 5]

console.log(dobro(numero))