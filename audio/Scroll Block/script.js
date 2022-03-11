var cluster = document.getElementById('box');
    
let ELEMENTs = [
    {
        ico: 'black-bullet.jpg',
        url: '',
        name: 'Чёрная пуля',
        status: 'no'
    },
    {
        ico: '0.png',
        url: '',
        name: 'no name',
        status: 'no'
    },
    {
        ico: '0.png',
        url: '',
        name: 'no name',
        status: 'no'
    },
    {
        ico: '0.png',
        url: '',
        name: 'no name',
        status: 'no'
    },
    {
        ico: '0.png',
        url: '',
        name: 'no name',
        status: 'no'
    },
    {
        ico: '0.png',
        url: '',
        name: 'no name',
        status: 'no'
    },
    {
        ico: '0.png',
        url: '',
        name: 'no name',
        status: 'no'
    },
    {
        ico: '0.png',
        url: '',
        name: 'no name',
        status: 'no'
    },

];

var numberOBJ = ELEMENTs.length;
console.log('Объектов всего:', numberOBJ);
var suy = 0;

while (suy < numberOBJ) {
    cluster.innerHTML += `
        <div id="sub-box">
            <div id="icon">
                <img src="IMG/${ELEMENTs[suy].ico}">
            </div>
            <div id="description">
                <div id="Name">${ELEMENTs[suy].name}</div>
                <div id="Status">${ELEMENTs[suy].status}</div>
            </div>
        </div>
    `;
    suy++;
    console.log('Кол-во завершённых итераций:', suy);
};
