//Backbone view
// view for one blog
var postView = Backbone.View.extend({
    model: post,
    tagName: "div",
    initialize: function() {
        var addVar;
       // this.listenTo(this.model, 'change', this.render);
        this.template = _.template($('.postListTemplate').html());
    },
    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },
    events: {
        "click .arrow-up": "addVote",
        "click .arrow-down": "minusVote"

    },
    addVote: function(e) {
        addVar = 0;
        addVar++;
        $(e.currentTarget).parent().find('.arrow-up').css("border-bottom","10px solid green");
        $(e.currentTarget).parent().find('.arrow-down').css("border-top","");
        this.model.set('vote', addVar);
        this.model.save();

    },
    minusVote: function(e) {
        addVar = 0;
       $(e.currentTarget).parent().find('.arrow-down').css("border-top","10px solid red");
       $(e.currentTarget).parent().find('.arrow-up').css("border-bottom","");
        this.model.set('vote', addVar);
        this.model.save();

    },
})

var postViewsLanding = Backbone.View.extend({
    model: postCollection,
    el: $('#blogList'),
    initialize: function() {
        this.model.on('add', this.render, this);
        this.render();
    },



    render: function() {
        var _this = this;
        this.$el.html('');
        _.each(this.model.toArray(), function(newpost) {
            _this.$el.append((new postView({
                model: newpost
            })).render().$el)
        });
        return this;
    }

})

var postViewsLandingView = new postViewsLanding();

// view for all blog
var postViews = Backbone.View.extend({
    model: postCollection,
    el: $('#blogList'),
    initialize: function() {
        this.render();
    },

    render: function(musketeers) {
        var _this = this;
        this.$el.html('');
        _.each(musketeers, function(newpost) {
            _this.$el.append((new postView({
                model: newpost
            })).render().$el)
        });
        return this;
    }

})

var postViewsInit = new postViews();