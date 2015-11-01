// Backbone Model

var post =  Backbone.Model.extend({

	defaults:{
		usename:'',
		text:'',
		vote:'',
		time:'',
		comments:''

	}
});

var postModel = new post();

/*var postOne = new post({
		usename:'sachin rawal',
		text:'dummy text dummy text',
		vote:'1',
		time:new Date(),
		comments:'bla bla bla'

});

var postTwo = new post({
		usename:'nitin rawal',
		text:'dummy text dummy text again',
		vote:'2',
		time:new Date(),
		comments:'bla bla bla again bla bla bla'

});*/