module.exports = function (req, res, next) {
	if (!req.query.hasOwnProperty('page')) {
		// set initial page @ Home OR /category page as 1
		req.current = 1;
		res.locals.current = 1;
	} else {
		// has been queried for specific page @ Home OR /category
		req.current = parseInt(req.query.page);
		res.locals.current = req.current;
	}
	next();
}