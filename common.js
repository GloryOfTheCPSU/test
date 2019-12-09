const fs = require('fs');

const text = fs.readFileSync("common.js", "utf8");
console.log(text);