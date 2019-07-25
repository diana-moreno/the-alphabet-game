//librería propia de definciones de diccionario
var questions = [
    { letter: "a", answer: "anagram", status: 0, question: "With the letter A.\nA word or phrase made by using the letters of another word or phrase in a different order."},
    { letter: "b", answer: "blind", status: 0, question: "With the letter B.\nSomeone who is unable to see."},
    { letter: "c", answer: "chaos", status: 0, question: "With the letter C.\nA state of total confusion with no order."},
    { letter: "d", answer: "dialysis", status: 0, question: "With the letter D.\nA process of separating substances from liquid by putting them through a thin piece of skin-like material, especially to make pure the blood of people whose kidneys are not working correctly."},
    { letter: "e", answer: "evil", status: 0, question: "With the letter E.\nProfoundly immoral and wicked."},
    { letter: "f", answer: "fear", status: 0, question: "With the letter F.\nAn unpleasant emotion caused by the threat of danger, pain, or harm."},
    { letter: "g", answer: "ghost", status: 0, question: "With the letter G.\nAn apparition of a dead person which is believed to appear or become manifest to the living, typically as a nebulous image."},
    { letter: "h", answer: "habit", status: 0, question: "With the letter H.\nA settled or regular tendency or practice, especially one that is hard to give up."},
    { letter: "i", answer: "imagination", status: 0, question: "With the letter I.\nThe faculty or action of forming new ideas, or images or concepts of external objects not present to the senses."},
    { letter: "j", answer: "jewel", status: 0, question: "With the letter J.\nAn ornament or piece that contains a precious stone or stones."},
    { letter: "k", answer: "kleptomania", status: 0, question: "With the letter K.\nA recurrent urge to steal, typically without regard for need or profit."},
    { letter: "l", answer: "lier", status: 0, question: "With the letter L.\nA person who doesn't tell the truth."},
    { letter: "m", answer: "mindfullness", status: 0, question: "With the letter M.\nthe practice of being aware of your body, mind, and feelings in the present moment, thought to create a feeling of calm."},
    { letter: "n", answer: "narcissist", status: 0, question: "With the letter N.\nA person who has an excessive interest in or admiration of themselves."},
    { letter: "o", answer: "origami", status: 0, question: "With the letter O.\nThe Japanese art of folding paper into decorative shapes and figures."},
    { letter: "p", answer: "plum", status: 0, question: "With the letter P.\nAn oval fleshy fruit which is purple, reddish, or yellow when ripe and contains a flattish pointed stone."},
    { letter: "q", answer: "questionnaire", status: 0, question: "With the letter Q.\nA list of questions that several people are asked so that information can be collected about something."},
    { letter: "r", answer: "roar", status: 0, question: "With the letter R.\nA full, deep, prolonged cry uttered by a lion or other large wild animal."},
    { letter: "s", answer: "sir", status: 0, question: "With the letter S.\nUsed as a polite or respectful way of addressing a man, especially one in a position of authority."},
    { letter: "t", answer: "turquoise", status: 0, question: "With the letter T.\nA greenish-blue colour."},
    { letter: "u", answer: "ultimatum", status: 0, question: "With the letter U.\nA final demand or statement of terms, the rejection of which will result in retaliation or a breakdown in relations."},
    { letter: "v", answer: "voice", status: 0, question: "With the letter V.\nThe sound produced in a person's larynx and uttered through the mouth, as speech or song."},
    { letter: "w", answer: "warp", status: 0, question: "With the letter W.\nA piece of rope holded by the extremes which serves to jump."},
    { letter: "x", answer: "hexagon", status: 0, question: "Contains the letter X.\nA plane figure with six straight sides and angles."},
    { letter: "y", answer: "year", status: 0, question: "With the letter Y.\nThe time taken by the earth to make one revolution around the sun."},
    { letter: "z", answer: "zoology", status: 0, question: "With the letter Z.\nThe scientific study of animals, especially their structure."},]

