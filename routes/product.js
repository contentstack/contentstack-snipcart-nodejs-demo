var express = require('express');
var router = express.Router();

router.get('/:id', (req, res, next) => {
	var Query = Stack.ContentType('product').Query()
		.toJSON()
		.query({'uid': req.params.id})
		.includeReference('related_products')
		.find()
		.spread(function  success (result) {
			// Page Render
			res.render('pages/products', {
				product: result[0],
				active: req.originalUrl
			})
		}, function error (error) {
			next(error);
		})
})

module.exports = router;