// some kind of game in browser console

var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;

while (slaying) {
  if (youHit) {
    if (totalDamage >= 4) {
      console.log("You slew the dragon!");
      slaying = false;
    } else {
      youHit = Math.floor(Math.random() * 2);
    }
    console.log("You hit the dragon!");
  } else {
    console.log("Dragon defeated you!");
  }
  slaying = false;
  totalDamage += damageThisRound;
}