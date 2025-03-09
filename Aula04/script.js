function clicar() {
    var p = document.getElementsByTagName('p')
    var dp = document.querySelector('div#res')
    p[0].innerHTML = "Texto alterado para: "
    dp.innerHTML = "Estudo de Javascript"
    dp.style.color = "white"
}