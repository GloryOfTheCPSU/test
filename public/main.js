const fs = require('fs');

const text = fs.readFileSync("common.js", "utf8");
console.log(text);


const greeting = document.getElementsByClassName('greeting')[0];

greeting.addEventListener('click', () => {
    greeting.classList.add('hidden');
} , false);
