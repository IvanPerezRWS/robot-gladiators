// var playerName = 'Clank McKrank';
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

// fight function (now with parameter for enemy's name)
var fight = function(enemyName) {
    while (playerHealth > 0 && enemyHealth > 0) {

        // ask player if they'd like to fight or run
        var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

            
    
            // if player chooses to skip
            if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // if yes (true), leave fight
            if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            // subtract money from playerMoney for skipping
            playerMoney = playerMoney - 10;
            console.log("playerMoney", playerMoney);
            break;
    }
  }
    

    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");

      //award player money for winning
      playerMoney = playermoney + 20;
      //leave while () loop since enemy is dead
      break;
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // remove players's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
      break;
    } 
    else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }   
};


//fight each enemy robot by looping over them and fighting them one at at ime
for (var i = 0; i < enemyNames.length; i++) {
    //if player is still laive, keep figthing
    if (playerHealth > 0) {
        //let player know what round they are in, remember that arrays start at 0 so it need to have 1 added to it
        window.alert('Welcome to Robot Gladiators! Round' + (i + 1));

        //pick new enemy to figh based on the index of the enemyNames array
        var pickedName = enemyNames[i];
        
        //reset enemyHealth befroe starting new fight
        enemyHealth = 50;

        //use debugger to pause script from running and check what is going on at the monent in the code
        //debugger;

        //pass the pickedEnemyName varaible's value into the fight function, there it will assume the value 
        fight(pickedName);
    }
    //if player isn't alive, stop the game
    else {
        window.alert("You ahve lost your robot in battle! Game Over!");
        break;
    }
}