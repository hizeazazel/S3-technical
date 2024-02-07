let input = document.getElementById('input');
let btns = document.querySelectorAll('.btns');

function calculate(para) {
let num = para.split(/[+\-*/]/).map(parseFloat);
let symbols = para.match(/[+\-*/]/g);

if (!symbols || num[0] === '' || num[1] === '') {
    return 'Error';
}

let result = num[0];
for (let i = 0; i < symbols.length; i++) {
    let symbol = symbols[i];
    let number = num[i + 1];

    switch (symbol) {
        case '+':
        result =result + number;
            break;
        case '-':
        result = result -number;
            break;
        case '*':
        result = result *number;
            break;
        case '/':
        if (symbol === '/' && number === 0) {
            return 'Error';
        }
        result = result /number;
            break;
        default:
            return 'Error';
    }
}
return result;
}

let zero = document.getElementById('btn-0');
zero.addEventListener('click', function() {
    input.value += this.innerHTML;
})

for (let i = 0; i < btns.length; i++) {
btns[i].addEventListener('click', function() {
    let symbol = this.innerHTML;

    switch (symbol){
        case 'C':
        input.value = "";
            break;
        case '<':
        input.value = input.value.slice(0, -1);
            break;
        case '=':
        input.value = calculate(input.value);
            break;
        default:
        input.value += symbol;
            break;
}
});
}

let dot = document.getElementById('btn-dot');
dot.addEventListener('click', function() {
    if (!input.value.includes('.')) {
        input.value += this.innerHTML;
    }
});
