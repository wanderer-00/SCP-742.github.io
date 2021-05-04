// ФУНКЦИЯ АВТОРИЗАЦИИ
function log_in(){
    // ПРЕДПОЛОГАЕМЫЙ ПОЛЬЗОВАТЕЛЕМ ПАРОЛЬ
    var pasw = document.getElementById('pasw').value;
    // ЕСЛИ ПАРОЛЬ СОВПАДАЕТ ТО
    if (pasw == pass)
        // ВЫВЕСТИ 1
        {window.location.assign('../../index1.html');}
        // ИНАЧЕ ВЫВЕСТИ 0
        else{window.location.assign('../../index.html');
            alert('Досвидания :3');}
    }