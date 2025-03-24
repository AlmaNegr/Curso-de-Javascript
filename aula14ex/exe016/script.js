function contar() {
    var i = Number(document.getElementById('i').value)
    var f = Number(document.getElementById('f').value)
    var p = Number(document.getElementById('p').value)
    var res = document.querySelector('div#res')
    res.innerHTML = ''
    if (isNaN(i) || isNaN(f) || isNaN(p) || i === 0 && f === 0 ) {
        res.innerHTML = 'Por favor, insira valores válido.'
        return;
    }
    if (p <= 0) {
        res.innerHTML = 'Passo inválido! Considere um valor maior que 0.'
        p = 1
        return;
    }
    if (i < f) {
        for (var cont = i; cont <= f;cont += p) {
            res.innerHTML += `${cont} \u{1f449}`
        }

    }
}