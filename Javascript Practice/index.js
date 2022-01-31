

// var promptText = prompt("Compose your tweet:");
// var slicedText = promptText.slice(0, 140)
// var promptCount = slicedText.length;
// var remainingCount = promptCount - 140;
// remainingCount = remainingCount * -1;
// alert(slicedText)
// alert("You have written"+ " " + promptCount + " " + "characters, you have" + " " + remainingCount + " " + "characters left");

// name = prompt("What is your name?");
// name = name.toLowerCase();
// nameSlice = name.slice(1,name.length)
// firstLetter = name.slice(0,1);
// upperCase = firstLetter.toUpperCase();
// name = upperCase + nameSlice;
// alert("Hello, " + name);

// dogAge = prompt("How old is your dog?");
// humanAge = (dogAge - 2) * 4 + 21;
// alert("Your dog human age is " + humanAge);

// var x = 3;
// var y = x++;
// y += 1;


// function getMilk(money) {

//   var milkiNum =  money/1.5;
//   var milkNum = Math.floor(milkiNum);
//   var remainingNum = milkiNum - milkNum;


//   console.log("leaveHouse");
//   console.log("moveRight");
//   console.log("moveRight");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveRight");
//   console.log("moveRight");
//   console.log("buy "+milkNum+" botles of milk");
//   console.log("you have  "+remainingNum+"  dollars left");
//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("enterHouse");
// }

// getMilk(10);

// function lifeInWeeks(age) {

// /************Don't change the code above************/

//     //Write your code here.


//     var remainingYears = (age - 100) * -1;
//     var remainingMonths = remainingYears * 12;
//     var remainingWeeks = remainingMonths * 4;
//     var remainingDays = remainingWeeks * 7;
//     var remainingHours = remainingDays * 24;
//     var remainingMinutes = remainingHours * 60;
//     var remainingSeconds = remainingMinutes * 60;
//     var remainingTime = "You have" + " " + remainingYears + " "  + "years,"+ " " + remainingMonths + " " + "months,"+ " " + remainingWeeks + " " + "weeks,"+ " " + remainingDays + " " + "days,"+ " " + remainingHours + " " + "hours,"+ " " + remainingMinutes + " " + "minutes,"+ " " + remainingSeconds + " " + "seconds," + " " + "left"
//     alert(remainingTime)


// /*************Don't change the code below**********/
// }

// lifeInWeeks(91);

// bmiCalculator(90, 1.80);

// prompt("What is your name?");
// prompt("What is their name?");
// var n = Math.random();
// n = n * 100;
// n = Math.floor(n) + 1;
// if (n >= 70 ){
//     alert("Your chance is"+" "+n+"%"+" "+"You will love he/she like Kanye loves Kanye.");
// }
// if ( n >= 30 && n <= 70 ) {
//    alert("Your chance is"+" "+n+"% ");
// }

// if (n<30){
//     alert("Your chance is"+" "+n+"%"+" "+"You  go togetuher like wine and soda.");
// }

// function isLeap(year) {

// /**************Don't change the code above****************/

//     //Write your code here.

// if (year % 4 === 0 && year % 100 !== 0 ){
//     return  " Leap year.";
// } else {
//          if (year % 4 === 0){
//              if (year % 100 === 0 && year % 400 === 0){
//                  return " Leap year.";
//              } else {
//                  return " Not Leap year.";
//              }
//          } else {
//               return " Not Leap year.";
//          }
// }


// /**************Don't change the code below****************/

// }

// var guestList = ["Ralf","Luis","Joao","David","Caua","Adidas"]

// var guestName = prompt("Whats your name?")
// guestName = guestName.toLowerCase();
// var nameSlice = guestName.slice(1,guestName.length)
// var firstLetter = guestName.slice(0,1);
// var upperCase = firstLetter.toUpperCase();
// guestName = upperCase + nameSlice;

// if (guestList.includes(guestName)=== true){
//     alert( "Comon in");
// } else {
//     alert( "I am sorry but your name is not in the list");
// }

// function whosPaying() {

// /******Don't change the code above*******/

//     //Write your code here.


//    var guestList = ["Ralf","Joseft","Rafael","Joa","Teodore","Lucky luke"]

//     var randomNumber = Math.random();
//     alert(randomNumber)
//     guestNum = guestList.length;
//     alert(guestNum);
//     randomNumber = (randomNumber * guestNum)+1;
//     alert(randomNumber)
//     n = Math.floor(randomNumber);
//     alert(n)

//     payer = guestList[n]

//     return payer + " " +  "is going to buy lunch today!";


// /******Don't change the code below*******/
// }

// function beer(){

// var num = 0
// while (num < 99) {
//     num = num + 1;
//     console.log(num + " "+ " is the number of beers on the wall")
// }

// // // }

// function fibonacciGenerator(n) {
// if ( n === 1){
//     return [0]
// } else if ( n === 2){
//     return [0,1]
// }else{

// numList = [0,1]
// numTwo = 0;


// for (var number = 0 ; number !== n; number++) {

//     numTwo = numTwo+1;
//     var firstNum = numList[number];

//     var secondNum = numList[numTwo];

//     var thirdNum = firstNum + secondNum;

//     numList.push(thirdNum);

// }
// }
//   return numList
// }
