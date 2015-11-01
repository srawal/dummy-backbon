//Backbone Collection

var posts =  Backbone.Collection.extend({
 model:post,
 localStorage: new Backbone.LocalStorage("SomeCollection"),
});

var postCollection = new posts();





