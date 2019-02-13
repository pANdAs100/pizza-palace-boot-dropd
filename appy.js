const express = require('express'),
          app = express();
         port = process.env.PORT || 3000,
         path = require('path');

app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.listen(port, console.log(`listening on port ${port}`));