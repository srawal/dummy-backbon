// Backbone Model

var appRounter =  Backbone.Router.extend({

	 routes: {
		"" : 'index',
		'top' : 'topPage',
		'show' : 'showpage',
		'comments' : 'commentspage'

	},
	initialize:function(){
		var postCollection = new posts();
		$(".addComment").hide();
		Backbone.history.start();
	},

	index:function(){
		
		postCollection.fetch();
		
		$(".addComment").hide();
		$("#blogList").show();
		//postCollection.fetch();
	},
	showpage:function(){
		
		var musketeers = postCollection.where({usename: "sachin"});
		var currentDataElm;
		for(var i = 0; i<musketeers.length; i++){
			currentDataElm = musketeers[i].attributes;
	        	var newpost = new post({
				usename:currentDataElm.usename,
				text:currentDataElm.text,
				vote:currentDataElm.vote,
				time:new Date(),
				comments:currentDataElm.comments
		        });
      
		}
		var postCollection = new posts(musketeers);
		postCollection.fetch();
     
	},
	topPage:function(){
		$(".addComment").hide();

		
	},
	commentspage:function(){
		$(".addComment").show();
		$("#blogList").hide();

	}
	
});

var appRounterInit = new appRounter();
