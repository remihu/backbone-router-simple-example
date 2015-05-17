Router = Backbone.Router.extend({

	initialize: function() {
		console.log('Router Initialized..');
	},

	routes: {
		'dogs': 'index',											// exact match #dogs
		'dogs/:id': 'show',										// match param #dogs/1
		'dogs/:id/*action': 'behavior'				// match param #dogs/1/bark
	},

	index: function() {
		console.log('Showing all dogs');
	},

	show: function(id) {
		console.log('Showing Dog '+id);
	},

	behavior: function(id, action) {
		console.log('Dog '+id+' '+action);
	}

});

var router = new Router();
Backbone.history.start();