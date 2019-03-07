var diceMat = document.getElementById("diceMat");
var currentRoll; //can be used for functions to get averages/roll history possible challenge
var diceNumberBox = document.getElementById("selectDice");
var diceSidesBox = document.getElementById("selectSides");

function getNumDice() {
  return diceNumberBox.value;
}

function toggleDieYellow(dieID) {
  var die = document.getElementById(dieID);
  die.classList.toggle('selected');
}

function dieRoll(){
  return Math.floor(Math.random() * diceSidesBox.value) + 1;
}

function rollButton() {
  diceMat.innerHTML = "";
  var numberOfDice = getNumDice();
  for (var i = 0; i < numberOfDice; i++) {
    var rollValue = dieRoll();
    var elem = document.createElement("div");
    elem.innerHTML = (rollValue);
    elem.id = "dieNumber" + i;
    elem.classList.add('textDice');    
    elem.onclick = function() { toggleDieYellow(this.id); };
    diceMat.appendChild(elem);
  }
  var clearDiv = document.createElement("div");
  clearDiv.style.clear="both";
  diceMat.appendChild(clearDiv);
}

function reRollUnselected(){
  var dice = document.getElementById('diceMat').children;
  for (var i = 0; i < dice.length; i++){
    if(dice[i].classList.contains('selected') === false){//if unselected, reroll
      var roll = dieRoll();
      dice[i].innerHTML = (roll);
    }
  }
}

function toggleLiars(){

}

function toggleYahtzee(){

}