var questions2 = [
    { letter: "a", answer: "accountant", status: 0, question: "With the letter A. Someone who keeps or examines the records of money received, paid, and owed by a company or person.\n"},
    { letter: "b", answer: "bald", status: 0, question: "With the letter B.\nSomeone who has little or no hair on the head."},
    { letter: "c", answer: "camper", status: 0, question: "With the letter C.\nA term given to those in an online multiplayer game who will place themselves in a strategic position and wait for an extended period of time until a target enters his field of view."},
    { letter: "d", answer: "durian", status: 0, question: "With the letter D.\nA large tropical fruit with a strong unpleasant smell but a sweet flavour."},
    { letter: "e", answer: "elephant", status: 0, question: "With the letter E.\nA very large animal with thick grey skin, large ears, two curved outer teeth called tusks and a long nose called a trunk."},
    { letter: "f", answer: "flute", status: 0, question: "With the letter F.\n A musical instrument of the woodwind group, shaped like a thin pipe. The player holds it sideways and blows across a hole at one end."},
    { letter: "g", answer: "gladiator", status: 0, question: "With the letter G.\nA man trained to fight other men or animals in order to entertain the public in the ancient Rome."},
    { letter: "h", answer: "husband", status: 0, question: "With the letter H.\nThe man that somebody is married to."},
    { letter: "i", answer: "irrational", status: 0, question: "With the letter I.\nNot based on, or not using, clear logical thought"},
    { letter: "j", answer: "juice", status: 0, question: "With the letter J.\nThe liquid that comes from fruit or vegetables."},
    { letter: "k", answer: "kiss", status: 0, question: "With the letter K.\nTo touch somebody with your lips as a sign of love, affection, sexual desire, etc., or when saying hello or goodbye."},
    { letter: "l", answer: "loan", status: 0, question: "With the letter L.\nMoney that an organization such as a bank lends and somebody borrows."},
    { letter: "m", answer: "magic", status: 0, question: "With the letter M.\nA power that allows people (such as witches and wizards) to do impossible things by saying special words or performing special actions."},
    { letter: "n", answer: "nomad", status: 0, question: "With the letter N.\nMember of a group of people who move from one place to another rather than living in one place all of the time."},
    { letter: "o", answer: "oval", status: 0, question: "With the letter O.\nShaped like a circle that is flattened so that it is like an egg or an ellipse."},
    { letter: "p", answer: "pain", status: 0, question: "With the letter P.\nThe physical feeling caused by disease, injury, or something that hurts the body."},
    { letter: "q", answer: "quick", status: 0, question: "With the letter Q.\nDone or happening in a short amount of time."},
    { letter: "r", answer: "rain", status: 0, question: "With the letter R.\nWater that falls in drops from clouds in the sky."},
    { letter: "s", answer: "Sun", status: 0, question: "With the letter S.\n The star that provides light and heat for the earth and around which the earth moves."},
    { letter: "t", answer: "tax", status: 0, question: "With the letter T.\nMoney paid to the government that is based on your income or the cost of goods or services you have bought."},
    { letter: "u", answer: "uncle", status: 0, question: "With the letter U.\nThe brother of your father or mother or the husband of your aunt."},
    { letter: "v", answer: "violence", status: 0, question: "With the letter V.The use of physical force to harm someone, to damage property, etc.\n"},
    { letter: "w", answer: "witch", status: 0, question: "With the letter W.\nA woman who is believed to have magical powers and who uses them to harm or help other people."},
    { letter: "x", answer: "anorexia", status: 0, question: "Contains the letter X.\nA serious physical and emotional illness in which an abnormal fear of being fat leads to very poor eating habits and dangerous weight loss."},
    { letter: "y", answer: "yesterday", status: 0, question: "With the letter Y.\nOn, during, or for the day before today."},
    { letter: "z", answer: "hospitalization", status: 0, question: "Contains the letter Z.The act of placing a person in a hospital as a patient.\n"},]

