//Backbone Collection

var posts =  Backbone.Collection.extend({
Model:post,
 localStorage: new Backbone.LocalStorage("SomeCollection"),
 comparator:function(post){
 	return post.get("vote");
 }

});

var postCollection = new posts();








