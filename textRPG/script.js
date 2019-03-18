let loc = document.getElementById("location");
let descr = document.getElementById("description");
let inv = document.getElementById("inventory");
let poss = document.getElementById("possibilities");
let fb = document.getElementById("feedback");
let imgLocation = document.getElementById("imageLocation");
const input = document.getElementById("input");
let tired = 0;
let keyFirst = false;
let keySecond = false;
let keyThird = false;
let locationATM;
let randomKeyLoc = Math.round(Math.random()*2);
let deathChange =  Math.round(Math.random()*5);

//----------------------------------------------------------//
let locations = ["Menu","Woods","Cabine","Beach","Hotel"];
//----------------------------------------------------------//

let descriptions = ["Story: You are stranded in the middle of nowhere, try and survive!",//1
"You are in  the woods, you can find valuable stuff, but BE CAREFULL.",//2
"The cabine is you're main hideout, you will return here if you backout of a situation. Type 'return' to go back to the Cabine whenever you want.",//3
"The beach is a massy place, but maybe there is a secret treasure.",//4
"The Hotel has been abandoned, but it's a risky place. Be carefull, it can be unstable.",//5
"Welcome to the text rpg I created!",//6
"You've scavenged all day. There was nothing to find, You're tired and",//7
"It's dark, you're not quite sure if there is something.",//8
"You fell into a hole! You starved to death and therefor didn't make it.",//9
"A bear! You managed to escape, but that was a close call.",//10
"It doesn't seem like there is much, but you never know.",//11
" You will return to base.",//12
"You have found the key to open the gate. The key fitted and so you survived.",//13
"Thank you for playing!",//14
"It's getting dark, you will return to base"//15
];

//----------------------------------------------------------//


//----------------------------------------------------------//


loc.innerHTML = locations[0];
imgLocation.src = "img/GameTitle.png";
poss.innerHTML = "next";
locationFunctions();

