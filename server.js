const express = require('express');

const path = require('path');



const app = express();

app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, './react-ui/build', 'index.html'));
});

app.use(function(req, res, next) {
  if (req.method === 'GET' && req.accepts('html') && !req.is('json') && !req.path.includes('.')) {
    res.sendFile('index.html', { root })
  } else next()
})

const PORT = process.env.PORT || 3000;

      app.listen(PORT, function () {

        console.log(`Listening on port ${PORT}`);

	});
//????