var cluster = document.getElementsByClassName('bodyPlayer')[0];


var numberOBJ = ray12.length;
console.log('Объектов всего:', numberOBJ);
var n = 0;

while (n < numberOBJ) {
    cluster.innerHTML += `
    <div class="box" onclick="">
        <div>${n}</div>
        <div>${ray12[n].name}</div>
        <div>${ray12[n].time}</div>
        <div>${ray12[n].like}</div>
    </div>
    `;
    n++;
    console.log('Кол-во завершённых итераций:', n);
};


