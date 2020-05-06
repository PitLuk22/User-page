document.querySelector('#logout').onclick = function () {
    let c = document.cookie; // email=tazik@gmail.com
    console.log(c);
    let d = new Date(); // установка даты 
    d.setTime(d.getTime() - (10 * 60 * 1000)); // загоняем дату в прошлое
    let expires = d.toUTCString(); // преобразуем в строку
    document.cookie = `${c}; expires=${expires}; path=/`;
    location.reload();
}