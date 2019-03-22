## Reroll the unselected dice

To play games such as Yahtzee, you need to be able to reroll some dice. Therefore, you are going to add a button that rerolls only the dice that are unselected. The unselected dice are the ones that are not yellow (or whichever background colour you set).

--- task ---

First, go to  the `index.html` file and add this code to create a new button.

```html
    <div id="controller">
      <input type="number" id="selectDice" />
      <button onclick="rollButton()">Roll Dice</button>

      <button onclick="reRollUnselected()">Roll but Keep Selected Dice</button>

    </div>
```

You should see the new button show beside the first button.

--- /task ---

--- task ---

The new button has an `onclick` function called `reRollUnselected()`.

First, add code in the `reRollUnselected()` function to record all the dice. To do this, you need to get all elements inside the `diceMat` element.

```javascript
    function reRollUnselected(){
        var dice = document.getElementById('diceMat').children;
    }
```

This will save **all** the dice in one variable called `dice`. The `dice` variable is a list of HTML elements.

--- /task ---

Next, use a `for` loop to check every element in the `dice` variable for whether it is selected.

--- task ---

This code also belongs inside the `reRollUnselected()` function.

+ Your `for` loop should start at `0`, and run until the counter variable `i` is equal the number of elements in the `dice` variable. Use the `.length` command to get this value.

+ Next, use an `if` statement to check if the die in position `i` is **not selected**.

+ If the die is not selected
    1. Call the `dieRoll()` function and store the result in the variable `roll`
    1. Use `roll` to change the `src` property of the die at position `i`, which updates the die image
    
At the end, the `reRollUnselected()` function should look like this:

```javascript
    function reRollUnselected(){
        var dice = document.getElementById('diceMat').children;

        for (var i = 0; i < dice.length; i++){
            if(dice[i].classList.contains('selected') == false){ //if unselected, reroll
                var roll = dieRoll();
                dice[i].src = ("tile" + roll + ".png");
            }
        }

    }
```

--- /task ---

Now when you select some dice and then click the new button, only the dice that are unselected should be rolled again.

Select dice             |  Reroll but keep selected dice
:-------------------------:|:-------------------------:
![Image of the project at the end of this step](images/step7Image_1.png)  |  ![Image of the project at the end of this step](images/step7Image_2.png)
