let data = [
    {
        name: 'Roxanna',
        age: '28'
    },
    {
        name: 'Shania',
        age: '22'
    },
    {
        name: 'Yoshi',
        age: '6 years'
    },
    {
        name: 'Iku',
        age: '6 years'
    },
    {
        name: 'Chinchurri',
        age: '3 years'
    },
    {
        name: 'Ericka',
        age: '34'
    },
    {
        name: 'Pelusita',
        age: '14 years'
    },
];

const info = document.querySelector('#info');

let details = data.map(function(item) {
    return '<div>' + item.name + ' ' + 'is a ' + item.age + ' old' + '</div>';
});

info.innerHTML = details.join('\n');