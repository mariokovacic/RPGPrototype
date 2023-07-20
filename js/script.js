
// GENERAL AND WELCOME WINDOW
const enter = document.getElementById("enter");
const naslovWelcome = document.getElementById("naslovWelcome");
const theGame = document.getElementById("theGame");
const welcomeWindow = document.getElementById("welcomeWindow");
var arenaCommands = document.getElementById("arenaCommands");
arenaCommands.classList.add("hide");

// CHARACTERS ------------------------------------------------------------------------
const chooseCharacter = document.getElementById("chooseYourCharacter");
const characterNaslov = document.getElementById("characterNaslov");
const characterNaslovDiv = document.getElementById("characterNaslovDiv");

// IMAGES
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const image4 = document.getElementById("image4");


// PLAYERS
var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");
var player3 = document.getElementById("player3");
var player4 = document.getElementById("player4");

function enterTheGame() {


    // enter.classList.add("hide");
    naslovWelcome.classList.add("hide");
    welcomeWindow.classList.add("hide");

    // CHOOSE YOUR CHARACTER
    chooseCharacter.classList.remove("hide");
    characterNaslov.classList.remove("hide");
    characterNaslovDiv.classList.remove("hide");
    image1.classList.remove("hide");
    image2.classList.remove("hide");
    image3.classList.remove("hide");
    image4.classList.remove("hide");

    player1.classList.add("player");
    player2.classList.add("player");
    player3.classList.add("player");
    player4.classList.add("player");

    player1.classList.remove("hide");
    player2.classList.remove("hide");
    player3.classList.remove("hide");
    player4.classList.remove("hide");



}


// CHECK FOR USERNAME --------------------------------------------------------


function checkForUser() {

    const userNameInput = document.getElementById("username").value;
    const userName = localStorage.getItem("username");
    console.log(userNameInput);

    localStorage.clear;
    if (userNameInput !== "") {


        localStorage.setItem("username", userNameInput);
        enterTheGame();

    }

    if (userName === null) {


        window.alert("You need a username.");



    }


    else {


        console.log("Please enter your name!");

    }

}

checkForUser();

// DISPLAY NAME

function displayName() {

    let userName = document.getElementById("playerName");
    userPlayer = localStorage.getItem("username");
    userName.innerHTML = userPlayer + ",";


}



// CHARACTERS -----------------------------------------------------------------------
// ----------------------------------------------------------------------------------

var chosenOnes = document.getElementById("chosenOnes");
var chosenDKnight = document.getElementById("chosenDKnight");
var chosenSorcerer = document.getElementById("chosenSorcerer");
var chosenDemon = document.getElementById("chosenDemon");
var chosenWarlord = document.getElementById("chosenWarlord");

// ARENA CHARACTERS BUTTON
let enterArenaDK = document.getElementById("enterArenaDK");
let enterArenaSC = document.getElementById("enterArenaSC");
let enterArenaD = document.getElementById("enterArenaD");
let enterArenaWL = document.getElementById("enterArenaWL");
// ARENA GENERAL BUTTON
const ARENA = document.getElementById("ARENA");



player1.addEventListener("click", function () {


    chosenOnes.classList.remove("hide");
    chosenDKnight.classList.remove("hide");
    chosenDKnight.classList.add("fade-out1");

    // REMOVES OTHER HEADLINES
    chosenDemon.classList.add("fade-out");
    chosenDemon.classList.add("hide");

    chosenWarlord.classList.add("fade-out");
    chosenWarlord.classList.add("hide");

    chosenSorcerer.classList.add("fade-out");
    chosenSorcerer.classList.add("hide");

    // CHOSEN TITLE DISSAPEARS
    player1.classList.add("player1");

    setTimeout(() => {


        chosenDKnight.classList.add("hide");


    }, 3000)



})



player2.addEventListener("click", function () {

    chosenOnes.classList.remove("hide");
    chosenSorcerer.classList.remove("hide");

    chosenDKnight.classList.add("fade-out");
    chosenDKnight.classList.add("hide");

    chosenDemon.classList.add("fade-out");
    chosenDemon.classList.add("hide");

    chosenWarlord.classList.add("fade-out");
    chosenWarlord.classList.add("hide");


    player2.classList.add("player2");

    // CHOSEN TITLE DISSAPEARS
    player2.classList.add("player2");

    setTimeout(() => {


        chosenSorcerer.classList.add("hide");


    }, 3000)




})




player3.addEventListener("click", function () {


    chosenOnes.classList.remove("hide");
    chosenDemon.classList.remove("hide");

    chosenDKnight.classList.add("fade-out");
    chosenDKnight.classList.add("hide");

    chosenSorcerer.classList.add("fade-out");
    chosenSorcerer.classList.add("hide");

    chosenWarlord.classList.add("fade-out");
    chosenWarlord.classList.add("hide");




    player3.classList.add("player3");


    // CHOSEN TITLE DISSAPEARS
    player3.classList.add("player3");

    setTimeout(() => {


        chosenDemon.classList.add("hide");


    }, 3000)



})



player4.addEventListener("click", function () {

    chosenOnes.classList.remove("hide");
    chosenWarlord.classList.remove("hide");

    chosenDKnight.classList.add("fade-out");
    chosenDKnight.classList.add("hide");

    chosenSorcerer.classList.add("fade-out");
    chosenSorcerer.classList.add("hide");

    chosenDemon.classList.add("fade-out");
    chosenDemon.classList.add("hide");

    player4.classList.add("player4");


    // CHOSEN TITLE DISSAPEARS
    player4.classList.add("player4");

    setTimeout(() => {


        chosenWarlord.classList.add("hide");


    }, 3000)



})


// DEMON KNIGHT


function demonKnight() {


    // ARENA CHARACTERS BUTTON
    let enterArenaDK = document.getElementById("enterArenaDK");
    let enterArenaSC = document.getElementById("enterArenaSC");
    let enterArenaD = document.getElementById("enterArenaD");
    let enterArenaWL = document.getElementById("enterArenaWL");

    var player1 = document.getElementById("player1");
    var player2 = document.getElementById("player2");
    var player3 = document.getElementById("player3");
    var player4 = document.getElementById("player4");


    // REMOVES OTHER CHARACTERS BEFORE ENTERING ARENA
    // PLAYER 2
    player2.style.animation = "none";
    player2.classList.add("fade-out");
    player2.classList.add("hide");
    player2.classList.remove("player");
    // PLAYER 3
    player3.style.animation = "none";
    player3.classList.add("fade-out");
    player3.classList.add("hide");
    player3.classList.remove("player");
    // PLAYER 4 
    player4.style.animation = "none";
    player4.classList.add("fade-out");
    player4.classList.add("hide");
    player4.classList.remove("player");


    // NASLOV
    characterNaslovDiv.classList.add("hide");

    // BUTTON ARENA
    ARENA.classList.remove("hide");
    enterArenaDK.classList.remove("hide");
    enterArenaDK.classList.add("enterArenaDK");

    enterArenaD.classList.remove("enterArenaD");
    enterArenaSC.classList.remove("enterArenaSC");
    enterArenaWL.classList.remove("enterArenaWL");



    enterArenaSC.classList.add("hide");
    enterArenaD.classList.add("hide");
    enterArenaWL.classList.add("hide");



}
// SORCERER

function sorcerer() {



    var player1 = document.getElementById("player1");
    var player2 = document.getElementById("player2");
    var player3 = document.getElementById("player3");
    var player4 = document.getElementById("player4");


    // REMOVES OTHER CHARACTERS BEFORE ENTERING ARENA
    // PLAYER 1
    player1.style.animation = "none";
    player1.classList.add("fade-out");
    player1.classList.remove("player");
    player1.classList.add("hide");

    // PLAYER 3
    player3.style.animation = "none";
    player3.classList.add("fade-out");
    player3.classList.add("hide");
    player3.classList.remove("player");
    // PLAYER 4 
    player4.style.animation = "none";
    player4.classList.add("fade-out");
    player4.classList.add("hide");
    player4.classList.remove("player");


    // NASLOV
    characterNaslovDiv.classList.add("hide");

    // BUTTON ARENA
    ARENA.classList.remove("hide");
    enterArenaDK.classList.add("hide");
    enterArenaDK.classList.remove("enterArenaDK");

    enterArenaSC.classList.remove("hide");
    enterArenaSC.classList.add("enterArenaSC");

    enterArenaD.classList.remove("enterArenaD");
    enterArenaD.classList.add("hide");

    enterArenaWL.classList.remove("enterArenaWL");
    enterArenaWL.classList.add("hide");


}

// DEMON

function demon() {



    var player1 = document.getElementById("player1");
    var player2 = document.getElementById("player2");
    var player3 = document.getElementById("player3");
    var player4 = document.getElementById("player4");



    // REMOVES OTHER CHARACTERS BEFORE ENTERING ARENA
    // PLAYER 2
    player1.style.animation = "none";
    player1.classList.add("fade-out");
    player1.classList.add("hide");
    player1.classList.remove("player");
    // PLAYER 3
    player2.style.animation = "none";
    player2.classList.add("fade-out");
    player2.classList.add("hide");
    player2.classList.remove("player");
    // PLAYER 4 
    player4.style.animation = "none";
    player4.classList.add("fade-out");
    player4.classList.add("hide");
    player4.classList.remove("player");


    // NASLOV
    characterNaslovDiv.classList.add("hide");

    // BUTTON ARENA
    ARENA.classList.remove("hide");
    enterArenaD.classList.remove("hide");
    enterArenaD.classList.add("enterArenaD");

    enterArenaSC.classList.add("hide");
    enterArenaDK.classList.add("hide");
    enterArenaWL.classList.add("hide");


}

// WARLORD

