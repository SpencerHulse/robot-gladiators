var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function (enemyName) {
  window.alert("Welcome to Robot Gladiators!")

  //prompt for accepting or skipping fights
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.")

  //checking for fight
  if(promptFight === "FIGHT" || promptFight === "fight") {

    //player damages enemy
    enemyHealth -= playerAttack;
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

    //enemy's death or current health
    if(enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    };

    //enemy damages player
    playerHealth -= enemyAttack;
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

    //player's death or current health
    if(playerHealth <= 0) {
      window.alert(playerName + " has died!");
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    };
  
  //checking for skip
  } else if (promptFight === "SKIP" || promptFight === "skip") {
    window.alert(playerName + " has chosen to skip the fight!");
    var confirmSkip = window.confirm("Are you sure you'd like to quit?")
      //confirm skip fight (true) || carry out fight function
      if(confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        playerMoney -= 2;
      } else {
        fight();
      }
  } else {
    //response for an invalid option
    window.alert("You need to choose a valid option. Try again!");
  }
};
for (let i = 0; i < enemyNames.length; i++) {
  fight(enemyNames[i]);
}