var cluster = document.getElementById('cluster');
    
let urls = [
    {
        ico: 'MPV.png',
        text: 'Удобный видеоплеер с множеством функций',
        url: 'https://mpv.io/', //https://help.ubuntu.ru/wiki/mpv_player
        load: 'https://mpv.io/installation/',
    },
    {
        ico: 'AIMP.png',
        text: 'Аудиоплеер',
        url: 'https://www.aimp.ru/',
        load: 'https://www.aimp.ru/?do=download.file&id=4',
    },
    {
        ico: 'Reg Organizer.png',
        text: 'Удаление программ, чистка реестра, поиск следов, автозапуск...',
        url: 'https://www.chemtable.com/ru/organizer.htm',
        load: '//www.chemtable.com/builds/main/reg-organizer-setup.exe',
    },
    {
        ico: 'WizTree.png',
        text: 'Анализ данных SSD/HDD/SD/CD... Вывод удобной диаграммы',
        url: 'https://diskanalyzer.com/',
        load: 'https://diskanalyzer.com/files/wiztree_4_01_setup.exe',
    },
];

var numberOBJ = urls.length;
console.log('Объектов всего:', numberOBJ);
var suy = 0;

while (suy < numberOBJ) {
    cluster.innerHTML += `
        <div class="box">
            <img src="image/${urls[suy].ico}" alt="иконка">
            <div class="title">${urls[suy].text}</div>
            <div class='url'>
                <a href="${urls[suy].url}">Официальный сайт</a>
                <a href="${urls[suy].load}">скачать</a>
            </div>
        </div>`;
    suy++;
    console.log('Кол-во завершённых итераций:', suy);
};
