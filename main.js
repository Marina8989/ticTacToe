const box = Array.from(document.querySelectorAll('.box'));
const spaces = [null, null, null, null, null, null, null, null, null];
const playText = document.querySelector('#playText');
const X_Player = 'X';
const O_Player = 'O';
let playerTurn = X_Player;

const drawBoard = () => {
    box.forEach((item, index) => {
      if(index < 3) {
        item.style.borderBottom = '2px solid green';
      }
      if(index >= 6) {
        item.style.borderTop = '2px solid green';
      }
      if(index % 3 == 0) {
        item.style.borderRight = '2px solid green';
      }
      if(index == 2 || index == 5 || index == 8) {
        item.style.borderLeft = '2px solid green';
      }
     item.addEventListener('click', startGame);
  })
  
}


const startGame = (e) => {
  
  const id = e.target.id;
      if(!spaces[id]) {
         spaces[id] = playerTurn;
         e.target.innerText = playerTurn;
          //  if(hasThePlayerWOn(playerTurn)) {
          //    playText.innerText = `Player ${playerTurn} won!`;
          //    return;
          //  }
         playerTurn = playerTurn === X_Player ? O_Player : X_Player;
      }
}

drawBoard();

