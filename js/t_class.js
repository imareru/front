
const xhr = new XMLHttpRequest();
// GET-запрос к ресурсу /hello
// xhr.open("GET", "http://localhost:8080/classes");

var sel_el = document.getElementById('choose-class');
var table_el = document.getElementById('students_list');

// обработчик получения ответа сервера
// xhr.onload = () => {
//     if (xhr.status == 200) {                // если код ответа 200
//         // console.log(xhr.response); 
//         var data = xhr.response;
//         // console.log(data);
//         var parsed_data = JSON.parse(data);
//         console.log(parsed_data);

//         for ( i = 0; i < 5; i++){
//             console.log(parsed_data[i].class_number);
//             sel_el.append(new Option(parsed_data[i].class_number));
//         }


//     } else {                                // иначе выводим текст статуса
//         console.log("Server response: ", xhr.statusText);
//     }
// };

// xhr.send();     

xhr.open("GET", "http://localhost:8080/students");

xhr.onload = () => {
    if (xhr.status == 200) {                // если код ответа 200
        // console.log(xhr.response); 
        var data = xhr.response;
        // console.log(data);
        var parsed_data = JSON.parse(data);
        console.log(parsed_data);

        for ( i = 0; i < 7; i++){
            console.log(parsed_data[i].s_surname);
            // for (let i = 0; i < 3; i++) {
            //     let tr = document.createElement('tr');
            // }
            // let td = document.createElement('td');
            //     td.textContent = 'x';
            //     tr.appendChild(td);
            //     table_el.appendChild(tr);
            // table_el.innerHTML = parsed_data[i].s_surname;
            // table_el.append((parsed_data[i].class_number));
        }


    } else {                                // иначе выводим текст статуса
        console.log("Server response: ", xhr.statusText);
    }
};

xhr.send();  