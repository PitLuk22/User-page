document.querySelector('#signup-submit').addEventListener('click', function(event) {
    event.preventDefault();
    let name = document.querySelector('#signup-name').value,
        pass = document.querySelector('#signup-pass').value,
        email = document.querySelector('#signup-email').value,
        birthday = document.querySelector('#signup-birthday').value,
        sex = document.querySelectorAll('.sex');
        for(let i = 0; i < sex.length; i++) {
            if (sex[i].checked) {
                sex = sex[i].value;
                break;
            }
        }
    
    let data = {
        'name' : name,
        'pass' : pass,
        'email' : email,
        'birthday' : birthday,
        'sex' : sex
    };

    ajax('core/signup.php', 'POST', signup, data);

    function signup (result) {
        console.log(result);
        if (result == 2) {
            alert('Заполните поля!');
        } else if (result == 1) {
            alert('Регистрация прошла успешно!');
        } else {
            alert('Что-то пошло не так!');
        }
    }
    
})


document.querySelector('#login-submit').addEventListener('click', function(event) {
    event.preventDefault();
    let pass = document.querySelector('#login-pass').value,
        email = document.querySelector('#login-email').value;
    
    let data = {
        'pass' : pass,
        'email' : email
    };

    ajax('core/login.php', 'POST', login, data);

    function login(result) {
        if (result == 2) {
            alert('Заполните поля!');
        } else if (result == 0) {
            alert('Такой пользователь не найден');
        } else {
            console.log(result); // здесь у нас обычная строка, котороую дальше мы преобразуем в объект
            result = JSON.parse(result); //получаем name и email пользователя и преобразуем в JSON строку (объект)
            let d = new Date(); // устанавливаем дату 
            d.setTime(d.getTime() + (30 * 60 * 1000)); // задаем время существования куков
            let expires = d.toUTCString();
            document.cookie = `email=${result.email}; expires=${expires}; path=/`;
            location.href = 'cabinet.php';
        }
    }    
})

