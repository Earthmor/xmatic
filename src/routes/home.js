let express = require('express');
let router = express.Router();

router.get('/', function(req, res, next) {
  res.render('home', { title: 'Temov' });
});

module.exports = router;