var questions3 = [
    { letter: "a", answer: "afternoon", status: 0, question: "With the letter A.\nThe period that starts at about twelve o'clock or after the meal in the middle of the day and ends at about six o'clock or when the sun goes down."},
    { letter: "b", answer: "baseball", status: 0, question: "With the letter B.\nA game played on a large field by two teams of nine players who try to score runs by hitting a small ball with a bat and then running to each of the four bases without being put out."},
    { letter: "c", answer: "cash", status: 0, question: "With the letter C.\nMoney in the form of coins and bills."},
    { letter: "d", answer: "dance", status: 0, question: "With the letter D.\nTo move your body in a way that goes with the rhythm and style of music that is being played."},
    { letter: "e", answer: "eyebrow", status: 0, question: "With the letter E.\nThe line of hair that grows over the eye."},
    { letter: "f", answer: "faith", status: 0, question: "With the letter F.\nStrong belief or trust in someone or something."},
    { letter: "g", answer: "giant", status: 0, question: "With the letter G.\nMuch larger or more powerful than normal. A legendary creature with this characteristics."},
    { letter: "h", answer: "half", status: 0, question: "With the letter H.\nOne of two equal or nearly equal parts into which something can be divided."},
    { letter: "i", answer: "illegal", status: 0, question: "With the letter I.\nNot allowed by the law."},
    { letter: "j", answer: "joke", status: 0, question: "With the letter J.\nSomething said or done to cause laughter."},
    { letter: "k", answer: "key", status: 0, question: "With the letter K.\nA device that is used to open a lock or start an automobile."},
    { letter: "l", answer: "lazy", status: 0, question: "With the letter L.\nNot liking to work hard or to be active. Slow and relaxed."},
    { letter: "m", answer: "milk", status: 0, question: "With the letter M.\nThe white liquid produced by cows, goats and some other animals as food for their young and used as a drink by humans."},
    { letter: "n", answer: "negligence", status: 0, question: "With the letter N.\nFailure to take the care that a responsible person usually takes : lack of normal care or attention."},
    { letter: "o", answer: "obsession", status: 0, question: "With the letter O.\nA state in which someone thinks about someone or something constantly or frequently especially in a way that is not normal."},
    { letter: "p", answer: "pair", status: 0, question: "With the letter P.\nTwo things that are the same and are meant to be used together."},
    { letter: "q", answer: "queen", status: 0, question: "With the letter Q.\nA woman who rules a country and who usually inherits her position and rules for life."},
    { letter: "r", answer: "regret", status: 0, question: "With the letter R.\nTo feel sad or sorry about (something that you did or did not do)."},
    { letter: "s", answer: "salary", status: 0, question: "With the letter S.\nAn amount of money that an employee is paid."},
    { letter: "t", answer: "temple", status: 0, question: "With the letter T.\nA building for worship."},
    { letter: "u", answer: "underground", status: 0, question: "With the letter U.\nLocated or occurring below the surface of the earth. A system of trains that run below the ground in a large city."},
    { letter: "v", answer: "vegetarian", status: 0, question: "With the letter V.\nA person who does not eat meat for health or religious reasons or because they want to avoid being cruel to animals."},
    { letter: "w", answer: "wild", status: 0, question: "With the letter W.\nUncontrolled, violent, or extreme. / Used to refer to plants or animals that live or grow independently of people, in natural conditions and with natural characteristics."},
    { letter: "x", answer: "relax", status: 0, question: "Contains the letter X.\nTo become or to cause (something) to become less tense, tight, or stiff."},
    { letter: "y", answer: "yes", status: 0, question: "With the letter Y.\nUsed to give a positive answer or reply to a question, request, or offer."},
    { letter: "z", answer: "ozone", status: 0, question: "Contains the letter Z.\nA poisonous gas with a strong smell that is a form of oxygen."},]


//Acceso al DOM con jQuery
const buttonPlayGAme = $('#play-game-button')
const rulesContainer = $('#container-right-rules')
let userNameDOM = $('#name')
let gameContainer = $('#container-right-game')
let question = $('#question')
let answerDOM = $('#answer')
let circle = $('.circle')
let nameShownInDOM = $('h1:nth-child(2)')
let okButton = $('#submit-button')
let nextButton = $('#next-button')
let endButton = $('#end-button')
const suceessSound = $('.audio')[0]
const failSound = $('.audio')[1]
let score = $('#score')
let timer = $('#timer')
const container = $('#container')
let guessedWords = $('.guessed-words')
let failedWords = $('.failed-words')
let finalScore = $('.final-score')
let playAgainButton = $('.play-again-button')
let containerWin = $('#container-right-win')
let containerCancelGame = $('#container-right-cancelGame')
let radioAvatarMan = $('#radio-avatar-man')
let radioAvatarWoman = $('#radio-avatar-woman')
let imageAvatarMan = $('#image-avatar-man')
let imageAvatarWoman = $('#image-avatar-woman')
const containerRanking = $('#container-right-ranking')
const rankingButton = $('#ranking-button')
let rankingName = $('.ranking-name')
let rankingPoints = $('.ranking-points')

