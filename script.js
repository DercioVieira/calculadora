// Seleciona todos os botões da calculadora
const buttons = document.querySelectorAll('button');
// Seleciona o display da calculadora
const display = document.querySelector('.calculator-screen');

// Adiciona um listener de evento a cada botão
buttons.forEach(button => {
    button.addEventListener('click', handleClick);
});

// Função para lidar com o clique nos botões
function handleClick(event) {
    const buttonValue = event.target.value;

    switch(buttonValue) {
        case '=':
            calculate();
            break;
        case 'all-clear':
            clearDisplay();
            break;
        case '%':
            appendToDisplay('%');
            break;
        case '^2':
            square();
            break;
        default:
            appendToDisplay(buttonValue);
    }
}

// Função para adicionar conteúdo ao display
function appendToDisplay(value) {
    display.value += value;
}

// Função para limpar o display
function clearDisplay() {
    display.value = '';
}

// Função para calcular o resultado
function calculate() {
    try {
        display.value = eval(display.value);
    } catch(error) {
        display.value = 'Error';
    }
}

// Função para calcular o quadrado
function square() {
    try {
        const result = eval(display.value + '*' + display.value);
        display.value = result;
    } catch(error) {
        display.value = 'Error';
        setTimeout(clearScreen, 2000); // Chama a função clearScreen após 2 segundos (2000 milissegundos)
    }
}

function clearScreen() {
    // Função para limpar a tela
    display.value = '';
}