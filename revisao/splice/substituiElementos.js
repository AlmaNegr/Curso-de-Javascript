const pessoas = ['Alisson', 'Daiane', 'Stella', 'Maiumy'];
pessoas.splice(0, 2, 'João', 'Maria')
console.log(pessoas)

const texto = pessoas.forEach((pessoa, index) => {
    if (pessoa === 'Alisson') {
        console.log(`${pessoa} - ${index}`)
    }
    
});

