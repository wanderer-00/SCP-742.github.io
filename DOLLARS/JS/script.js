// ФУНКЦИЯ АВТОРИЗАЦИИ
function log_in(){
    // ПРЕДПОЛОГАЕМЫЙ ПОЛЬЗОВАТЕЛЕМ ПАРОЛЬ
    var pasw = document.getElementById('pasw').value;
    // ЕСЛИ ПАРОЛЬ СОВПАДАЕТ ТО
    if (pasw == pass)
        // ВЫВЕСТИ 1
        {window.location.assign('index1.html');}
        // ИНАЧЕ ВЫВЕСТИ 0
        else{window.location.assign('https://www.ozon.ru/brand/brawl-stars-87277336/');
            alert('Досвидания :3');}
    }