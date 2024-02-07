let input = document.getElementById('input');
let btns = document.querySelectorAll('.btns');

function calculate(para) {
let result;
let num = para.split(/[+\-*/]/);
let symbol = para.match(/[+\-*/]/);

    if (!symbol || num[0] === '' || num[1] === '') {
        return 'Error';
    }

let num1 = parseFloat(num[0]);
let num2 = parseFloat(num[1]);
    switch (symbol[0]) {
        case '+':
        result = num1+num2;
            break;
        case '-':
        result = num1-num2;
            break;
        case '*':
        result = num1 *num2;
            break;
        case '/':
        if (num2 !== 0) {
                result = num1/ num2;
            } else {
                result= 'Error';
            }
            break;
        default:
        result = 'Error';
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
