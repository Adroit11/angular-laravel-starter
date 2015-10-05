var elixir = require('laravel-elixir');

elixir(function(mix) {
    mix.sass('app.scss');
    mix.scripts([
    	'libs/angular.js',
		'libs/angular-ui-router.js',
		'libs/ui-bootstrap-tpls.js',
		'libs/satellizer.js',
		'app.js',
		'controllers/authController.js',
		'controllers/userController.js']);
});
