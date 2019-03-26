--- challenge ---

## Challenge: dice with more than six sides

In some games, for example Dungeons and Dragons, you need dice that have more or fewer than six sides. Edit your dice simulator so that the user can select the number of sides that the simulated dice. (Don't worry about finding images for these dice, just display numbers like you did at the start of the project.)

![Dice with 4, 6, 8, 10, 12 and 20 sides](images/diceTypes.jpg)

--- hints ---

--- hint ---

To do this task, you need to change how the simulator displays the dice roll results. You don't have dice images that show numbers greater than 6, so display numbers instead, like you did when you started building the simulator. If you put the numbers inside a `div` element, it will be easier to keep your reroll function working. Go back and look at the **Roll one die** step for help. The CSS file contains a class called `.textDice` that will help you style the new divs.

--- /hint ---

--- hint ---

Find the `for` loop inside your `rollButton()` function, and add `div` elements instead of images. Use `.innerHTML` instead of an image `src`. If you want to use the `.textDice` style, then include the line `elem.classList.add('textDice');`.

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

The last three lines of code here clear the float property that was introduced in the CSS class `.textDice`. If you are not using the class, you might not need these three lines!

--- /hint ---

--- hint ---

Finally, add another input so the user can choose how many sides the dice should have. You can either use a drop-down menu box or another input with the property `type="number"`.

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

    //Swap the number 6 for diceSidesBox.value to only get the correct numbers
    function dieRoll(){
        return Math.floor(Math.random() * diceSidesBox.value) + 1;
    }
```

--- /hint ---

--- /hints ---

--- /challenge ---

![Image of the project at the end of this challenge](images/step9Image.png)
