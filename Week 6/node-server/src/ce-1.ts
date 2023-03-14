import express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<a href="/home">Home</a><a href="/about">About</a>');
 });

app.get('/home', (req, res) => {
   res.send('<h1>Home</h1><a href="/home">Home</a>');
});

app.get('/about', (req, res) => {
    res.send('<h1>About</h1><p>Im tired of being what you want me to be.</p>');
 });

app.listen(3000, () => {
   console.log(`Server is listening to http://localhost:3000`);
});

/**
 * Reference: https://stackoverflow.com/questions/33535879/how-to-run-typescript-files-from-command-line
 * Run server: npx ts-node index.ts.
 */