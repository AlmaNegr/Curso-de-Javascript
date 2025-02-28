var idade = 16
console.log(`Com ${idade} anos de idade o voto é `)
if (idade < 16) {
    console.log('Não vota.')
} else if (idade > 16 && idade < 18 || idade > 65) {
    console.log('Voto opcional.')
} else {
    console.log('Voto obrigatório.')
}