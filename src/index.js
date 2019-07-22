//Acceso al DOM con jQuery
const buttonPlayGAme = $('#play-game')
const rulesTextContainer = $('#rules-text-container')
const gamePanelContainer = $('#game-panel-container')


//cambia de pantalla al pulsar el botón de Play Game, para empezar el juego
function ifPressPlayGameButton() {
  rulesTextContainer.hide()
  gamePanelContainer.show()
}

buttonPlayGAme.click(ifPressPlayGameButton)