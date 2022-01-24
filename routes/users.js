var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({"asd":"asd"});
});

router.get('/error', function(r,rs,next) {

	res.json({"error":"error"}).status(500);
});

module.exports = router;
