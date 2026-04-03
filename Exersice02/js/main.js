// Change color on box one by one every second
const boxes = document.querySelectorAll('.box');

setInterval(() => {    
    let boxColors = Array.from(boxes).map(div => getComputedStyle(div).backgroundColor);

    // RIGHT SHIFT (take last and put to front)
    let lastColor = boxColors.pop();
    boxColors.unshift(lastColor);

    // update UI
    boxes.forEach((div, i) => {
        div.style.backgroundColor = boxColors[i];
    });

}, 1000);