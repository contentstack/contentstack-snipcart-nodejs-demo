var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
	var Query = Stack.ContentType('product').Query()
		.toJSON()
		.limit(9)
		.skip(9 * (req.current - 1))
		.only(["title", "url", "in_stock", "featured_image", "offer_price", "price"])
		.includeCount()
		.find()
		.spread(function success(result, count) {
			res.render('pages/home', {
				products: result,
				active: req.originalUrl.slice(0, req.originalUrl.indexOf('?')) || req.originalUrl,
				page_count: parseInt(count/9) + 1,
				count: count
			})
		}, function error(error) {
			next(error);
		});
})

module.exports = router;