function warlord() {



    var player1 = document.getElementById("player1");
    var player2 = document.getElementById("player2");
    var player3 = document.getElementById("player3");
    var player4 = document.getElementById("player4");


    // REMOVES OTHER CHARACTERS BEFORE ENTERING ARENA
    // PLAYER 2
    player1.style.animation = "none";
    player1.classList.add("fade-out");
    player1.classList.add("hide");
    player1.classList.remove("player");
    // PLAYER 3
    player2.style.animation = "none";
    player2.classList.add("fade-out");
    player2.classList.add("hide");
    player2.classList.remove("player");
    // PLAYER 3
    player3.style.animation = "none";
    player3.classList.add("fade-out");
    player3.classList.add("hide");
    player3.classList.remove("player");

    // NASLOV
    characterNaslovDiv.classList.add("hide");

    // BUTTON ARENA
    ARENA.classList.remove("hide");
    enterArenaWL.classList.remove("hide");
    enterArenaWL.classList.add("enterArenaWL");

    enterArenaD.classList.add("hide");
    enterArenaSC.classList.add("hide");
    enterArenaDK.classList.add("hide");



}



// --------------------------------------------------------------------------------------------

// ARENA ----------------------------------------------------------------------------------------

function arenaDK() {

    var player1 = document.getElementById("player1");
    var player2 = document.getElementById("player2");
    var player3 = document.getElementById("player3");
    var player4 = document.getElementById("player4");

    // ARENA ANIMATION TITLES

    var arenaTitles = document.getElementById("arenaTitles");
    var level1Title = document.getElementById("level1");
    arenaTitles.classList.remove("hide");
    level1Title.classList.remove("hide");
    level1Title.classList.add("chosen");
    level1Title.classList.remove("fade-out");


    // LEVEL TITLE BEING REMOVED
    setTimeout(() => {


        level1Title.classList.add("hide");
        chosenDKnight.classList.add("hide");



    }, 1000);

    // DEMON KNIGHT ANIMATION ENTERING
    var arenaDK = document.getElementById("arenaDK");
    arenaDK.classList.add("move-left");
    chosenOnes.classList.add("fade-out");
    chosenOnes.classList.add("hide");

    enterArenaDK.classList.add("hide");
    ARENA.classList.add("fade-out");
    ARENA.classList.add("hide");


    // LEVEL1 

    // Creates enemy
    player2.classList.remove("fade-out");
    player2.classList.remove("hide");
    player2.classList.add("player");

    // ATTACK BUTTON
    var arenaCommands = document.getElementById("arenaCommands");
    var attackButton = document.getElementById("attackButton");
    attackButton.classList.remove("hide");
    attackButton.classList.add("attackButton");
    arenaCommands.classList.remove("hide");

    // POWER ATTACK
    var powerAttack = document.getElementById("powerAttack");
    powerAttack.classList.remove("hide");
    powerAttack.classList.add("powerAttack");

    //  POTION
    var potion = document.getElementById("potion");
    potion.classList.add("potion");
    potion.classList.remove("hide");

    // HEALTH STATS BEING ADDED AND MANIPULATED
    var healthBar1 = document.getElementById("healthBar1");
    healthBar1.classList.remove("hide");

    var healthBar2 = document.getElementById("healthBar2");
    healthBar2.classList.remove("hide");
    healthBar2.style.top = "2%";
    healthBar2.style.right = "17%";

    // -------------------------------------------
    var yourTurn = document.getElementById("yourTurn");
    yourTurn.classList.remove("turn");

    yourTurn.classList.add("hide");

    // ATTACK COMMANDS 

    var healthBar2 = document.getElementById("healthBar2");
    var healthBar1 = document.getElementById("healthBar1");
    var width2 = 200;
    var width1 = 200;


    attackButton.addEventListener("click", function () {

        width2 -= 30;
        healthBar2.style.width = width2 + "px";


        // remove your turn
        yourTurn.classList.add("hide");
        // add enemy turn
        var enemyTurn = document.getElementById("enemyTurn");
        enemyTurn.classList.remove("hide");
        enemyTurn.classList.add("turn");
        // remove attack button
        attackButton.classList.add("hide");
        attackButton.classList.remove("attackButton");

        // remove powerAttack button
        powerAttack.classList.add("hide");
        powerAttack.classList.remove("powerAttack");

        // remove potion button
        potion.classList.add("hide");
        potion.classList.remove("potion");


        setTimeout(() => {

            // remove enemyturn
            enemyTurn.classList.remove("turn");
            enemyTurn.classList.add("hide");

            width1 -= 30;
            healthBar1.style.width = width1 + "px";
            // your turn add  
            var yourTurn = document.getElementById("yourTurn");
            yourTurn.classList.remove("hide");
            yourTurn.classList.add("turn");

            // add attack button
            attackButton.classList.remove("hide");
            attackButton.classList.add("attackButton");


            if (width2 == 20) {
                yourTurn.classList.add("hide");

            }

        }, 1500)

        // ------------------------ RESULTS -------------------------------------------
        if (width1 == 20) {

            // REMOVE BUTTONS


            yourTurn.classList.add("hide");
            yourTurn.classList.remove("turn")
            enemyTurn.classList.add("hide");
            enemyTurn.classList.remove("turn");
            attackButton.classList.remove("attackButton");
            attackButton.classList.add("hide");

            // Result naslov
            var lose = document.getElementById("lose");
            lose.classList.remove("hide");
            lose.classList.add("lose");
            lose.classList.add("fade-out");


        }



        if (width2 < 20) {


            // REMOVE BUTTONS

            yourTurn.classList.add("hide");
            yourTurn.classList.remove("turn")
            enemyTurn.classList.add("hide");
            enemyTurn.classList.remove("turn");
            attackButton.classList.remove("attackButton");
            attackButton.classList.add("hide");

            // Result naslov
            var win = document.getElementById("win");
            win.classList.remove("hide");
            win.classList.add("win");
            win.classList.add("fade-out");

            // HEALTH RESET

            width1 = 220;



            // LEVEL RESET
            level2();

        }



    });

    // POW ATTACK


    var powerAttack = document.getElementById("powerAttack");

    powerAttack.addEventListener("click", function () {




        let randomAttack = Math.floor(Math.random() * 100).toFixed();

        width2 -= randomAttack;
        var healthBar2 = document.getElementById("healthBar2");
        healthBar2.style.width = width2 + "px";
        powerAttack.classList.add("hide");
        powerAttack.classList.remove("powerAttack");


    })

    // POTION

    var potion = document.getElementById("potion");

    potion.addEventListener("click", function () {


        var healthBar1 = document.getElementById("healthBar1");
        var potion = document.getElementById("potion");
        potionFill = 20;

        width1 += 20;

        healthBar1.style.width = width1 + "px";

        potion.classList.remove("potion");
        potion.classList.add("hide");


        if (width1 == 200) {


            potionFill = 0;


        }



    })


    // LEVEL 2 -------------------------------------------------------

    function level2() {



        // ARENA ANIMATION TITLES

        var arenaTitles = document.getElementById("arenaTitles");
        var level2Title = document.getElementById("level2");
        arenaTitles.classList.remove("hide");
        level2Title.classList.remove("hide");
        level2Title.classList.add("chosen");
        level2Title.classList.remove("fade-out");


        // LEVEL TITLE BEING REMOVED
        setTimeout(() => {


            level2Title.classList.add("hide");
            chosenDKnight.classList.add("hide");




        }, 3500);


        // removes old enemy
        player2.classList.add("fade-out");
        player2.classList.add("hide");
        player2.classList.remove("player");

        // Creates enemy    
        player3.classList.remove("fade-out");
        player3.classList.remove("hide");
        player3.classList.add("player");



        // ATTACK BUTTON
        var arenaCommands = document.getElementById("arenaCommands");
        var attackButton = document.getElementById("attackButton");
        attackButton.classList.remove("hide");
        attackButton.classList.add("attackButton");
        arenaCommands.classList.remove("hide");




        // reset potion/revive button 
        potion.classList.remove("hide");
        potion.classList.add("potion");


        // HEALTH STATS BEING ADDED AND MANIPULATED
        var healthBar1 = document.getElementById("healthBar1");
        healthBar1.classList.remove("hide");

        var healthBar3 = document.getElementById("healthBar3");
        healthBar3.classList.remove("hide");
        healthBar3.style.top = "2%";
        healthBar3.style.right = "17%";

        // -------------------------------------------


        // ATTACK COMMANDS 

        var healthBar3 = document.getElementById("healthBar3");
        var healthBar1 = document.getElementById("healthBar1");
        var width3 = 200;
        var width1 = 200;


        attackButton.addEventListener("click", function () {

            width3 -= 30;
            healthBar3.style.width = width3 + "px";


            // remove your turn
            yourTurn.classList.add("hide");
            // add enemy turn
            var enemyTurn = document.getElementById("enemyTurn");
            enemyTurn.classList.remove("hide");
            enemyTurn.classList.add("turn");
            // remove attack button
            attackButton.classList.add("hide");
            attackButton.classList.remove("attackButton");


            // remove powerAttack button
            powerAttack.classList.add("hide");
            powerAttack.classList.remove("powerAttack");

            // remove potion button
            potion.classList.add("hide");
            potion.classList.remove("potion");



            setTimeout(() => {

                // remove enemyturn
                enemyTurn.classList.remove("turn");
                enemyTurn.classList.add("hide");

                width1 -= 30;
                healthBar1.style.width = width1 + "px";
                // your turn add  
                var yourTurn = document.getElementById("yourTurn");
                yourTurn.classList.remove("hide");
                yourTurn.classList.add("turn");


                // add attack button
                attackButton.classList.remove("hide");
                attackButton.classList.add("attackButton");

                // add powerAttack button
                powerAttack.classList.remove("hide");
                powerAttack.classList.add("powerAttack");

                // add potion button
                potion.classList.remove("hide");
                potion.classList.add("potion");

                if (width3 == 20) {
                    yourTurn.classList.add("hide");

                }

            }, 1500)

            // ------------------------ RESULTS -------------------------------------------
            if (width1 < 20) {



                // REMOVE BUTTONS
                yourTurn.classList.add("hide");
                yourTurn.classList.remove("turn")
                enemyTurn.classList.add("hide");
                enemyTurn.classList.remove("turn");
                attackButton.classList.remove("attackButton");
                attackButton.classList.add("hide");

                // Result naslov
                var lose = document.getElementById("lose");
                lose.classList.remove("hide");
                lose.classList.add("lose");
                lose.classList.add("fade-out");


            }



            if (width3 < 20) {



                // REMOVE BUTTONS
                yourTurn.classList.add("hide");
                yourTurn.classList.remove("turn")
                enemyTurn.classList.add("hide");
                enemyTurn.classList.remove("turn");
                attackButton.classList.remove("attackButton");
                attackButton.classList.add("hide");
                width1 = 220;

                // Result naslov
                var win = document.getElementById("win");
                win.classList.remove("hide");
                win.classList.add("win");
                win.classList.add("fade-out");
                // HEALTH RESET

                // ---

                // LEVEL RESET
                level3();
            }

        })

        // POW ATTACK

        var powerAttack = document.getElementById("powerAttack");

        powerAttack.addEventListener("click", function () {


            let randomAttack = Math.floor(Math.random() * 100).toFixed();

            width3 -= randomAttack;
            var healthBar3 = document.getElementById("healthBar3");
            healthBar3.style.width = width3 + "px";
            powerAttack.classList.add("hide");
            powerAttack.classList.remove("powerAttack");

        })





    }

    // --------------------- LEVEL 3 -----------------------------------

    function level3() {


        // ARENA ANIMATION TITLES

        var arenaTitles = document.getElementById("arenaTitles");
        var level3Title = document.getElementById("level3");
        arenaTitles.classList.remove("hide");
        level3Title.classList.remove("hide");
        level3Title.classList.add("chosen");
        level3Title.classList.remove("fade-out");


        // LEVEL TITLE BEING REMOVED
        setTimeout(() => {


            level3Title.classList.add("hide");
            chosenDKnight.classList.add("hide");




        }, 3500);


        // removes old enemy
        player3.classList.add("fade-out");
        player3.classList.add("hide");
        player3.classList.remove("player");

        // Creates enemy    
        player4.classList.remove("fade-out");
        player4.classList.remove("hide");
        player4.classList.add("player");

        // ATTACK BUTTON
        var arenaCommands = document.getElementById("arenaCommands");
        var attackButton = document.getElementById("attackButton");
        attackButton.classList.remove("hide");
        attackButton.classList.add("attackButton");
        arenaCommands.classList.remove("hide");


        // HEALTH STATS BEING ADDED AND MANIPULATED
        var healthBar1 = document.getElementById("healthBar1");
        healthBar1.classList.remove("hide");

        var healthBar4 = document.getElementById("healthBar4");
        healthBar4.classList.remove("hide");

        // -------------------------------------------


        // ATTACK COMMANDS 

        var healthBar4 = document.getElementById("healthBar4");
        var healthBar1 = document.getElementById("healthBar1");
        var width4 = 200;
        var width1 = 200;


        attackButton.addEventListener("click", function () {

            width4 -= 30;
            healthBar4.style.width = width4 + "px";


            // remove your turn
            yourTurn.classList.add("hide");
            // add enemy turn
            var enemyTurn = document.getElementById("enemyTurn");
            enemyTurn.classList.remove("hide");
            enemyTurn.classList.add("turn");
            // remove attack button
            attackButton.classList.add("hide");
            attackButton.classList.remove("attackButton");



            setTimeout(() => {

                // remove enemyturn
                enemyTurn.classList.remove("turn");
                enemyTurn.classList.add("hide");

                width1 -= 30;
                healthBar1.style.width = width1 + "px";
                // your turn add  
                var yourTurn = document.getElementById("yourTurn");
                yourTurn.classList.remove("hide");
                yourTurn.classList.add("turn");


                // add attack button
                attackButton.classList.remove("hide");
                attackButton.classList.add("attackButton");



                if (width4 == 20) {
                    yourTurn.classList.add("hide");

                }

            }, 1500)

            // ------------------------ RESULTS -------------------------------------------
            if (width1 < 20) {



                // REMOVE BUTTONS
                yourTurn.classList.add("hide");
                yourTurn.classList.remove("turn")
                enemyTurn.classList.add("hide");
                enemyTurn.classList.remove("turn");
                attackButton.classList.remove("attackButton");
                attackButton.classList.add("hide");

                // POWER ATTACK REMOVE
                var powerAttack = document.getElementById("powerAttack");
                powerAttack.classList.add("hide");
                powerAttack.classList.remove("powerAttack");

                //  POTION REMOVE
                var potion = document.getElementById("potion");
                potion.classList.remove("potion");
                potion.classList.add("hide");


                // Result naslov
                var lose = document.getElementById("lose");
                lose.classList.remove("hide");
                lose.classList.add("lose");
                lose.classList.add("fade-out");


            }



            if (width4 < 20) {



                // REMOVE BUTTONS
                yourTurn.classList.add("hide");
                yourTurn.classList.remove("turn")

                enemyTurn.classList.add("hide");
                enemyTurn.classList.remove("turn");

                attackButton.classList.remove("attackButton");
                attackButton.classList.add("hide");
                attackButton.style.animation = "none";
                attackButton.style.display = "none";

                // POWER ATTACK REMOVE
                var powerAttack = document.getElementById("powerAttack");
                powerAttack.classList.add("hide");
                powerAttack.classList.remove("powerAttack");

                //  POTION REMOVE
                var potion = document.getElementById("potion");
                potion.classList.remove("potion");
                potion.classList.add("hide");

                healthBar1.classList.add("hide");


                // removes old enemy
                player4.classList.add("fade-out");
                player4.classList.add("hide");
                player4.classList.remove("player");

                // move player1 

                player1.classList.add("middle");


                // Result naslov
                var win = document.getElementById("win");
                win.classList.remove("hide");
                win.classList.add("win");
                win.classList.add("winner");

            }


        })


        // POW ATTACK


        var powerAttack = document.getElementById("powerAttack");

        powerAttack.addEventListener("click", function () {




            let randomAttack = Math.floor(Math.random() * 100).toFixed();

            width4 -= randomAttack;
            var healthBar4 = document.getElementById("healthBar4");
            healthBar4.style.width = width4 + "px";
            powerAttack.classList.add("hide");
            powerAttack.classList.remove("powerAttack");

        })

        // POTION

        var potion = document.getElementById("potion");

        potion.addEventListener("click", function () {


            var healthBar1 = document.getElementById("healthBar1");

            var healthBar1 = document.getElementById("healthBar1");
            var potion = document.getElementById("potion");
            potionFill = 20;

            width1 += 20;

            healthBar1.style.width = width1 + "px";

            potion.classList.remove("potion");
            potion.classList.add("hide");


            if (width1 == 200) {


                potionFill = 0;


            }



        })




    }

}

