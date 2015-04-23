import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		Ember.$.getJSON('api/demo');
	}
});
