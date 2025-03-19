function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var nasc = document.getElementById('txtano').value
    var res = document.querySelector('div#res')
    if (nasc.length == 0 || nasc > ano) {
        alert('[ERRO] preencha os dados corretamente!')
    } else {
        var sexo = document.getElementsByName('radsex')
        var idade = ano - nasc
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexo[0].checked) {
            genero = 'Homem'
            if (idade < 11) {
                //Criança
                img.setAttribute('src', 'bebe-menino.png')
            }
        } 
    }
     res.style.textAlign = 'center'
     res.innerHTML = `Detectamos ${genero} com ${idade} anos de idade`
     res.appendChild(img)
}