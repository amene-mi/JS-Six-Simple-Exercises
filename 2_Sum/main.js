const btn = document.getElementById('show');
const formEI = document.getElementById('form');
const output = document.getElementById('output');

let result = 0;
let sum = (num1, num2) => {
    result += num1;
    if (num1 < num2) {
        sum(num1 + 1, num2);
    }
    else {
        output.innerText = result;
        result=0;
    }
};

function onBtn(form = formEI) {
    debugger;
    try {
        if (form.elements[0].value && form.elements[1].value) {
            sum(parseInt(form.elements[0].value), parseInt(form.elements[1].value));
        }
        else { throw 'Fields are required..!'; }
    } catch (error) {
        alert(error);
    }

}

btn.addEventListener('click', () => onBtn());
