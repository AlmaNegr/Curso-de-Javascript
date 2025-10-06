const pessoa = {
    nome: 'Alisson',
    idade: 34,
    profissao: 'Desenvolvedor'
}

pessoa.club = 'caixa'
delete pessoa.nome
console.log(pessoa)

console.log(pessoa.club)