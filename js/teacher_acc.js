// const http = require("http");
// const fs = require("fs");
    
// http.createServer(function(request, response){
      
//     if(request.url == "/teachers"){
//         const user = {name: "Tom", age: 37};
//         response.end(JSON.stringify(user));
//     }
//     else{
//         fs.readFile("index.html", (error, data) => response.end(data));
//     }
// }).listen(8080, ()=>console.log("Сервер запущен по адресу http://localhost:8080"));

 function send_req(){
fetch('http://localhost:8080/teachers')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))
 }

 function tap_me(){
  fetch('http://localhost:8080/teachers')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))
 }