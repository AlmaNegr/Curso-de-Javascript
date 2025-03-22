function contar() {
    var i = Number(document.getElementById('i').value)
    var f = Number(document.getElementById('f').value)
    var p = Number(document.getElementById('p').value)
    var res = document.querySelector('div#res')
    res.innerHTML = `O inicio é ${i}, o fim é ${f} e o passo é ${p}.`
    for (i;i<=f;p) {
        console.log(i)

    }
}