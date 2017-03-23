module.exports = (app) => {
	app.use('/', require('../middlewares'));
	app.use('/', require('./home'));
	app.use('/category', require('./category'));
	app.use('/product', require('./product'));
	require('./error')(app);
};