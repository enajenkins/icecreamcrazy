var myNewModel = new Backbone.Model();
myNewModel.set('content', 'MORE CONTENT');


var SomeOtherView = new Backbone.View.extend({

  render: function(){
    this.$el.html('some content');
    return this;
  }

});

// //pass the model to the view's constructor
// var someView = new SomeOtherView({
//   model: myNewModel
// });

//bind the view's render method
//listen for changes on the model
myNewModel.on('change', function(){
  $('body').append(someView.render().el);
});

////ANOTHER CHANGE
////YET ANOTHER CHANGE
////YET ANOTHER CHANGE
////YET ANOTHER CHANGE
////YET ANOTHER CHANGE
////YET ANOTHER CHANGE
////YET ANOTHER CHANGE
////YET ANOTHER CHANGE
