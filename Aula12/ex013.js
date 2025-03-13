var hoje = new Date()
var diasem = hoje.getDay()
diasem = 8
switch(diasem) {
    case 0:
        console.log('domingo')
        break
    case 1:
        console.log('segunda-feira')
        break
    case 2:
        console.log('terça-feira')
        break
    case 3:
        console.log('quarta-feira')
        break   
    case 4:
        console.log('quinta-feira')
    case 5:
        console.log('sexta-feira')
    case 6:
        console.log('sábado')
    default:
        console.log('[erro] Dia não encontrado...')
        break

}