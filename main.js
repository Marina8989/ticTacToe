const box = Array.from(document.querySelectorAll('.box'));
const X_Player = 'X';
const O_Player = 'O';
let playerTurn = X_Player;

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
})

console.log(box);

function startGame() {
    box.forEach((item, index )=> {
        item.addEventListener('click', (e)=> {
            console.log(index);
            if(index == e.target.id) {
            item.innerText = playerTurn;
             playerTurn = playerTurn === X_Player ? O_Player : X_Player;
            }
        })
    })
}
startGame();

