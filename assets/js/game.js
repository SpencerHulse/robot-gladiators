let playerName = window.prompt("What is your robot's name?");
let playerHealth = 100;
let playerAttack = 10;
let playerMoney = 10;

let enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
let enemyHealth = 50;
let enemyAttack = 12;

let fight = function (enemyName) {
  //repeat and execute as long as the enemy and player robots are alive
  while(enemyHealth > 0 && playerHealth > 0) {
    //prompt for accepting or skipping fights
    let promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.")
    
    if(promptFight === "SKIP" || promptFight === "skip") {
      window.alert(playerName + " has chosen to skip the fight!");
      let confirmSkip = window.confirm("Are you sure you'd like to quit?")
      
      //confirm skip fight (true) || carry out fight function
      if(confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        playerMoney -= 10;
        console.log("playerMoney", playerMoney);
        break;
      }
    }

    //player damages enemy
    enemyHealth -= playerAttack;
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

    //enemy's death or current health
    if(enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
      playerMoney += 20;
      break;
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    };

    //enemy damages player
    playerHealth -= enemyAttack;
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

    //player's death or current health
    if(playerHealth <= 0) {
      window.alert(playerName + " has died!");
      break;
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    };
  }
}

for(let i = 0; i < enemyNames.length; i++) {
  let pickedEnemyName = enemyNames[i];
  enemyHealth = 50;
  fight(pickedEnemyName);
}