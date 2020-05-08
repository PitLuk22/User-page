document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems, {
        format: 'yyyy-mm-dd'
    });
  });

let userEmail = getCookie('email'); // здесь просто почта 
console.log(userEmail);

// Это функция, которая вытаскивает из куков определенное значение, в нашем случае почту!
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// Отправляется запрос на сервер, чтобы узнать действующие данные о пользователе
ajax('core/get_user_data.php', "POST", getUserData, {"email" : userEmail});

function getUserData(result) {
    result = JSON.parse(result);
    console.log(result);
    document.querySelector('#signup-name').value = result.name;
    document.querySelector('#signup-pass').value = result.password;
    document.querySelector('#signup-birthday').value = result.birthday;
    let sex = document.querySelectorAll('.sex');
    for(let item of sex) {
        if (item.value == result.sex) {
            item.checked = true;
        }
    }
    M.updateTextFields();
}


// При нажатии на кнопку данные, введенные в поля отправляются на сервер и там обновляются
document.querySelector('#signup-submit').addEventListener('click', function (event) {
    event.preventDefault();
    let sex = document.querySelectorAll('.sex');
    for(let i = 0; i < sex.length; i++) {
        if (sex[i].checked) {
            sex = sex[i].value;
            break;
        }
    }
    let userUpdate = {
        "email" : userEmail,
        "name" : document.querySelector('#signup-name').value,
        "pass" : document.querySelector('#signup-pass').value,
        "birthday" : document.querySelector('#signup-birthday').value,
        "sex" : sex
    }
    ajax('core/update_user_data.php', "POST", updateUserData, userUpdate);

    function updateUserData(result) {
        console.log(result);
        if (result == 1) {
            M.toast({html: 'Data successfully updated!'});
        } else {
            M.toast({html: 'Something went wrong!'});
        }
    }
})  