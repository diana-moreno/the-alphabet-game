
function AlphabetGAme() {
  this.name = '';
  this.points = 0;
  this.ranking = [];
  this.randomQuestions = [];
  this.totalWords = 26;
  this.i = 0; //????
  this.seconds = 150;
  this.gameIsCancelled = false;
}

AlphabetGAme.prototype.setUserName = function () {
  this.name = inputName.val();
  if(this.name === "") {
    this.name = "Anonymous";
  }
  this.name = this.name.charAt(0).toUpperCase() + this.name.slice(1).toLowerCase();
  nameShownInDOM.text(this.name);
}

AlphabetGAme.prototype.setAvatar = function() {
    radioAvatarMan.prop( "checked" ) ? imageAvatarMan.show()
                                   : imageAvatarWoman.show();
}

AlphabetGAme.prototype.getRandomArray = function(i) {
  let allQuestions = [questions, questions2, questions3];
  let index = Math.floor(Math.random() * 3);
  return allQuestions[index][i];
}

AlphabetGAme.prototype.setRandomArray = function() {
  function setRandomArray() {
    for(let j = 0; j < 26; j++) {
      this.randomQuestions.push(getRandomArray(j));
    }
  }
}

AlphabetGAme.prototype.startGame = function() {
  containerRules.hide();
  containerGame.attr('style', 'display : flex');
  inputAnswer.focus(); // el input siempre está en focus para escribir rápido
  setUserName();
  setAvatar();
  setTimer();
  setRandomArray();
  showQuestion(i);
}

AlphabetGAme.prototype.validateInput = function() {
  if(i < 26) {
    randomQuestions[i].userAnswer = inputAnswer.val();//recoge valor de respuesta
    distoggleLetter(i);
    checkAnswer(i);
    i++;
    continuePlaying(i);
  }
}

AlphabetGAme.prototype.toggleLetter = function(i) {
  if(i < 26) { // evita error de i undefined cuando el usuario pulsa más enter más veces que letras hay
    $('#' + this.randomQuestions[i].letter).fadeToggle('slow', function() {
      toggleLetter(i);
    })
  }
}

AlphabetGAme.prototype.distoggleLetter = function(i) {
  if(i < 26) { // evita error de i undefined cuando el usuario pulsa más enter más veces que letras hay
    $('#' + this.randomQuestions[i].letter).stop().css('opacity', '1');
  }
}

AlphabetGAme.prototype.showQuestion = function(i) {
  toggleLetter(i);
  question.text(randomQuestions[i].question);
}

AlphabetGAme.prototype.checkAnswer = function(i) {
  if(this.randomQuestions[i].userAnswer.toUpperCase() ===  // si acierta
  this.randomQuestions[i].answer.toUpperCase()) {
    this.randomQuestions[i].status = true; // marca pregunta como acertada
    this.totalWords--; // disminuye las letras pendientes de jugar
    suceessSound.play(); // sonido de acierto
    $('#' + this.randomQuestions[i].letter).addClass('green');//cambia color a verde
    setPoints(); //actualiza puntos por pantalla
  } else { // si falla
    this.randomQuestions[i].status = false; // marca pregunta como fallida
    totalWords--; // disminuye las letras pendientes de jugar
    failSound.play(); // sonido de fallo
    $('#' + this.randomQuestions[i].letter).addClass('red'); // cambia color a rojo
  }
}

AlphabetGAme.prototype.setPoints = function() {
  this.points += 1;
  score.text(this.points);
}

AlphabetGAme.prototype.moveToNextQuestion = function(i) {
  let cutNextQuestion = this.randomQuestions.splice(i, 1)[0];
  this.randomQuestions.push(cutNextQuestion);
}

AlphabetGAme.prototype.continuePlaying = function(i) {
  if(this.totalWords !== 0) {
    inputAnswer.val('');
    showQuestion(i);
  }
}

AlphabetGAme.prototype.endGame = function() {
  containerGame.hide();
  containerWin.attr('style', 'display : flex');
  finalScore.text(points);
  failedWords.text(26-points);
  guessedWords.text(points);
  generalButton.focus();
  distoggleLetter(i);
  finishGameSound.play()
}

AlphabetGAme.prototype.setTimer = function() {
  var callbackFunction = function () {
    timeoutId = setTimeout(callbackFunction, 1000);
    this.seconds -= 1;
    timer.text(seconds);
    if(this.gameIsCancelled) {
      this.seconds = 0;
      clearTimeout(timeoutId);
      cancelGame();
    } else if (this.seconds <= 0 || this.totalWords === 0) {
      clearTimeout(timeoutId);
      endGame();
      setRanking();
    }
  }
  var timeoutId = setTimeout(callbackFunction);
}

AlphabetGAme.prototype.initializeVariables = function() {
  this.randomQuestions = [];
  this.name = "";
  this.points = 0;
  this.totalWords = 26;
  this.i = 0;
  this.seconds = 150;
  this.gameIsCancelled = false;
  generalDiv.removeClass("red");
  generalDiv.removeClass("green");
  generalInput.val('');
  inputName.text('');
  score.text(points);
  timer.text(seconds);
  nameShownInDOM.text(name);
  imageAvatarMan.hide();
  imageAvatarWoman.hide();
}

AlphabetGAme.prototype.plaAgain = function() {
  initializeVariables();
  containerWin.hide();
  containerGame.hide();
  containerCancelGame.hide();
  containerRanking.hide();
  containerRules.show();
  container.show();
  inputName.focus();
}

AlphabetGAme.prototype.cancelGame = function() {
  cancelGameSound.play()
  this.gameIsCancelled = true;
  containerGame.hide();
  containerCancelGame.attr('style', 'display : flex');
  finalScore.text(points);
  failedWords.text(26-points);
  guessedWords.text(points);
  distoggleLetter(i);
  generalInput.focus();
}

AlphabetGAme.prototype.setRanking = function() {
  this.ranking.push({'name': name, 'points': points});
  this.ranking.sort((a, b) => b.points - a.points);
  if(this.ranking.length > 10) {
    this.ranking.pop()
  }
}

AlphabetGAme.prototype.showRanking = function() {
  containerWin.hide();
  containerRanking.attr('style', 'display : flex');
  generalButton.focus();
  for(let i in this.ranking) {
    rankingName[i].textContent = this.ranking[i].name;
    rankingPoints[i].textContent = this.ranking[i].points;
  };
}


var game;

window.onload = function () {
  game = new AlphabetGAme();
};


