const artistInfo = {
  "Леонардо да Винчи": {
    birthYear: 1452,
    deathYear: 1519,
    mostFamousWorks: ["Мона Лиза", "Тайная вечеря"],
    style: "Он известен как мастер масляной живописи, включая живописные техники кьяроскуро (использование тени для создания трёхмерного эффекта) и сфумато (использование глазури слегка различных тонов цвета, создающих почти незаметный переход от светлого к тёмному)"
  },
  "Винсент Ван Гог": {
    birthYear: 1853,
    deathYear: 1890,
    mostFamousWorks: ["Звездная ночь", "Маки"],
    style: "Особенности творчества: динамичность, колорит, насыщенность, яркость, декоративность, символичность. Исходил из субъективного прочтения окружающей его жизни и действительности. Объективный образ соед с эмоци он переживаниями. Техника экспрессивна т. к является субъективной реакцией художника на мир. Во всех произведениях он стремился понять внутреннюю суть вещей."
  },
  "Пабло Пикассо": {
    birthYear: 1881,
    deathYear: 1973,
    mostFamousWorks: ["Герника", "Авиньонские девицы"],
    style: "Больше всего он был известен картинами в стиле «кубизм» – живопись с использованием простых геометрических фигур. Например, людей он изображал треугольниками и квадратами, вырисовывая части тела и черты лица совсем не в тех местах, где им положено быть. Его работы перевернули представление людей о современном искусстве. Теперь оно ассоциируется с именем Пабло Пикассо."
  },
  "Клод Моне": {
    birthYear: 1840,
    deathYear: 1926,
    mostFamousWorks: ["Пруд с кувшинками", "Прогулка", "Женщина в саду"],
    style: "Пейзажист. Один из основателей импрессионизма. французский живописец и основоположник импрессионизма в живописи, который считается важным предшественником модернизма, особенно в его попытках рисовать природу, как он воспринял его. За свою долгую карьеру он был самым последовательным и плодовитым практиком философии импрессионизма выражения своего восприятия."
  },
  "Огюст Ренуар": {
    birthYear: 1841,
    deathYear: 1919,
    mostFamousWorks: ["Завтрак гребцов", "Две сестры", "Лягушатник"],
    style: "удожник не любил героические и трагические сюжеты, гораздо больше его интересовала обычная жизнь с её простыми радостями. Ренуар любил писать людей, которые пьют, танцуют и веселятся; он любил красивые пейзажи и цветы, любил детей, но больше всего обожал молодых, полных, красивых женщин."
  },
  "Иван Айвазовский": {
    birthYear: 1817,
    deathYear: 1900,
    mostFamousWorks: ["Девятый вал", "Тонущий корабль"],
    style: "Художник писал в основном морские пейзажи. Одной из самых известных его картин является «Девятый вал», написанная Айвазовским в 1850 году. Он также посвятил многие свои работы подвигам русских моряков – «Чесменский бой», «Наваринский бой» (1848) и др. В общей сложности художник написал больше 6 тысяч работ и завоевал мировую славу в качестве художника-мариниста."
  }
};

function getArtistInfo(question) {
  const regex =
    /(?:кто такой|какой|расскажи о|что ты знаешь о)\s+([^\[a-z?]+)/i;
  const match = question.match(regex);

  if (match && match.length === 2) {
    const artist = match[1];
    console.log(match[0]);
    console.log(match[1]);
    console.log(match);
    if (artistInfo.hasOwnProperty(artist)) {
      const info = artistInfo[artist];
      return `${artist} родился в ${info.birthYear} и умер в ${info.deathYear}. Его наиболее известные работы: ${info.mostFamousWorks.join(", ")}. Стиль живописи можно описать следующими словами. ${info.style}`;
    } else {
      return `Я не могу найти информацию о художнике ${artist}.`;
    }
  } else {
    return `Я не понимаю, о каком художнике вы говорите.`;
  }
}

//   function evaluate(question) {
//       var answer;
//       for (var statement in knowledgeBase[question]) {
//           if (confirm(statement)) {
//               answer = knowledgeBase[question][statement];
//           }
//       }
//       console.log("Ответ: " + answer);
//       return answer;
//   }

var confirm_btn = document.createElement("button");
confirm_btn.innerText = "отправить";
confirm_btn.className = "btn";
confirm_btn.setAttribute("onClick", "send_mes()");
confirm_btn.style.float = "right";

var dialogue = document.getElementById("dialogue");
var messageList = document.getElementById("messageList");
var q_input = document.createElement("input");
q_input.type = "text";

function start_dialogue() {
  var start_btn = document.getElementById("start_btn");
  var welcome = document.createElement("li");
  start_btn.style.display = "none";
  welcome.innerText =
    "Привет! Я система, которая заменяет эксперта. Ты можешь задать мне вопрос, а я постараюсь на него ответить.";
  messageList.append(welcome);
  dialogue.append(q_input);
  dialogue.append(confirm_btn);
}

function send_mes() {
  var q_mes = q_input.value;
  confirm_btn.style.display = "none";
  q_input.style.display = "none";
  var newMessage = document.createElement("li");
  newMessage.append(document.createTextNode(q_mes));
  messageList.append(newMessage);
  answer_q(q_mes);
  confirm_btn.style.display = "block";
  q_input.value = '';
  q_input.style.display = "block";
  return q_mes;
}

function answer_q(message) {
  var new_anse = document.createElement("li");
  var sys_ans = getArtistInfo(message);
  console.log(typeof message);
  console.log(typeof getArtistInfo(message));
  new_anse.append(document.createTextNode(sys_ans));
  messageList.append(new_anse);
}
