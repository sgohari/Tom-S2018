/*Customer Js goes here */

//IIFE - Immediately Invoked Function
//anonymouse self executin fuction
(function(){

    function Start()
    {
        console.log("App started!");
        console.log("The Second line");
        console.log("Last Line");
    }


    window.onload=Start;
})();