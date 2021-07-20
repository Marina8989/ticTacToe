const box = Array.from(document.querySelectorAll('.box'));
const spaces = [null, null, null, null, null, null, null, null, null];
const playText = document.querySelector('#playText');
const btn = document.querySelector('#btn');
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
           if(hasThePlayerWon(playerTurn)) {
             playText.innerHTML = `Player ${playerTurn} won!`;
             return;
           }
         playerTurn = playerTurn === X_Player ? O_Player : X_Player;
      }
}

const hasThePlayerWon = (player) => {
       if(spaces[0] == player) {
          if(spaces[1] == player && spaces[2] == player) {
              console.log(`Player ${player} won`);
              return true;
          }
          if(spaces[3] == player && spaces[6] == player) {
              console.log(`Player ${player} won`);
              return true;
          }
          if(spaces[4] == player && spaces[8] == player) {
             console.log(`Player ${player} won`);
          }
       }
       if(spaces[8] == player) {
           if(spaces[2] == player && spaces[5] == player) {
               console.log(`Player ${player} won`);
               return true;
           }
           if(spaces[7] == player && spaces[6] == player) {
               console.log(`Player ${player} won`);
               return true;
           }
       }
       if(spaces[4] == player) {
         if(spaces[1] == player && spaces[7] == player) {
             console.log(`Player ${player} won`);
             return true;
         }
         if(spaces[3] == player && spaces[5] == player) {
             console.log(`Player ${player} won`);
             return true;
         }
       }
}

btn.addEventListener('click', () => {
  spaces.forEach((space, index) => {
    spaces[index] = null;
    console.log(spaces[index] = null);
  })
  box.forEach((item) => {
    console.log(item.innerText = '');
    item.innerText = '';
  })
  playerTurn = X_Player;
  playText.innerHTML = `Let's Play`;
})

drawBoard();

