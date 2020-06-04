var express = require('express');
var router = express.Router();

var mysql      = require('mysql');


/* GET home page. */
router.get('/', function(req, res, next) {
    //res.json({data: 'data!'});
    res.render('');
    //res.respond('index', {title: 'Express'});
    //console.log('abcd');
    //res.json({data: 'data!'});
    
    
});

module.exports = router;
