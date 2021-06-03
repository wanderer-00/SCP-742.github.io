// Стрелки ← ↑ → ↓ △ ▽ ◁ ▷

// ОБЪЯВЛЯЕТ КАНСТАНТУ И ПЕРЕДАЕТ ЭЛЕМЕНТ
// ↓ передача списка, в котором будут содержаться карточки
const list = document.getElementById('list');
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
        // const res = await fetch('https://hp-api.herokuapp.com/api/characters'); *await* - код не будет выполняться пока на выполниться функция с этим параметром
        const res = await fetch('BD.js');
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
            <tr class="song">
                <td class="nr"><h5>${character.number}</h5></td>
                <td class="title"><h6 id='title'>${character.name}</h6></td>
                <td class="length"><h5>${character.time}</h5></td>
                <td><input type="checkbox" id="heart"><label for="heart" class="icons"></label></td>
            </tr>
        `;
        }).join(''); // Метод join() объединяет все элементы массива (или массивоподобного объекта) в строку.
    list.innerHTML = htmlString;
};

loadCharacters();
