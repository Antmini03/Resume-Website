const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.send('Hello World! <br \> This should be on the second line.');
});

app.listen(PORT, function() {
    console.log(`Example app listening on port: ${PORT}!`);
});