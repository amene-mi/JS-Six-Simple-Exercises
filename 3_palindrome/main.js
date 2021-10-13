const btn = document.getElementById('show');
const formEI = document.getElementById('form');
const output = document.getElementById('output');

const palindrome = ([...str]) => {
    let result = "Yes";
    const arr = [...str];
    let arr_reverse = [...str];
    for (let i = 0; i < parseInt(arr.length / 2); i++) {
        if (arr[i] !== arr_reverse.reverse()[i]) {
            result = "No";
            break;
        }
    }
    output.innerText = result;
};

const validation = (element) => {
    try {
        if (element) {
            const rgex = new RegExp(',', 'g');
            palindrome(element.toLowerCase().replaceAll(rgex, '').split(""));
        }
        else { throw 'Fields are required..!'; }
    } catch (error) {
        alert(error);
    }
}

const onBtn = (form = formEI) => validation(form.elements[0].value);

btn.addEventListener('click', () => onBtn());
