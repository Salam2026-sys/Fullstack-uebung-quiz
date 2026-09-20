fetch("Data.json")
  .then(res => res.json())
  .then(data => {
    const questionsContainer = document.getElementById("questions");

    for (let i = 0; i < data.length; i++) {
      const question = data[i];

      const questionBox = document.createElement("section");
      questionBox.className = "question-box";
      questionsContainer.appendChild(questionBox);

      const questionTitle = document.createElement("h2");
      questionTitle.textContent = question.frage;
      questionBox.appendChild(questionTitle);

      const answersContainer = document.createElement("div");
      answersContainer.className = "answers";
      questionBox.appendChild(answersContainer);

      const answerA = document.createElement("button");
      answerA.textContent = question.antworten.a;
      answerA.addEventListener("click", function() {
        checkAnswer(answerA, "a", question.korrekt, question.antworten.a);
      });
      answersContainer.appendChild(answerA);

      const answerB = document.createElement("button");
      answerB.textContent = question.antworten.b;
      answerB.addEventListener("click", function() {
        checkAnswer(answerB, "b", question.korrekt, question.antworten.b);
      });
      answersContainer.appendChild(answerB);
    }
    function checkAnswer(button, answer, correctAnswer, answerText) {
      if (answer === correctAnswer) {
        button.className = "correct";
        button.textContent = answerText + " - Correct!";
      } else {
        button.className = "wrong";
        button.textContent = answerText + " - Wrong!";
      }
    }
  })
