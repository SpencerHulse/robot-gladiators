let fight = function(enemy) {
  //repeat and execute as long as the enemy and player robots are alive
  while(enemy.health > 0 && playerInfo.health > 0) {
    //prompt for accepting or skipping fights
    let promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.")
    
    if(promptFight === "SKIP" || promptFight === "skip") {
      window.alert(playerInfo.name + " has chosen to skip the fight!");
      let confirmSkip = window.confirm("Are you sure you'd like to quit?")
      
      //confirm skip fight (true) || carry out fight function
      if(confirmSkip) {
        window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
        playerInfo.money = Math.max(0, playerInfo.money - 10);
        console.log("Player's Money", playerInfo.money);
        break;
      }
    }

    //player damages enemy
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
    enemy.health = Math.max(0, enemy.health - damage);
    console.log(playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining.");

    //enemy's death or current health
    if(enemy.health <= 0) {
      window.alert(enemy.name + " has died!");
      playerInfo.money += 20;
      break;
    } else {
      window.alert(enemy.name + " still has " + enemy.health + " health left.");
    };

    //enemy damages player
    var damage = randomNumber(enemy.attack - 3, enemy.attack);
    playerInfo.health = Math.max(0, playerInfo.health - damage);
    console.log(enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining.");

    //player's death or current health
    if(playerInfo.health <= 0) {
      window.alert(playerInfo.name + " has died!");
      break;
    } else {
      window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
    };
  }
};

let startGame = function() {
  //reset player stats
  playerInfo.reset();

  for(let i = 0; i < enemyInfo.length; i++) {
    if(playerInfo.health > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
      let pickedEnemyObj = enemyInfo[i];
      pickedEnemyObj.health = randomNumber(40, 60);
      fight(pickedEnemyObj);

      //if player is still alive and not on the last enemy in the array, the shop is opened
      if(playerInfo.health > 0 && i < enemyInfo.length - 1) {
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
  if(playerInfo.health > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
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
      playerInfo.refillHealth();
      break;

    case "UPGRADE":
    case "upgrade":
      playerInfo.upgradeAttack();
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

let playerInfo = {
  name: window.prompt("What is your robot's name?"),
  health: 100,
  attack: 10,
  money: 10,
  reset: function() {
    this.health = 100;
    this.attack = 10;
    this.money = 10;
  },
  refillHealth: function() {
    if(playerInfo.money >= 7) {
      window.alert("Refilling player's health by 20 for 7 dollars.");
      this.health += 20;
      this.money -= 7;
    } else {
      window.alert("You don't have enough money!");
    }
  },
  upgradeAttack: function() {
    if(playerInfo.money >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
      this.attack += 6;
      this.money -=7;
    } else {
      window.alert("You don't have enough money!");
    }
  }
};

let enemyInfo = [
  {
    name: "Roborto",
    attack: randomNumber(10, 14)
  },
  {
    name: "Amy Android",
    attack: randomNumber(10, 14)
  },
  {
    name: "Robo Trumble",
    attack: randomNumber(10, 14)
  }];

startGame();