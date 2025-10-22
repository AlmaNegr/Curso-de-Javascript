let pessoas = [];
pessoas.splice(0, 0, 'Alisson', 34, 'Daiane', 41)
console.log(pessoas);

let safe = [];
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numeros.splice(0, 3, 10, 20, 30))

const par = numeros.map((numero) => {
    if (numero % 2 === 0) {
        safe.push(numero)
        console.log(safe)
        return numero
    }
});

let maior = [];

const maior5 = numeros.filter((num) => {
    if (num > 5) {
        maior.push(num);
        console.log(`${num} é maior que 5.`)
    }
});