const btn = document.getElementById('show');
const formEI = document.getElementById('form');
const output = document.getElementById('output');

let palindrome = ([...str]) => {
    let result="Yes";
    const arr = [...str];
    let arr_reverse =[...str];
    for (let i = 0; i < parseInt(arr.length/2); i++) {
        if(arr[i]!==arr_reverse.reverse()[i]){
         result = "No";
         break;
        }
    }
    output.innerText = result;
};

function onBtn(form = formEI) {
    debugger;
    try {
        if (form.elements[0].value) {
            palindrome(form.elements[0].value.toLowerCase().replaceAll(' ','').split(""));
        }
        else { throw 'Fields are required..!'; }
    } catch (error) {
        alert(error);
    }

}

btn.addEventListener('click', () => onBtn());
