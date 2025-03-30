var  num = [1, 4, 3, 0]
//console.log(num)
num.push(5)
console.log(`Nosso vetor em ordem crescente...`)
console.log(num.sort())
console.log(`Nosso vetor tem ${num.length} elementos.`)
let pos = num.indexOf(0)
if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor está posição ${pos}.`)
}
