var express = require('express')
var router = express.Router();

router.get('/test69', (req, res) => {
  res.send('fuck you mate lmao!');
});

module.exports = router;