## Reroll the unselected dice

In this step you will add the option to reroll the dice that the user has not selected, I.E. not turned yellow. This is a useful feature that is required for games like Yahtzee. You will set up a second button to this.

--- task ---

First, add a new button to the `index.html` file.

```html
    <div id="controller">
      <input type="number" id="selectDice" />
      <button onclick="rollButton()">Roll Dice</button>

      <button onclick="reRollUnselected()">Roll but Keep Selected Dice</button>

    </div>
```

It should have an `onclick` function that we will fill in next!

--- /task ---

--- task ---

Let's start your function `reRollUnselected()` by gathering all the dice that have already been rolled. This can be done by getting all elements in the diceMat div.

```javascript
    function reRollUnselected(){
        var dice = document.getElementById('diceMat').children;
    }
```

This will save **all** our dice in one variable. 
<!-- Mention similar to arrays and explain? Actually returns a HTMLCollection object -->

--- /task ---

--- task ---

<!-- Fill in -->

```javascript
    function reRollUnselected(){
        var dice = document.getElementById('diceMat').children;

        for (var i = 0; i < dice.length; i++){
            if(dice[i].classList.contains('selected') == false){//if unselected, reroll
                var roll = dieRoll();
                dice[i].src = ("tile" + roll + ".png");
            }
        }

    }
```

--- /task ---
