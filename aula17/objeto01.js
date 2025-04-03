let amigos = {}
amigos = {nome: 'José', sexo: 'M', peso: 84.5, engordar(p=0) {
    console.log('engordou')
    this.peso += p
}}
amigos.engordar(2)
console.log(`${amigos.nome} pesa ${amigos.peso}kg.`) 