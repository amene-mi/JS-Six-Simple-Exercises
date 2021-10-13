const btn = document.getElementById('show');
const formEI = document.getElementById('form');
const output = document.getElementById('output');

const caesarCipher = ([...text], factor) => {
    const arr = [...text];
    let result = arr.map(function (item) {
        return String.fromCharCode(item.charCodeAt(0) + factor);
    });
    const rgex = new RegExp(',', 'g');
    output.innerText = result.toString().replace(rgex, '');
};

const validation = (form) => {
    try {
        if (form.elements[0].value && form.elements[1].value) {
            if (isFinite(parseInt(form.elements[1].value))) {
                caesarCipher(form.elements[0].value.split(""), parseInt(form.elements[1].value));
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
