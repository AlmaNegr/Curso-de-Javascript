let valores = [2, 4, 6, 0, 1]
/*console.log(valores)
for(var cont = 0;cont < valores.length;cont++) {
    console.log(`A chave ${cont} tem o valor ${valores[cont]}.`)
}
*/
for(let pos in valores) {
    console.log(`Para a chave ${pos} temos o valor ${valores[pos]}`)
}