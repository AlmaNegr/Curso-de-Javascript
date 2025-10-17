// Array de objetos
let produtos = [
  { nome: "Queijo", preco: 25, categoria: "Laticínios" },
  { nome: "Presunto", preco: 18, categoria: "Frios" },
  { nome: "Copo Plástico", preco: 5, categoria: "Embalagens" }
];
// Filter ()

console.log(produtos[0].nome)

const maior5 = produtos.filter((produto) => {
    return produto.preco > 5;
});

console.log(maior5)

let total = 0;
const soma = produtos.reduce((acu, atual) => {
    if (atual.preco > 5) {
        return acu += atual.preco
    }
    return acu
    
}, 0);
console.log(soma)