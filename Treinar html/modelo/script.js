function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var agora = new Date()
    var hora = agora.getHours()
    var hora = 5
    msg.innerHTML = `Agora são ${hora}hrs.`
    if (hora >= 5 && hora < 12) {
        // BOM DIA!
        img.src = 'foto-manha.png'
        document.body.style.background = '#9e959a'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        img.src = 'foto-tarde.png'
        document.body.style.background = '#c58e72'
    } else if (hora >= 18 && hora < 24) {
        // BOA NOITE!
        img.src = 'foto-noite.png'
        document.body.style.background = '#1f2823'
    } else {
        // BOA MADRUGADA!
    }
}