// al iniciar el juego, el campo de introducir nombre debe estar en focus
userNameDOM.focus()


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
  name = userNameDOM.val();
  if(name === "") {
    name = "anonymous";
  }
  nameShownInDOM.text(name.toUpperCase());
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
  rulesContainer.hide();
  gameContainer.attr('style', 'display : flex');
  answerDOM.focus(); // el input siempre está en focus para escribir rápido
  setUserName();
  setAvatar();
  setTimer();
  setRandomArray();
  showQuestion(i);
}

userNameDOM.keypress(function(e) { // cuando se pulsa enter
  if(e.which == 13) {
    startGame();
  }
})

buttonPlayGAme.click(startGame) // cuando se clica el botón


// función que guarda todas las respuestas del usuario en el array general donde están almacenadas las preguntas.
// cada vez que el usuario inserte su respuesta y presione enter o pulse el botón, se comprobará si la respuesta es correcta, la letra actual dejará de parpadear y se mostrará la siguiente pregunta.

function validateInput() {
  if(i < 26) {
    randomQuestions[i].userAnswer = answerDOM.val();//recoge valor de respuesta
    distoggleLetter(i);
    checkAnswer(i);
    i++;
    continuePlaying(i);
  }
}

answerDOM.keypress(function(e) { // cuando se pulsa enter
  if(e.which == 13) {
    validateInput();
  }
})

okButton.click(function(e) { // cuando se clica el botón de validar (ok)
  validateInput();
})


// función que hace parpadear la letra en el rosco
function toggleLetter(i) {
  if(randomQuestions.length > 0) { // evita error de i undefined
    $('#' + randomQuestions[i].letter).fadeToggle('slow', function() {
      toggleLetter(i);
    })
  }
}


// función que para el parpadeo de la letra
function distoggleLetter(i) {
  if(randomQuestions.length > 0) { // evita error de i undefined
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
    console.log($('#' + randomQuestions[i].letter))
    setPoints(); //actualiza puntos por pantalla
  } else { // si falla
    randomQuestions[i].status = false; // marca pregunta como fallida
    totalWords--; // disminuye las letras pendientes de jugar
    failSound.play(); // sonido de fallo
    $('#' + randomQuestions[i].letter).addClass('red'); // cambia color a rojo
    console.log($('#' + randomQuestions[i].letter))
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
    answerDOM.val('');
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
  var callbackFunction = function () {
    timeoutId = setTimeout(callbackFunction);
    gameContainer.hide();
    containerWin.attr('style', 'display : flex');
    finalScore.text(points);
    failedWords.text(26-points);
    guessedWords.text(points);
    $('button').focus();
    clearTimeout(timeoutId);
  }
  var timeoutId = setTimeout(callbackFunction, 200);
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
  $("div").removeClass("red");
  $("div").removeClass("green");
  $('input').val('');
  userNameDOM.text('');
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
  gameContainer.hide();
  containerCancelGame.hide();
  containerRanking.hide();
  rulesContainer.show();
  container.show();
  userNameDOM.focus();
}

playAgainButton.click(playAgain) // cuando se pulsa el botón


// función que cambia el aspecto de la pantallla cuando se cancela el juego anticipadamente.
function cancelGame() {
  gameIsCancelled = true;
  gameContainer.hide();
  containerCancelGame.attr('style', 'display : flex');
  finalScore.text(points);
  failedWords.text(26-points);
  guessedWords.text(points);
  distoggleLetter(i);
  $('input').focus();
}

endButton.click(cancelGame) // cuando se pulsa el botón


// función que establece un ranking, almacenando nombre y puntuación en un array, ordenado de más a menos puntuación. Únicamente se guardan las 10 mejores puntuaciones.
function setRanking(){
  ranking.push({'name': name.toUpperCase(), 'points': points});
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
  $('button').focus();
}

rankingButton.click(showRanking) // al pulsar el botón