//----------------------------------------------------------//
function locationFunctions(){
switch (loc.innerHTML) {
  case locations[0]:
    descr.innerHTML = descriptions[5] + "<br>" + descriptions[0];
    imgLocation.src = "img/GameTitle.png";
    poss.innerHTML = "next";
    break;
  case locations[1]:
    descr.innerHTML = descriptions[1];
    imgLocation.src = "img/woods.jpg";
    poss.innerHTML = "north or south";
    break;
  case locations[2]:
    descr.innerHTML = descriptions[2];
    imgLocation.src = "img/cabine.jpg";
    poss.innerHTML = "woods, beach or hotel";
    break;
  case locations[3]:
    descr.innerHTML = descriptions[3];
    imgLocation.src = "img/beach.jpg";
    poss.innerHTML = "scavenge or scout";
    break;
  case locations[4]:
    descr.innerHTML = descriptions[4];
    imgLocation.src = "img/hotel.jpg";
    poss.innerHTML = "first floor, second floor, third floor or pickup key";
    break;
}
}
//----------------------------------------------------------//
// wordt gecheckt of je enter hebt gedrukt.
input.addEventListener('keydown', inputFromUser, false);
function inputFromUser(evt) {
  if (evt.key == "Enter") {
    // er wordt gecheckt op welke locatie je bent en zo wordt bepaald wat je opties zijn.
    switch (loc.innerHTML) {
      case locations[0]://Menu
      switch (input.value) {
        case "next":
        input.value = "";
        loc.innerHTML = locations[2];
        locationFunctions();
          break;
          default:
          feedback.innerHTML = "Invalid Input or Key not found";
          deleteFeedback();
          break;
        }
        break;
      case locations[1]://Woods
      switch (input.value) {
        case "north":
        input.value = "";
          descr.innerHTML = descriptions[9] + descriptions[11];
          poss.innerHTML = "none";
          feedback.innerHTML = "You've gone North.";
          setTimeout(function () {
            loc.innerHTML = locations[2];
            locationFunctions();
          }, 6500);
          deleteFeedback();
          break;

        case "south":
        input.value = "";
          descr.innerHTML = descriptions[7];
          feedback.innerHTML = "You've gone South.";
          poss.innerHTML = "return or go";
          break;

        case "go":
          input.value = "";
          descr.innerHTML = descriptions[8];
          poss.innerHTML = "none";
          setTimeout(function () {
            loc.innerHTML = locations[0];
            locationFunctions();
          }, 6500);
          deleteFeedback();
          break;

        case "return":
          input.value = "";
          feedback.innerHTML = "You returned to base";
          loc.innerHTML = locations[2];
          locationFunctions();
          deleteFeedback();
          break;
          default:
          feedback.innerHTML = "Invalid Input or Key not found";
          deleteFeedback();
          break;
        }
        break;
        //------------------------------//
      case locations[2]://Cabine
      switch (input.value) {
        case "woods":
        input.value = "";
          feedback.innerHTML = "You've gone to the woods!";
          loc.innerHTML = locations[1];
          locationFunctions();
          deleteFeedback();
        break;
        case "beach":
        input.value = "";
          feedback.innerHTML = "You've gone to the beach!";
          loc.innerHTML = locations[3];
          locationFunctions();
          deleteFeedback();
        break;
        case "hotel":
        input.value = "";
          feedback.innerHTML = "You've gone to the hotel!";
          loc.innerHTML = locations[4];
          locationFunctions();
          deleteFeedback();
        break;
          default:
          feedback.innerHTML = "Invalid Input or Key not found";
          deleteFeedback();
          break;
        }
        break;
        //------------------------------//

      case locations[3]://Beach
      switch (input.value) {
        case "scavenge":
        input.value = "";
          descr.innerHTML = descriptions[6] + descriptions[11];
          poss.innerHTML = "none";
          feedback.innerHTML = "You're scavenging...";
          setTimeout(function () {
            loc.innerHTML = locations[2];
            locationFunctions();
          }, 6500);
          deleteFeedback();
          break;
        case "scout":
        input.value = "";
          descr.innerHTML = descriptions[10] + descriptions[11];
          poss.innerHTML = "none";
          setTimeout(function () {
            loc.innerHTML = locations[2];
            locationFunctions();
          }, 6500);
          deleteFeedback();
          break;
        case "return":
        input.value = "";
          feedback.innerHTML = "You returned to base";
          loc.innerHTML = locations[2];
          locationFunctions();
          deleteFeedback();
        break;
        default:
          feedback.innerHTML = "Invalid Input or Key not found";
          locationFunctions();
          deleteFeedback();
          break;
        }
        break;
        //------------------------------//

      case locations[4]://Hotel
      if (deathChange != 1) {
      switch (randomKeyLoc) {
        case 0:
          keyFirst = true;
          break;
        case 1:
          keySecond = true;
          break;
        case 2:
          keyThird = true;
          break;
        default:
          keyThird = true;
          break;
      }
      switch (input.value) {
        case "first floor":
        input.value = "";
          feedback.innerHTML = "You've gone to the first floor";
          locationATM = "first";
          locationFunctions();
          deleteFeedback();
          tired++;
          checkForTired();
          break;
        case "second floor":
        input.value = "";
          feedback.innerHTML = "You've gone to the second floor";
          locationATM = "second";
          locationFunctions();
          deleteFeedback();
          tired++;
          checkForTired();
          break;
        case "third floor":
        input.value = "";
          feedback.innerHTML = "You've gone to the third floor";
          locationATM = "third";
          locationFunctions();
          deleteFeedback();
          tired++;
          checkForTired();
          break;
        case "pickup key":
          input.value = "";
          if (locationATM == "first" && keyFirst == true) {
            feedback.innerHTML = "YOU HAVE FOUND THE KEY!";
            descr.innerHTML = descriptions[12];
            inv.innerHTML = " key";
            finished();
            deleteFeedback();

          }
          else if (locationATM == "second" && keySecond == true) {
            feedback.innerHTML = "YOU HAVE FOUND THE KEY!";
            descr.innerHTML = descriptions[12];
            inv.innerHTML = " key";
            finished();
            deleteFeedback();

          }
          else if (locationATM == "third" && keyThird == true) {
            feedback.innerHTML = "YOU HAVE FOUND THE KEY!";
            descr.innerHTML = descriptions[12];
            inv.innerHTML = " key";
            finished();
            deleteFeedback();
          }
          else {
            feedback.innerHTML = "you did not find anything here.";
            deleteFeedback();
          }
        break;
        case "return":
        input.value = "";
          feedback.innerHTML = "You returned to base";
          loc.innerHTML = locations[2];
          locationFunctions();
          deleteFeedback();
        break;
        default:
          feedback.innerHTML = "Invalid Input or Key not found";
          deleteFeedback();
          break;
        }
      }
      else {
        input.value = "";
        descr.innerHTML = "The building collapsed! You died and therefor didn't survive it.";
        poss.innerHTML = "none";
        setTimeout(function () {
          loc.innerHTML = locations[0];
          locationFunctions();
        }, 6500);
        deleteFeedback();
      }
        break;
    }
  }
}

//----------------------------------------------------------//

function deleteFeedback(){
  setTimeout(function(){feedback.innerHTML = "";}, 3000);
}

function finished(){
  input.value = "";
  descr.innerHTML = "You survived! Thank you so much for playing.";
  imgLocation.src = "img/theEnd.jpg";
  poss.innerHTML = "none";
  setTimeout(function () {
    loc.innerHTML = locations[0];
    locationFunctions();
  }, 7500);
}

function checkForTired(){
    if (tired > 2) {
      input.value = "";
        descr.innerHTML = descriptions[14];
        feedback.innerHTML = "";
        poss.innerHTML = "none";
        setTimeout(function () {
          loc.innerHTML = locations[2];
          locationFunctions();
        }, 6500);
        deleteFeedback();
    }
}
