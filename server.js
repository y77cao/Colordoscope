const express = require('express');

const path = require('path');



const app = express();

app.use(express.static('.react-ui/build'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, './react-ui', 'index.html'));
});

const PORT = process.env.PORT || 3000;

      app.listen(PORT, function () {

        console.log(`Listening on port ${PORT}`);

	});
