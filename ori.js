var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (i=0; i<numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        
        var buttonInnerHTML = this.innerHTML;
        drumSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
} 

document.addEventListener("keypress", function(event){/**entire doc,when keypress run.. */
    // alert("Key pressed!"); /**For testing purpose */
    // console.log(event); /** must add "event" insert function(xx) */
    var buttonKeyPressed = event.key;
    drumSound(buttonKeyPressed);
    buttonAnimation(buttonKeyPressed);
})
function drumSound(key){
    switch (key) {
        case "w":
            var audioW = new Audio ('sounds/crash.mp3') 
            audioW.play();
            break;
        
        case "a":
            var audioA = new Audio ('sounds/kick-bass.mp3') 
            audioA.play();

        case "s":
            var audioS = new Audio ('sounds/snare.mp3') 
            audioS.play();

        case "d":
            var audioD = new Audio ('sounds/tom-1.mp3') 
            audioD.play();

        case "j":
            var audioJ = new Audio ('sounds/tom-2.mp3') 
            audioJ.play();

        case "k":
            var audioK = new Audio ('sounds/tom-3.mp3') 
            audioK.play();
            
        case "l":
            var audioL = new Audio ('sounds/tom-4.mp3') 
            audioL.play();    

        default:
            break;
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    if (activeButton) { // Ensure the element exists
        activeButton.classList.add("pressed");
        setTimeout(function() {
            activeButton.classList.remove("pressed");
        }, 100); // Adjust the timeout duration as needed
    }
}