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
