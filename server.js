const path = require('path');
const express = require("express");
const fs = require('fs');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static(path.resolve(__dirname, './client/build')));
app.use(express.json());

app.get("/api/memo", (req, res) => {
  let number = '';
  try {
    number = fs.readFileSync('memo.txt', 'utf-8');
  } catch (error) {
    if (error) {
      res.status(500).send({ message: 'Cannot read file' })
      return;
    }
  }
  res.status(200).send({ memo: number });
});

app.post('/api/memo', (req, res) => {
  const newNumber = req.body.number;

    try {
      fs.writeFileSync('memo.txt', newNumber);
    } catch (error) {
      if (error) {
        res.status(500).send({ message: 'Cannot write file' })
        return;
      }
    }
  res.status(201).send();
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});