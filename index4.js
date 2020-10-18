function soundwin() {
  var audio = new Audio('sounds/clap.mp3');
  audio.play();
}

function soundlose() {
  var audio = new Audio('sounds/lose.mp3');
  audio.play();
}

function playing() {
  var score1 = Math.floor(Math.random() * 6) + 1;
  var score2 = Math.floor(Math.random() * 6) + 1;

document.querySelectorAll('img')[0].setAttribute('src', (score1) + '.jpg');
//  document.querySelectorAll('img')[0].src = 'images/' + (score1) + '.jpg';
  document.querySelector(".scorePlayer1").textContent = score1;

  document.querySelectorAll('img')[1].setAttribute('src', (score2) + '.jpg');
//document.querySelectorAll('img')[1].src = "images/" + (score2) + '.jpg';
  document.querySelector(".scorePlayer2").textContent = score2;

  if (score1 > score2) {
    document.querySelector(".winner").textContent = "Player 1 is the winner .. 🎉👏";
    soundwin();

  } else if (score1 < score2) {
    document.querySelector(".winner").textContent = "Player 2 is the winner .. 🎉👏";
    soundwin();

  } else {
    document.querySelector(".winner").textContent = "It is equal, try again! 😕";
    soundlose();
  }
}
