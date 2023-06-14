
document.getElementById('num_class').style.display = 'none';

function show_class(){
  if(form.querySelector('input[name="role"]:checked')){
  document.getElementById("num_class").style.display = "block";
  document.getElementById("class_label").style.display = "block";
}
  // console.log(form.querySelector('input[name="role"]:checked').value)
}

function hide_class(){
  document.getElementById("num_class").style.display = "none";
  document.getElementById("class_label").style.display = "none";
  // console.log(form.querySelector('input[name="role"]:checked').value)

}

const form = document.getElementById('regform');

 form.addEventListener('submit', getFormValue);

 function getFormValue(event) {
  event.preventDefault();
  const surname = form.querySelector('[name="surname"]'),
        name = form.querySelector('[name="name"]'),
        patronymic = form.querySelector('[name="patronymic"]'),
        login = form.querySelector('[name="login"]'), 
        password = form.querySelector('[name="password"]'), 
        role = form.querySelector('input[name="role"]:checked'),
        birth = form.querySelector('[name="birthday"]'),
        gender = form.querySelector('[name="gender"]'),
        num_class = num_class.querySelector('[name="num_class"').value;
  
  const data = {
        surname: surname.value,
        name: name.value,
        patronymic: patronymic.value,
        login: login.value,
        password: password.value,
        birth: birth.value,
        gender: gender.value
      };
      
      console.log(data);
      console.log(role.value)
      
    //   const xhr = new XMLHttpRequest();

      // POST-запрос к ресурсу /user
    //   xhr.open("POST", "http://localhost:8080/auth");
      
      // обработчик получения ответа сервера
    //   xhr.onload = () => {
    //       if (xhr.status == 200) { 
    //           console.log(xhr.responseText);
    //           location.replace("/teacher_acc.html")
    //       } else {
    //           console.log("Server response: ", xhr.statusText);
    //       }
    //   };
    //   xhr.send(data);     // отправляем значение user в методе send
  }

  

