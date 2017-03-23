var express = require('express');
var router = express.Router();

router.get('*', require('./load-partials'));
router.get(['/', '/category/*'], require('./pagination'));

module.exports = router;