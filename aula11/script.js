function sensor() {
    var txt = document.querySelector('input#txtvel')
    var res = document.querySelector('div#res')
    var vel = Number(txt.value)
    res.innerHTML = `Sua velocidade é de ${vel}Km/h.`
    if (vel > 60) {
       res.innerHTML += `<p>Com velocidade de ${vel}Km/h você foi <strong>MULTADO</strong>!</p>`
    }
    res.innerHTML += `<p>Dirija com cuidado. Respeite os limites de velocidade!</p>`
}
