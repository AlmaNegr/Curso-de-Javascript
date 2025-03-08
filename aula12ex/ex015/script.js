function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
        return; // Impede que o código continue se houver erro
    }

    var fsex = document.getElementsByName('radsex');
    var idade = ano - Number(fano.value);
    var genero = '';
    var img = document.createElement('img');
    img.setAttribute('id', 'foto');

    if (fsex[0].checked) {
        genero = 'Homem';
        if (idade >= 0 && idade < 10) {
            img.setAttribute('src', 'bebemenino.png'); // Criança
        } else if (idade < 21) {
            img.setAttribute('src', 'jovem.png'); // Jovem
        } else if (idade < 50) {
            img.setAttribute('src', 'adulto.png'); // Adulto
        } else {
            img.setAttribute('src', 'idoso.png'); // Idoso
        }
    } else if (fsex[1].checked) {
        genero = 'Mulher';
        if (idade >= 0 && idade < 10) {
            img.setAttribute('src', 'bebemenina.png'); // Criança
        } else if (idade < 21) {
            img.setAttribute('src', 'jovemmenina.png'); // Jovem (Corrigido)
        } else if (idade < 50) {
            img.setAttribute('src', 'adulta.png'); // Adulto
        } else {
            img.setAttribute('src', 'idosa.png'); // Idoso
        }
    }

    // Exibir o resultado
    res.style.textAlign = 'center';
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    res.appendChild(img);
}
