const box = Array.from(document.querySelectorAll('.box'));
console.log(box);

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


