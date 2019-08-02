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
const questionDom = $('#question')
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

class DomLayout {
  constructor() {
    this.game = new Game();
    this.domEvents();
    //this.startGame()
  }
  startGame() {
    this.startGameDomLayout();
    this.getNameFromDom();
    this.showNameInDom();
    this.getAvatarFromDom();
    this.showAvatarInDom();
    this.showQuestion(game.i, game.questionObj);
    this.toggleLetter(game.i, game.questionObj);
    this.game.setCounter();
  }
  getNameFromDom() {
    let name = inputName.val();
    name ? name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
         : name = 'Anonymous';
    return name;
  }
  showNameInDom() {
    nameShownInDOM.text(this.getNameFromDom());
  }
  getAvatarFromDom() {
    return radioAvatarMan.prop( "checked" ) ? "man" : "woman";
  }
  showAvatarInDom() {
    radioAvatarMan.prop( "checked" ) ? imageAvatarMan.show()
                                     : imageAvatarWoman.show();
  }
  getInputAnswerDom() {
    return inputAnswer.val()
  }
  showQuestion(i, questionObj) {
    //this.toggleLetter(i, questionObj);
    questionDom.text(questionObj.question);
  }
  showPointsDom(points) {
    score.text(this.points);
  }
  showTimerInDom(seconds) {
    timer.text(this.seconds);
  }
  toggleLetter(i, questionObj) {
    if(i < 26) { // avoid undefined error
      $('#' + questionObj.letter).fadeToggle('slow', function() {
        this.toggleLetter(i, questionObj); //infinit
      }.bind(this)) //for callbacks
    }
  }
  distoggleLetter(i, questionObj) {
    if(i < 26) { // avoid undefined error
      $('#' + questionObj.letter).stop().css('opacity', '1');
    }
  }
  startGameDomLayout() {
    containerRules.hide();
    containerGame.attr('style', 'display : flex');
    inputAnswer.focus(); // el input siempre está en focus para escribir rápido
  }

  endGameDomLayout() {
    containerGame.hide();
    containerWin.attr('style', 'display : flex');
    finalScore.text(points);
    failedWords.text(26-points);
    guessedWords.text(points);
    generalButton.focus();
    this.distoggleLetter(i, questionObj); // de i?
    finishGameSound.play()
  }

  resetDomLayout() {
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

  playAgainDomLayout() {
    containerWin.hide();
    containerGame.hide();
    containerCancelGame.hide();
    containerRanking.hide();
    containerRules.show();
    container.show();
    inputName.focus();
  }

  cancelGameDomLayout() {
    cancelGameSound.play()
    gameIsCancelled = true;
    containerGame.hide();
    containerCancelGame.attr('style', 'display : flex');
    finalScore.text(points);
    failedWords.text(26-points);
    guessedWords.text(points);
    this.distoggleLetter(i, questionObj);
    generalInput.focus();
  }

  showRankingDomLayout() {
    containerWin.hide();
    containerRanking.attr('style', 'display : flex');
    for(let i in ranking) {
      rankingName[i].textContent = ranking[i].name;
      rankingPoints[i].textContent = ranking[i].points;
    };
    generalButton.focus();
  }
  domEvents() {
    playGameButton.click(this.startGame.bind(this))
    submitButton.click(this.validateInput.bind(this))
    nextButton.click(this.nextButtonBehavior.bind(this))
    playAgainButton.click(this.playAgain.bind(this))
    endButton.click(this.cancelGameDom.bind(this))
    rankingButton.click(this.showRankingDom.bind(this))
  }

  playGameDomEvent(cb) {
    inputName.keypress(function(e) {
      if(e.which == 13) {
        cb();
      }
    })
  }
  validateInputDomEvent(cb) {
    inputAnswer.keypress(function(e) {
      if(e.which == 13) {
        cb();
      }
    })
  }
}

new DomLayout()