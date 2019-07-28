//Acceso al DOM con jQuery
const container = $('#container')
const containerWin = $('#container-right-win')
const containerCancelGame = $('#container-right-cancelGame')
const containerGame = $('#container-right-game')
const containerRules = $('#container-right-rules')
const containerRanking = $('#container-right-ranking')

const generalDiv = $('div')
const generalInput = $('input')
const generalButton = $('button')

const inputName = $('#name')
const question = $('#question')
const inputAnswer = $('#answer')
const nameShownInDOM = $('h1:nth-child(2)')
const circle = $('.circle')

const radioAvatarMan = $('#radio-avatar-man')
const radioAvatarWoman = $('#radio-avatar-woman')
const imageAvatarMan = $('#image-avatar-man')
const imageAvatarWoman = $('#image-avatar-woman')

const playGameButton = $('#play-game-button')
const submitButton = $('#submit-button')
const nextButton = $('#next-button')
const rankingButton = $('#ranking-button')
const endButton = $('#end-button')
const playAgainButton = $('.play-again-button')

const suceessSound = $('.audio')[0]
const failSound = $('.audio')[1]
const cancelGameSound = $('.audio')[2]
const finishGameSound = $('.audio')[3]
$('.low').prop("volume", 0.5); //set volume to audios

const score = $('#score')
const timer = $('#timer')

const guessedWords = $('.guessed-words')
const failedWords = $('.failed-words')
const finalScore = $('.final-score')

const rankingName = $('.ranking-name')
const rankingPoints = $('.ranking-points')


// al iniciar el juego, el campo de introducir nombre debe estar en focus
inputName.focus()


// función que recoge el nombre introducido pòr el usuario y lo introduce en el DOM, dentro del rosco en mayúsculas. En caso de que no introduzca nombre, aparecerá anonymous.
function setUserName() {
  name = inputName.val();
  if(name === "") {
    name = "Anonymous";
  }
  name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  nameShownInDOM.text(name);
}


// función que muestra por pantalla, un avatar de hombre o de mujer, dependiendo de la selección del usuario.
function setAvatar() {
  radioAvatarMan.prop( "checked" ) ? imageAvatarMan.show()
                                   : imageAvatarWoman.show();
}

// funciones que cambian el comportamiento visual dependiendo de si la respuesta es correcta o incorrecta
function answerIsCorrectDom(i) {
  suceessSound.play(); // sonido de acierto
  $('#' + randomQuestions[i].letter).addClass('green');//cambia color a verde
}


function answerIsWrongDom(i) {
  failSound.play(); // sonido de fallo
  $('#' + randomQuestions[i].letter).addClass('red'); // cambia color a rojo
}

//funciones que actualizan por pantalla los puntos y el timer.
function showPointsDom(points) {
  score.text(points);
}

function showTimerInDom(seconds) {
  timer.text(seconds);
}


// función que hace parpadear la letra en el rosco
function toggleLetter(i) {
  if(i < 26) { // evita error de i undefined cuando el usuario pulsa más enter más veces que letras hay
    $('#' + randomQuestions[i].letter).fadeToggle('slow', function() {
      toggleLetter(i);
    })
  }
}


// función que para el parpadeo de la letra
function distoggleLetter(i) {
  if(i < 26) { // evita error de i undefined cuando el usuario pulsa más enter más veces que letras hay
    $('#' + randomQuestions[i].letter).stop().css('opacity', '1');
  }
}


// función que muestra cada pregunta y hace parpadear la letra vigente a la que está vinculada.
function showQuestion(i) {
  toggleLetter(i);
  question.text(randomQuestions[i].question);
}

// comportamiento si la partida continúa
function continuePlayingDom(i) {
  inputAnswer.val('');
  showQuestion(i);
}


// funciones que cambian el aspecto visual del juego en diferentes situaciones (al iniciar el juego, al volver a jugar, al ganar, al cancelar, etc)
function startGameDom() {
  containerRules.hide();
  containerGame.attr('style', 'display : flex');
  inputAnswer.focus(); // el input siempre está en focus para escribir rápido
}

function endGameDom() {
  containerGame.hide();
  containerWin.attr('style', 'display : flex');
  finalScore.text(points);
  failedWords.text(26-points);
  guessedWords.text(points);
  generalButton.focus();
  distoggleLetter(i);
  finishGameSound.play()
}

function resetDom() {
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

function playAgainDom() {
  containerWin.hide();
  containerGame.hide();
  containerCancelGame.hide();
  containerRanking.hide();
  containerRules.show();
  container.show();
  inputName.focus();
}

function cancelGameDom() {
  cancelGameSound.play()
  gameIsCancelled = true;
  containerGame.hide();
  containerCancelGame.attr('style', 'display : flex');
  finalScore.text(points);
  failedWords.text(26-points);
  guessedWords.text(points);
  distoggleLetter(i);
  generalInput.focus();
}

function showRankingDom() {
  containerWin.hide();
  containerRanking.attr('style', 'display : flex');
  for(let i in ranking) {
    rankingName[i].textContent = ranking[i].name;
    rankingPoints[i].textContent = ranking[i].points;
  };
  generalButton.focus();
}


// función que recoge la respuesta introducida por el usuario en el DOM.
function getInputAnswerDom() {
  return inputAnswer.val()
}


//Dom events que dependen de funciones de index.js
function playGameDomEvent(cb) {
  playGameButton.click(cb)
  inputName.keypress(function(e) {
    if(e.which == 13) {
      cb();
    }
  })
}

function validateInputDomEvent(cb) {
  inputAnswer.keypress(function(e) {
    if(e.which == 13) {
      cb();
    }
  })
  submitButton.click(function(e) {
    cb();
  })
}

function nextButtonDomEvent(cb) {
  nextButton.click(cb)
}

function playAgainDomEvent(cb) {
  playAgainButton.click(cb)
}

function endDomEvent(cb) {
  endButton.click(cb)
}

function rankingDomEvent(cb) {
  rankingButton.click(cb)
}