var randomNumber = Math.floor(Math.random() * 100) + 1; //---------------RANDOM CHOISE JUSQU'A 100---------------------

var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');
var print = document.querySelector('.print');
print.textContent = randomNumber;

var guessSubmit = document.querySelector('.guessSubmit'); //---------------BOUTON VALIDER--------------------
var guessField = document.querySelector('.guessField'); //-----------------INPUT-----------------------------

var guessCount = 1;
var resetButton = document.createElement("button"); //---------------------BOUTON RECOMMENCER-----------------
//------------------------------------------------ALGORITHME DE LA DEVINETTE----------------------------------
function checkGuess() {
  var userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = 'Ton historique: ';
  }
  guesses.textContent += userGuess + ' ';

  if (userGuess === randomNumber) {
    lastResult.textContent = 'Felicitation, bien vu!';
    lowOrHi.textContent = '';
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = '!!! PERDU !!!';
    setGameOver();
  } else {
    lastResult.textContent = 'Faux!';
    if (userGuess < randomNumber) {
      lowOrHi.textContent = 'Le chiffre est trop bas!';
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = 'Le chiffre est trop haut!';
    }
  }

  guessCount++;
  guessField.value = '';
  guessField.focus();
}
guessSubmit.addEventListener('click', checkGuess);
//-------------------------------------------EVENEMENT DU BOUTON RECOMMENCER-----------------
function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Recommencer';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}
//-------------------------------------------FONCTION DE CALCUL----------------------------
function resetGame() {
  guessCount = 1;

  var resetParas = document.querySelectorAll('.resultParas p');
  for (var i = 0; i < resetParas.length; i++) {
    resetParas[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton); //-----------------------DISPARITION DU BOUTON RECOMMENCER------------

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = 'transparent'; //------------------------------RESULTAT-------------------------

  randomNumber = Math.floor(Math.random() * 100) + 1;
  print.textContent = randomNumber; //-----------------------------AFFICHAGE DE LA REPONSE (pour être gentil)--------------------
}
