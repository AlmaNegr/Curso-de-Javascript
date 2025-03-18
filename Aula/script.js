function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var nasc = document.getElementById('txtano').value
    var res = document.querySelector('div#res')
    if (nasc.length == 0 || Number(nasc) > ano) {
        alert('[Erro] verifique os dados e tente novamente.')
    } else {
        var sex = document.getElementsByName('radsex')
        
        var idade = ano - Number(nasc)
        var genero = ''
        if (sex[0].checked) {
            genero = 'Homem'
        } else if (sex[1].checked) {
            genero = 'Mulher'
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} de ${idade} anos.`
    }
}