const pessoa = {
    nome: 'Alisson',
    idade: 34,
    profissao: "Desenvolvedor Web"
}

pessoa.cidade = 'Fortaleza'

delete pessoa.idade

console.log(pessoa)