const btn = document.getElementById('show');
const formEI = document.getElementById('form');
const output = document.getElementById('output');

const repeatString = (text, count) => {
    let result = '';
    for (let i = 0; i < count; i++) {
        result += text;
    }
    output.innerText = result;
};

const validation = (form) => {
    try {
        if (form.elements[0].value && form.elements[1].value) {
            if (isFinite(parseInt(form.elements[1].value))) {
                repeatString(form.elements[0].value, parseInt(form.elements[1].value));
            }
            else { throw 'please input a Number..!'; }
        }
        else { throw 'Fields are required..!'; }
    } catch (error) {
        alert(error);
    }
};

const onBtn = (form = formEI) => validation(form);

btn.addEventListener('click', () => onBtn());
