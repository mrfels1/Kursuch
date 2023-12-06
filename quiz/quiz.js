const questions = [
  {
    question: "Кто придумал пастеризацию?",
    optionA: "Луи Пастер",
    optionB: "Альберт Энштейн",
    optionC: "Владимир Путин",
    optionD: "Полковник Сандерс",
    correctOption: "optionA",
  },

  {
    question: "Сколько сахара содержится в 100%ом соке?",
    optionA: "2.5%",
    optionB: "1%",
    optionC: "0%",
    optionD: "5%",
    correctOption: "optionC",
  },

  {
    question: "Какой из видов сока не существует?",
    optionA: "Свежевыжатый",
    optionB: "Сок прямого отжима",
    optionC: "Выпаренный сок",
    optionD: "Восстановленный сок",
    correctOption: "optionC",
  },

  {
    question: "Лучший производитель сока?",
    optionA: "Lorem Juice Co.",
    optionB: "Добрый",
    optionC: "Каждый День",
    optionD: "Rich",
    correctOption: "optionA",
  },

  {
    question: "Сезон сбора урожая яблок в России идёт в период...",
    optionC: "Июль-ноябрь",
    optionB: "Декабрь-январь",
    optionA: "Февраль-Март",
    optionD: "Апрель-Июнь",
    correctOption: "optionC",
  },

  {
    question: "Самый вкусный сок?",
    optionA: "Яблочный",
    optionB: "Апельсиновый",
    optionD: "Ананасовый",
    optionC: "Мультифрукт",
    correctOption: "optionD",
  },

  {
    question: "Сколько долек в мандаринке?",
    optionA: "2",
    optionB: "4",
    optionC: "8",
    optionD: "16",
    correctOption: "optionC",
  },

  {
    question: "Скоько фруктов в мультифруктовом соке Lorem Juice?",
    optionA: "3",
    optionB: "5",
    optionC: "7",
    optionD: "10",
    correctOption: "optionB",
  },

  {
    question: "Самый популярный вкус сока в России?",
    optionA: "Банановый",
    optionB: "Томатный",
    optionC: "Мультифрукт",
    optionD: "Яблочный",
    correctOption: "optionD",
  },

  {
    question: "Самый популярный сок в мире?",
    optionA: "Апельсиновый",
    optionB: "Яблочный",
    optionC: "Огуречный",
    optionD: "Виноградный",
    correctOption: "optionA",
  },

  {
    question: "Какой сок в основе глинтвейна?",
    optionA: "Вишнёвый",
    optionB: "Виноградный",
    optionC: "Томатный",
    optionD: "Гранатовый",
    correctOption: "optionA",
  },
];

let shuffledQuestions = [];

function handleQuestions() {
  while (shuffledQuestions.length <= 9) {
    const random = questions[Math.floor(Math.random() * questions.length)];
    if (!shuffledQuestions.includes(random)) {
      shuffledQuestions.push(random);
    }
  }
}

let questionNumber = 1;
let playerScore = 0;
let wrongAttempt = 0;
let indexNumber = 0;

function NextQuestion(index) {
  handleQuestions();
  const currentQuestion = shuffledQuestions[index];
  document.getElementById("question-number").innerHTML = questionNumber;
  document.getElementById("player-score").innerHTML = playerScore;
  document.getElementById("display-question").innerHTML =
    currentQuestion.question;
  document.getElementById("option-one-label").innerHTML =
    currentQuestion.optionA;
  document.getElementById("option-two-label").innerHTML =
    currentQuestion.optionB;
  document.getElementById("option-three-label").innerHTML =
    currentQuestion.optionC;
  document.getElementById("option-four-label").innerHTML =
    currentQuestion.optionD;
}

function checkForAnswer() {
  const currentQuestion = shuffledQuestions[indexNumber];
  const currentQuestionAnswer = currentQuestion.correctOption;
  const options = document.getElementsByName("option");
  let correctOption = null;

  options.forEach((option) => {
    if (option.value === currentQuestionAnswer) {
      correctOption = option.labels[0].id;
    }
  });

  if (
    options[0].checked === false &&
    options[1].checked === false &&
    options[2].checked === false &&
    options[3].checked == false
  ) {
    document.getElementById("option-modal").style.display = "flex";
  }

  options.forEach((option) => {
    if (option.checked === true && option.value === currentQuestionAnswer) {
      document.getElementById(correctOption).style.backgroundColor = "green";
      playerScore++;
      indexNumber++;

      setTimeout(() => {
        questionNumber++;
      }, 1000);
    } else if (option.checked && option.value !== currentQuestionAnswer) {
      const wrongLabelId = option.labels[0].id;
      document.getElementById(wrongLabelId).style.backgroundColor = "red";
      document.getElementById(correctOption).style.backgroundColor = "green";
      wrongAttempt++;
      indexNumber++;

      setTimeout(() => {
        questionNumber++;
      }, 1000);
    }
  });
}

function handleNextQuestion() {
  checkForAnswer();
  unCheckRadioButtons();

  setTimeout(() => {
    if (indexNumber <= 9) {
      NextQuestion(indexNumber);
    } else {
      handleEndGame();
    }
    resetOptionBackground();
  }, 1000);
}

function resetOptionBackground() {
  const options = document.getElementsByName("option");
  options.forEach((option) => {
    document.getElementById(option.labels[0].id).style.backgroundColor = "";
  });
}

function unCheckRadioButtons() {
  const options = document.getElementsByName("option");
  for (let i = 0; i < options.length; i++) {
    options[i].checked = false;
  }
}

function handleEndGame() {
  let remark = null;
  let remarkColor = null;

  if (playerScore <= 3) {
    remark = "Вы плохо знаете сок :(";
    remarkColor = "red";
  } else if (playerScore >= 4 && playerScore < 7) {
    remark = "Вы что-то знаете о соке";
    remarkColor = "orange";
  } else if (playerScore >= 7) {
    remark = "Отличная работа, вы знаете почти всё о соке";
    remarkColor = "green";
  }
  const playerGrade = (playerScore / 10) * 100;

  document.getElementById("remarks").innerHTML = remark;
  document.getElementById("remarks").style.color = remarkColor;
  document.getElementById("grade-percentage").innerHTML = playerGrade;
  document.getElementById("wrong-answers").innerHTML = wrongAttempt;
  document.getElementById("right-answers").innerHTML = playerScore;
  document.getElementById("score-modal").style.display = "flex";
}

function closeScoreModal() {
  questionNumber = 1;
  playerScore = 0;
  wrongAttempt = 0;
  indexNumber = 0;
  shuffledQuestions = [];
  NextQuestion(indexNumber);
  document.getElementById("score-modal").style.display = "none";
}

function closeOptionModal() {
  document.getElementById("option-modal").style.display = "none";
}
