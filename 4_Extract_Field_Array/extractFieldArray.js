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

const extractFieldArray = (field,arr) => {
    const results = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i][field]) {
            results.push(arr[i][field]);
        }
    }
    return results;
};

module.exports = extractFieldArray;