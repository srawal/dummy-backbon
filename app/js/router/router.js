// Backbone Model

var appRounter =  Backbone.Router.extend({

	 routes: {
		"" : 'index',
		'top' : 'topPage',
		'show' : 'showpage',
		'ask' : 'askpage',
		'comments' : 'commentspage'

	},
	initialize:function(){
		postCollection.fetch();
		$(".addComment").hide();
		Backbone.history.start();
		
	},

	index:function(){
		postCollection.fetch();
		postViewsLandingView.render();
		$(".addComment").hide();
		$("#blogList").show();
		//postCollection.fetch();
	},
	iterateLoop : function(musketeers){
		for(var i = 0; i<musketeers.length; i++){
					currentDataElm = musketeers[i].attributes;
			        	var newpost = new post({
						prefix:currentDataElm.prefix,
						text:currentDataElm.text,
						vote:currentDataElm.vote,
						time:new Date(),
						comments:currentDataElm.comments
				        });
				}
	},
	showpage:function(){
		var postViewsInit = new postViews();
		postCollection.fetch();
		var musketeers = postCollection.where({prefix: "Show HN:"});
		var currentDataElm;
		this.iterateLoop(musketeers);
		postViewsInit.render(musketeers);
	},
	askpage:function(){
		var postViewsInit = new postViews();
		postCollection.fetch();
		var musketeers = postCollection.where({prefix: "Ask HN:"});
		var currentDataElm;
		this.iterateLoop(musketeers);
		postViewsInit.render(musketeers);
		

		
	},
	topPage:function(){
		var postViewsInit = new postViews();
		 postCollection.fetch();
		// this.postCollection.sort();
		  postViewsLandingView.render();
	},
	commentspage:function(){
	commonPostView.render();
	$("#blogList").remove();

	}
	
});

var appRounterInit = new appRounter();
