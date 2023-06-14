
const xhr = new XMLHttpRequest();
// GET-запрос к ресурсу /hello
xhr.open("GET", "http://localhost:8080/students/1");

var fio_el = document.getElementById('fio');
var st_login = document.getElementById('st_login');
var st_date = document.getElementById('st_date');
var st_class = document.getElementById('st_class');


// обработчик получения ответа сервера
xhr.onload = () => {
    if (xhr.status == 200) {                // если код ответа 200
        console.log(xhr.responseText); 
        var data = xhr.response;
        var parsed_data = JSON.parse(data);
        fio_el.innerHTML = parsed_data.s_surname + " " + parsed_data.s_name + " " + parsed_data.s_patronymic;
        st_login.innerHTML = parsed_data.s_login;
        st_date.innerHTML = parsed_data.s_birth_date;
        st_class.innerHTML = parsed_data.class_id;
        // выводим полученный ответ на консоль браузера
    } else {                                // иначе выводим текст статуса
        console.log("Server response: ", xhr.statusText);
    }
};

xhr.send();     

