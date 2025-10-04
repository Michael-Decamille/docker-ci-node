const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello Docker + CI/CD!');
});

app.listen(PORT, () => {
  // console.log supprimé pour éviter l'avertissement no-console
});

module.exports = app;
