const fs = require('fs');
const babylon = require('babylon');
const traverse = require('babel-traverse').default;


function createAsset(filename) {
    const content = fs.readFileSync(filename, 'utf-8');

    const ast = babylon.parse(content, {
        sourceType: "module"
    });

    const dependencies = [];

    traverse(ast, {
        ImportDeclaration: ( {node} ) => {
            dependencies.push(node.source.value);
        }
    });

    console.log(dependencies);
}

createAsset('./my-modules/entry.js');

