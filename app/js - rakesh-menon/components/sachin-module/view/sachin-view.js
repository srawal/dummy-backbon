//Backbone view
// view for one blog
var postView = Backbone.View.extend({
model:postModel,
tagName:"div",
initialize:function(){
	this.template = _.template($('.postListTemplate').html());
},

render:function(){
	this.$el.html(this.template(this.model.toJSON()));
	return this;
}


})
// view for all blog
var postViews = Backbone.View.extend({
model:postCollection,
el: $('#blogList'),
initialize:function(){
	this.model.on('add', this.render, this);
	this.render();
},

render:function(){
	var _this = this;
	this.$el.html('');
	_.each(this.model.toArray(),function(newpost){
		_this.$el.append( (new postView({model:newpost})).render().$el)
	});
		return this;
}
	
})

var postViewsInit = new postViews();

$(document).ready(function(){
$(".add-post").on('click',function(){
	var newpost = new post({
		usename:$(".username-input").val(),
		text:$(".text-input").val(),
		vote:$(".vote-input").val(),
		time:new Date(),
		comments:$(".comments-input").val()
	})
	$(".form-control").val('');
 	postCollection.create(newpost)
})

})