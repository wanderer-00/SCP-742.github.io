// ОБЪЯВЛЯЕТ КАНСТАНТУ И ПЕРЕДАЕТ ЭЛЕМЕНТ
const charactersList = document.getElementById('charactersList');
const searchBar = document.getElementById('searchBar');
// СОЗДАНИЕ МАССИВА
let hpCharacters = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredCharacters = hpCharacters.filter((character) => {
        return (
            character.name.toLowerCase().includes(searchString) ||
            character.type.toLowerCase().includes(searchString)
        );
    });
    displayCharacters(filteredCharacters);
});

const loadCharacters = async () => {
    // Конструкция try...catch пытается выполнить инструкции в блоке try, и, в случае ошибки, выполняет блок catch.
    try {
//        const res = await fetch('https://hp-api.herokuapp.com/api/characters');
        const res = await fetch('config.js');
        hpCharacters = await res.json();
        displayCharacters(hpCharacters);
    } catch (err) {
        console.error(err);
    }
};

/* передача константе displayCharacters результата анонимной функции */
const displayCharacters = (characters) => {
    const htmlString = characters.map((character) => {
        // return - останавливает выполнение функции
        return
        // вставка текста в литераллах
        `
            <li class="character">
                <a href="${character.url}">
                    <h2>${character.name}</h2>
                </a>
                <p>during: ${character.during}</p>
                <img src="${character.image}"></img>
            </li>
        `;
        }).join(''); // Метод join() объединяет все элементы массива (или массивоподобного объекта) в строку.
    charactersList.innerHTML = htmlString;
};

loadCharacters();

