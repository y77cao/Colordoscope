const express = require('express');

const path = require('path');



const app = express();

app.use(express.static(path.resolve(__dirname, './react-ui/build/static')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, './react-ui/build', 'index.html'));
});

const PORT = process.env.PORT || 3000;

      app.listen(PORT, function () {

        console.log(`Listening on port ${PORT}`);

	});
//????