const frutas = ['manga', 'uva', 'banana', 'laranja', 'goiaba'];

const letraA = frutas.filter((fruta) => fruta.includes('u'));
console.log(letraA)

const maiuscula = frutas.map((fruta) => fruta.toUpperCase());
console.log(maiuscula)