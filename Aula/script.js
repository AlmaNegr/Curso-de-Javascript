function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) < ano) {
        alert('Verifique os dados e tente novamente.')
        //Impede que os dados sejam colocados incorretamente.
    }
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createAttribute('img')
    img.setAttribute('src', 'foto')

    if (fsex[0].checked) {
        genero = 'homem'
        if (idade >= 0 && idade < 10) {
            img.setAttribute('src', 'bebe-menino.png')
        }

