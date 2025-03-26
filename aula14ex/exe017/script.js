function tabuada() {
    var n = document.getElementById('n1')
    var res = document.querySelector('div#res')
    var num = Number(n.value)
    
    if (isNaN(num) || n.value.length == 0) {
        alert('Dados inválidos!')
        
    } else {
        res.innerHTML = ''
        for (c = num;c <= 10;c += 1) {
            res.innerHTML += `<br>${num}x${c} = ${num*c}`
        }
            
    }
}