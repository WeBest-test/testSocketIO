var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.sendFile(__dirname + '/index.html',
    {headers:{
      'Cache-Control': 'no-cache, max-age=0'
    }}
  );
});

module.exports = router;
