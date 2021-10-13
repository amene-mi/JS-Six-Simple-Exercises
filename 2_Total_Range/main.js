const btn = document.getElementById('show');
const formEI = document.getElementById('form');
const output = document.getElementById('output');

let result = 0;
const totalRang = (num1, num2) => {
    result += num1;
    if (num1 < num2) {
        totalRang(num1 + 1, num2);
    }
    else {
        output.innerText = result;
        result = 0;
    }
};

const validation = (form) => {
    try {
        if (form.elements[0].value && form.elements[1].value) {
            totalRang(parseInt(form.elements[0].value), parseInt(form.elements[1].value));
        }
        else { throw 'Fields are required..!'; }
    } catch (error) {
        alert(error);
    }
};

const onBtn = (form = formEI) => validation(form);

btn.addEventListener('click', () => onBtn());
