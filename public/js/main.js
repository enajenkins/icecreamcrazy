// FIRST EXAMPLE
  // //create a function that will be immediately invoked
  // (function(){
  //   //define the model
  //   //extend an empty js object
  //   //no special capabilities beyone what is provided by Backbone.Model
  //   var Rectangle = Backbone.Model.extend({});







    // //define the view that will render the rectangle
    // var RectangleView = Backbone.View.extend({
    //   //this view is responsible for creating a visual representaion of the rectangle model
    //   //define properties for view
    //   tagName: 'div',
    //   className: 'rectangle',

    //   //set up declarative bindings to event functions
    //   events: {
    //     'click': 'move' //declare an event that calls a function whenever fired
    //   },

    //   render: function(){
    //     //call functions needed to render the rectangle into the document
    //     this.setDimensions();
    //     this.setPosition();
    //     this.setColor();
    //     return this;//backbone.js convention. will return undefined if this is omitted. 
    //   },

    //   setDimensions: function(){
    //     //define the functions needed to render the rectangle
    //     //access the dom element that is bound to this view and set it's width and height
    //     this.$el.css({ //can use jquery css method since we are using jq selector
    //       width: this.model.get('width') + 'px',
    //       height: this.model.get('height') + 'px'
    //     });
    //   },//when this is called, it will apply the model's dimensions to the dom element 

    //   setPosition: function(){
    //     var position = this.model.get('position');
    //     this.$el.css({
    //       left: position.x,
    //       top: position.y
    //     });

    //   },

    //   setColor: function(){
    //     this.$el.css( 'background-color', this.model.get('color'));
    //   },
    //   // define the function that will run whenever the click event (or whatever event it's bound to) is fired
    //   move: function(){
    //     this.$el.css('left', this.$el.position().left + 10); //read the current value of the property, then add 10 and apply that
    //   }

    // });






  // //create instances of our model type and our view type
  //   // var myRectangle = new Rectangle({
  //   //   //set properties
  //   //   width: 400,
  //   //   height: 100,
  //   //   position: {
  //   //     x: 300,
  //   //     y: 150
  //   //   },
  //   //   color: '#ff0000'

  //   // });


  // ////OR YOU CAN USE AN ARRAY

  //   //multiplte instances of rectangles
  //   var models = [
  //     new Rectangle({
  //       //set properties
  //       width: 10,
  //       height: 100,
  //       position: {
  //         x: 300,
  //         y: 50
  //       },
  //       color: '#ff0000'
  //     }),

  //     new Rectangle({
  //       //set properties
  //       width: 200,
  //       height: 50,
  //       position: {
  //         x: 400,
  //         y: 150
  //       },
  //       color: '#00ff00'
  //     }),

  //     new Rectangle({
  //       //set properties
  //       width: 400,
  //       height: 300,
  //       position: {
  //         x: 800,
  //         y: 350
  //       },
  //       color: '#0000ff'
  //     }),

  //     new Rectangle({
  //       //set properties
  //       width: 800,
  //       height: 10,
  //       position: {
  //         x: 600,
  //         y: 550
  //       },
  //       color: '#f00000'
  //     }),

  //     new Rectangle({
  //       //set properties
  //       width: 100,
  //       height: 800,
  //       position: {
  //         x: 100,
  //         y: 250
  //       },
  //       color: '#f0f000'
  //     })
  //   ];
  // ////FOR ARRAY ONLY
  //   //access the array by using underscore.js
  //   //add the model to the page for each model in the loop
  //   //creat a new rectangle view for the current model in the loop
  //   //call the new view's render method
  //   // add it to the page
  //   _(models).each(function(model){
  //     $('div#canvas').append(new RectangleView({ model: model }).render().el);
  //   });
  // ////FOR ARRAY ONLY







  //   // var myView = new RectangleView({ model: myRectangle }); //tell the view which model it is responsible for rendering
  //   // $('div#canvas').append(myView.render().el); //to see the app do something, render the view and add the resulting element to the html page. append te content created by the new instance's render function to the .el property - the dom element create by the view.


  // })();//making the function immediately invokable is for grouping code together and preventing vars from leaking into the global scope.



  // //models form the core of your application. they contain the app's state, logic, and behavior 

  // //create new model 'types' by extending Backbone.Model. 
  // //the arguments in the extend method contains the configuration for your new model type
  // //passing an empty object will result in a new model type identical to backbone.model
  // //uppercasing is the naming convention for constructor functions in JS
  // //the extend({}); function is a helper shared by model(data), collection(multiple models), router(page naming and location), and view(). it establishes an inheritance relationship between two objects

  // // ///CONSTRUCTOR///
  // // var Vehicle = Backbone.Model.extend({
  // //   prop1: '1'
  // // });

  // // ///INSTANCES///
  // // var v = new Vehicle();
  // // var v2 = new Vehicle();

  // // ///CHANGE PROPERTIES///
  // // v.prop1 = 'one';


  // // console.log(v.prop1);
  // // console.log(v2.prop1);


  // //define class properties by providing a second argument to extend({});
  // //class properties become available directly on the type instead of on instances of the type


  // ///CONSTRUCTOR///
  // var Vehicle = Backbone.Model.extend({
  //   //the first argument is where we define properties
  //     prop1: '1'
  //   },
  //   //the second argument is where we define class properties
  //   {
  //     summary: function(){
  //       return 'Vehicles are for traveling';
  //     }
  //   }

  // );

  // console.log(Vehicle.summary());




  // //to create (instantiate) a new model object, call it's constructor function with the 'new' operator
  // //if there is nothing unique about your new model type, there is no need to define a custom model type. you can just use the Backbone.Model(); constructor IE var model = new Backbone.Model();
  // //usually, you will be instantiating custom types
  // /*
  //   vehicle is a custom backbone model constructor function
  //   var Vehicle = Backbone.Model.extend({});

  //   ford is a new object created from it
  //   var ford = new Vehicle();
  // */

  // /* 
  //   it's common to provide a model's data as an argument to the constructor
  //   var model = new Backbone.Model ({
  //     name: 'John',
  //     age: 34
  //   });
  // */

  // //'initialize', when defined is a function that will be called when the model is instantiated. 
  // /*
  // This will output the console log

  //   var Vehicle = Backbone.Model.extend({
  //     initialize: function(){
  //       console.log('vehicle created');
  //     }
  //   });

  //   var car = new Vehicle();
  // */

  // //models can inherit from other models
  // /*
  //   var Vehicle = Backbone.Model.extend({});
  //   var Car = Vehicle.extend({});
  // */

  // //define a constructor function A that extends Backbone.Model
  // var A = Backbone.Model.extend({
  //   initialize: function(){
  //     console.log('initialize A');
  //   },
  //   asString: function(){ //like a toString function it will provide a string representation of the state of the object
  //     return JSON.stringify(this.toJSON()); //JSON.stringify is available in all modern browsers. Converts a JavaScript value to a JavaScript Object Notation (JSON) string. toJSON() returns a string representation 
  //   }
  // });
  // //instantiate the constructor A and add new properties (creating a new object)
  // var a = new A({
  //   //asString produces a serialized representation of this data..
  //   one: '1',
  //   two: '2'
  // });
  // //outputs current state of A
  // console.log(a.asString()); // initialize A {"one":"1","two":"2"}   //log the result of calling the as.String() function of the new object a


  // //inheritance...
  // var B = A.extend({});
  // var b = new B({
  //   three: '3'
  // });

  // //the ability to call asString on b is the fact that b is inheriting it from a
  // console.log(b.asString()); // initialize A {"three":"3"}

  // console.log(b instanceof B); // true
  // console.log(b instanceof Backbone.Model); // true
  // console.log(a instanceof B); // false


  // //model attributes hold your data. attrinutes can be set by passing an object to a model type's constructor or by using the set method
  // /*
  //   var ford = new Vehicle();
  //   ford.set('type', 'car');

  //   you can set many properties at once by passing an object with many key value pairs
  //   ford.set({
  //     'type', 'car',
  //     'color', 'red'
  //   });
  // */

  // //attributes can be accessed via the get() method.
  // //escape is like get excpet that the output is html escape
  // //useful for security


  //   ford.set('description', 
  //   '<script>alert("script injection")</script>');
  //   ford.escape('description');


  // //determine if an attribute has been previously set = 'has'
  //   var ford = new Vehicle();
  //   ford.set({
  //     'type': 'car',
  //     'color': 'red'
  //   });

  //   console.log(ford.has('type')); //true
  //   console.log(ford.has('year')); //false

  // //models raise events when their state changes
  // //to detect a change to a model listen for the 'change' event
  // //you listen to events by calling the on() method and providing in the arguments, the name of the event to bind to and the function to execute when the event is triggered
  // //you can listen to a change in a specific property by registering a handler for the event name 'change' followed by a property
  //   ford.on('change', function(){
  //     console.log('something changed');
  //   }); //when the color is changed, invoke the callback function

  //   ford.set('type', 'truck'); //'something changed'

  //   ford.on('change:color', function(){
  //     console.log('the color changed');
  //   }); //when the color is changed, invoke the callback function

  //   ford.set('color', 'blue'); //'something changed', 'the color changed'

  // //it's possible to define, trigger, and observe custom model events because events are identified by string identifiers
  // //use the 'on' method to bind to an event. the second argument is the callback that is executed when the event is triggered.
  // //use the 'trigger' method to trigger an event. subsequent arguments will be forwarded to the event handler
  // //use the 'off' method to remove an event handler
  // //these are all provided by the events module. they can be included in any javascript object

  // //create a regular js volcano object and use underscore's extend() method to extend and empty object and mix in the Backbone events object. this will add the contents of events to the empty object and return the volcano object with these properties 
  // var volcano = _.extend({}, Backbone.Events);
  // volcano.on('disaster:eruption', function(){//define a custom event via : namespace convention
  //   console.log('Duck and Cover');
  // });

  // volcano.trigger('disaster:eruption'); //trigger the event

  // //you can also forward the 

  // /*
  // var volcano = _.extend({}, Backbone.Events);
  // volcano.on('disaster:eruption', function(options){//define a custom event via : namespace convention and pass in options argument to take additional event handler values
  //   console.log('Duck and Cover - ' + options.plan);
  // });

  // volcano.trigger('disaster:eruption', {plan: 'run'}); //trigger the event and add forward additional values to the event handler
  // */

  // volcano.off('disaster:eruption'); //removes every event handler for that event

  // //Model identity
  // //The 'id' property represents the model's persistent identity. It's undefined until the model has been saved.
  // //save is used to persist a model
  // //when the model has been saved, the id property is set to the server's identifier for the model object. 
  // //the 'cid' property, is a temp identifier used until a model is assigned it's 'id'. once a model is saved, the 'cid' is no longer required.
  // //cid is applied as soon as the model object is created

  // //test to see if the model has been saved to the server...
  // console.log(ford.id); //undefined because it hasn't been saved
  // console.log(ford.cid); // returns temp 
  // console.log(ford.isNew()); // true >> lets me know if the object has been saved to the server

  // //Defaults
  // //specifies default values for attributes that are not set in the constructor
  // //specifying defaults is also a way of documenting a model types properties
  // /*
  // var Vehicle = Backbone.Model.extend({
  //   defaults: {
  //     'color': 'white',
  //     'type': 'car'
  //   }
  // });

  // var car = new Vehicle();
  // console.log(car.get('color')); //white

  // */
  // //validation
  // //backbone exposes model validity through two methods: validate and isValid
  // //validate is called by backbone prior to performing 'set' or 'save' operations
  // //backbone now requires the {validate:true} option to be passed with 'set' to trigger validation

  //               // var Vehicle = Backbone.Model.extend({
  //               //   //implement validation
  //               //   validate: function(attrs){
  //               //     //define valid colors
  //               //     var validColors = ['white', 'red', 'blue'];
  //               //     //define function to check if model object has valid color
  //               //     var colorIsValid = function (attrs){
  //               //       //does model have color attribute?
  //               //       if (!attrs.color) return true; //if model doesnt have color attr, return true. no color attr defined is considered a valid value
  //               //       return _(validColors).include(attrs.color);//use underscore to wrap array of valid colors and use include method to search for model's color. this will return true if the validColors array includes current color attribute
  //               //     }
  //               //     if (!colorIsValid(attrs)){ //now you can use the function you just defined
  //               //       return "color must be one of: " + validColors.join(",");// if color attr is invalid, return this error message
  //               //     }
  //               //   }
  //               // });
  //               // // raise an error event every time a validation problem is found
  //               // var car = new Vehicle();
  //               // //register an event handler for the error event
  //               // //error event has since been renamed invalid
  //               // car.on('error', function (model, error){ // the callback that handles error events recieves a reference to the model that caused the erro and the erro itself
  //               //   console.log(error);
  //               // });

  //               // car.set('foo', 'bar');//triggers validate method
  //               // car.set('color', 'chartreuse');


  // ///////FROM DOCUMENTATION. THIS IS WHAT THE CODE ABOVE SHOULD DO.

  // //create new constructor object
  // var Vehicle = Backbone.Model.extend({
  //   //define validation 
  //   validate: function(attrs, options){
  //     var validColors = ['white', 'red', 'blue'];

  //     if(_(validColors).include(attrs.color)){//if the validColors array includes the current colro attribute...
  //       return "makes a car in the color " + attrs.color + ".";
  //     } 
  //     else { 
  //       return "does not make a car in the color " + attrs.color + ".";
  //     }
  //   }
  // });


  // //instantiate a new car object
  // var car = new Vehicle({
  //   make: "Ford",
  //   carIsValid: function(){
  //     this.model.isValid();
  //   }
  // });


  // car.on("invalid", function(model, error){
  //   console.log(model.get("make") + " " + error);
  // });


  // //change the color
  // // car.save({
  // //   color: "grey"
  // // });


  // car.save({
  //   color: "white"
  // });

  // car.save({
  //   color: "pink"
  // });


  // // car.save({
  // //   color: "pink"
  // // });




  // //validate tests the validity of the model and returns any errors found
  // //isValid returns a boolean that indicates whether the model is curently valid according the the validate method defined
  // //it's possible for a model to become invalid because set can be called in a way that does not trigger validation. Therefore, backbone now required the {validate:true} option to be passed with 'set' to trigger validation
  // //validate is called by backbonde prior to performing 'set' or 'save' operations.


  // //toJSON converts the model's attributes to a JS object. it does not return a JSON string. it is useful as the first step in serializing the model or to look at a model's state. the object can then be passed to JSON.stringify to return a JSON string representation of the model



  // var ford = new Vehicle();
  // ford.set('type', 'car');
  // var attrs = ford.toJSON();
  // console.log(attrs);//Object {type: "car"}
  // console.log(JSON.stringify(attrs));// {"type":"car"}



  // //SAVE FETCH DESTROY
  // // methods for synchronizing with the server
  // //save - insert and update operations. if the model is new, save will perform and insert. if model exists, it will perform and update
  // //fetch - updated the model with the current server side state
  // //destroy - deleted the model from the server



  // ////////VIEWS
  // //views are used to bind your models to your documents
  // //views handle models change events and events raised from the dom
  // //views depend on models
  // //models trigger events that the view can handle
  // //views depend on the dom 
  // //the dom can raise vents that the view can handle



  //all views have an associated dom element at all times (.el). it is either passed to the view's constructor or created by the view
  //some views create new dom elements. id, tagName, className, and attributes
  // var VehicleView = Backbone.View.extend({
  //   tagName: 'li',
  //   id: 'thing',
  //   className: 'active',
  //   attributes: {
  //     'data-value': 1234567890
  //   }
  // });

  // var carView = new VehicleView();
  // $('body').prepend(carView.el).css('background-color', 'green');// this adds the element to the beginning of the child list <li data-value="1234567890" id="thing" class="active"></li>

  // var anotherCarView = new VehicleView({el: '#canvas'});
  // //anotherCarView.$el.css('background-color', 'yellow');
  // anotherCarView.$el.prepend(carView.el).css('background-color', 'purple');//why does this wipe out the first one? why can't I use anotherCarView.el?

  //you can create new instances of your view constructor and you will pass the model that contains the data that is used to render the view. 
  //these properties, if supplied to the view's constructor, will be copied to the view object: model, collection, el, is, className, tagName, attributes, events


  // var myNewCar = new Backbone.Model();
  // myNewCar.set('content', 'this is some content');

  // var myView = new Backbone.View({
  //   model: myNewCar,
  //   className: 'model-object'
  // });

  // $('body').prepend(myView.el);

  // console.log(myView.el); //<div class="model-object"></div>
  // console.log(myView.$el); //[div.model-object, context: div.model-object]
  // //$ is a version of the jq function scoped to the current view. using this means that the jq selectors only have to be unique for that view

  // //this.$('selector') is the same as this.$el.find('selector')


  //RENDER
  //render's the view's element
  //the default implementation doesn't do anything. you have to define your own view type by writing a function that will add the content to the dom
  //render methods should return 'this'
  //this pattern makes it easy to chain method calls

  // var myNewModel = new Backbone.Model();
  // myNewModel.set('content', 'MORE CONTENT');


  // var SomeOtherView = new Backbone.View.extend({

  //   render: function(){
  //     this.$el.html('some content');
  //     return this;
  //   }

  // }); 

  // // //pass the model to the view's constructor
  // // var someView = new SomeOtherView({
  // //   model: myNewModel
  // // });

  // //bind the view's render method
  // //listen for changes on the model
  // myNewModel.on('change', function(){
  //   $('body').append(someView.render().el);
  // });



// SECOND EXAMPLE
  // DEFINE AN OBJECT
  // define class
  var Person = function(config){
    this.name = config.name;
    this.age = config.age;
    this.occupation = config.occupation;
  };
  // define function
  Person.prototype.work = function(){
    return this.name + ' is working.';    
  };




















