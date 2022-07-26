const listaDeTeclas = document.querySelectorAll('.calculadora');
for (let contador = 0; contador < listaDeTeclas; contador++) {
    const tecla = listaDeTeclas[contador];
    const botao = tecla.classList[1];
    const idBotao = '#calculadora__${botao}';
}