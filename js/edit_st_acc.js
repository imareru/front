const form = document.getElementById('regform');

 form.addEventListener('submit', getFormValue);

 function getFormValue(event) {
  event.preventDefault();
  
  const surname = form.querySelector('[id="f_edit"]'),
        name = form.querySelector('[id="i_edit"]'),
        patronymic = form.querySelector('[id="o_edit"]'),
        login = form.querySelector('[id="l_edit"]'), 
        password = form.querySelector('[id="p_edit"]'), 
        // role = form.querySelector('input[id="role"]:checked'),
        birth = form.querySelector('[id="brithday_edit"]'),
        // gender = form.querySelector('[name="gender"]'),
        num_class = num_class.querySelector('[id="class_id_edit"').value;
  
  const data = {
        surname: surname.value,
        name: name.value,
        patronymic: patronymic.value,
        login: login.value,
        password: password.value,
        birth: birth.value
      };
      
      console.log(data);
      console.log(role.value)
      
      const xhr = new XMLHttpRequest();

    //   POST-запрос к ресурсу /user
      xhr.open("POST", "http://localhost:8080/student/1");
      
    //   обработчик получения ответа сервера
      xhr.onload = () => {
          if (xhr.status == 200) { 
              console.log(xhr.responseText);
            //   location.replace("/teacher_acc.html")
          } else {
              console.log("Server response: ", xhr.statusText);
          }
      };
      xhr.send(data);     // отправляем значение user в методе send
  }

  
// function show_class(){
//     document.getElementById("class").style.display = "block";
//     document.getElementById("class_label").style.display = "block";
//     // console.log(form.querySelector('input[name="role"]:checked').value)
// }

// function hide_class(){
//     document.getElementById("class").style.display = "none";
//     document.getElementById("class_label").style.display = "none";
//     // console.log(form.querySelector('input[name="role"]:checked').value)

// }
