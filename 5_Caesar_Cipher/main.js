const btn = document.getElementById('show');
const formEI = document.getElementById('form');
const output = document.getElementById('output');

const caesarCipher = ([...text], factor) => {
    const arr = [...text];
    let result = arr.map(function (char) {
        const first_Alph_Ascii = char === char.toLowerCase() ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);
        const char_order = (char.charCodeAt(0) - first_Alph_Ascii) + factor;
        const change_char = char_order % 26 + first_Alph_Ascii;
        return String.fromCharCode(change_char);
    });
    return result.join("");
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
