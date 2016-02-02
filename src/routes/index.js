var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
    connectionStatus: 'No server connection',
    exchangeStatus: 'No exchange established',
    queueStatus: 'No queue established'
  });
});

module.exports = router;
