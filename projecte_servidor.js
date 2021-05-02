var express = require('express');
var app = express();
app.use(express.static('public'));
app.use(express.static('public/audio'));
app.get('/salutacio', function (req, res) {
  res.send('Hola Món!');
});

app.get('/', function (req, res) {
  res.send('Express');
});

app.get("\.mp3$", function (req, res) {
  res.send();
});

app.listen(3000, function () {
  console.log('Servidor escoltant port 3000');
})