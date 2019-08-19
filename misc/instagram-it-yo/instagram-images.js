var express = require('express');
var cors = require('cors')
var fs = require('fs');
var app = express();
var path = './images';
const readDirectory = (callback) => {
  fs.readdir(path, (err, items) => {
    items.sort(function (a, b) {
      return fs.statSync(path + '/' + a).mtime.getTime() -
        fs.statSync(path + '/' + b).mtime.getTime();
    });
    callback(items);
  });
};
app.use(cors())
app.get('/instagramz', (req, res) => readDirectory(logFiles => res.json({files: logFiles})));
app.get('/image/:imageId', (req, res) => res.sendFile('/develop/personal/line-og-erlend/misc/instagram-it-yo/images' + '/' + req.params.imageId));
app.listen(3001);