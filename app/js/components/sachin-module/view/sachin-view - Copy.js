//Backbone view
// view for one blog
var commonView = Backbone.View.extend({
model:post,
tagName:"div",
el: $('#commentBlock'),
id:'commentTemplate',
events: {
    "click #add": "setData"
  },
  setData: function(){
   	var newpost = new post({
		prefix:$(".prefix-input").val(),
		text:$(".text-input").val(),
		votePlus:"",
		voteMinus:"",
		time:new Date().toLocaleTimeString(),
		date:new Date().toLocaleDateString(),
		comments:$(".comments-input").val()
	})
    $(".form-control").val('');
 	postCollection.create(newpost);
  },
  initialize:function(){
	this.template = _.template($('.commonTemplate').html());
},

render:function(){
	this.$el.html(this.template());
    return this;
}
})

var commonPostView = new commonView();
