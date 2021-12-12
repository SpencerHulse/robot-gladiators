let playerName = window.prompt("What is your robot's name?");
let playerHealth = 100;
let playerAttack = 10;
let playerMoney = 10;

let enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
//gives a random health between 40 and 60
let enemyHealth = Math.floor(Math.random() * 21 + 40);
let enemyAttack = 12;

let fight = function(enemyName) {
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
        playerMoney = Math.max(0, playerMoney - 10);
        console.log("playerMoney", playerMoney);
        break;
      }
    }

    //player damages enemy
    var damage = randomNumber(playerAttack - 3, playerAttack);
    enemyHealth = Math.max(0, enemyHealth - damage);
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
    var damage = randomNumber(enemyAttack - 3, enemyAttack);
    playerHealth = Math.max(0, playerHealth - damage);
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

    //player's death or current health
    if(playerHealth <= 0) {
      window.alert(playerName + " has died!");
      break;
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    };
  }
};

let startGame = function() {
  //reset player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;

  for(let i = 0; i < enemyNames.length; i++) {
    if(playerHealth > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
      let pickedEnemyName = enemyNames[i];
      enemyHealth = randomNumber(40, 60);
      fight(pickedEnemyName);

      //if player is still alive and not on the last enemy in the array, the shop is opened
      if(playerHealth > 0 && i < enemyNames.length - 1) {
        let storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

        if(storeConfirm) {
          shop();
        }
      }
    } else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
  }

  //after loop ends, the player is either out of health or enemies to fight, so endGame() is run
  endGame();
};

let endGame = function() {
  if(playerHealth > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
  } else {
    window.alert("You've lost your robot in battle.");
  }
  
  let playAgainConfirm = window.confirm("Would you like to play again?");

  if(playAgainConfirm) {
    startGame();
  } else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
};

let shop = function() {
  let shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.")

  switch(shopOptionPrompt) {
    case "REFILL":
    case "refill":
      if(playerMoney >= 7) {
        window.alert("Refilling player's health by 20 for 7 dollars.");
        playerHealth += 20;
        playerMoney -= 7;
      } else {
        window.alert("You don't have enough money!");
      }
      break;

    case "UPGRADE":
    case "upgrade":
      if(playerMoney >= 7) {
        window.alert("Upgrading player's attack by 6 for 7 dollars.");
        playerAttack += 6;
        playerMoney -= 7;
      } else {
        window.alert("You don't have enough money!");
      }
      break;

    case "LEAVE":
    case "leave":
      window.alert("Leaving the store.");
      break;
      
    default:
      window.alert("You did not pick a valid option. Try again.");
      shop();
      break;
  }
};

let randomNumber = function(min, max) {
  let value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};

startGame();