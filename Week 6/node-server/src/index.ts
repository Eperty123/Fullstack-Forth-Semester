import express = require('express');
const app = express();


app.get('/', (req, res) => {
   res.send('Hello, world!');
});

app.listen(3000, () => {
   console.log(`Server is listening to http://localhost:3000`);
});

/**
 * Reference: https://stackoverflow.com/questions/33535879/how-to-run-typescript-files-from-command-line
 * Run server: npx ts-node index.ts.
 */