const btn = document.getElementById('show');
const formEI = document.getElementById('form');
const output = document.getElementById('output');

class CaesarCipher {
    constructor([...arr], factor) {
        this.arr = [...arr];
        this.factor = factor;
    }
    get Encoded() {
        let result = this.arr.map(function (item) {
            return String.fromCharCode(item.charCodeAt(0) + this.factor);
        });
        const rgex = new RegExp(',', 'g');
        return result.toString().replace(rgex, '');
    }
}

const validation = (form) => {
    try {
        if (form.elements[0].value && form.elements[1].value) {
            if (isFinite(parseInt(form.elements[1].value))) {
                debugger;
                const check = new CaesarCipher(form.elements[0].value.split(""), parseInt(form.elements[1].value));
                if(form.elements[2].checked)
                {
                    check.Encoded();
                }
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
