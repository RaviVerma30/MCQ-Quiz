(function(){
  function buildQuiz(){
    const output = [];
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
        const answers = [];
        for(letter in currentQuestion.answers){
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;
    myQuestions.forEach( (currentQuestion, questionNumber) => {
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
      if(userAnswer === currentQuestion.correctAnswer){
        numCorrect++;
        answerContainers[questionNumber].style.color = 'lightgreen';
       
      }
      else{
        answerContainers[questionNumber].style.color = 'black';
      }
    });
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "Who among the following wrote Sanskrit grammar?",
      answers: {
        a: "Kalidasa",
        b: "Charak",
        c: "Panini",
        d: "Aryabhatt",
      },
      correctAnswer: "c"
    },
    {
      question: "Which among the following headstreams meets the Ganges in last?",
      answers: {
        
        a: "Alaknanda",
        b: "Pindar",
        c: "Mandakini",
        d: "Bhagirathi",
      },
      correctAnswer: "d"
    },
    {
      question: "The metal whose salts are sensitive to light is?",
      answers: {
        a: "Zinc",
        b: "Silver",
        c: "Copper",
        d: "Aluminum",
      },
      correctAnswer: "b"
    },
    {
        question:"Patanjali is well known for the compilation of –",
        answers: {
            a: "Yoga Sutra",
            b: "Panchatantra",
            c: "Brahma Sutra",
            d: "Ayurveda",

        },
        correctAnswer: "a"
    },
    {
        question:"The country that has the highest in Barley Production?",
        answers:{
            a: "China",
            b: "India",
            c: "Russia",
            d: "France",

        },
        correctAnswer: "c"
    }
  ];
  buildQuiz();
  submitButton.addEventListener('click', showResults);
})();