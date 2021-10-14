const btn = document.getElementById('show');
const formEI = document.getElementById('form');
const output = document.getElementById('output');

class URL {
    constructor([...arr], factor) {
        this.arr = [...arr];
        this.factor = factor;
    }
}

function test(test) {
    console.log(getURL.protocol(test));
    console.log(getURL.anchor(test));
    console.log(getURL.path(test));
    console.log(getURL.query());
}

const validation = (form) => {
    try {
        if (form.elements[0].value) {

            test(form.elements[0].value);
        }
        else { throw 'Fields are required..!'; }
    } catch (error) {
        alert(error);
        console.error(error);
    }
};

const onBtn = (form = formEI) => validation(form);

btn.addEventListener('click', () => onBtn());
