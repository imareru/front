

import { evaluate } from './knowledge_base.js';

// import './knowledge_base.js'

// type = 'module';
// evaluate = require('knowledge_base');

const form = document.getElementById('st_expert-form');

 form.addEventListener('submit', getFormValue);

 function getFormValue(event) {
    event.preventDefault();
    
    const question = form.querySelector('[id="question"]')

      console.log(question.value);
      
      evaluate(question);
  }


function answer(){
    var question = document.getElementById('question').ariaValueMax;
    console.log(question);

    evaluate(question);

}