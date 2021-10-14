const caesarCipher = ([...text], factor = 0) => {
    const arr = [...text];
    let result = arr.map(function (char) {
        const first_Alph_Ascii = char === char.toLowerCase() ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);
        const char_order = (char.charCodeAt(0) - first_Alph_Ascii) + factor;
        const change_char = char_order % 26 + first_Alph_Ascii;
        return String.fromCharCode(change_char);
    });
    return result.join("");
};
module.exports = caesarCipher;