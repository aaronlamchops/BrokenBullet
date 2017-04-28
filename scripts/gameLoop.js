'use strict'

var game = (function(){

    //spot for all the global variables
    var keyboard, canceled, time;

    var that = {};

    //main initializing function to be called on start
    that.initialize = function(){

        //sets canceled to false on initial
        canceled = false;
        time = performance.now();


        //initialized the keyboard
        keyboard = input.Keyboard();
        setupControlScheme();





        //after initializing the game, call our gameloop
        gameLoop();
    };






    //main function to set up all keyboard and mouse commands
    function setupControlScheme(){
        window.addEventListener('keydown', keyboard.keyPress, false);
        window.addEventListener('keyup', keyboard.keyRelease, false);

        //call keyboard register commands to assign them to functions
        //keyboard.registerCommand(DOM_VK_UP, function);
    }

    function handleInput(elapsedTime){
        keyboard.update(elapsedTime);
    }







//MAIN FUNCTIONS:

    function update(elapsedTime){

    }

    function render(elapsedTime){

    }

    function gameLoop(){

        //calculate the elapsed time
        var newTime = performance.now();
        var elapsedTime = newTime - time;

        //handle the keyboard inputs over elapsed time
        handleInput(elapsedTime);



        //main two functions to handle update and rendering
        update(elapsedTime);

        render(elapsedTime);



        //time becomes the previous time
        time = newTime;

        //the main call to loop our gameloop over frames per second
        if(!canceled) requestAnimationFrame(gameLoop);
    }

    return that;

}());