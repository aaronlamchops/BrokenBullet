'use strict'


var Character = function(spec){

    var that = {};


    that.addCharacterBody = function(){
        Physics.setFrictionAir(spec.body, 0.095);
        Physics.addToWorld(spec.body);
    };

    that.returnBody = function(){
        return spec.body;
    };

    that.returnPosition = function(){
        return spec.position;
    };



//MOVEMENT:
    that.moveRight = function(elapsedTime){
        Matter.Body.applyForce(spec.body, spec.body.position, {x: 0.002 * spec.body.mass, y: 0});
    };
    that.moveLeft = function(){
        Matter.Body.applyForce(spec.body, spec.body.position, {x: -0.002 * spec.body.mass, y: 0});
    };
    that.moveUp = function(){
        Matter.Body.applyForce(spec.body, spec.body.position, {x: 0, y: -0.002 * spec.body.mass});
    };
    that.moveDown = function(){
        Matter.Body.applyForce(spec.body, spec.body.position, {x: 0, y: 0.002 * spec.body.mass});
    };
    




    that.update = function(){
        spec.position.x = spec.body.position.x;
        spec.position.y = spec.body.position.y;
    };  



    return that;
}