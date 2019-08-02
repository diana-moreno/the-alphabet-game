class Questions {
  constructor() {
    this.randomQuestions = [];
    this.setRandomArray();
    //this.renderQuestions();
  }
  getRandomArray(i) {
    let allQuestions = [questions1, questions2, questions3];
    let index = Math.floor(Math.random() * 3);
    return allQuestions[index][i];
  }
  setRandomArray() {
    for(let i = 0; i < 26; i++) {
      this.randomQuestions.push(this.getRandomArray(i));
    }
  }
  renderQuestions() {
    this.randomQuestions.forEach(elem => console.log(elem))
  }
}

class Player {
  constructor(name, avatar) {
    this.name = '';
    this.avatar = '';
    this.points = 0;
  }
  setPoints() {
    this.points += 1;
    //showPointsDom(points)
  }
}

class Game {
  constructor() {
    this.questions = new Questions();
    //this.player = new Player(
    //  this.domLayout.getNameFromDom(), this.domLayout.getAvatarFromDom())
    //console.log(this.player)
    this.letters = 26;
    this.seconds = 150;
    this.gameIsCancelled = false;
    this.gameIsFinished = false;
    this.questions = new Questions(); // all object questions
    this.i = 0; // index of current question
    this.questionObj = this.selectOneQuestion(this.i); //every object question
    //this.counterTimeoutId = null;
  }
  selectOneQuestion(i) {
    return this.questions.randomQuestions[i]
  }
  setCounter() {
    function updateSeconds() {
      this.seconds -= 1;
      console.log(this.seconds);
    }
    this.counterTimeoutId = setInterval(updateSeconds.bind(this), 1000);
  }
  clearCounter() {
    clearInterval(this.counterTimeoutId);
  }
  validateInput() {
    if(i < 26) {
      randomQuestions[i].userAnswer = getInputAnswerDom();//recoge valor de respuesta
      distoggleLetter(i);
      checkAnswer(i);
      i++;
      continuePlaying(i);
    }
  }
}

class Ranking {
  constructor() {
    this.ranking = [];
  }
  setRanking(){
    this.ranking.push({'name': name, 'points': points}); //ojo name
    this.ranking.sort((a, b) => b.points - a.points);
    if(this.ranking.length > 10) {
      this.ranking.pop()
    }
  }
}
