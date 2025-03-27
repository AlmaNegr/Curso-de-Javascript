function clicar() {
    var div = document.getElementById('res')  // Pegando a div onde o parágrafo será inserido
    var p = document.createElement('p')  // Criando o parágrafo
    p.textContent = 'Parágrafo criado'  // Definindo o texto do parágrafo
    div.appendChild(p)  // Adicionando o parágrafo dentro da div

    // Verificar se deu certo
    alert('Parágrafo foi adicionado na div!');  // Exibe um alerta
}
