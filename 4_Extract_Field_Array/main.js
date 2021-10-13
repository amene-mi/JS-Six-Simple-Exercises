const btn = document.getElementById('show');
const formEI = document.getElementById('form');
const output = document.getElementById('output');

const events = [
    {
        performer: 'Joe kelly',
        title: 'Nirvana'
    },
    {
        performer: 'Misa Ro',
        title: 'Days'
    }
]

const extractFieldArray = (field, arr) => {
    const results = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i][field]) {
            results.push(arr[i][field]);
        }
    }
    output.innerText = results;
    return results;
};

const validation = (element) => {
    try {
        if (element) {
            extractFieldArray(element, events);
        }
        else { throw 'Fields are required..!'; }
    } catch (error) {
        alert(error);
    }
};

const onBtn = (form = formEI) => validation(form.elements[0].value);

btn.addEventListener('click', () => onBtn());

