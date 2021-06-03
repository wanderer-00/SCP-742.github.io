// Стрелки ← ↑ → ↓ △ ▽ ◁ ▷

// ОБЪЯВЛЯЕТ КАНСТАНТУ И ПЕРЕДАЕТ ЭЛЕМЕНТ
// ↓ передача списка, в котором будут содержаться карточки
const charactersList = document.getElementById('charactersList');
// ↓ передача поисковой строки
const searchBar = document.getElementById('searchBar');
// СОЗДАНИЕ ПУСТОГО МАССИВА
let hpCharacters = [];

// Метод .addEventListener() регистрирует [отслеживает протекания события]
// eventTarget.addEventListener(тип_события, обработчик, фаза);

// тип_события: строка, указывающая тип события для которого регистрируется обработчик. Тип события указывается без префикса "on".
// обработчик: функция выражение или имя функции, которая должна вызываться при возникновении события, указанного типа.
// фаза: булево значение, которое определяет, для какой фазы распространения события будет зарегистрирован обработчик. Возможные значения: true | false

// поисковая_строка.отслеживание_событи('отжатие_любой_клавиши', (выполнение_фуекции_e))

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredCharacters = hpCharacters.filter((character) => {
        return (
            // Метод includes() определяет, содержит ли массив определённый элемент, возвращая в зависимости от этого true или false.
            character.name.toLowerCase().includes(searchString) ||
            character.type.toLowerCase().includes(searchString)
        );
    });
    displayCharacters(filteredCharacters);
});

const loadCharacters = async () => {
    // Конструкция try...catch пытается выполнить инструкции в блоке try, и, в случае ошибки, выполняет блок catch.
    try {
        // const res = await fetch('https://hp-api.herokuapp.com/api/characters');
        const res = await fetch('../../All/config.js');
        hpCharacters = await res.json();
        displayCharacters(hpCharacters);
    // переменная err (можно выбрать и другое название)
    } catch (err) {
        // Выводить текст ошибки в консоль
        console.error(err);
    }
};

/* передача константе displayCharacters результата анонимной функции */
const displayCharacters = (characters) => {
    const htmlString = characters.map((character) => {
        // return - останавливает выполнение функции
        return`
        <div class="blockh">
        <div class="box hovergallery character" id="charactersList">
            <a id='animeName' href="${character.url}"><h1>${character.name}</h1></a><br>
            <img src="${character.image}" />
        </div>
        </div>
        `;
        }).join(''); // Метод join() объединяет все элементы массива (или массивоподобного объекта) в строку.
    charactersList.innerHTML = htmlString;
};

loadCharacters();

//        <div class="box hovergallery" id="charactersList">
//            <a id='animeName' href="../page/5-santimetrov-v-secundu/5-santimetrov-v-secundu.html">5 сантиметров в секунду</a><br>
//            <img src="../img/anime/5-santimetrov-v-secundu.jpg" />
//        </div>