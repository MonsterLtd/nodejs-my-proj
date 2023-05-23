// File: src/index.js

const express = require('express');
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {
  const html = `
    <html>
      <head>
        <style>
          body {
            background-color: gray;
          }
        </style>
      </head>
      <body>
        <h2>Hello World!</h2>
        <h2>&#128508;</h2>
      </body>
    </html>
  `;

  res.send(html);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

