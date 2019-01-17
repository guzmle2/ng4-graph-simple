// server.js
const express = require('express'),
path = require('path');

var options = {
  etag: true,
  index: 'index.html',
  lastModified: true,
  maxAge: '1d',
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now());
    res.header('Cache-Control', 'public, max-age=1d');
  }
};



const app = express();
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist', options));

// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

// Start the app by listening on the default port
app.listen(process.env.PORT || 8080);