// ----------------------------------------------------------------------------------------------------


function arenaSC() {


    var player1 = document.getElementById("player1");
    var player2 = document.getElementById("player2");
    var player3 = document.getElementById("player3");
    var player4 = document.getElementById("player4");

    player1.classList.remove("hide");
    player1.classList.add("player");


    // ARENA ANIMATION TITLES

    var arenaTitles = document.getElementById("arenaTitles");
    var level1Title = document.getElementById("level1");
    arenaTitles.classList.remove("hide");
    level1Title.classList.remove("hide");
    level1Title.classList.add("chosen");
    level1Title.classList.remove("fade-out");


    // LEVEL TITLE BEING REMOVED
    setTimeout(() => {


        level1Title.classList.add("hide");
        chosenSorcerer.classList.add("hide");




    }, 1000);

    // // SORCERER ANIMATION ENTERING
    var arenaSC = document.getElementById("arenaSC");
    var arenaDK = document.getElementById("arenaDK");

    // remove enter arena button
    enterArenaSC.classList.add("hide");
    enterArenaSC.classList.remove("enterArenaSC");


    arenaDK.classList.remove("hide");
    arenaDK.classList.add("move-left");
    chosenOnes.classList.add("fade-out");
    chosenOnes.classList.add("hide");

    enterArenaSC.classList.add("hide");
    ARENA.classList.add("fade-out");
    ARENA.classList.add("hide");


    // // // LEVEL1 

    // // Creates enemy
    player1.style.animation = "none";
    player1.classList.remove("fade-out");
    player1.classList.remove("hide");
    player1.classList.add("player");


    // // ATTACK BUTTON
    var arenaCommands = document.getElementById("arenaCommands");
    var attackButton = document.getElementById("attackButton");
    attackButton.classList.remove("hide");
    attackButton.classList.add("attackButton");
    arenaCommands.classList.remove("hide");
    // POWER ATTACK
    var powerAttack = document.getElementById("powerAttack");
    powerAttack.classList.remove("hide");
    powerAttack.classList.add("powerAttack");

    //  POTION
    var potion = document.getElementById("potion");
    potion.classList.add("potion");
    potion.classList.remove("hide");


    // // HEALTH STATS BEING ADDED AND MANIPULATED
    var healthBar1 = document.getElementById("healthBar1");
    healthBar1.classList.remove("hide");

    var healthBar2 = document.getElementById("healthBar2");
    healthBar2.classList.remove("hide");

    // // -------------------------------------------
    var yourTurn = document.getElementById("yourTurn");
    yourTurn.classList.remove("turn");

    yourTurn.classList.add("hide");

    // ATTACK COMMANDS 

    var healthBar2 = document.getElementById("healthBar2");
    var healthBar1 = document.getElementById("healthBar1");
    var width2 = 200;
    var width1 = 200;


    attackButton.addEventListener("click", function () {

        width1 -= 30;
        healthBar1.style.width = width1 + "px";


        // remove your turn
        yourTurn.classList.add("hide");
        // add enemy turn
        var enemyTurn = document.getElementById("enemyTurn");
        enemyTurn.classList.remove("hide");
        enemyTurn.classList.add("turn");
        // remove attack button
        attackButton.classList.add("hide");
        attackButton.classList.remove("attackButton");

        // remove powerAttack button
        powerAttack.classList.add("hide");
        powerAttack.classList.remove("powerAttack");

        // remove potion button
        potion.classList.add("hide");
        potion.classList.remove("potion");



        setTimeout(() => {

            // remove enemyturn
            enemyTurn.classList.remove("turn");
            enemyTurn.classList.add("hide");

            width2 -= 30;
            healthBar2.style.width = width2 + "px";
            // your turn add  
            var yourTurn = document.getElementById("yourTurn");
            yourTurn.classList.remove("hide");
            yourTurn.classList.add("turn");


            // add attack button
            attackButton.classList.remove("hide");
            attackButton.classList.add("attackButton");


            if (width1 == 20) {
                yourTurn.classList.add("hide");

            }


        }, 1500)

        // ------------------------ RESULTS -------------------------------------------
        if (width2 < 20) {



            // REMOVE BUTTONS
            yourTurn.classList.add("hide");
            yourTurn.classList.remove("turn")
            enemyTurn.classList.add("hide");
            enemyTurn.classList.remove("turn");
            attackButton.classList.remove("attackButton");
            attackButton.classList.add("hide");

            // remove enemy
            player1.classList.add("hide");
            player1.classList.remove("player");
            player1.classList.add("fade-out");
            player1.classList.remove("enemy");

            // Result naslov

            var lose = document.getElementById("lose");
            lose.classList.remove("hide");
            lose.classList.add("lose");
            lose.classList.add("fade-out");
            lose.style.marginTop = "0px";

        }



        if (width1 < 20) {



            // REMOVE BUTTONS
            yourTurn.classList.add("hide");
            yourTurn.classList.remove("turn")
            enemyTurn.classList.add("hide");
            enemyTurn.classList.remove("turn");
            attackButton.classList.remove("attackButton");
            attackButton.classList.add("hide");


            // remove enemy 

            player1.classList.add("hide");
            player1.classList.remove("player");
            player1.classList.add("fade-out");
            player1.classList.remove("enemy");
            healthBar1.classList.add("hide");
            healthBar1.style.display = "none";

            // ------------

            // Result naslov
            var win = document.getElementById("win");
            win.classList.remove("hide");
            win.classList.add("win");
            win.classList.add("fade-out");
            win.style.marginTop = "0px";

            // HEALTH RESET

            width2 = 220;



            // LEVEL RESET
            level2SC();

        }

    });


    // POW ATTACK


    var powerAttack = document.getElementById("powerAttack");

    powerAttack.addEventListener("click", function () {


        let randomAttack = Math.floor(Math.random() * 100).toFixed();

        width1 -= randomAttack;
        var healthBar1 = document.getElementById("healthBar1");
        healthBar1.style.width = width2 + "px";
        powerAttack.classList.add("hide");
        powerAttack.classList.remove("powerAttack");

    })




    // POTION

    var potion = document.getElementById("potion");

    potion.addEventListener("click", function () {

        var healthBar2 = document.getElementById("healthBar2");
        var potion = document.getElementById("potion");
        potionFill = 20;

        width2 += 20;

        healthBar2.style.width = width2 + "px";

        potion.classList.remove("potion");
        potion.classList.add("hide");


        if (width2 == 200) {


            potionFill = 0;


        }



    })



    // LEVEL 2 -------------------------------------------------------

    function level2SC() {



        // ARENA ANIMATION TITLES

        var arenaTitles = document.getElementById("arenaTitles");
        var level2Title = document.getElementById("level2");
        arenaTitles.classList.remove("hide");
        level2Title.classList.remove("hide");
        level2Title.classList.add("chosen");
        level2Title.classList.remove("fade-out");
        level2Title.style.marginTop = "0px";



        // LEVEL TITLE BEING REMOVED
        setTimeout(() => {


            level2Title.classList.add("hide");
            chosenSorcerer.classList.add("hide");




        }, 3500);



        // -------------------------------------------

        // removes old enemy
        player1.classList.add("fade-out");
        player1.classList.add("hide");
        player1.classList.remove("player");
        player1.classList.remove("enemy");
        healthBar1.classList.add("hide");

        player2.classList.add("enemy-move1");

        // Creates enemy    
        player3.classList.remove("fade-out");
        player3.classList.remove("hide");
        player3.classList.add("player");
        player3.classList.add("enemy-move2");
        player3.style.top = "0";



        // ATTACK BUTTON
        var arenaCommands = document.getElementById("arenaCommands");
        var attackButton = document.getElementById("attackButton");
        attackButton.classList.remove("hide");
        attackButton.classList.add("attackButton");
        arenaCommands.classList.remove("hide");

        // reset powerAttack button 
        powerAttack.classList.remove("hide");
        powerAttack.classList.add("powerAttack");

        // reset potion/revive button 
        potion.classList.remove("hide");
        potion.classList.add("potion");

        // HEALTH STATS BEING ADDED AND MANIPULATED
        var healthBar2 = document.getElementById("healthBar2");
        healthBar2.classList.remove("hide");
        healthBar2.classList.add("healthbar-ver2");

        var healthBar3 = document.getElementById("healthBar3");
        healthBar3.classList.remove("hide");

        // -------------------------------------------


        // ATTACK COMMANDS 

        var healthBar3 = document.getElementById("healthBar3");
        var healthBar2 = document.getElementById("healthBar2");
        var width3 = 200;
        var width2 = 200;


        attackButton.addEventListener("click", function () {

            width3 -= 30;
            healthBar3.style.width = width3 + "px";


            // remove your turn
            yourTurn.classList.add("hide");
            // add enemy turn
            var enemyTurn = document.getElementById("enemyTurn");
            enemyTurn.classList.remove("hide");
            enemyTurn.classList.add("turn");
            enemyTurn.style.marginTop = "0px";
            // remove attack button
            attackButton.classList.add("hide");
            attackButton.classList.remove("attackButton");

            // remove powerAttack button
            powerAttack.classList.add("hide");
            powerAttack.classList.remove("powerAttack");

            // remove potion button
            potion.classList.add("hide");
            potion.classList.remove("potion");



            setTimeout(() => {

                // remove enemyturn
                enemyTurn.classList.remove("turn");
                enemyTurn.classList.add("hide");

                width2 -= 30;
                healthBar2.style.width = width2 + "px";
                // your turn add  
                var yourTurn = document.getElementById("yourTurn");
                yourTurn.style.marginTop = "0px";
                yourTurn.classList.remove("hide");
                yourTurn.classList.add("turn");
                yourTurn.style.marginTop = "0px";


                // add attack button
                attackButton.classList.remove("hide");
                attackButton.classList.add("attackButton");

                // add powerAttack button
                powerAttack.classList.remove("hide");
                powerAttack.classList.add("powerAttack");

                // add potion button
                potion.classList.remove("hide");
                potion.classList.add("potion");

                if (width3 == 20) {
                    yourTurn.classList.add("hide");

                }

            }, 1500)

            // ------------------------ RESULTS -------------------------------------------
            if (width2 < 20) {



                // REMOVE BUTTONS
                yourTurn.classList.add("hide");
                yourTurn.classList.remove("turn")
                enemyTurn.classList.add("hide");
                enemyTurn.classList.remove("turn");
                attackButton.classList.remove("attackButton");
                attackButton.classList.add("hide");

                // Result naslov

                var lose = document.getElementById("lose");
                lose.classList.remove("hide");
                lose.classList.add("lose");
                lose.classList.add("fade-out");
                lose.style.marginTop = "0px";

                // LEVEL RESET
                level3SC();

            }



            if (width3 < 20) {



                // REMOVE BUTTONS
                yourTurn.classList.add("hide");
                yourTurn.classList.remove("turn")

                enemyTurn.classList.add("hide");
                enemyTurn.classList.remove("turn");
                attackButton.classList.remove("attackButton");
                attackButton.classList.add("hide");
                healthBar1.classList.add("hide");
                healthBar2.classList.remove("healthbar-ver2")

                // Result naslov
                var win = document.getElementById("win");
                win.classList.remove("hide");
                win.classList.add("win");
                win.classList.add("fade-out");
                win.style.marginTop = "0px";

                // HEALTH RESET
                width2 = 220;

                // LEVEL RESET

                level3SC();
            }

        })


        // POW ATTACK


        var powerAttack = document.getElementById("powerAttack");

        powerAttack.addEventListener("click", function () {


            let randomAttack = Math.floor(Math.random() * 100).toFixed();

            width3 -= randomAttack;
            var healthBar3 = document.getElementById("healthBar3");
            healthBar3.style.width = width2 + "px";
            powerAttack.classList.add("hide");
            powerAttack.classList.remove("powerAttack");

        })


        // POTION

        var potion = document.getElementById("potion");

        potion.addEventListener("click", function () {

            var healthBar2 = document.getElementById("healthBar2");
            var potion = document.getElementById("potion");
            potionFill = 20;

            width2 += 20;

            healthBar2.style.width = width2 + "px";

            potion.classList.remove("potion");
            potion.classList.add("hide");


            if (width2 == 200) {


                potionFill = 0;


            }



        })



    }

    // --------------------- LEVEL 3 -----------------------------------

    function level3SC() {


        // ARENA ANIMATION TITLES

        var arenaTitles = document.getElementById("arenaTitles");
        var level3Title = document.getElementById("level3");
        arenaTitles.classList.remove("hide");
        level3Title.classList.remove("hide");
        level3Title.classList.add("chosen");
        level3Title.classList.remove("fade-out");
        level3Title.style.marginTop = "0px";


        // LEVEL TITLE BEING REMOVED
        setTimeout(() => {


            level3Title.classList.add("hide");
            chosenDKnight.classList.add("hide");




        }, 3500);


        // removes old enemy
        player3.classList.add("fade-out");
        player3.classList.add("hide");
        player3.classList.remove("player");

        // Creates enemy    
        player4.classList.remove("fade-out");
        player4.classList.remove("hide");
        player4.classList.add("player");
        player4.classList.add("enemy-move2");
        player4.style.top = "0";

        // ATTACK BUTTON
        var arenaCommands = document.getElementById("arenaCommands");
        var attackButton = document.getElementById("attackButton");
        attackButton.classList.remove("hide");
        attackButton.classList.add("attackButton");
        arenaCommands.classList.remove("hide");

        // reset powerAttack button
        powerAttack.classList.remove("hide");
        powerAttack.classList.add("powerAttack");

        // reset potion/revive button 
        potion.classList.remove("hide");
        potion.classList.add("potion");

        // HEALTH STATS BEING ADDED AND MANIPULATED
        var healthBar2 = document.getElementById("healthBar2");
        healthBar2.classList.remove("hide");
        healthBar2.classList.add("healthbar-ver2");

        var healthBar4 = document.getElementById("healthBar4");
        healthBar4.style.top = "-2.5%";
        healthBar4.style.right = "67%";
        healthBar4.classList.remove("hide");

        // -------------------------------------------


        // ATTACK COMMANDS 

        var healthBar4 = document.getElementById("healthBar4");
        var healthBar2 = document.getElementById("healthBar2");
        var width4 = 200;
        var width2 = 200;


        attackButton.addEventListener("click", function () {

            width4 -= 30;
            healthBar4.style.width = width4 + "px";


            // remove your turn
            yourTurn.classList.add("hide");
            // add enemy turn
            var enemyTurn = document.getElementById("enemyTurn");
            enemyTurn.classList.remove("hide");
            enemyTurn.classList.add("turn");
            enemyTurn.style.marginTop = "0px";
            // remove attack button
            attackButton.classList.add("hide");
            attackButton.classList.remove("attackButton");

            // remove powerAttack button
            powerAttack.classList.add("hide");
            powerAttack.classList.remove("powerAttack");

            // remove potion button
            potion.classList.add("hide");
            potion.classList.remove("potion");

            setTimeout(() => {

                // remove enemyturn
                enemyTurn.classList.remove("turn");
                enemyTurn.classList.add("hide");

                width2 -= 30;
                healthBar2.style.width = width2 + "px";

                // your turn add  
                var yourTurn = document.getElementById("yourTurn");
                yourTurn.classList.remove("hide");
                yourTurn.classList.add("turn");
                yourTurn.style.marginTop = "0px";

                // add attack button
                attackButton.classList.remove("hide");
                attackButton.classList.add("attackButton");

                // add powerAttack button
                powerAttack.classList.remove("hide");
                powerAttack.classList.add("powerAttack");

                // add potion button
                potion.classList.remove("hide");
                potion.classList.add("potion");

                if (width4 == 20) {
                    yourTurn.classList.add("hide");

                }

            }, 1500)

            // ------------------------ RESULTS -------------------------------------------
            if (width2 < 20) {



                // REMOVE BUTTONS
                yourTurn.classList.add("hide");
                yourTurn.classList.remove("turn")
                enemyTurn.classList.add("hide");
                enemyTurn.classList.remove("turn");
                attackButton.classList.remove("attackButton");
                attackButton.classList.add("hide");


                // POWER ATTACK REMOVE
                var powerAttack = document.getElementById("powerAttack");
                powerAttack.classList.add("hide");
                powerAttack.classList.remove("powerAttack");

                //  POTION REMOVE
                var potion = document.getElementById("potion");
                potion.classList.remove("potion");
                potion.classList.add("hide");


                // Result naslov

                var lose = document.getElementById("lose");
                lose.classList.remove("hide");
                lose.classList.add("lose");
                lose.classList.add("fade-out");
                lose.style.marginTop = "0px";


            }



            if (width4 < 20) {

                // REMOVE BUTTONS


                yourTurn.classList.add("hide");
                yourTurn.classList.remove("turn")
                enemyTurn.classList.add("hide");
                enemyTurn.classList.remove("turn");
                attackButton.classList.remove("attackButton");
                attackButton.classList.add("hide");
                attackButton.style.display = "none";

                // removes old enemy
                player4.classList.add("fade-out");
                player4.classList.add("hide");
                player4.classList.remove("player");


                // move player1 
                healthBar2.classList.add("hide");
                healthBar2.style.display = "none";
                player2.classList.remove("enemy-move1");
                player2.classList.add("middle2");


                // Result naslov
                var win = document.getElementById("win");
                win.classList.remove("hide");
                win.classList.add("win");
                win.classList.add("winner");

            }

        })


        // POW ATTACK


        var powerAttack = document.getElementById("powerAttack");

        powerAttack.addEventListener("click", function () {

            let randomAttack = Math.floor(Math.random() * 100).toFixed();

            width4 -= randomAttack;
            var healthBar4 = document.getElementById("healthBar4");
            healthBar4.style.width = width4 + "px";
            powerAttack.classList.add("hide");
            powerAttack.classList.remove("powerAttack");

        })

        // POTION

        var potion = document.getElementById("potion");

        potion.addEventListener("click", function () {

            var healthBar2 = document.getElementById("healthBar2");
            var potion = document.getElementById("potion");
            potionFill = 20;

            width2 += 20;

            healthBar2.style.width = width2 + "px";

            potion.classList.remove("potion");
            potion.classList.add("hide");


            if (width2 == 200) {


                potionFill = 0;


            }



        })




    }

}
function arenaD() {


    var player1 = document.getElementById("player1");
    var player2 = document.getElementById("player2");
    var player3 = document.getElementById("player3");
    var player4 = document.getElementById("player4");


    // ARENA ANIMATION TITLES

    var arenaTitles = document.getElementById("arenaTitles");
    var level1Title = document.getElementById("level1");
    arenaTitles.classList.remove("hide");
    level1Title.classList.remove("hide");
    level1Title.classList.add("chosen");
    level1Title.classList.remove("fade-out");



    var enterArenaD = document.getElementById("enterArenaD");

    chosenOnes.classList.add("fade-out");
    chosenOnes.classList.add("hide");

    enterArenaD.classList.add("hide");
    enterArenaD.classList.remove("enterArenaD");
    ARENA.classList.add("fade-out");

    // LEVEL TITLE BEING REMOVED
    setTimeout(() => {


        level1Title.classList.add("hide");
        chosenDemon.classList.add("hide");




    }, 1000);

    // DEMON ANIMATION ENTERING
    var enterArenaD = document.getElementById("enterArenaD");

    // remove enter arena button
    enterArenaD.classList.add("hide");
    enterArenaD.classList.remove("enterArenaD");

    chosenOnes.classList.add("fade-out");
    chosenOnes.classList.add("hide");

    enterArenaD.classList.add("hide");
    ARENA.classList.add("fade-out");
    ARENA.classList.add("hide");


    // // // LEVEL1 

    // // Creates enemy
    player1.style.animation = "none";
    player1.classList.remove("fade-out");
    player1.classList.remove("hide");
    player1.classList.add("player");
    player1.classList.add("enemy-move3");
    var healthBar1 = document.getElementById("healthBar1");
    healthBar1.style.left = "61.5%";
    healthBar1.style.top = "2%";


    player3.classList.add("enemy-move4");
    var healthBar3 = document.getElementById("healthBar3");
    healthBar3.style.left = "107%";
    healthBar3.style.top = "-3.5%";
    healthBar3.classList.add("healthbar-ver3");


    // // ATTACK BUTTON
    var arenaCommands = document.getElementById("arenaCommands");
    var attackButton = document.getElementById("attackButton");
    attackButton.classList.remove("hide");
    attackButton.classList.add("attackButton");
    arenaCommands.classList.remove("hide");


    // POWER ATTACK
    var powerAttack = document.getElementById("powerAttack");
    powerAttack.classList.remove("hide");
    powerAttack.classList.add("powerAttack");

    //  POTION
    var potion = document.getElementById("potion");
    potion.classList.add("potion");
    potion.classList.remove("hide");

    // // HEALTH STATS BEING ADDED AND MANIPULATED
    var healthBar1 = document.getElementById("healthBar1");
    healthBar1.classList.remove("hide");

    var healthBar3 = document.getElementById("healthBar3");
    healthBar3.classList.remove("hide");

    // // -------------------------------------------
    var yourTurn = document.getElementById("yourTurn");
    yourTurn.classList.remove("turn");

    yourTurn.classList.add("hide");

    // ATTACK COMMANDS 

    var healthBar3 = document.getElementById("healthBar3");
    var healthBar1 = document.getElementById("healthBar1");
    var width3 = 200;
    var width1 = 200;


    attackButton.addEventListener("click", function () {

        width1 -= 30;
        healthBar1.style.width = width1 + "px";


        // remove your turn
        yourTurn.classList.add("hide");
        // add enemy turn
        var enemyTurn = document.getElementById("enemyTurn");
        enemyTurn.classList.remove("hide");
        enemyTurn.classList.add("turn");
        // remove attack button
        attackButton.classList.add("hide");
        attackButton.classList.remove("attackButton");

        // remove powerAttack button
        powerAttack.classList.add("hide");
        powerAttack.classList.remove("powerAttack");

        // remove potion button
        potion.classList.add("hide");
        potion.classList.remove("potion");



        setTimeout(() => {

            // remove enemyturn
            enemyTurn.classList.remove("turn");
            enemyTurn.classList.add("hide");

            width3 -= 30;
            healthBar3.style.width = width3 + "px";
            // your turn add  
            var yourTurn = document.getElementById("yourTurn");
            yourTurn.classList.remove("hide");
            yourTurn.classList.add("turn");

            // add attack button
            attackButton.classList.remove("hide");
            attackButton.classList.add("attackButton");

            // add powerAttack button
            powerAttack.classList.remove("hide");
            powerAttack.classList.add("powerAttack");

            // add potion button
            potion.classList.remove("hide");
            potion.classList.add("potion");

            if (width1 == 20) {
                yourTurn.classList.add("hide");

            }

        }, 1500)

        // ------------------------ RESULTS -------------------------------------------
        if (width3 < 20) {


            // REMOVE BUTTONS

            yourTurn.classList.add("hide");
            yourTurn.classList.remove("turn")
            enemyTurn.classList.add("hide");
            enemyTurn.classList.remove("turn");
            attackButton.classList.remove("attackButton");
            attackButton.classList.add("hide");

            // remove enemy
            player1.classList.add("hide");
            player1.classList.remove("player");
            player1.classList.add("fade-out");
            player1.classList.remove("enemy");

            // Result naslov

            var lose = document.getElementById("lose");
            lose.classList.remove("hide");
            lose.classList.add("lose");
            lose.classList.add("fade-out");


        }



        if (width1 < 20) {


            // REMOVE BUTTONS

            yourTurn.classList.add("hide");
            yourTurn.classList.remove("turn")
            enemyTurn.classList.add("hide");
            enemyTurn.classList.remove("turn");
            attackButton.classList.remove("attackButton");
            attackButton.classList.add("hide");


            // remove enemy 

            player1.classList.add("hide");
            player1.classList.remove("player");
            player1.classList.add("fade-out");
            player1.classList.remove("enemy");

            healthBar1.classList.add("hide");
            healthBar1.style.display = "none";

            // ------------

            // Result naslov
            var win = document.getElementById("win");
            win.classList.remove("hide");
            win.classList.add("win");
            win.classList.add("winner");

            // HEALTH RESET

            width3 = 220;



            // LEVEL RESET
            level2D();

        }

    });


    // POW ATTACK


    var powerAttack = document.getElementById("powerAttack");

    powerAttack.addEventListener("click", function () {

        let randomAttack = Math.floor(Math.random() * 100).toFixed();

        width1 -= randomAttack;
        var healthBar1 = document.getElementById("healthBar1");
        healthBar1.style.width = width1 + "px";
        powerAttack.classList.add("hide");
        powerAttack.classList.remove("powerAttack");

    })



    // POTION

    var potion = document.getElementById("potion");

    potion.addEventListener("click", function () {

        var healthBar3 = document.getElementById("healthBar3");
        var potion = document.getElementById("potion");
        potionFill = 20;

        width3 += 20;

        healthBar3.style.width = width3 + "px";

        potion.classList.remove("potion");
        potion.classList.add("hide");


        if (width3 == 200) {


            potionFill = 0;


        }



    })



    // LEVEL 2 -------------------------------------------------------

    function level2D() {



        // ARENA ANIMATION TITLES

        var arenaTitles = document.getElementById("arenaTitles");
        var level2Title = document.getElementById("level2");
        arenaTitles.classList.remove("hide");
        level2Title.classList.remove("hide");
        level2Title.classList.add("chosen");
        level2Title.classList.remove("fade-out");


        // LEVEL TITLE BEING REMOVED
        setTimeout(() => {


            level2Title.classList.add("hide");
            chosenSorcerer.classList.add("hide");


        }, 3500);



        // -------------------------------------------

        // removes old enemy
        player1.classList.add("fade-out");
        player1.classList.add("hide");
        player1.classList.remove("player");
        player1.classList.remove("enemy");
        healthBar1.classList.add("hide");

        // player2.classList.add("enemy-move5");

        // Creates enemy    
        player2.classList.remove("fade-out");
        player2.classList.remove("hide");
        player2.classList.add("player");
        player2.classList.add("enemy");
        player2.classList.add("enemy-move3");

        // ATTACK BUTTON
        var arenaCommands = document.getElementById("arenaCommands");
        var attackButton = document.getElementById("attackButton");
        attackButton.classList.remove("hide");
        attackButton.classList.add("attackButton");
        arenaCommands.classList.remove("hide");

        // reset potion/revive button 
        potion.classList.remove("hide");
        potion.classList.add("potion");

        // reset powerAttack button 
        powerAttack.classList.remove("hide");
        powerAttack.classList.add("powerAttack");

        // HEALTH STATS BEING ADDED AND MANIPULATED
        var healthBar2 = document.getElementById("healthBar2");
        healthBar2.classList.remove("hide");

        var healthBar3 = document.getElementById("healthBar3");

        healthBar3.classList.remove("hide");

        // -------------------------------------------


        // ATTACK COMMANDS 

        var healthBar3 = document.getElementById("healthBar3");
        var healthBar2 = document.getElementById("healthBar2");
        var width3 = 200;
        var width2 = 200;


        attackButton.addEventListener("click", function () {

            width2 -= 30;
            healthBar2.style.width = width2 + "px";

            // remove your turn
            yourTurn.classList.add("hide");
            // add enemy turn
            var enemyTurn = document.getElementById("enemyTurn");
            enemyTurn.classList.remove("hide");
            enemyTurn.classList.add("turn");

            // remove attack button
            attackButton.classList.add("hide");
            attackButton.classList.remove("attackButton");

            // remove powerAttack button
            powerAttack.classList.add("hide");
            powerAttack.classList.remove("powerAttack");

            // remove potion button
            potion.classList.add("hide");
            potion.classList.remove("potion");



            setTimeout(() => {

                // remove enemyturn
                enemyTurn.classList.remove("turn");
                enemyTurn.classList.add("hide");

                width3 -= 30;
                healthBar3.style.width = width3 + "px";
                // your turn add  
                var yourTurn = document.getElementById("yourTurn");

                yourTurn.classList.remove("hide");
                yourTurn.classList.add("turn");

                // add attack button
                attackButton.classList.remove("hide");
                attackButton.classList.add("attackButton");

                // add powerAttack button
                powerAttack.classList.remove("hide");
                powerAttack.classList.add("powerAttack");

                // add potion button
                potion.classList.remove("hide");
                potion.classList.add("potion");

                if (width3 == 20) {
                    yourTurn.classList.add("hide");

                }

            }, 1500)

            // ------------------------ RESULTS -------------------------------------------
            if (width3 < 20) {



                // REMOVE BUTTONS

                yourTurn.classList.add("hide");
                yourTurn.classList.remove("turn")
                enemyTurn.classList.add("hide");
                enemyTurn.classList.remove("turn");
                attackButton.classList.remove("attackButton");
                attackButton.classList.add("hide");


                // Result naslov
                var lose = document.getElementById("lose");
                lose.classList.remove("hide");
                lose.classList.add("lose");
                lose.classList.add("fade-out");
                level3D();

            }



            if (width2 < 20) {


                // REMOVE BUTTONS

                yourTurn.classList.add("hide");
                yourTurn.classList.remove("turn")
                yourTurn.style.marginTop = "0px";
                enemyTurn.classList.add("hide");
                enemyTurn.classList.remove("turn");
                attackButton.classList.remove("attackButton");
                attackButton.classList.add("hide");
                healthBar2.classList.add("hide");
                healthBar2.classList.remove("healthbar-ver2")

                // Result naslov
                var win = document.getElementById("win");
                win.classList.remove("hide");
                win.classList.add("win");
                win.classList.add("winner");

                //   HEALTH RESET

                width3 = 220;


                // LEVEL RESET
                level3D();
            }


        })


        // POW ATTACK


        var powerAttack = document.getElementById("powerAttack");

        powerAttack.addEventListener("click", function () {

            let randomAttack = Math.floor(Math.random() * 100).toFixed();

            width2 -= randomAttack;
            var healthBar2 = document.getElementById("healthBar2");
            healthBar2.style.width = width2 + "px";
            powerAttack.classList.add("hide");

        })



    }

    // --------------------- LEVEL 3 -----------------------------------

    function level3D() {


        // ARENA ANIMATION TITLES

        var arenaTitles = document.getElementById("arenaTitles");
        var level3Title = document.getElementById("level3");
        arenaTitles.classList.remove("hide");
        level3Title.classList.remove("hide");
        level3Title.classList.add("chosen");
        level3Title.classList.remove("fade-out");
        level3Title.style.marginTop = "0px";


        // LEVEL TITLE BEING REMOVED
        setTimeout(() => {


            level3Title.classList.add("hide");
            chosenDemon.classList.add("hide");


        }, 3500);


        // removes old enemy
        player2.classList.add("fade-out");
        player2.classList.add("hide");
        player2.classList.remove("player");
        player2.classList.remove("enemy");

        // Creates enemy    
        player4.classList.remove("fade-out");
        player4.classList.remove("hide");
        player4.classList.add("player");
        player4.classList.add("enemy-move2");
        player4.style.top = "0";


        // ATTACK BUTTON
        var arenaCommands = document.getElementById("arenaCommands");
        var attackButton = document.getElementById("attackButton");
        attackButton.classList.remove("hide");
        attackButton.classList.add("attackButton");
        arenaCommands.classList.remove("hide");

        // powerattack button reset
        powerAttack.classList.remove("hide");
        powerAttack.classList.add("powerAttack"),

            // potion button reset
            potion.classList.remove("hide");
        potion.classList.add("potion");

        // HEALTH STATS BEING ADDED AND MANIPULATED
        var healthBar3 = document.getElementById("healthBar3");
        healthBar3.classList.remove("hide");
        healthBar3.classList.add("healthbar-ver2");

        var healthBar4 = document.getElementById("healthBar4");
        healthBar4.style.top = "-2.5%";
        healthBar4.style.right = "67%";
        healthBar4.classList.remove("hide");

        // -------------------------------------------


        // ATTACK COMMANDS 

        var healthBar4 = document.getElementById("healthBar4");
        var healthBar3 = document.getElementById("healthBar3");
        var width4 = 200;
        var width3 = 200;


        attackButton.addEventListener("click", function () {

            width4 -= 30;
            healthBar4.style.width = width4 + "px";


            // remove your turn
            yourTurn.classList.add("hide");
            // add enemy turn
            var enemyTurn = document.getElementById("enemyTurn");
            enemyTurn.classList.remove("hide");
            enemyTurn.classList.add("turn");
            enemyTurn.style.marginTop = "0px";

            // remove attack button
            attackButton.classList.add("hide");
            attackButton.classList.remove("attackButton");

            // remove powerAttack button
            powerAttack.classList.add("hide");
            powerAttack.classList.remove("powerAttack");

            // remove potion button
            potion.classList.add("hide");
            potion.classList.remove("potion");



            setTimeout(() => {

                // remove enemyturn
                enemyTurn.classList.remove("turn");
                enemyTurn.classList.add("hide");

                width3 -= 30;
                healthBar3.style.width = width3 + "px";

                // your turn add  
                var yourTurn = document.getElementById("yourTurn");
                yourTurn.classList.remove("hide");
                yourTurn.classList.add("turn");
                yourTurn.style.marginTop = "0px";

                // add attack button
                attackButton.classList.remove("hide");
                attackButton.classList.add("attackButton");

                // add powerAttack button
                powerAttack.classList.remove("hide");
                powerAttack.classList.add("powerAttack");

                // add potion button
                potion.classList.remove("hide");
                potion.classList.add("potion");

                if (width4 == 20) {
                    yourTurn.classList.add("hide");

                }

            }, 1500)

            // ------------------------ RESULTS -------------------------------------------
            if (width3 < 20) {



                // REMOVE BUTTONS
                yourTurn.classList.add("hide");
                yourTurn.classList.remove("turn")
                enemyTurn.classList.add("hide");
                enemyTurn.classList.remove("turn");
                attackButton.classList.remove("attackButton");
                attackButton.classList.add("hide");


                // POWER ATTACK REMOVE
                var powerAttack = document.getElementById("powerAttack");
                powerAttack.classList.add("hide");
                powerAttack.classList.remove("powerAttack");

                //  POTION REMOVE
                var potion = document.getElementById("potion");
                potion.classList.remove("potion");
                potion.classList.add("hide");

                // Result naslov
                var lose = document.getElementById("lose");
                lose.classList.remove("hide");
                lose.classList.add("lose");
                lose.classList.add("fade-out");


            }



            if (width4 < 20) {



                // REMOVE BUTTONS
                yourTurn.classList.add("hide");
                yourTurn.classList.remove("turn")
                enemyTurn.classList.add("hide");
                enemyTurn.classList.remove("turn");
                attackButton.classList.remove("attackButton");
                attackButton.classList.add("hide");
                attackButton.style.display = "none";


                // REMOVE PLAYER 

                player4.classList.add("fade-out");
                player4.classList.add("hide");
                player4.classList.remove("player");
                player4.classList.remove("enemy-move2");
                healthBar3.style.display = "none";

                // move 

                player3.classList.add("middle3");


                // Result naslov
                var win = document.getElementById("win");
                win.classList.remove("hide");
                win.classList.add("win");
                win.classList.add("winner");

            }


        })

        // POW ATTACK


        var powerAttack = document.getElementById("powerAttack");

        powerAttack.addEventListener("click", function () {

            let randomAttack = Math.floor(Math.random() * 100).toFixed();

            width4 -= randomAttack;
            var healthBar4 = document.getElementById("healthBar4");
            healthBar4.style.width = width4 + "px";
            powerAttack.classList.add("hide");
            powerAttack.classList.remove("powerAttack");

        })


        // POTION

        var potion = document.getElementById("potion");

        potion.addEventListener("click", function () {

            var healthBar3 = document.getElementById("healthBar3");
            var potion = document.getElementById("potion");
            potionFill = 20;

            width3 += 20;

            healthBar3.style.width = width3 + "px";

            potion.classList.remove("potion");
            potion.classList.add("hide");


            if (width3 == 200) {


                potionFill = 0;


            }



        })



    }




}
function arenaWL() {

    var player1 = document.getElementById("player1");
    var player2 = document.getElementById("player2");
    var player3 = document.getElementById("player3");
    var player4 = document.getElementById("player4");

    var arenaWL = document.getElementById("arenaWL");
    chosenOnes.classList.add("fade-out");
    chosenOnes.classList.add("hide");

    enterArenaWL.classList.add("hide");
    ARENA.classList.add("fade-out");


    // // LEVEL1 

    // // Creates enemy
    player1.style.animation = "none";
    player1.classList.remove("fade-out");
    player1.classList.remove("hide");
    player1.classList.add("player");
    player1.classList.add("enemy");
    // adjusting cards here
    player1.classList.add("enemy-move6");
    player4.classList.add("enemy-move7");

    // // ATTACK BUTTON
    var arenaCommands = document.getElementById("arenaCommands");
    var attackButton = document.getElementById("attackButton");
    attackButton.classList.remove("hide");
    attackButton.classList.add("attackButton");
    arenaCommands.classList.remove("hide");



    // POWER ATTACK
    var powerAttack = document.getElementById("powerAttack");
    powerAttack.classList.remove("hide");
    powerAttack.classList.add("powerAttack");

    //  POTION
    var potion = document.getElementById("potion");
    potion.classList.add("potion");
    potion.classList.remove("hide");

    // // HEALTH STATS BEING ADDED AND MANIPULATED
    var healthBar1 = document.getElementById("healthBar1");
    healthBar1.classList.remove("hide");
    healthBar1.style.left = "22.5%";

    var healthBar4 = document.getElementById("healthBar4");
    healthBar4.classList.remove("hide");
    healthBar4.style.top = "-3%";
    healthBar4.style.right = "68.6%";


    // // -------------------------------------------
    var yourTurn = document.getElementById("yourTurn");
    yourTurn.classList.remove("turn");

    yourTurn.classList.add("hide");

    // ATTACK COMMANDS 

    var healthBar4 = document.getElementById("healthBar4");
    var healthBar1 = document.getElementById("healthBar1");
    var width4 = 200;
    var width1 = 200;


    attackButton.addEventListener("click", function () {

        width1 -= 30;
        healthBar1.style.width = width1 + "px";


        // remove your turn
        yourTurn.classList.add("hide");
        // add enemy turn
        var enemyTurn = document.getElementById("enemyTurn");
        enemyTurn.classList.remove("hide");
        enemyTurn.classList.add("turn");
        // remove attack button
        attackButton.classList.add("hide");
        attackButton.classList.remove("attackButton");
        // remove powerAttack button
        powerAttack.classList.add("hide");
        powerAttack.classList.remove("powerAttack");


        setTimeout(() => {

            // remove enemyturn
            enemyTurn.classList.remove("turn");
            enemyTurn.classList.add("hide");

            width4 -= 30;
            healthBar4.style.width = width4 + "px";
            // your turn add  
            var yourTurn = document.getElementById("yourTurn");
            yourTurn.classList.remove("hide");
            yourTurn.classList.add("turn");

            // add attack button
            attackButton.classList.remove("hide");
            attackButton.classList.add("attackButton");

            // add powerAttack button
            powerAttack.classList.remove("hide");
            powerAttack.classList.add("powerAttack");

            // add potion button
            potion.classList.remove("hide");
            potion.classList.add("potion");

            if (width1 == 20) {
                yourTurn.classList.add("hide");

            }

        }, 1500)

        // ------------------------ RESULTS -------------------------------------------
        if (width4 < 20) {



            // REMOVE BUTTONS
            yourTurn.classList.add("hide");
            yourTurn.classList.remove("turn")
            enemyTurn.classList.add("hide");
            enemyTurn.classList.remove("turn");
            attackButton.classList.remove("attackButton");
            attackButton.classList.add("hide");

            // remove enemy
            player1.classList.add("hide");
            player1.classList.remove("player");
            player1.classList.add("fade-out");
            player1.classList.remove("enemy");


            // Result naslov
            var lose = document.getElementById("lose");
            lose.classList.remove("hide");
            lose.classList.add("lose");
            lose.classList.add("fade-out");


        }



        if (width1 < 20) {



            // REMOVE BUTTONS
            yourTurn.classList.add("hide");
            yourTurn.classList.remove("turn")
            enemyTurn.classList.add("hide");
            enemyTurn.classList.remove("turn");
            attackButton.classList.remove("attackButton");
            attackButton.classList.add("hide");


            // remove enemy 

            player1.classList.add("hide");
            player1.classList.remove("player");
            player1.classList.add("fade-out");
            player1.classList.remove("enemy");
            healthBar1.classList.add("hide");
            healthBar1.style.display = "none";

            // Result naslov
            var win = document.getElementById("win");
            win.classList.remove("hide");
            win.classList.add("win");
            win.classList.add("winner");


            // HEALTH RESET

            width4 = 220;


            // LEVEL RESET

            level2WL();

        }

    });


    // POW ATTACK


    var powerAttack = document.getElementById("powerAttack");

    powerAttack.addEventListener("click", function () {

        let randomAttack = Math.floor(Math.random() * 100).toFixed();

        width1 -= randomAttack;
        var healthBar1 = document.getElementById("healthBar1");
        healthBar1.style.width = width1 + "px";
        powerAttack.classList.add("hide");
        powerAttack.classList.remove("powerAttack");

    })

    // POTION

    var potion = document.getElementById("potion");

    potion.addEventListener("click", function () {



        var healthBar4 = document.getElementById("healthBar4");
        var potion = document.getElementById("potion");
        potionFill = 20;

        width4 += 20;

        healthBar4.style.width = width4 + "px";

        potion.classList.remove("potion");
        potion.classList.add("hide");


        if (width4 == 200) {


            potionFill = 0;


        }



    })





    // LEVEL 2 -------------------------------------------------------

    function level2WL() {



        // ARENA ANIMATION TITLES

        var arenaTitles = document.getElementById("arenaTitles");
        var level2Title = document.getElementById("level2");
        arenaTitles.classList.remove("hide");
        level2Title.classList.remove("hide");
        level2Title.classList.add("chosen");
        level2Title.classList.remove("fade-out");


        // LEVEL TITLE BEING REMOVED
        setTimeout(() => {


            level2Title.classList.add("hide");
            chosenWarlord.classList.add("hide");


        }, 3500);



        // -------------------------------------------

        // removes old enemy
        player1.classList.add("fade-out");
        player1.classList.add("hide");
        player1.classList.remove("player");
        player1.classList.remove("enemy");
        healthBar1.classList.add("hide");

        player2.classList.add("enemy-move1");

        // Creates enemy    
        player2.classList.remove("fade-out");
        player2.classList.remove("hide");
        player2.classList.add("player");
        player2.classList.add("enemy-move2");
        player2.style.top = "1.5%";


        player4.style.left = "180%";

        // ATTACK BUTTON
        var arenaCommands = document.getElementById("arenaCommands");
        var attackButton = document.getElementById("attackButton");
        attackButton.classList.remove("hide");
        attackButton.classList.add("attackButton");
        arenaCommands.classList.remove("hide");

        // remove powerAttack button
        powerAttack.classList.add("hide");
        powerAttack.classList.remove("powerAttack");

        // remove potion button
        potion.classList.add("hide");
        potion.classList.remove("potion");


        // HEALTH STATS BEING ADDED AND MANIPULATED
        var healthBar4 = document.getElementById("healthBar2");
        healthBar4.classList.remove("hide");
        healthBar4.classList.add("healthbar-ver2");

        var healthBar2 = document.getElementById("healthBar3");
        healthBar2.classList.remove("hide");

        // -------------------------------------------


        // ATTACK COMMANDS 

        var healthBar2 = document.getElementById("healthBar2");
        var healthBar4 = document.getElementById("healthBar4");
        var width2 = 200;
        var width4 = 200;


        attackButton.addEventListener("click", function () {

            width2 -= 30;
            healthBar2.style.width = width2 + "px";


            // remove your turn
            yourTurn.classList.add("hide");
            // add enemy turn
            var enemyTurn = document.getElementById("enemyTurn");
            enemyTurn.classList.remove("hide");
            enemyTurn.classList.add("turn");
            // remove attack button
            attackButton.classList.add("hide");
            attackButton.classList.remove("attackButton");


            setTimeout(() => {

                // remove enemyturn
                enemyTurn.classList.remove("turn");
                enemyTurn.classList.add("hide");

                width4 -= 30;
                healthBar4.style.width = width4 + "px";

                // your turn add  
                var yourTurn = document.getElementById("yourTurn");

                yourTurn.classList.remove("hide");
                yourTurn.classList.add("turn");

                // add attack button
                attackButton.classList.remove("hide");
                attackButton.classList.add("attackButton");

                // add powerAttack button
                powerAttack.classList.remove("hide");
                powerAttack.classList.add("powerAttack");

                // add potion button
                potion.classList.remove("hide");
                potion.classList.add("potion");

                if (width2 == 20) {
                    yourTurn.classList.add("hide");

                }

            }, 1500)

            // ------------------------ RESULTS -------------------------------------------
            if (width4 < 20) {



                // REMOVE BUTTONS
                yourTurn.classList.add("hide");
                yourTurn.classList.remove("turn")
                enemyTurn.classList.add("hide");
                enemyTurn.classList.remove("turn");
                attackButton.classList.remove("attackButton");
                attackButton.classList.add("hide");

                // Result naslov
                var lose = document.getElementById("lose");
                lose.classList.remove("hide");
                lose.classList.add("lose");
                lose.classList.add("fade-out");


            }



            if (width2 < 20) {


                // REMOVE BUTTONS
                yourTurn.classList.add("hide");
                yourTurn.classList.remove("turn")

                enemyTurn.classList.add("hide");
                enemyTurn.classList.remove("turn");
                attackButton.classList.remove("attackButton");
                attackButton.classList.add("hide");
                healthBar1.classList.add("hide");
                healthBar2.classList.remove("healthbar-ver2")


                // Result naslov
                var win = document.getElementById("win");
                win.classList.remove("hide");
                win.classList.add("win");
                win.classList.add("winner");

                // HEALTH RESET
                width4 = 220;

                // LEVEL RESET

                level3WL();
            }


        })

        // POW ATTACK


        var powerAttack = document.getElementById("powerAttack");

        powerAttack.addEventListener("click", function () {

            let randomAttack = Math.floor(Math.random() * 100).toFixed();

            width2 -= randomAttack;
            var healthBar2 = document.getElementById("healthBar2");
            healthBar2.style.width = width2 + "px";
            powerAttack.classList.add("hide");
            powerAttack.classList.remove("powerAttack");

        })


        // POTION

        var potion = document.getElementById("potion");

        potion.addEventListener("click", function () {

            var healthBar4 = document.getElementById("healthBar4");
            var potion = document.getElementById("potion");
            potionFill = 20;

            width4 += 20;

            healthBar4.style.width = width4 + "px";

            potion.classList.remove("potion");
            potion.classList.add("hide");


            if (width4 == 200) {


                potionFill = 0;


            }



        })



    }

    // --------------------- LEVEL 3 -----------------------------------

    function level3WL() {


        // ARENA ANIMATION TITLES

        var arenaTitles = document.getElementById("arenaTitles");
        var level3Title = document.getElementById("level3");
        arenaTitles.classList.remove("hide");
        level3Title.classList.remove("hide");
        level3Title.classList.add("chosen");
        level3Title.classList.remove("fade-out");


        // LEVEL TITLE BEING REMOVED
        setTimeout(() => {


            level3Title.classList.add("hide");
            chosenWarlord.classList.add("hide");


        }, 3500);


        // removes old enemy
        player2.classList.add("fade-out");
        player2.classList.add("hide");
        player2.classList.remove("player");

        // Creates enemy    
        player3.classList.remove("fade-out");
        player3.classList.remove("hide");
        player3.classList.add("player");
        player3.classList.add("enemy");
        player3.classList.add("enemy-move9");
        player4.style.left = "75%";

        // ATTACK BUTTON
        var arenaCommands = document.getElementById("arenaCommands");
        var attackButton = document.getElementById("attackButton");
        attackButton.classList.remove("hide");
        attackButton.classList.add("attackButton");
        arenaCommands.classList.remove("hide");

        // HEALTH STATS BEING ADDED AND MANIPULATED
        var healthBar3 = document.getElementById("healthBar3");
        healthBar3.classList.remove("hide");
        healthBar3.classList.add("healthbar-ver2");

        var healthBar4 = document.getElementById("healthBar4");
        healthBar4.classList.remove("hide");

        // -------------------------------------------


        // ATTACK COMMANDS 

        var healthBar4 = document.getElementById("healthBar4");
        var healthBar3 = document.getElementById("healthBar3");
        var width4 = 200;
        var width3 = 200;


        attackButton.addEventListener("click", function () {

            width3 -= 30;
            healthBar3.style.width = width3 + "px";


            // remove your turn
            yourTurn.classList.add("hide");
            // add enemy turn
            var enemyTurn = document.getElementById("enemyTurn");
            enemyTurn.classList.remove("hide");
            enemyTurn.classList.add("turn");
            // remove attack button
            attackButton.classList.add("hide");
            attackButton.classList.remove("attackButton");

            // remove powerAttack button
            powerAttack.classList.add("hide");
            powerAttack.classList.remove("powerAttack");

            // remove potion button
            potion.classList.add("hide");
            potion.classList.remove("potion");



            setTimeout(() => {

                // remove enemyturn
                enemyTurn.classList.remove("turn");
                enemyTurn.classList.add("hide");

                width4 -= 30;
                healthBar4.style.width = width4 + "px";
                // your turn add  
                var yourTurn = document.getElementById("yourTurn");
                yourTurn.classList.remove("hide");
                yourTurn.classList.add("turn");

                // add attack button
                attackButton.classList.remove("hide");
                attackButton.classList.add("attackButton");

                // add powerAttack button 
                powerAttack.classList.remove("hide");
                powerAttack.classList.add("powerAttack");

                if (width4 == 20) {
                    yourTurn.classList.add("hide");

                }

            }, 1500)

            // ------------------------ RESULTS -------------------------------------------
            if (width4 < 20) {


                // REMOVE BUTTONS

                yourTurn.classList.add("hide");
                yourTurn.classList.remove("turn")

                enemyTurn.classList.add("hide");
                enemyTurn.classList.remove("turn");

                attackButton.classList.remove("attackButton");
                attackButton.classList.add("hide");

                // Result naslov
                var lose = document.getElementById("lose");
                lose.classList.remove("hide");
                lose.classList.add("lose");
                lose.classList.add("fade-out");

            }



            if (width3 < 20) {


                // REMOVE BUTTONS

                yourTurn.classList.add("hide");
                yourTurn.classList.remove("turn")

                enemyTurn.classList.add("hide");
                enemyTurn.classList.remove("turn");

                attackButton.classList.remove("attackButton");
                attackButton.classList.add("hide");
                attackButton.style.display = "none";

                // POWER ATTACK REMOVE
                var powerAttack = document.getElementById("powerAttack");
                powerAttack.classList.add("hide");
                powerAttack.classList.remove("powerAttack");

                //  POTION REMOVE
                var potion = document.getElementById("potion");
                potion.classList.remove("potion");
                potion.classList.add("hide");

                // removes old enemy
                player3.classList.add("fade-out");
                player3.classList.add("hide");
                player3.classList.remove("player");
                player3.classList.remove("enemy");
                player3.classList.remove("enemy-move9");


                // move player to middle 
                player4.classList.remove("enemy-move7");


                // health bar 
                healthBar4.style.display = "none";
                healthBar3.style.display = "none";



                // Result naslov
                var win = document.getElementById("win");
                win.classList.remove("hide");
                win.classList.add("win");
                win.classList.add("winner");



            }


        })


        // POW ATTACK


        var powerAttack = document.getElementById("powerAttack");

        powerAttack.addEventListener("click", function () {

            let randomAttack = Math.floor(Math.random() * 100).toFixed();

            width3 -= randomAttack;
            var healthBar3 = document.getElementById("healthBar3");
            healthBar3.style.width = width3 + "px";
            powerAttack.classList.add("hide");
            powerAttack.style.display = "none";

        })


        // POTION

        var potion = document.getElementById("potion");

        potion.addEventListener("click", function () {

            var healthBar4 = document.getElementById("healthBar4");
            var potion = document.getElementById("potion");
            potionFill = 20;

            width4 += 20;

            healthBar4.style.width = width4 + "px";

            potion.classList.remove("potion");
            potion.classList.add("hide");


            if (width4 == 200) {


                potionFill = 0;


            }



        })


    }

}

