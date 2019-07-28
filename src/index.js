// al iniciar el juego, el campo de introducir nombre debe estar en focus
inputName.focus()


// declaración de variables globales
let ranking = [];
let name = '';
let points = 0;
let totalWords = 26;
let i = 0;
let seconds = 150;
let gameIsCancelled = false;
let randomQuestions = [];


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
  if(radioAvatarMan.prop( "checked" )) {
    imageAvatarMan.show();
  } else {
    imageAvatarWoman.show();
  }
}


// funciones que eligen una definición entre tres colecciones diferentes y guarda los resultados en un array
function getRandomArray(i) {
  let allQuestions = [questions, questions2, questions3];
  let index = Math.floor(Math.random() * 3);
  return allQuestions[index][i];
}

function setRandomArray() {
  for(let i = 0; i < 26; i++) {
    randomQuestions.push(getRandomArray(i));
  }
}


// función que cambia de pantalla al pulsar el botón de Play Game, para empezar el juego y prepara el juego para jugar, mostrando las preguntas, timer, nombre de usuario.
function startGame() {
  containerRules.hide();
  containerGame.attr('style', 'display : flex');
  inputAnswer.focus(); // el input siempre está en focus para escribir rápido
  setUserName();
  setAvatar();
  setTimer();
  setRandomArray();
  showQuestion(i);
}

inputName.keypress(function(e) { // cuando se pulsa enter
  if(e.which == 13) {
    startGame();
  }
})

playGameButton.click(startGame) // cuando se clica el botón


// función que guarda todas las respuestas del usuario en el array general donde están almacenadas las preguntas.
// cada vez que el usuario inserte su respuesta y presione enter o pulse el botón, se comprobará si la respuesta es correcta, la letra actual dejará de parpadear y se mostrará la siguiente pregunta.

function validateInput() {
  if(i < 26) {
    randomQuestions[i].userAnswer = inputAnswer.val();//recoge valor de respuesta
    distoggleLetter(i);
    checkAnswer(i);
    i++;
    continuePlaying(i);
  }
}

inputAnswer.keypress(function(e) { // cuando se pulsa enter
  if(e.which == 13) {
    validateInput();
  }
})

submitButton.click(function(e) { // cuando se clica el botón de validar (ok)
  validateInput();
})


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


//función que comprueba si la respuesta es correcta, cambiando la letra del rosco de color rojo si es incorrecta y reproduciendo un sonido de fallo, de color verde si es correcta y reproduciendo un sonido de acierto, o dejándola igual si se pasa a la siguiente.
function checkAnswer(i) {
  if(randomQuestions[i].userAnswer.toUpperCase() ===  // si acierta
  randomQuestions[i].answer.toUpperCase()) {
    randomQuestions[i].status = true; // marca pregunta como acertada
    totalWords--; // disminuye las letras pendientes de jugar
    suceessSound.play(); // sonido de acierto
    $('#' + randomQuestions[i].letter).addClass('green');//cambia color a verde
    setPoints(); //actualiza puntos por pantalla
  } else { // si falla
    randomQuestions[i].status = false; // marca pregunta como fallida
    totalWords--; // disminuye las letras pendientes de jugar
    failSound.play(); // sonido de fallo
    $('#' + randomQuestions[i].letter).addClass('red'); // cambia color a rojo
  }
}


// función que actualiza puntos por pantalla
function setPoints() {
  points += 1;
  score.text(points);
}


// función que elimina la pregunta actual de la posición vigente del array donde está almacenado y la añade al final.
function moveToNextQuestion(i) {
  let cutNextQuestion = randomQuestions.splice(i, 1)[0];
  randomQuestions.push(cutNextQuestion);
}


// función que sigue mostrando preguntas mientras haya palabras disponibles por mostrar, reseteando el input a valor vacío.
function continuePlaying(i) {
  if(totalWords !== 0) {
    inputAnswer.val('');
    showQuestion(i);
  } else {
    //endGame();
    //setRanking()
  }
}


//cuando se pulsa el botón "next", la letra actual deja de parpadear, se pasa a la siguiente y se comprueba si se sigue jugando.
nextButton.click(function() {
  distoggleLetter(i);
  moveToNextQuestion(i);
  continuePlaying(i);
})


// función que cambia el aspecto visual cuando finaliza el juego y tarda medio segundo en hacerlo para dejar ver la situación actual primero.
function endGame() {
  containerGame.hide();
  containerWin.attr('style', 'display : flex');
  finalScore.text(points);
  failedWords.text(26-points);
  guessedWords.text(points);
  generalButton.focus();
  distoggleLetter(i);
  finishGameSound.play()
}


// función que establece un timer que se actualiza en el DOM a cada segundo. Termina cuando se acaban los segundos (150) o cuando se agotan las definiciones disponibles. Contempla también la posibilidad de cancelar anticipadamente el juego, momento en que el tiempo se para.
function setTimer() {
  var callbackFunction = function () {
    timeoutId = setTimeout(callbackFunction, 1000);
    seconds -= 1;
    timer.text(seconds);
    if(gameIsCancelled) {
      seconds = 0;
      clearTimeout(timeoutId);
      cancelGame();
    } else if (seconds <= 0 || totalWords === 0) {
      clearTimeout(timeoutId);
      endGame();
      setRanking();
    }
  }
  var timeoutId = setTimeout(callbackFunction);
}


// función que inicializa las variables para ponerlas a 0 y poder volver a iniciar el juego.
function initializeVariables() {
  randomQuestions = [];
  name = "";
  points = 0;
  totalWords = 26;
  i = 0;
  seconds = 150;
  gameIsCancelled = false;
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


// función que cambia el aspecto de la pantallla cuando se presiona el botón de play again, se ocultan los elementos actuales y se muestra de nuevo la pantalla inicial con las instrucciones y con los valores reseteados.
function playAgain() {
  initializeVariables();
  containerWin.hide();
  containerGame.hide();
  containerCancelGame.hide();
  containerRanking.hide();
  containerRules.show();
  container.show();
  inputName.focus();
}

playAgainButton.click(playAgain) // cuando se pulsa el botón


// función que cambia el aspecto de la pantallla cuando se cancela el juego anticipadamente.
function cancelGame() {
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

endButton.click(cancelGame) // cuando se pulsa el botón


// función que establece un ranking, almacenando nombre y puntuación en un array, ordenado de más a menos puntuación. Únicamente se guardan las 10 mejores puntuaciones.
function setRanking(){
  ranking.push({'name': name, 'points': points});
  ranking.sort((a, b) => b.points - a.points);
  if(ranking.length > 10) {
    ranking.pop()
  }
}


// función que muestra la pantalla de ranking y el ranking con sus nombres y puntuación correspondientes. Se acumula el ranking si se vuelve a jugar.
function showRanking() {
  containerWin.hide();
  containerRanking.attr('style', 'display : flex');
  for(let i in ranking) {
    rankingName[i].textContent = ranking[i].name;
    rankingPoints[i].textContent = ranking[i].points;
  };
  generalButton.focus();
}

rankingButton.click(showRanking) // al pulsar el botón

