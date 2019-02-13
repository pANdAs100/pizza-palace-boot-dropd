const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');//path required to serve an html file

app.use(express.static(__dirname + '/public'));//public/static directory for pics and css
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/index.html'));//serves index
});

app.get('/hi', (req, res) => {
    res.send("This is a dummy page");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})