const express = require('express');
const mongoose = require('mongoose');
const app = express();


app.use(express.static('public'));
app.use(express.static('resources'));


app.listen(3000, () => {
  console.log('Server listening on port 3000');
});