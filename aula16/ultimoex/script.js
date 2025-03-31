function adicionar() {
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('Dados inválidos! Preencha corretamente.')
    } else {
        var n = Number(num.value)
        var item = document.createElement('option')
        item.
        var lista = []
        if (n <= 100 && n >= 1) {
            lista.appendChild(n)
        } else {
            window.alert('Insira um número entre 0 e 100.')
        }
    }
}