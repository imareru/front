const form = document.getElementById('new_t_form');

 form.addEventListener('submit', getFormValue);

 function getFormValue(event) {
  event.preventDefault();
  
  const test_name = form.querySelector('[id="name_input"]'),
        subject = form.querySelector('[id="choose-sub"]')

        sub_id=0;

        if (subject.value=="compose"){
            sub_id=1;
        } else if (subject.value=="art"){
            sub_id=2
        }else if (subject.value=="histort"){
            sub_id=3
        }else if (subject.value=="paint"){
            sub_id=4
        }else if (subject.value=="decor"){
            sub_id=5
        }

  const data = {
        test_name: test_name.text,
        subject: sub_id
      };
      
      console.log(data);
      console.log(typeof(test_name.value));
      
      const xhr = new XMLHttpRequest();

    //   POST-запрос к ресурсу /user
xhr.open("POST", "http://localhost:8080/tests");
      
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