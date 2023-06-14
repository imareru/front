 const form = document.getElementById('form');

 form.addEventListener('submit', getFormValue);

 function getFormValue(event) {
    event.preventDefault();
    const login = form.querySelector('[id="input_login"]'), //получаем поле name
            password = form.querySelector('[id="input_pass"]'); //получаем поле age
    
    const data = {
            login: login.value,
            password: password.value
        };
    
    const xhr = new XMLHttpRequest();

    // POST-запрос к ресурсу /user
    xhr.open("POST", "http://localhost:8080/auth/login");

    // обработчик получения ответа сервера
    xhr.onload = () => {
        if (xhr.status == 200) { 
            console.log(xhr.responseText);
            // location.replace("/teacher_acc.html")
        } else {
            console.log("Server response: ", xhr.statusText);
        }
    };
        // отправляем значение user в методе send
  }

  
  xhr.send(data); 
    

//   function levenshteinDistance(s, t) {
//     // Создаем массив для хранения результатов расстояний
//     var d = [];
//     var n = s.length;
//     var m = t.length;
    
//     // Заполняем массив начальными значениями
//     for (var i = 0; i <= n; i++) {
//     d[i] = [];
//     d[i][0] = i;
//     }
    
//     for (var j = 0; j <= m; j++) {
//     d[0][j] = j;
//     }
    
//     // Вычисляем расстояния
//     for (var j = 1; j <= m; j++) {
//     for (var i = 1; i <= n; i++) {
//     if (s.charAt(i - 1) == t.charAt(j - 1)) {
//     d[i][j] = d[i - 1][j - 1];
//     } else {
//     d[i][j] = Math.min(d[i - 1][j] + 1, // удаление
//     d[i][j - 1] + 1, // вставка
//     d[i - 1][j - 1] + 1); // замена
//     }
//     }
//     }
    
//     // Возвращаем конечный результат
//     return d[n][m];
//     }
    
//     // Пример использования
//     console.log(levenshteinDistance('кот', 'стол')); // Вывод: 3

//     function levenshteinDistance(a, b) {
//         if(a.length === 0) return b.length;
//         if(b.length === 0) return a.length;
        
//         var matrix = [];
//         // заполняем матрицу
//         for(var i = 0; i <= b.length; i++) {
//         matrix[i] = [i];
//         }
//         for(var j = 0; j <= a.length; j++) {
//         matrix[0][j] = j;
//         }
        
//         // рассчитываем расстояние Левенштейна
//         for(var i = 1; i <= b.length; i++) {
//         for(var j = 1; j <= a.length; j++) {
//         if(b.charAt(i-1) === a.charAt(j-1)) {
//         matrix[i][j] = matrix[i-1][j-1];
//         } else {
//         matrix[i][j] = Math.min(matrix[i-1][j-1] + 1, // замена
//         Math.min(matrix[i][j-1] + 1, // вставка
//         matrix[i-1][j] + 1)); // удаление
//         }
//         }
//         }
        
//         return matrix[b.length][a.length]; // возвращаем расстояние
//         }
        
//         // пример использования функции:
//         console.log(levenshteinDistance("книга", "книги")); // выводит 1 - одна буква нужна для исправления ошибки
//         console.log(levenshteinDistance("директор", "дриектор")); // выводит 1 - одна буква нужна для исправления ошибки

  

 