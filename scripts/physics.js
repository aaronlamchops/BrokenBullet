'use strict'

var Physics = (function(){

    var that = {};

    var Engine = null,
        Render = null,
        World = null,
        Bodies = null,
        Events = null,
        MouseConstraint = null,
        Mouse = null,
        engine = null,
        mouseConstraint = null;


    //first thing that should be called in the gameloop for physics
    that.initialize = function(){

        Engine = Matter.Engine;
        Render = Matter.Render;
        World = Matter.World;
        Bodies = Matter.Bodies;
        MouseConstraint = Matter.MouseConstraint;
        Mouse = Matter.Mouse;
        Events = Matter.Events;
        
        //the basic engine setup with the rendering
        engine = Engine.create({
            render: {
                element: document.body,
                canvas: graphics.returnCanvas(),
                engine: engine,
                option: {
                    width: 1000,    //need to change in matter.js
                    height: 1000,   //need to change in matter.js
                    wireframes: true,
                }
            }
        });


        //adds a mouse drag constraint
        mouseConstraint = Matter.MouseConstraint.create(engine, { //Create Constraint
            element: graphics.returnCanvas(),
            constraint: {
                render: {
                    visible: false
                },
                stiffness:0.8
            }
        });

        //sets the world gravity in the y direction to zero.
        //useful for topdown game
        engine.world.gravity.y = 0;

        Engine.run(engine);

        Render.run(engine.render);

        //add the mouse constraint to the world
        World.add(engine.world, mouseConstraint);

    };

    //basic function to add bodies to the world
    that.addToWorld = function(body){
        World.add(engine.world, body);
    };

    //basic function to allow the creation of rectangle bodies
    that.createRectangleBody = function(x, y, w, h){
        var box = Bodies.rectangle(x, y, w, h);
        return box;
    };

    //return the position of the body
    that.returnBodyPosition = function(body){
        return body.position;
    };

    //create an event that allows the user to add a body at mousePos
    that.addMouseEvent = function(){
        Events.on(mouseConstraint, 'mousedown', function(event){
            var mousePosition = event.mouse.position;

            var body = Bodies.rectangle(mousePosition.x, mousePosition.y, 20, 20);

            World.add(engine.world, body);

        });
    };

    //set the label of a body
    that.setLabel = function(body, label){
        body.label = label;
    };

    //set the friction through air for a body
    that.setFrictionAir = function(body, value){
        body.frictionAir = value;
    };




    return that;

}());