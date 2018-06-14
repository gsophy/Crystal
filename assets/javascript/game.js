//Set Global Variables for Divs
var wins = 0;
var losses = 0;
var targetScore = 0;
var yourScore = 0;

//Set Variables on the Crystals.  This variable will be used to assign the randomly generated value.
var crystalPurple;
var crystalLavender;
var crystalBlue;
var crystalWhite;

//(f) to generate the random numbers

function randomTargetScore () {
    targetScore = Math.ceil((Math.random() * 101) + 19);
}

//(f) to generate the random values on the crystals

function randomCrystalValues () {
//generate Purple Crystal random value
    crystalPurple = Math.ceil((Math.random() * 11) + 1);
//generate Lavendar Crystal random value
    crystalLavender = Math.ceil((Math.random() * 11) + 1);
//generate Blue Crystal random value
    crystalBlue = Math.ceil((Math.random() * 11) + 1);
//generate White Crystal random value
    crystalWhite = Math.ceil((Math.random() * 11) + 1);
}

randomTargetScore();
randomCrystalValues();
updateHTML();

console.log(crystalPurple);
console.log(crystalLavender);
console.log(crystalBlue);
console.log(crystalWhite);

function updateHTML () {
    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#targetScore").text(targetScore);
    $("#yourScore").text(yourScore);
    }

$("#resetGame").on("click", function () {
    randomTargetScore();
    yourScore = 0;
    updateHTML();
}) 

function startOver () {
    randomTargetScore ();
    randomCrystalValues ();
    yourScore = 0;
    updateHTML ();
}

function winLoseDraw () {
    if (yourScore === targetScore) {
        wins++;
        startOver();
        
    }
    else if (yourScore > targetScore) {
        losses++;
        startOver();
    }
    else {
        // alert("You're getting close!  Pick again.");
    }
}

/* Include a function that compares yourScore
and targetScore.  
If yourScore = targetScore, you win.
If yourScore < targetScore, keep picking.
if yourScore > targetScore, you lose. */




/*Add a click listener for each crystal icon.  When a crystal is
clicked, add the value of the crystal to the score and run a function to
evaluate the score. */

$(".crystal1").on("click", function () {
    yourScore += crystalPurple;
    $("#yourScore").text(yourScore); 
    winLoseDraw ();
});

$(".crystal2").on("click", function () {
    yourScore += crystalLavender;
    $("#yourScore").text(yourScore); 
    winLoseDraw ();
});

$(".crystal3").on("click", function () {
    yourScore += crystalBlue;
    $("#yourScore").text(yourScore); 
    winLoseDraw ();
});

$(".crystal4").on("click", function () {
    yourScore += crystalWhite;
    $("#yourScore").text(yourScore); 
    winLoseDraw ();
});

//Print output to the console to validate that random numbers are generated
// console.log(targetScore);
// console.log(crystalPurple);
// console.log(crystalLavender);
// console.log(crystalWhite);
// console.log(crystalBlue);

// $(".crystal").on("click", function () {
//  alert("crystal 1 clicked");
// });
