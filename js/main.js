

//  function send_req(){
//     fetch('http://localhost:8080/auth')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error))
//  }

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
      xhr.open("POST", "http://localhost:8080/auth");
      
      // обработчик получения ответа сервера
      xhr.onload = () => {
          if (xhr.status == 200) { 
              console.log(xhr.responseText);
              location.replace("/teacher_acc.html")
          } else {
              console.log("Server response: ", xhr.statusText);
          }
      };
      xhr.send(data);     // отправляем значение user в методе send
  }

  

  

 