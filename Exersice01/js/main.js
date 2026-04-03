// Person image text box text change by using JavaScript

setInterval(() => {
    const items = document.querySelectorAll(".text-box h1");

    // get current letters
    let letters = Array.from(items).map(h1 => h1.textContent.trim());

    // RIGHT SHIFT (take last and put to front)
    let last = letters.pop();
    letters.unshift(last);

    // update UI
    items.forEach((h1, i) => {
        h1.textContent = letters[i];
    });

}, 1000);