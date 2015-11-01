// Backbone Model
var post =  Backbone.Model.extend({
	defaults:{
		prefix:'',
		text:'',
		vote:'',
		time:'',
		comments:''

	}
});
var newpost = new post();
