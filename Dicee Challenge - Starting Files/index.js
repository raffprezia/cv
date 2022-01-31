function myFunction(){
  var randomNumber = Math.random() * 6 + 1;
  randomNumber = Math.floor(randomNumber);

  var secondRandomNumber = Math.random() * 6 + 1;
  secondRandomNumber = Math.floor(secondRandomNumber);

  var diceImageChoice = "images/dice" + randomNumber + ".png"

  var secondDiceImageChoice = "images/dice" + secondRandomNumber + ".png"

  if (randomNumber > secondRandomNumber) {

    document.querySelector("h1").textContent = "Player One Wins"

  }

  else if  (secondRandomNumber > randomNumber) {

    document.querySelector("h1").textContent = "Player Two Wins"

  }

  else if (randomNumber === secondRandomNumber) {

    document.querySelector("h1").textContent = "Tie"

  }

  document.querySelector(".img1").setAttribute("src", diceImageChoice)

  document.querySelector(".img2").setAttribute("src", secondDiceImageChoice)

};
