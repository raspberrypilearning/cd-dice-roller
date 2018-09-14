--- challenge ---

## Challenge: more than 6 sides

Some games like Dungeons and Dragons have unique dice that are not cubes. They have more/less than 6 sides. Edit your Dice Roller so the user can select the number of sides your dice will have. (Don't worry about using the dice images, just use the actual numbers like you did at the start of this project.)

![Dice with 4, 6, 8, 10, 12 and 20 sides](images/diceTypes.jpg)

--- hints ---

--- hint ---

To complete this challenge, you'll need to change how you display your dice. Since you don't have images for sides that need to be bigger than 6, just use numbers like we did at the beginning of this project. If you put them inside a `div` element it will make it easier to keep your reroll function working! Go back and look at the **Roll one die** step for help. I've included a CSS class called `.textDice` to help you style the new divs.

--- /hint ---

--- hint ---

Create `div` elements instead of images in your `for` loop inside your`rollButton()` function. Use `.innerHTML` instead of an image `src`. If you want to use the `.textDice` style include the line `elem.classList.add('textDice');`.

```javascript
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
```

The last three lines are used to clear the float property that I introduced in my CSS class `.textDice`. If you are not using it you might not these.

--- /hint ---

--- hint ---

Finally introduce another way to collect input from the user for the how many sides they would like their dice to have. You could use a select box or another input with the property `type="number"`.

```html
<div id="controller">
      Num of Dice: <input type="number" id="selectDice" /> <br>
      Num of Sides: <input type="number" id="selectSides" /> <br>
      <button onclick="rollButton()">Roll Dice</button>
      <button onclick="reRollUnselected()">Roll but Keep Selected Dice</button>
</div>
```

```javascript
    //This gets your new input box
    var diceSidesBox = document.getElementById("selectSides");

    //This updates our roll function to include the new die faces
    function dieRoll(){
        return Math.floor(Math.random() * diceSidesBox.value) + 1;
    }
```

--- /hint ---

--- /hints ---

--- /challenge ---

--- /challenge ---