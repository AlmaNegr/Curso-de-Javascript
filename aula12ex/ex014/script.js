function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()  // Corrigido "data" para "Date"
    //var hora = data.getHours() // Pega a hora atual do sistema
    var hora = 19  // Se quiser testar com uma hora fixa, pode descomentar essa linha

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        // BOM DIA!!!
        img.src = 'fotomanha.png'
        document.body.style.background = '#e5b686'
    } else if (hora >= 12 && hora < 18) { // Alterei "<=" para "<" para evitar 18:00 no "Boa Tarde"
        // BOA TARDE!!!
        img.src = 'fototarde.png'
        document.body.style.background = '#fcae65' // Cor exemplo para tarde
    } else {
        // BOA NOITE!!
        img.src = 'fotonoite.png'
        document.body.style.background = '#1c1c3c' // Cor exemplo para noite
    }
}
