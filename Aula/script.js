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
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 11) {
                //Criança
                img.setAttribute('src', 'bebe-menino.png')
            } else if (idade < 18) {
                //Jovem
                img.setAttribute('src', 'jovem-homem.png')
            } else if (idade < 60) {
                //Adulto  
                img.setAttribute('src', 'homem-adulto.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idoso-m.png')
            }
        } else if (sex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 11) {
                //Criança
                img.setAttribute('src', 'bebe-menina.png')
            } else if (idade < 18) {
                //Jovem
                img.setAttribute('src', 'jovem-mulher.png')
            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src', 'mulher-adulta.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idosa-m.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} de ${idade} anos.`
    }   res.appendChild(img)
}