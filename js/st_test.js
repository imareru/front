//отправка запроса на тесты из бд
//Подключение к базе данных и выполнение запроса
// let data = fetch('url').then(response => response.json());

// //Преобразование данных
// let transformedData = data.map(record => ({...record}));

// //Создание HTML-элементов
// let elements = transformedData.map(record => {
//   let listItem = document.createElement('li');
//   let text = document.createTextNode(record.property);
//   listItem.appendChild(text);
//   return listItem;
// });

// //Размещение элементов на странице
// let list = document.getElementById('list');
// elements.forEach(element => list.appendChild(element));


//вывод тестов - генерация хтмл

let div = document.createElement('div');
// div.className = "st-test";
// div.innerHTML = "my message";
// div.insertAdjacentHTML = (
//     'afterbegin',
//     `<div class="st-test">
//       <input type="text" name="name" value="" />
//       <input type="text" name="value" value="" />
//       <label><input type="checkbox" name="check" value="1" />Checked?</label>
//       <input type="button" value="-" onclick="removeRow(this)">
//     </div>`      
//   )



// let cont = document.getElementsById("container");

// console.log(cont);
// document.body.append(div);

let elements = [1, 2, 3, 4, 5];

// elements.forEach(element => cont.appendChild(div));


for (let i = 0; i <= elements.length; i++) { 
    document.getElementById('container').insertAdjacentHTML = (
        'afterbegin',
        `<div class="st-test">
          <input type="text" name="name" value="" />
          <input type="text" name="value" value="" />
          <label><input type="checkbox" name="check" value="1" />Checked?</label>
          <input type="button" value="-" onclick="removeRow(this)">
        </div>`      
      );
    // console.log(i);
  }


