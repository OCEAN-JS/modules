const fs = require('fs');

function createAsset(filename) {
    const content = fs.readFileSync(filename, 'utf-8');

    console.log(content);
}

createAsset('./my-modules/entry.js');

