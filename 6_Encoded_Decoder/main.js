const btn = document.getElementById('show');
const formEI = document.getElementById('form');
const output = document.getElementById('output');

class CaesarCipher {
    constructor([...arr], factor) {
        this.arr = [...arr];
        this.factor = factor;
    }
    encoded = () => {
        let result = this.arr.map((char)=> {
            const first_Alph_Ascii = char === char.toLowerCase() ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);
            const char_order = (char.charCodeAt(0) - first_Alph_Ascii) + this.factor;
            const change_char = char_order % 26 + first_Alph_Ascii;
            return String.fromCharCode(change_char);
        });
        return result.join("");
    }
    decoder = () => {
        let result = this.arr.map((char)=> {
            const first_Alph_Ascii = char === char.toLowerCase() ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);
            const char_order = (char.charCodeAt(0) - first_Alph_Ascii) + (this.factor*-1);
            const change_char = char_order % 26 + first_Alph_Ascii;
            return String.fromCharCode(change_char);
        });
        return result.join("");
    }
}

const validation = (form) => {
    try {
        if (form.elements[0].value && form.elements[1].value) {
            if (isFinite(parseInt(form.elements[1].value))) {

                const check = new CaesarCipher(form.elements[0].value.split(""), parseInt(form.elements[1].value));
                if (form.elements[2].checked) {
                    output.innerText = check.encoded();
                }
                else if(form.elements[3].checked) {
                    output.innerText = check.decoder();
                }
                else { throw 'Fields are required..!'; }
            }
            else { throw 'please input a Number..!'; }
        }
        else { throw 'Fields are required..!'; }
    } catch (error) {
        alert(error);
        console.error(error);
    }
};

const onBtn = (form = formEI) => validation(form);

btn.addEventListener('click', () => onBtn());
