var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.status(200).send("0.0.2");
});

module.exports = router;
