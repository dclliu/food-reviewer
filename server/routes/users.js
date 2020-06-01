var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
	//res.send('respond with a resource');
	
    res.json([{
    id: 1,
	name: "Neillio's Gourmet Kitchen",
	dishname: "Sandwich",
	dishrating: 4,
	dishbody: "dish is good"
  }, {
    id: 2,
	name: "Neillio's Gourmet Kitchen",
	dishname: "Sandwich",
	dishrating: 4,
	dishbody: "dish is good"
  }]);
  
  	
 	// res.send();
 //res.json([]);
});

module.exports = router;
