var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
  res.send('quickdraw');
});

router.post('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
//console.log(req.body);
var data = req.body.imagedata.split(',');
var b64img = data[ 1 ];
b64img2 = b64img.replace(/ /g, '+');
//console.log(b64img2);
//console.log(b64img.length);
//console.log(b64img2.length);
//var base64 = require('urlsafe-base64');
//var img = base64.decode( b64img );
//var fs = require('fs');
//fs.writeFile('sample.png', img, function (err) {
//    console.log(err);
//});
//fs.writeFile("sample2.png", new Buffer(b64img2, "base64"), function(err) {});
//fs.writeFile("sample.txt", b64img.toString(), function(err) {});
//fs.writeFile("sample2.txt", b64img2.toString(), function(err) {});

  res.send('finish');
});



module.exports = router;
